// src/api/stock.js
import { apiGet, apiPost, apiPut } from './utils';

// Get all stock items
export async function getAllStock() {
    return apiGet('/patient/stock');
}

// Get stock by ID
export async function getStockById(id) {
    return apiGet(`/patient/stock/${id}`);
}

// Add stock item
export async function addStockItem(stockData) {
    return apiPost('/patient/stock', stockData);
}

// Update stock quantity
export async function updateStockQuantity(id, quantity) {
    return apiPut(`/patient/stock/${id}/quantity`, { quantity });
}

// Deduct from stock
export async function deductFromStock(id, amount = 1) {
    return apiPost(`/patient/stock/${id}/deduct`, { amount });
}

// Link stock to medicine
export async function linkStockToMedicine(stockId, medicineId) {
    return apiPost(`/patient/stock/${stockId}/link/${medicineId}`);
}

// Get medicines for dropdown
export async function getMedicinesForDropdown() {
    return apiGet('/patient/stock/medicines-for-dropdown');
}

// Get low stock items
export async function getLowStock(threshold = 7) {
    return apiGet(`/patient/stock/low?threshold=${threshold}`);
}