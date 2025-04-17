export const isValidName = (name) => /^[ก-๙a-zA-Z\s]+$/.test(name);
export const isValidPhone = (phone) => /^\d{9,}$/.test(phone);
export const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);