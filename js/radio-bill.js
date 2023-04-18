// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen





let smsTotalElement3 = document.querySelector(".smsTotalTwo")
let callTotalElement3 = document.querySelector(".callTotalTwo")
let billTotalElement3 = document.querySelector(".totalTwo")
let billItemType = document.querySelector(".billItemTypeRadio:checked");

let addRadioButton = document.querySelector(".radioBillAddBtn")


var callTotal = 0;
var smsTotal = 0;
var totalBill3 = 0;

function radioBill() {

    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    
    var billItemType = checkedRadioBtn.value
   
    if (billItemType == 'sms') {
        smsTotal += 0.75;

    } else if (billItemType == 'call') {
        callTotal += 2.75;
    };

    totalBill3 = smsTotal + callTotal;


    smsTotalElement3.innerHTML = smsTotal.toFixed(2);
    callTotalElement3.innerHTML = callTotal.toFixed(2);

    billTotalElement3.innerHTML = totalBill3.toFixed(2);

    if (totalBill3 >= 50) {

        billTotalElement3.classList.add('danger');
    }

    else if (totalBill3 >= 30) {
        billTotalElement3.classList.remove('danger');
        billTotalElement3.classList.add('warning');
    }



};

addRadioButton.addEventListener('click', radioBill);
