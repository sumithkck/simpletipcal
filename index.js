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

    var tipAmount = (billAmount * 5) / 100;
    var tipPerPerson = tipAmount / numberOfPeople;
    var totalPerPerson = (billAmount * (105) / 100) / numberOfPeople;

    document.querySelector("#tip-display-01").innerHTML = tipPerPerson;
    document.querySelector("#tip-display-02").innerHTML = totalPerPerson;



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


    var tipAmount = (billAmount * 10) / 100;
    var tipPerPerson = tipAmount / numberOfPeople;
    var totalPerPerson = (billAmount * (110) / 100) / numberOfPeople;

    document.querySelector("#tip-display-01").innerHTML = tipPerPerson;
    document.querySelector("#tip-display-02").innerHTML = totalPerPerson;
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


    var tipAmount = (billAmount * 15) / 100;
    var tipPerPerson = tipAmount / numberOfPeople;
    var totalPerPerson = (billAmount * (115) / 100) / numberOfPeople;

    document.querySelector("#tip-display-01").innerHTML = tipPerPerson;
    document.querySelector("#tip-display-02").innerHTML = totalPerPerson;
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


    var tipAmount = (billAmount * 25) / 100;
    var tipPerPerson = tipAmount / numberOfPeople;
    var totalPerPerson = (billAmount * (125) / 100) / numberOfPeople;

    document.querySelector("#tip-display-01").innerHTML = tipPerPerson;
    document.querySelector("#tip-display-02").innerHTML = totalPerPerson;
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


    var tipAmount = (billAmount * 50) / 100;
    var tipPerPerson = tipAmount / numberOfPeople;
    var totalPerPerson = (billAmount * (150) / 100) / numberOfPeople;

    document.querySelector("#tip-display-01").innerHTML = tipPerPerson;
    document.querySelector("#tip-display-02").innerHTML = totalPerPerson;
});

document.querySelector("#custom").addEventListener("click", function() {
    var percentage = prompt("Enter custom tip percentage(%): ");
    document.querySelector("#custom").classList.add("btn-selected");
    document.querySelector("#five").classList.remove("btn-selected");
    document.querySelector("#ten").classList.remove("btn-selected");
    document.querySelector("#fifteen").classList.remove("btn-selected");
    document.querySelector("#twenty-five").classList.remove("btn-selected");
    document.querySelector("#fifty").classList.remove("btn-selected");

    billAmount = document.getElementById('bill-amount').value;
    numberOfPeople = document.getElementById('num-of-people').value;


    var tipAmount = (billAmount * percentage) / 100;
    var tipPerPerson = tipAmount / numberOfPeople;
    var temp = 1 + (percentage / 100);
    var totalPerPerson = (billAmount * temp) / numberOfPeople;

    document.querySelector("#tip-display-01").innerHTML = tipPerPerson;
    document.querySelector("#tip-display-02").innerHTML = totalPerPerson;
});

document.querySelector("#reset").addEventListener("click", function() {
    document.querySelector("#custom").classList.remove("btn-selected");
    document.querySelector("#five").classList.remove("btn-selected");
    document.querySelector("#ten").classList.remove("btn-selected");
    document.querySelector("#fifteen").classList.remove("btn-selected");
    document.querySelector("#twenty-five").classList.remove("btn-selected");
    document.querySelector("#fifty").classList.remove("btn-selected");

    document.querySelector("#tip-display-01").innerHTML = "0.00";
    document.querySelector("#tip-display-02").innerHTML = "0.00";
});