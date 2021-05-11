const controlContainer = document.querySelector('.plan-control-container');
const controlBtn = document.querySelector('.plan-control');

controlBtn.addEventListener('click', function (e) {
    if (controlBtn.classList.contains('annually')) {
        controlBtn.classList.add('monthly');
        controlBtn.classList.remove('annually');
    } else {
        controlBtn.classList.remove('monthly');
        controlBtn.classList.add('annually');
    }
});

// ADD PRICE MONTHLY & ANNUALLY

(function () {
    const basicVal = document.querySelector('.basic-value');
    const proVal = document.querySelector('.pro-value');
    const masterVal = document.querySelector('.master-value');
    const controlBtn = document.querySelector('.plan-control');
    basicVal.textContent = 19.99;
    proVal.textContent = 24.99;
    masterVal.textContent = 39.99;

    controlBtn.addEventListener('click', function (e) {
        value = e.target;
        if (value.classList.contains('monthly')) {
            basicVal.textContent = 19.99;
            proVal.textContent = 24.99;
            masterVal.textContent = 39.99;
        } else {
            basicVal.textContent = 19.99 * 12;
            proVal.textContent = 24.99 * 12;
            masterVal.textContent = 39.99 * 12;
        }
    })
})();