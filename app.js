let p1Score = document.querySelector('#t1');
let p2Score = document.querySelector('#t2');
const p1Btn = document.querySelector('#t1Btn');
const p2Btn = document.querySelector('#t2Btn');
const resetBtn = document.querySelector('#resetBtn');
let p1 = 0;
let p2 = 0;
let selectedPlayTo = 0;
let selectElement = document.getElementById('playTo');

selectElement.addEventListener('change', function () {
    selectedPlayTo = selectElement.value;
    selectElement.disabled = true;
    p1Btn.classList.remove('disabled');
    p2Btn.classList.remove('disabled');
});

p1Btn.addEventListener('click', function () {
    p1++;
    p1Score.innerText = p1;
    if (p1 >= selectedPlayTo && p1 - p2 > 1) {
        p1Score.style.color = 'green';
        p2Score.style.color = 'red';
        p1Score.innerText = p1;
        p1 = 0;
        p2 = 0;
        p1Btn.disabled = true;
        p2Btn.disabled = true;
        p1Btn.classList.add('disabled');
        p2Btn.classList.add('disabled');
        selectElement.selectedIndex = 0;
    }
})

p2Btn.addEventListener('click', function () {
    p2++;
    p2Score.innerText = p2;
    if (p2 >= selectedPlayTo && p2 - p1 > 1) {
        p2Score.style.color = 'green';
        p1Score.style.color = 'red';
        p2Score.innerText = p2;
        p1 = 0;
        p2 = 0;
        p1Btn.disabled = true;
        p2Btn.disabled = true;
        p1Btn.classList.add('disabled');
        p2Btn.classList.add('disabled');
        selectElement.selectedIndex = 0;
    }
})

resetBtn.addEventListener('click', function () {
    if (p1 !== 0 || p2 !== 0) {
        p1 = 0;
        p2 = 0;
    }
    if (selectedPlayTo !== 0) {
        selectedPlayTo = selectElement.selectedIndex = 0;
    }
    p1Score.innerText = 0;
    p2Score.innerText = 0;
    selectedPlayTo = 0;
    p2Score.style.color = 'black';
    p1Score.style.color = 'black';
    p1Btn.disabled = false;
    p2Btn.disabled = false;
    selectElement.disabled = false;
})

