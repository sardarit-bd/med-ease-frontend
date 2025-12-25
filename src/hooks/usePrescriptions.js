// src/hooks/usePrescriptions.js
import { useCallback, useState } from 'react';
import * as api from '../api';

export function usePrescriptions() {
    const [state, setState] = useState({
        prescriptions: [],
        loading: false,
        error: null,
        selectedPrescription: null,
    });

    // Get all prescriptions
    const fetchPrescriptions = useCallback(async () => {
        setState(prev => ({ ...prev, loading: true, error: null }));

        try {
            const response = await api.getAllPrescriptions();
            console.log('API Response:', response);
            const prescriptions = response.data || response || [];

            setState(prev => ({
                ...prev,
                prescriptions,
                loading: false,
            }));

            return prescriptions;
        } catch (error) {
            setState(prev => ({
                ...prev,
                loading: false,
                error: error.message,
            }));

            return [];
        }
    }, []);

    // Get prescription by ID
    const fetchPrescriptionById = useCallback(async (id) => {
        setState(prev => ({ ...prev, loading: true, error: null }));

        try {
            const response = await api.getPrescriptionById(id);
            const prescription = response.data || response;

            return prescription;
        } catch (error) {
            setState(prev => ({
                ...prev,
                loading: false,
                error: error.message,
            }));

            return null;
        }
    }, []);

    // Create prescription
    const createPrescription = useCallback(async (prescriptionData) => {
        setState(prev => ({ ...prev, loading: true, error: null }));

        try {
            const response = await api.createPrescription(prescriptionData);
            console.log('API Response:', response);
            const newPrescription = response.data || response;

            console.log('Created Prescription:', newPrescription);

            return { success: true, data: newPrescription };
        } catch (error) {
            setState(prev => ({
                ...prev,
                loading: false,
                error: error.message,
            }));

            return { success: false, error: error.message };
        }
    }, []);

    // Add medicine to prescription
    const addMedicine = useCallback(async (prescriptionId, medicineData) => {
        setState(prev => ({ ...prev, loading: true, error: null }));

        try {
            const response = await api.addMedicineToPrescription(prescriptionId, medicineData);

            setState(prev => ({
                ...prev,
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

    // Get prescription stats
    const getStats = useCallback(async (prescriptionId, params = {}) => {
        setState(prev => ({ ...prev, loading: true, error: null }));

        try {
            const response = await api.getPrescriptionStats(prescriptionId, params);

            setState(prev => ({
                ...prev,
                loading: false,
            }));

            return response.data || response;
        } catch (error) {
            setState(prev => ({
                ...prev,
                loading: false,
                error: error.message,
            }));

            return null;
        }
    }, []);

    // Clear error
    const clearError = useCallback(() => {
        setState(prev => ({ ...prev, error: null }));
    }, []);

    return {
        ...state,
        fetchPrescriptions,
        fetchPrescriptionById,
        createPrescription,
        addMedicine,
        getStats,
        clearError,
    };
}