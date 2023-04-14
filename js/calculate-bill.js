//get a reference to the calculate button

//get a reference to the billTotal element

//get a reference to the billString

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button


let billStringElement = document.querySelector(".billString");
let calculateBtnElement = document.querySelector(".calculateBtn");
let billTotalElement = document.querySelector(".billTotal");


function totalPhoneBill(){
    var overallBillTotal = 0;
    
   
    let price = billStringElement.value.toLowerCase().split(',');
    
    for(var i = 0; i<price.length;i++){
        let currentBillString = price[i].trim();
        if(currentBillString === 'call'){
            overallBillTotal += 2.75;
        }

        if(currentBillString === 'sms'){
            overallBillTotal += 0.75
        }
    }
  

    if(overallBillTotal >= 30){
        
        billTotalElement.classList.add('danger');

    }

    else if(overallBillTotal >= 20){
        billTotalElement.classList.remove('danger');
        billTotalElement.classList.add('warning');

    }


    else if(overallBillTotal < 20) {
        billTotalElement.classList.remove('warning');
        
    }
    

    var roundedBillTotal = overallBillTotal.toFixed(2);
    billTotalElement.innerHTML = roundedBillTotal;
}

calculateBtnElement.addEventListener('click', totalPhoneBill);
