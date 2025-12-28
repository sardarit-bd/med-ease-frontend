// src/api/prescriptions.js
import { apiDelete, apiGet, apiPost, apiPut } from './utils';

// Get all prescriptions
export async function getAllPrescriptions() {
    return apiGet('/patient/prescriptions');
}

// Get prescription by ID
export async function getPrescriptionById(id) {
    return apiGet(`/patient/prescriptions/${id}`);
}

// Create new prescription
export async function createPrescription(prescriptionData) {
    return apiPost('/patient/prescription', prescriptionData);
}

// Update prescription
export async function updatePrescription(id, updateData) {
    return apiPut(`/patient/prescriptions/${id}`, updateData);
}

// Delete prescription
export async function deletePrescription(id) {
    return apiDelete(`/patient/prescriptions/${id}`);
}

// Add medicine to prescription
export async function addMedicineToPrescription(prescriptionId, medicineData) {
    return apiPost(`/patient/prescription/${prescriptionId}/medicines`, medicineData);
}

// Get prescription stats
export async function getPrescriptionStats(prescriptionId, params = {}) {
    const queryParams = new URLSearchParams(params).toString();
    const url = `/patient/prescriptions/${prescriptionId}/stats${queryParams ? `?${queryParams}` : ''}`;
    return apiGet(url);
}

// Get expiring prescriptions
export async function getExpiringPrescriptions() {
    return apiGet('/patient/prescriptions/expiring/soon');
}


export async function getDashboardSummary() {
    return apiGet('/patient/dashboard/summary');
}