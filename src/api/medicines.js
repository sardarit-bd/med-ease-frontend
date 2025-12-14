// src/api/medicines.js
import { apiDelete, apiGet, apiPut } from './utils';

// Get all medicines
export async function getAllMedicines() {
    return apiGet('/medicines');
}

// Get medicine by ID
export async function getMedicineById(id) {
    return apiGet(`/medicines/${id}`);
}

// Get medicines by prescription
export async function getMedicinesByPrescription(prescriptionId) {
    return apiGet(`/medicines/prescription/${prescriptionId}`);
}

// Update medicine
export async function updateMedicine(id, updateData) {
    return apiPut(`/medicines/${id}`, updateData);
}

// Update medicine stock
export async function updateMedicineStock(id, stockData) {
    return apiPut(`/medicines/${id}/stock`, stockData);
}

// Delete medicine
export async function deleteMedicine(id) {
    return apiDelete(`/medicines/${id}`);
}

// Get medicines without stock
export async function getMedicinesWithoutStock() {
    return apiGet('/medicines/without-stock');
}

// Get today's medicines
export async function getTodayMedicines() {
    return apiGet('/medicines/today');
}