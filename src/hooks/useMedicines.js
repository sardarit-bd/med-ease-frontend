// src/hooks/useMedicines.js
import { useCallback, useState } from 'react';
import * as api from '../api';

export function useMedicines() {
    const [state, setState] = useState({
        medicines: [],
        loading: false,
        error: null,
        todayMedicines: null,
    });

    // Get all medicines
    const fetchMedicines = useCallback(async () => {
        setState(prev => ({ ...prev, loading: true, error: null }));

        try {
            const response = await api.getAllMedicines();
            const medicines = response.data || response || [];

            setState(prev => ({
                ...prev,
                medicines,
                loading: false,
            }));

            return medicines;
        } catch (error) {
            setState(prev => ({
                ...prev,
                loading: false,
                error: error.message,
            }));

            return [];
        }
    }, []);

    // Get medicines by prescription
    const fetchMedicinesByPrescription = useCallback(async (prescriptionId) => {
        setState(prev => ({ ...prev, loading: true, error: null }));

        try {
            const response = await api.getMedicinesByPrescription(prescriptionId);
            const medicines = response.data?.medicines || response.medicines || [];

            setState(prev => ({
                ...prev,
                loading: false,
            }));

            return medicines;
        } catch (error) {
            setState(prev => ({
                ...prev,
                loading: false,
                error: error.message,
            }));

            return [];
        }
    }, []);

    // Get today's medicines
    const fetchTodayMedicines = useCallback(async () => {
        setState(prev => ({ ...prev, loading: true, error: null }));

        try {
            const response = await api.getTodayMedicines();
            const todayMedicines = response.data || response;

            setState(prev => ({
                ...prev,
                todayMedicines,
                loading: false,
            }));

            return todayMedicines;
        } catch (error) {
            setState(prev => ({
                ...prev,
                loading: false,
                error: error.message,
            }));

            return null;
        }
    }, []);

    // Get medicines without stock
    const fetchMedicinesWithoutStock = useCallback(async () => {
        setState(prev => ({ ...prev, loading: true, error: null }));

        try {
            const response = await api.getMedicinesWithoutStock();
            const medicines = response.data || response || [];

            setState(prev => ({
                ...prev,
                loading: false,
            }));

            return medicines;
        } catch (error) {
            setState(prev => ({
                ...prev,
                loading: false,
                error: error.message,
            }));

            return [];
        }
    }, []);

    // Update medicine
    const updateMedicine = useCallback(async (id, updateData) => {
        setState(prev => ({ ...prev, loading: true, error: null }));

        try {
            const response = await api.updateMedicine(id, updateData);

            // Update in local state
            setState(prev => ({
                ...prev,
                medicines: prev.medicines.map(med =>
                    med._id === id ? { ...med, ...updateData } : med
                ),
                loading: false,
            }));

            return { success: true, data: response.data || response };
        } catch (error) {
            setState(prev => ({
                ...prev,
                loading: false,
                error: error.message,
            }));

            return { success: false, error: error.message };
        }
    }, []);

    // Delete medicine
    const deleteMedicine = useCallback(async (id) => {
        setState(prev => ({ ...prev, loading: true, error: null }));

        try {
            await api.deleteMedicine(id);

            // Remove from local state
            setState(prev => ({
                ...prev,
                medicines: prev.medicines.filter(med => med._id !== id),
                loading: false,
            }));

            return { success: true };
        } catch (error) {
            setState(prev => ({
                ...prev,
                loading: false,
                error: error.message,
            }));

            return { success: false, error: error.message };
        }
    }, []);

    return {
        ...state,
        fetchMedicines,
        fetchMedicinesByPrescription,
        fetchTodayMedicines,
        fetchMedicinesWithoutStock,
        updateMedicine,
        deleteMedicine,
    };
}