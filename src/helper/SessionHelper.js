// SessionHelper.js



export function setAuthToken(token) {
    localStorage.setItem('authToken', token);
}

export function getAuthToken() {
    return localStorage.getItem("authToken");
}

export function setUserDetails(userDetails) {
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
}

export function getUserDetails() {
    return JSON.parse(localStorage.getItem("userDetails"));
}

export function setEmail(email) {
    localStorage.setItem('email', email);
}

export function getEmail() {
    return localStorage.getItem("email");
}

export function setOTP(otp) {
    localStorage.setItem('otp', otp);
}

export function getOTP() {
    return localStorage.getItem("otp");
}

export function clearAllSessions() {
    localStorage.clear();
    window.location.href = "/login";
}










// export function setAuthToken(token){
// localStorage.setItem('authToken', token);
// }

// export function getAuthToken() {
//     return localStorage.getItem("authToken");
// }

// export function setUserDetails(userDetails) {
//     localStorage.setItem('userDetails', JSON.stringify(userDetails));
// }
// export function getUserDetails() {
//     return JSON.parse(localStorage.getItem("userDetails"));
// }

// export function setEmail(email) {
//     localStorage.setItem('email', email);
// }
// export function getEmail() {
//     return localStorage.getItem("email");
// }


// export function setOTP(otp) {
//     localStorage.setItem('otp', otp);
// }
// export function getOTP() {
//     return localStorage.getItem("otp");
// }
// export function clearSession() {
//     localStorage.clear();
//     window.location.href = "/login";
// }






