export const register = async (form) => {
    try {
        const fileInput = form.attachment;
        const hasFile = fileInput && fileInput.files.length > 0;

        let body;
        let headers = {};

        if (hasFile) {
            // ใช้ FormData เมื่อมีไฟล์
            const formData = new FormData();
            formData.append("name", form.name.value);
            formData.append("email", form.email.value);
            formData.append("phone", form.phone.value);
            formData.append("address", form.address.value);
            formData.append("userType", form.userType.value);
            formData.append("attachment", fileInput.files[0]);

            body = formData; // ไม่ต้องตั้ง Content-Type เอง
        } else {
            // ใช้ JSON เมื่อไม่มีไฟล์
            body = JSON.stringify({
                name: form.name.value,
                email: form.email.value,
                phone: form.phone.value,
                address: form.address.value,
                userType: form.userType.value
            });
            headers["Content-Type"] = "application/json";
        }

        const response = await fetch("/api/register", {
            method: "POST",
            body,
            headers
        });

        if (!response.ok) return false;

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Error during register:", error);
        return false;
    }
};
