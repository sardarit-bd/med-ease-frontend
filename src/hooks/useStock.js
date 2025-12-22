// src/hooks/useStock.js
import { useCallback, useState } from 'react';
import * as api from '../api';

export function useStock() {
    const [state, setState] = useState({
        stockItems: [],
        loading: false,
        error: null,
        dropdownMedicines: [],
        lowStockItems: [],
    });

    // Get all stock items
    const fetchStock = useCallback(async () => {
        setState(prev => ({ ...prev, loading: true, error: null }));

        try {
            const response = await api.getAllStock();
            const stockItems = response.data?.data?.linked || response.data || [];

            setState(prev => ({
                ...prev,
                stockItems,
                loading: false,
            }));

            return stockItems;
        } catch (error) {
            setState(prev => ({
                ...prev,
                loading: false,
                error: error.message,
            }));

            return [];
        }
    }, []);

    // Add stock item
    const addStock = useCallback(async (stockData) => {
        setState(prev => ({ ...prev, loading: true, error: null }));

        try {
            const response = await api.addStockItem(stockData);
            const newStock = response.data?.stock || response.data || response;

            setState(prev => ({
                ...prev,
                stockItems: [newStock, ...prev.stockItems],
                loading: false,
            }));

            return { success: true, data: newStock };
        } catch (error) {
            setState(prev => ({
                ...prev,
                loading: false,
                error: error.message,
            }));

            return { success: false, error: error.message };
        }
    }, []);

    // Get medicines for dropdown
    const fetchDropdownMedicines = useCallback(async () => {
        setState(prev => ({ ...prev, loading: true, error: null }));

        try {
            const response = await api.getMedicinesForDropdown();
            const medicines = response.data || response || [];

            setState(prev => ({
                ...prev,
                dropdownMedicines: medicines,
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

    // Get low stock items
    const fetchLowStock = useCallback(async (threshold = 7) => {
        setState(prev => ({ ...prev, loading: true, error: null }));

        try {
            const response = await api.getLowStock(threshold);
            const lowStock = response.data || response || [];

            setState(prev => ({
                ...prev,
                lowStockItems: lowStock,
                loading: false,
            }));

            return lowStock;
        } catch (error) {
            setState(prev => ({
                ...prev,
                loading: false,
                error: error.message,
            }));

            return [];
        }
    }, []);

    // Update stock quantity
    const updateQuantity = useCallback(async (id, quantity) => {
        setState(prev => ({ ...prev, loading: true, error: null }));

        try {
            const response = await api.updateStockQuantity(id, quantity);

            // Update in local state
            setState(prev => ({
                ...prev,
                stockItems: prev.stockItems.map(item =>
                    item._id === id ? { ...item, quantity } : item
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

    // Deduct from stock
    const deductStock = useCallback(async (id, amount = 1) => {
        setState(prev => ({ ...prev, loading: true, error: null }));

        try {
            const response = await api.deductFromStock(id, amount);

            // Update in local state
            setState(prev => ({
                ...prev,
                stockItems: prev.stockItems.map(item =>
                    item._id === id ? { ...item, quantity: item.quantity - amount } : item
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

    return {
        ...state,
        fetchStock,
        addStock,
        fetchDropdownMedicines,
        fetchLowStock,
        updateQuantity,
        deductStock,
    };
}