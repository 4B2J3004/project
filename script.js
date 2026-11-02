const countdown = document.getElementById('倒數');
const nextShow = new Date('2027-03-06T19:30:00+08:00');

function updateCountdown() {
    const now = new Date();
    const daysRemaining = Math.ceil((nextShow - now) / (1000 * 60 * 60 * 24));

    if (daysRemaining > 0) {
        countdown.textContent = `距離台北首場還有 ${daysRemaining} 天`;
    } else if (daysRemaining === 0) {
        countdown.textContent = '今天台北首場，現場見！';
    } else {
        countdown.textContent = '2027 世界巡演，期待現場再見。';
    }
}

updateCountdown();
window.setInterval(updateCountdown, 60 * 60 * 1000);

const audioInput = document.getElementById('audio-file');
const audioPlayer = document.getElementById('track-player');
const audioStatus = document.getElementById('audio-status');
let currentAudioUrl;

audioInput.addEventListener('change', () => {
    const file = audioInput.files[0];
    if (!file) {
        return;
    }

    if (currentAudioUrl) {
        URL.revokeObjectURL(currentAudioUrl);
    }

    currentAudioUrl = URL.createObjectURL(file);
    audioPlayer.src = currentAudioUrl;
    audioPlayer.hidden = false;
    audioStatus.textContent = `已載入：${file.name}`;
});

audioPlayer.addEventListener('error', () => {
    audioStatus.textContent = '無法播放此音檔，請選擇其他音訊檔案。';
});

audioPlayer.addEventListener('play', () => {
    audioStatus.textContent = '正在試聽〈追光的人〉。';
});

audioPlayer.addEventListener('ended', () => {
    audioStatus.textContent = '試聽結束。';
});

window.addEventListener('beforeunload', () => {
    if (currentAudioUrl) {
        URL.revokeObjectURL(currentAudioUrl);
    }
});
