var billAmount = 0;
var numberOfPeople = 0;




document.querySelector("#five").addEventListener("click", function() {
    document.querySelector("#five").classList.add("btn-selected");
    document.querySelector("#custom").classList.remove("btn-selected");
    document.querySelector("#ten").classList.remove("btn-selected");
    document.querySelector("#fifteen").classList.remove("btn-selected");
    document.querySelector("#twenty-five").classList.remove("btn-selected");
    document.querySelector("#fifty").classList.remove("btn-selected");

    billAmount = document.getElementById('bill-amount').value;
    numberOfPeople = document.getElementById('num-of-people').value;


});

document.querySelector("#ten").addEventListener("click", function() {
    document.querySelector("#ten").classList.add("btn-selected");
    document.querySelector("#custom").classList.remove("btn-selected");
    document.querySelector("#five").classList.remove("btn-selected");
    document.querySelector("#fifteen").classList.remove("btn-selected");
    document.querySelector("#twenty-five").classList.remove("btn-selected");
    document.querySelector("#fifty").classList.remove("btn-selected");

    billAmount = document.getElementById('bill-amount').value;
    numberOfPeople = document.getElementById('num-of-people').value;
});

document.querySelector("#fifteen").addEventListener("click", function() {
    document.querySelector("#fifteen").classList.add("btn-selected");
    document.querySelector("#custom").classList.remove("btn-selected");
    document.querySelector("#five").classList.remove("btn-selected");
    document.querySelector("#ten").classList.remove("btn-selected");
    document.querySelector("#twenty-five").classList.remove("btn-selected");
    document.querySelector("#fifty").classList.remove("btn-selected");

    billAmount = document.getElementById('bill-amount').value;
    numberOfPeople = document.getElementById('num-of-people').value;
});

document.querySelector("#twenty-five").addEventListener("click", function() {
    document.querySelector("#twenty-five").classList.add("btn-selected");
    document.querySelector("#custom").classList.remove("btn-selected");
    document.querySelector("#five").classList.remove("btn-selected");
    document.querySelector("#ten").classList.remove("btn-selected");
    document.querySelector("#fifteen").classList.remove("btn-selected");
    document.querySelector("#fifty").classList.remove("btn-selected");

    billAmount = document.getElementById('bill-amount').value;
    numberOfPeople = document.getElementById('num-of-people').value;
});

document.querySelector("#fifty").addEventListener("click", function() {
    document.querySelector("#fifty").classList.add("btn-selected");
    document.querySelector("#custom").classList.remove("btn-selected");
    document.querySelector("#five").classList.remove("btn-selected");
    document.querySelector("#ten").classList.remove("btn-selected");
    document.querySelector("#fifteen").classList.remove("btn-selected");
    document.querySelector("#twenty-five").classList.remove("btn-selected");

    billAmount = document.getElementById('bill-amount').value;
    numberOfPeople = document.getElementById('num-of-people').value;
});

document.querySelector("#custom").addEventListener("click", function() {
    document.querySelector("#custom").classList.add("btn-selected");
    document.querySelector("#five").classList.remove("btn-selected");
    document.querySelector("#ten").classList.remove("btn-selected");
    document.querySelector("#fifteen").classList.remove("btn-selected");
    document.querySelector("#twenty-five").classList.remove("btn-selected");
    document.querySelector("#fifty").classList.remove("btn-selected");

    billAmount = document.getElementById('bill-amount').value;
    numberOfPeople = document.getElementById('num-of-people').value;
});

document.querySelector("#reset").addEventListener("click", function() {
    document.querySelector("#custom").classList.remove("btn-selected");
    document.querySelector("#five").classList.remove("btn-selected");
    document.querySelector("#ten").classList.remove("btn-selected");
    document.querySelector("#fifteen").classList.remove("btn-selected");
    document.querySelector("#twenty-five").classList.remove("btn-selected");
    document.querySelector("#fifty").classList.remove("btn-selected");
});