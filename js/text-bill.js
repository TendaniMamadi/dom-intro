// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen


let smsTotalElement = document.querySelector(".smsTotalOne")
let callTotalElement = document.querySelector(".callTotalOne")
let billTotalElement2 = document.querySelector(".totalOne")
let billTypeText = document.querySelector(".billTypeText");

let addToBtn = document.querySelector(".addToBillBtn")


var callTotal = 0;
var smsTotal = 0;
var overallBillTotal2 = 0;


function textBill() {

    var billTypeVal = billTypeText.value;

    if (billTypeVal.toLowerCase() == 'sms') {
        smsTotal += 0.75;

    } else if (billTypeVal.toLowerCase()  == 'call') {
        callTotal += 2.75;
    };

    overallBillTotal2 = smsTotal + callTotal;

    
    
    smsTotalElement.innerHTML = smsTotal.toFixed(2);
    callTotalElement.innerHTML = callTotal.toFixed(2);
    
    billTotalElement2.innerHTML = overallBillTotal2.toFixed(2);
    
    if (overallBillTotal2 >= 50) {

        billTotalElement2.classList.add('danger');
    }

    else if (overallBillTotal2 >= 30) {

        billTotalElement2.classList.add('warning');
    }


};




addToBtn.addEventListener('click', textBill);
