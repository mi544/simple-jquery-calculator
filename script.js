var total1 = "";
var total2 = "";
var finalTotal = 0;
var operator = "";

var operations = {
    plus: function (num1, num2) {
        return Number(num1) + Number(num2);
    },
    minus: function (num1, num2) {
        return Number(num1) - Number(num2);
    },
    times: function (num1, num2) {
        return Number(num1) * Number(num2);
    },
    divide: function (num1, num2) {
        return Number(num1) / Number(num2);
    },
    power: function (num1, num2) {
        return Number(num1) ** Number(num2);
    }
}

// Numbers
$(".number").click(function () {

    if (operator) {
        if (!total2) {
            total2 = $(this).val();
            $("#second-number").text(total2);
        } else {
            total2 += $(this).val();
            $("#second-number").text(total2);
        }
    } else {
        if (!total1) {
            total1 = $(this).val();
            $("#first-number").text(total1);
        } else {
            total1 += $(this).val();
            $("#first-number").text(total1);
        }
    }
})

// Operator
$(".operator").click(function () {
    if (total1) {
        operator = $(this).val();
        $("#operator").text(operator);
    }
})

// Equal
$(".equal").click(function () {
    if (total1 && operator && total2) {
        finalTotal = operations[operator](total1, total2);
        $("#result").text(finalTotal);

    }
})

// Clear
$(".clear").click(function () {
    total1 = 0;
    $("#first-number").empty();
    total2 = 0;
    $("#second-number").empty();
    operator = "";
    $("#operator").empty();
    finalTotal = 0;
    $("#result").empty();
})