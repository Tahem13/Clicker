let i = 0
let addAmount = 1
let counter = document.getElementById("counter")

main.onclick = function() {
    i = i + addAmount;
    counter.innerHTML = 'Clicks: ' + i;
};

button1.onclick = function() {
    if (i >= 50) {
        i = i - 50;
        addAmount++;
        counter.innerHTML = 'Clicks: ' + i;
    } else {
        alert('Not enough money.');
    };
};