
// let typeSet = document.querySelector(".billItemTypeWithSettings");

// get refences to all the settings fields *
let callCostElement4 = document.querySelector(".callCostSetting");
let smsCostElement4 = document.querySelector(".smsCostSetting");
let warningElement4 = document.querySelector(".warningLevelSetting");
let criticalElement4 = document.querySelector(".criticalLevelSetting");


let callSettingTotalElem = document.querySelector(".callTotalSettings")
let smsSettingTotalElem = document.querySelector(".smsTotalSettings")
let settingTotalElem = document.querySelector(".totalSettings");




// create a variables that will keep track of all the settings
let callCostSetting = 0;
let smsCostSetting = 0;
let warningLevelSetting = 0;
let criticalLevelSetting = 0;




// create a variables that will keep track of all three totals. *
var callTotalSettings = 0;
var smsTotalSettings = 0;






//add an event listener for when the add button is pressed

function updateBtnClicked() {
    callCostSetting = callCostElement4.value; // grabbing from the screen textbox to assign to the variables
    smsCostSetting = smsCostElement4.value;
    warningLevelSetting = warningElement4.value;
    criticalLevelSetting = criticalElement4.value;
    
    const addSettingBtn = document.querySelector(".add-setting-btn");
    addSettingBtn.disabled = false;

}

//get a reference to the 'Update settings' button *
const btnSet = document.querySelector(".updateSettings");


//add an event listener for when the 'Update settings' button is pressed
btnSet.addEventListener("click", updateBtnClicked)




function addBtnClick() {

    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");

    let billItemType4 = checkedRadioBtn.value;

    if (billItemType4 == 'sms') {
        smsTotalSettings += Number(smsCostSetting);
        smsSettingTotalElem.innerHTML = smsTotalSettings.toFixed(2);

    } else if (billItemType4 == 'call') {
        callTotalSettings += Number(callCostSetting);
        callSettingTotalElem.innerHTML = callTotalSettings.toFixed(2);

    };


    settingTotalElem.innerHTML = (Number(callTotalSettings) + Number(smsTotalSettings)).toFixed(2);
    var billTotalSettings = callTotalSettings + smsTotalSettings;


    if (billTotalSettings >= criticalLevelSetting) {
        settingTotalElem.classList.add('danger');
    }

    else if (billTotalSettings >= warningLevelSetting) {

        settingTotalElem.classList.remove('danger');
        settingTotalElem.classList.add('warning');
    }



    if(billTotalSettings >= criticalLevelSetting){
        addSettingBtn.disabled = true;
    }

        
    

}


const addSettingBtn = document.querySelector(".add-setting-btn");
addSettingBtn.addEventListener("click", addBtnClick);

