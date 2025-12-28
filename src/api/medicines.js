// src/api/medicines.js
import { apiDelete, apiGet, apiPut } from './utils';

// Get all medicines
export async function getAllMedicines() {
    return apiGet('/patient/medecines');
}

// Get medicine by ID
export async function getMedicineById(id) {
    return apiGet(`/patient/medicines/${id}`);
}

// Get medicines by prescription
export async function getMedicinesByPrescription(prescriptionId) {
    return apiGet(`/patient/medicines/prescription/${prescriptionId}`);
}

// Update medicine
export async function updateMedicine(id, updateData) {
    return apiPut(`/patient/medicines/${id}`, updateData);
}

// Update medicine stock
export async function updateMedicineStock(id, stockData) {
    return apiPut(`/patient/medicines/${id}/stock`, stockData);
}

// Delete medicine
export async function deleteMedicine(id) {
    return apiDelete(`/patient/medicines/${id}`);
}

// Get medicines without stock
export async function getMedicinesWithoutStock() {
    return apiGet('/patient/medicines/without-stock');
}

// Get today's medicines
export async function getTodayMedicines() {
    return apiGet('/patient/medicines/today');
}