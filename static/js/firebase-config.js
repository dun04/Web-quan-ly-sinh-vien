/**
 * EDUPRO - FIREBASE REALTIME DATABASE CONNECTOR
 * 
 * Hướng dẫn kết nối Firebase Realtime Database:
 * 1. Truy cập https://console.firebase.google.com -> Tạo project mới (hoặc chọn project có sẵn).
 * 2. Vào menu "Build" -> chọn "Realtime Database" -> Bấm "Create Database".
 * 3. Ở tab "Rules", đặt quyền đọc/ghi:
 *    {
 *      "rules": {
 *        ".read": true,
 *        ".write": true
 *      }
 *    }
 * 4. Bấm vào nút 3 chấm (⋮) ở góc phải Realtime Database -> Chọn "Import JSON" -> Chọn file `firebase_database_seed.json`.
 * 5. Copy đường dẫn URL Database (Ví dụ: "https://your-project-id-default-rtdb.firebaseio.com") và dán vào biến `databaseURL` bên dưới.
 */

const FIREBASE_CONFIG = {
  databaseURL: "" // Dán URL Realtime Database của bạn vào đây
};

// Cloud Database Sync Helper
const firebaseService = {
  get isConfigured() {
    return !!(FIREBASE_CONFIG.databaseURL && FIREBASE_CONFIG.databaseURL.trim().startsWith('http'));
  },

  get dbUrl() {
    let url = FIREBASE_CONFIG.databaseURL.trim();
    if (url.endsWith('/')) url = url.slice(0, -1);
    return url;
  },

  async fetchAllData() {
    if (!this.isConfigured) return null;
    try {
      const res = await fetch(`${this.dbUrl}/.json`);
      if (res.ok) {
        const data = await res.json();
        return data;
      }
    } catch (e) {
      console.warn('Firebase sync warning:', e);
    }
    return null;
  },

  async saveData(data) {
    if (!this.isConfigured) return false;
    try {
      const res = await fetch(`${this.dbUrl}/.json`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      return res.ok;
    } catch (e) {
      console.warn('Firebase save warning:', e);
      return false;
    }
  }
};
