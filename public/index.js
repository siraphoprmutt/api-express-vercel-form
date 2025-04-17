import { register } from "./assets/api/index.js";
import { showToast, showConfirmDialog, isValidName, isValidPhone, isValidEmail } from './assets/utils/index.js';

window.selectUserType = (type) => {
    document.getElementById('userType').value = type;

    // Reset all cards
    document.getElementById('card-student').classList.remove("border-blue-500", "bg-blue-50");
    document.getElementById('card-staff').classList.remove("border-blue-500", "bg-blue-50");

    // Highlight selected
    if (type === 'student') {
        document.getElementById('card-student').classList.add("border-blue-500", "bg-blue-50");
    } else if (type === 'staff') {
        document.getElementById('card-staff').classList.add("border-blue-500", "bg-blue-50");
    }
};

const resetUserType = () => {
    selectUserType("student"); // Default type
};

// ตั้งค่าค่าเริ่มต้นเมื่อโหลดหน้า
resetUserType();

window.handleRegister = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const address = form.address.value.trim();
    const userType = form.userType.value;

    if (!userType) {
        showToast("กรุณาเลือกประเภทผู้ใช้งาน", "error");
        return;
    }

    if (!isValidName(name)) {
        showToast("กรุณากรอกชื่อ-นามสกุลให้ถูกต้อง", "error");
        return;
    }

    if (!isValidEmail(email)) {
        showToast("กรุณากรอกอีเมลให้ถูกต้อง", "error");
        return;
    }

    if (!isValidPhone(phone)) {
        showToast("กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง", "error");
        return;
    }

    if (!address) {
        showToast("กรุณากรอกที่อยู่", "error");
        return;
    }

    const confirm = await showConfirmDialog({
        title: 'ยืนยันการลงทะเบียน?',
        text: 'คุณต้องการส่งข้อมูลนี้หรือไม่',
        icon: 'question',
        confirmText: 'ยืนยัน',
        cancelText: 'ยกเลิก'
    });

    if (!confirm.isConfirmed) return;

    const res = await register(form);
    console.log("res: ", res)
    if (res) {
        showToast("ลงทะเบียนสำเร็จ!", "success");
        form.reset();
        resetUserType();
    } else {
        showToast("เกิดข้อผิดพลาดในการส่งข้อมูล");
    }
};
