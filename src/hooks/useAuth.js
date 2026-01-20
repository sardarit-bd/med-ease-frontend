import { useCallback, useEffect, useState } from 'react';
import * as api from '../api';

export function useAuth() {
    const [state, setState] = useState({
        user: null,
        loading: true,
        error: null,
        isAuthenticated: false,
    });

    // Check authentication
    const checkAuth = useCallback(async () => {
        setState(prev => ({ ...prev, loading: true, error: null }));

        try {
            const result = await api.checkAuth();

            if (result.isAuthenticated) {
                setState({
                    user: result.user,
                    loading: false,
                    error: null,
                    isAuthenticated: true,
                });
                return true;
            } else {
                setState({
                    user: null,
                    loading: false,
                    error: result.error,
                    isAuthenticated: false,
                });
                return false;
            }
        } catch (error) {
            setState({
                user: null,
                loading: false,
                error: error.message,
                isAuthenticated: false,
            });
            return false;
        }
    }, []);

    // Login
    const login = useCallback(async (credentials) => {
        setState(prev => ({ ...prev, loading: true, error: null }));

        try {
            const response = await api.loginUser(credentials);


            console.log(response);

            const user = response;

            setState({
                user,
                loading: false,
                error: null,
                isAuthenticated: true,
            });

            return { success: true, user };
        } catch (error) {
            setState(prev => ({
                ...prev,
                loading: false,
                error: error.message,
                isAuthenticated: false,
            }));

            return { success: false, error: error.message };
        }
    }, []);

    // Register
    const register = useCallback(async (userData) => {
        setState(prev => ({ ...prev, loading: true, error: null }));

        try {
            const response = await api.registerUser(userData);
            const user = response.data?.user || response.user;

            setState({
                user,
                loading: false,
                error: null,
                isAuthenticated: true,
            });

            return { success: true, user };
        } catch (error) {
            setState(prev => ({
                ...prev,
                loading: false,
                error: error.message,
                isAuthenticated: false,
            }));

            return { success: false, error: error.message };
        }
    }, []);

    // Logout
    const logout = useCallback(async () => {
        try {
            await api.logoutUser();
        } catch (error) {
            console.error('Logout error:', error);
        } finally {
            setState({
                user: null,
                loading: false,
                error: null,
                isAuthenticated: false,
            });

            // Redirect to login
            if (typeof window !== 'undefined') {
                window.location.href = '/login';
            }
        }
    }, []);


    // Send password reset link
    const sendPasswordResetLink = useCallback(async (email) => {
        setState(prev => ({ ...prev, loading: true, error: null }));

        try {
            await api.sendPswrdResetLink(email);

            setState({
                user: null,
                loading: false,
                error: null,
                isAuthenticated: false,
            });

            return { success: true };
        } catch (error) {
            setState(prev => ({
                ...prev,
                loading: false,
                error: error.message,
                isAuthenticated: false,
            }));

            return { success: false, error: error.message };
        }
    }, []);




    // Initialize
    useEffect(() => {
        checkAuth();
    }, [checkAuth]);

    return {
        ...state,
        login,
        register,
        logout,
        checkAuth,
        sendPasswordResetLink
    };
}