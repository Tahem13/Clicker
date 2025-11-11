let i = 0
let counter = document.getElementById("counter")

main.onclick = function() {
    i++;
    counter.innerHTML = 'Clicks: ' + i;
};