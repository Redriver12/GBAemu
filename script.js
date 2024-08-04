let language = 'vi';

function changeLanguage(lang) {
    language = lang;
    document.querySelector('header h1').textContent = lang === 'vi' ? 'Giả lập GBA' : 'GBA Emulator';
}

async function loadRom(event) {
    const file = event.target.files[0];
    if (file) {
        const arrayBuffer = await file.arrayBuffer();
        <script src="https://cdn.jsdelivr.net/gh/endrift/gbajs/gbajs.js"></script>
<script>
   async function loadRom(event) {
       const file = event.target.files[0];
       if (file) {
           const arrayBuffer = await file.arrayBuffer();
           const uint8Array = new Uint8Array(arrayBuffer);

           const gba = new GameBoyAdvance();
           gba.setCanvas(document.getElementById('emulatorCanvas'));
           gba.loadRomFromBuffer(uint8Array);
           gba.runStable();
       }
   }
</script>

    }
}
