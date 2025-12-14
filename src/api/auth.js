// src/api/auth.js
import { apiGet, apiPost, apiPut } from './utils';

// Login user
export async function loginUser(credentials) {
    return apiPost('/auth/login', credentials);
}

// Register user
export async function registerUser(userData) {
    return apiPost('/auth/register', userData);
}

// Get current user
export async function getCurrentUser() {
    return apiGet('/auth/me');
}

// Update user profile
export async function updateUserProfile(profileData) {
    return apiPut('/auth/profile', profileData);
}

// Logout user
export async function logoutUser() {
    return apiPost('/auth/logout');
}