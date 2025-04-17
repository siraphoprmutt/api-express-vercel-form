export async function showConfirmDialog({
    title = 'คุณแน่ใจหรือไม่?',
    text = '',
    confirmText = 'ยืนยัน',
    cancelText = 'ยกเลิก',
    icon = 'warning'
} = {}) {
    return await Swal.fire({
        title,
        text,
        icon,
        showCancelButton: true,
        confirmButtonText: confirmText,
        cancelButtonText: cancelText,
        reverseButtons: true,
        customClass: {
            actions: 'flex gap-4 justify-end',
            confirmButton: 'bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700',
            cancelButton: 'bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400',
        },
        buttonsStyling: false
    });
}
