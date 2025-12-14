// src/api/prescriptions.js
import { apiDelete, apiGet, apiPost, apiPut } from './utils';

// Get all prescriptions
export async function getAllPrescriptions() {
    return apiGet('/prescriptions');
}

// Get prescription by ID
export async function getPrescriptionById(id) {
    return apiGet(`/prescriptions/${id}`);
}

// Create new prescription
export async function createPrescription(prescriptionData) {
    return apiPost('/prescriptions', prescriptionData);
}

// Update prescription
export async function updatePrescription(id, updateData) {
    return apiPut(`/prescriptions/${id}`, updateData);
}

// Delete prescription
export async function deletePrescription(id) {
    return apiDelete(`/prescriptions/${id}`);
}

// Add medicine to prescription
export async function addMedicineToPrescription(prescriptionId, medicineData) {
    return apiPost(`/prescriptions/${prescriptionId}/medicines`, medicineData);
}

// Get prescription stats
export async function getPrescriptionStats(prescriptionId, params = {}) {
    const queryParams = new URLSearchParams(params).toString();
    const url = `/prescriptions/${prescriptionId}/stats${queryParams ? `?${queryParams}` : ''}`;
    return apiGet(url);
}

// Get expiring prescriptions
export async function getExpiringPrescriptions() {
    return apiGet('/prescriptions/expiring/soon');
}