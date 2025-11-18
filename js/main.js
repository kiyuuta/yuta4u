// This file contains JavaScript code for handling the login functionality, including PIN validation and session management.

const unlockBtn = document.getElementById('unlockBtn');
const pinInput = document.getElementById('pinInput');

function unlock() {
  const pin = (pinInput.value || '').trim();
  if (pin === '' || pin === 'yuta2204') {
    sessionStorage.setItem('unlocked', '1');
    window.location.href = 'home.html';
  } else {
    pinInput.value = '';
    pinInput.placeholder = 'Kode salah, coba lagi';
  }
}

unlockBtn.addEventListener('click', unlock);
pinInput.addEventListener('keydown', e => { if (e.key === 'Enter') unlock(); });

// Jika sudah unlock, langsung ke home
if (sessionStorage.getItem('unlocked')) {
  window.location.href = 'home.html';
}