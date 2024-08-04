let language = 'vi';

function changeLanguage(lang) {
    language = lang;
    document.querySelector('header h1').textContent = lang === 'vi' ? 'Giả lập GBA' : 'GBA Emulator';
}

async function loadRom(event) {
    const file = event.target.files[0];
    if (file) {
        const arrayBuffer = await file.arrayBuffer();
        // Xử lý việc tải và chạy ROM tại đây
    }
}
