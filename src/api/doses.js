// src/api/doses.js
import { apiGet, apiPost } from './utils';

// Get today's doses
export async function getTodayDoses() {
    return apiGet('/doses/today');
}

// Get doses by date range
export async function getDosesByDate(startDate, endDate) {
    return apiGet(`/doses?startDate=${startDate}&endDate=${endDate}`);
}

// Get doses by prescription
export async function getDosesByPrescription(prescriptionId, date = null) {
    const url = date
        ? `/doses/prescription/${prescriptionId}?date=${date}`
        : `/doses/prescription/${prescriptionId}`;
    return apiGet(url);
}

// Mark dose as taken
export async function markDoseAsTaken(doseId, notes = '') {
    return apiPost(`/patient/doses/${doseId}/take`, { notes });
}

// Mark dose as missed
export async function markDoseAsMissed(doseId, notes = '') {
    return apiPost(`/doses/${doseId}/miss`, { notes });
}

// Get adherence stats
export async function getAdherenceStats(days = 30) {
    return apiGet(`/doses/stats?days=${days}`);
}

// Get prescription adherence stats
export async function getPrescriptionAdherenceStats(prescriptionId, days = 30) {
    return apiGet(`/doses/stats/prescription/${prescriptionId}?days=${days}`);
}

// Get upcoming doses
export async function getUpcomingDoses() {
    return apiGet('/doses/upcoming');
}

// get doeses by user id
export async function getDosesByUser() {
    const hour = new Date().getHours()
    return apiGet(`/patient/doses?date=${hour}`);
}