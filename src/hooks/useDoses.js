// src/hooks/useDoses.js
import { useCallback, useState } from 'react';
import * as api from '../api';

export function useDoses() {
    const [state, setState] = useState({
        todayDoses: null,
        loading: false,
        error: null,
        adherenceStats: null,
        upcomingDoses: [],
    });

    // Get today's doses
    const fetchTodayDoses = useCallback(async () => {
        setState(prev => ({ ...prev, loading: true, error: null }));

        try {
            const response = await api.getDosesByUser();
            console.log("Fetched today's doses:", response);
            const todayDoses = response.data || response;

            setState(prev => ({
                ...prev,
                todayDoses,
                loading: false,
            }));

            return todayDoses;
        } catch (error) {
            setState(prev => ({
                ...prev,
                loading: false,
                error: error.message,
            }));

            return null;
        }
    }, []);

    // Get doses by prescription
    const fetchDosesByPrescription = useCallback(async (prescriptionId, date = null) => {
        setState(prev => ({ ...prev, loading: true, error: null }));

        try {
            const response = await api.getDosesByPrescription(prescriptionId, date);
            const doses = response.data || response || [];

            setState(prev => ({
                ...prev,
                loading: false,
            }));

            return doses;
        } catch (error) {
            setState(prev => ({
                ...prev,
                loading: false,
                error: error.message,
            }));

            return [];
        }
    }, []);

    // Get adherence stats
    const fetchAdherenceStats = useCallback(async (days = 30) => {
        setState(prev => ({ ...prev, loading: true, error: null }));

        try {
            const response = await api.getAdherenceStats(days);
            const stats = response.data || response;

            setState(prev => ({
                ...prev,
                adherenceStats: stats,
                loading: false,
            }));

            return stats;
        } catch (error) {
            setState(prev => ({
                ...prev,
                loading: false,
                error: error.message,
            }));

            return null;
        }
    }, []);

    // Get prescription adherence stats
    const fetchPrescriptionAdherenceStats = useCallback(async (prescriptionId, days = 30) => {
        setState(prev => ({ ...prev, loading: true, error: null }));

        try {
            const response = await api.getPrescriptionAdherenceStats(prescriptionId, days);
            const stats = response.data || response;

            setState(prev => ({
                ...prev,
                adherenceStats: stats,
                loading: false,
            }));

            return stats;
        } catch (error) {
            setState(prev => ({
                ...prev,
                loading: false,
                error: error.message,
            }));

            return null;
        }
    }, []);

    // Mark dose as taken
    const markAsTaken = useCallback(async (doseId, notes = '') => {
        setState(prev => ({ ...prev, loading: true, error: null }));

        try {
            const response = await api.markDoseAsTaken(doseId, notes);

            // Update in today's doses if exists
            setState(prev => ({
                ...prev,
                todayDoses: prev.todayDoses ? {
                    ...prev.todayDoses,
                    data: Object.keys(prev.todayDoses.data || {}).reduce((acc, time) => ({
                        ...acc,
                        [time]: (prev.todayDoses.data[time] || []).map(dose =>
                            dose._id === doseId ? { ...dose, status: 'taken', takenTime: new Date() } : dose
                        )
                    }), {})
                } : null,
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

    // Mark dose as missed
    const markAsMissed = useCallback(async (doseId, notes = '') => {
        setState(prev => ({ ...prev, loading: true, error: null }));

        try {
            const response = await api.markDoseAsMissed(doseId, notes);

            // Update in today's doses if exists
            setState(prev => ({
                ...prev,
                todayDoses: prev.todayDoses ? {
                    ...prev.todayDoses,
                    data: Object.keys(prev.todayDoses.data || {}).reduce((acc, time) => ({
                        ...acc,
                        [time]: (prev.todayDoses.data[time] || []).map(dose =>
                            dose._id === doseId ? { ...dose, status: 'missed' } : dose
                        )
                    }), {})
                } : null,
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

    // Get upcoming doses
    const fetchUpcomingDoses = useCallback(async () => {
        setState(prev => ({ ...prev, loading: true, error: null }));

        try {
            const response = await api.getUpcomingDoses();
            const upcoming = response.data || response || [];

            setState(prev => ({
                ...prev,
                upcomingDoses: upcoming,
                loading: false,
            }));

            return upcoming;
        } catch (error) {
            setState(prev => ({
                ...prev,
                loading: false,
                error: error.message,
            }));

            return [];
        }
    }, []);

    return {
        ...state,
        fetchTodayDoses,
        fetchDosesByPrescription,
        fetchAdherenceStats,
        fetchPrescriptionAdherenceStats,
        markAsTaken,
        markAsMissed,
        fetchUpcomingDoses,
    };
}