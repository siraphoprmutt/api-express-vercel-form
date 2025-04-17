export const showToast = (message, type = "error") => {
    Toastify({
        text: message,
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        backdrop: false,
        style: {
            background: type === "success" ? "#1D4ED8" : "#dc2626",
            color: "#fff",
            borderRadius: "8px",
            padding: "10px 20px",
        },
        closeColor: "#ffffff",
    }).showToast();
}
