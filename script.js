document.addEventListener('DOMContentLoaded', () => {
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    const previewButton = document.getElementById('previewButton');
    const modal = document.getElementById('videoModal');
    const closeModal = document.querySelector('.close');
    const video = modal.querySelector('video');

    function updateCountdown() {
        const now = new Date();
        const nextYear = now.getFullYear() + 1;
        const newYearTime = new Date(`January 1, ${nextYear} 00:00:00`).getTime();
        const difference = newYearTime - now.getTime();

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        daysElement.textContent = days < 10 ? '0' + days : days;
        hoursElement.textContent = hours < 10 ? '0' + hours : hours;
        minutesElement.textContent = minutes < 10 ? '0' + minutes : minutes;
        secondsElement.textContent = seconds < 10 ? '0' + seconds : seconds;
    }

    if (daysElement && hoursElement && minutesElement && secondsElement) {
        setInterval(updateCountdown, 1000);
    }
    
    updateCountdown(); 
    previewButton.addEventListener('click', () => {
        modal.style.display = 'block';
        video.currentTime = 0; 
        video.play();         
    });
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        video.pause();        
    });
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            video.pause();  
        }
    });
});

