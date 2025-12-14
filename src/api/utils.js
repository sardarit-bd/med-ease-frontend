// src/api/utils.js

// Base API URL
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// Generic API request function
export async function apiRequest(endpoint, method = 'GET', data = null, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;

    const config = {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers,
        },
        credentials: 'include', // Important for cookies
        ...options,
    };

    if (data) {
        config.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(url, config);

        if (!response.ok) {
            const error = await response.json().catch(() => ({
                error: `HTTP ${response.status}: ${response.statusText}`
            }));
            throw new Error(error.error || error.message || 'Request failed');
        }

        return await response.json();
    } catch (error) {
        console.error('API Request Error:', error.message);
        throw error;
    }
}

// GET request helper
export function apiGet(endpoint, options = {}) {
    return apiRequest(endpoint, 'GET', null, options);
}

// POST request helper
export function apiPost(endpoint, data = {}, options = {}) {
    return apiRequest(endpoint, 'POST', data, options);
}

// PUT request helper
export function apiPut(endpoint, data = {}, options = {}) {
    return apiRequest(endpoint, 'PUT', data, options);
}

// DELETE request helper
export function apiDelete(endpoint, options = {}) {
    return apiRequest(endpoint, 'DELETE', null, options);
}

// PATCH request helper
export function apiPatch(endpoint, data = {}, options = {}) {
    return apiRequest(endpoint, 'PATCH', data, options);
}

// Check if user is authenticated
export async function checkAuth() {
    try {
        const response = await apiGet('/auth/me');
        return {
            isAuthenticated: true,
            user: response.data || response,
        };
    } catch (error) {
        return {
            isAuthenticated: false,
            error: error.message,
        };
    }
}