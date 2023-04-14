// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen




function radioBill() {
    var callTotal = 0.00;
    var smsTotal = 0.00;
    var totalBill = callTotal + smsTotal;

    let smsTotalElement = document.querySelector(".smsTotalTwo")
    let callTotalElement = document.querySelector(".callTotalTwo")
    let billTotalElement = document.querySelector(".totalTwo")
    let billItemType = document.querySelector(".billItemTypeRadio:checked").value;

    if(billItemType == 'sms'){
       smsTotal += 0.75;

    }else if (billItemType == 'call'){
        callTotal += 2.75;
    };



    if(totalBill >= 30){
        billTotalElement.classList.add('warning');
    }

    else if(totalBill >= 50){
        billTotalElement.classList.remove('warning');
        billTotalElement.classList.add('danger');
    }
    

    

    smsTotalElement.innerHTML = smsTotal + Number(smsTotalElement.innerHTML);
    callTotalElement.innerHTML = callTotal + Number(callTotalElement.innerHTML);

    billTotalElement.innerHTML = (Number(smsTotalElement.innerHTML) + Number(callTotalElement.innerHTML)).toFixed(2);

    

};

let addRadioButton = document.querySelector(".radioBillAddBtn")
addRadioButton.addEventListener('click', radioBill);
