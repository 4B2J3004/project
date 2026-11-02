const countdown = document.getElementById('countdown-message');

if (countdown) {
    const firstShow = new Date('2027-04-09T20:00:00+08:00');

    const updateCountdown = () => {
        const millisecondsRemaining = firstShow.getTime() - Date.now();

        if (millisecondsRemaining <= 0) {
            countdown.textContent = '巡演已啟程，期待現場見。';
            return;
        }

        const daysRemaining = Math.ceil(millisecondsRemaining / (1000 * 60 * 60 * 24));
        countdown.textContent = `距離首場演出還有 ${daysRemaining} 天`;
    };

    updateCountdown();
    window.setInterval(updateCountdown, 60_000);
}
