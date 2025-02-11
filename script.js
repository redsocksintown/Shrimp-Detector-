function nextScreen(screenNumber) {
    let screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.add('hidden'));

    document.getElementById(`screen${screenNumber}`).classList.remove('hidden');
}
