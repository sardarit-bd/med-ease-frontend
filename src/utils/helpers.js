// src/utils/helpers.js

// Format date
export function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
}

// Format time
export function formatTime(date) {
    return new Date(date).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
    });
}

// Get time slot (morning, noon, evening, night)
export function getTimeSlot(date) {
    const hour = new Date(date).getHours();

    if (hour >= 5 && hour < 12) return 'morning';
    if (hour >= 12 && hour < 16) return 'noon';
    if (hour >= 16 && hour < 22) return 'evening';
    return 'night';
}

// Calculate adherence percentage
export function calculateAdherence(taken, total) {
    if (total === 0) return 0;
    return Math.round((taken / total) * 100 * 10) / 10;
}

// Format medicine name
export function formatMedicineName(medicine) {
    const parts = [];
    if (medicine.name) parts.push(medicine.name);
    if (medicine.strength) parts.push(medicine.strength);
    if (medicine.form) parts.push(medicine.form);
    return parts.join(' ');
}

// Group doses by time
export function groupDosesByTime(doses) {
    const grouped = {
        morning: [],
        noon: [],
        evening: [],
        night: [],
    };

    doses.forEach(dose => {
        const timeSlot = getTimeSlot(dose.scheduledTime);
        grouped[timeSlot].push(dose);
    });

    return grouped;
}

// Validate email
export function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Debounce function
export function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}