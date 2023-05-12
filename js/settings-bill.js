

// get refences to all the settings fields *
let callCostElement4 = document.querySelector(".callCostSetting");
let smsCostElement4 = document.querySelector(".smsCostSetting");
let warningElement4 = document.querySelector(".warningLevelSetting");
let criticalElement4 = document.querySelector(".criticalLevelSetting");


let callSettingTotalElem = document.querySelector(".callTotalSettings")
let smsSettingTotalElem = document.querySelector(".smsTotalSettings")
let settingTotalElem = document.querySelector(".totalSettings");

let settingsBills = settingsBill();



//add an event listener for when the add button is pressed

function updateBtnClicked() {

    

    callCostSetting = callCostElement4.value; // grabbing from the screen textbox to assign to the variables
    smsCostSetting = smsCostElement4.value;
    warningLevelSetting = warningElement4.value;
    criticalLevelSetting = criticalElement4.value;

    const addSettingBtn = document.querySelector(".add-setting-btn");

    settingsBills.setCallCost(Number(callCostElement4.value));
    settingsBills.setSmsCost(Number(smsCostElement4.value));
    settingsBills.setWarningLevel(warningElement4.value);
    settingsBills.setCriticalLevel(criticalElement4.value);

    settingTotalElem.classList.remove('danger');
    settingTotalElem.classList.remove('warning');
    settingTotalElem.classList.add(settingsBills.totalClassName())


}

//get a reference to the 'Update settings' button *
const btnSet = document.querySelector(".updateSettings");


//add an event listener for when the 'Update settings' button is pressed
btnSet.addEventListener("click", updateBtnClicked)




function addBtnClick() {

    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");

    let billItemType4 = checkedRadioBtn.value;

    if (billItemType4 == 'sms') {
        
        settingsBills.sendSms();

    } else if (billItemType4 == 'call') {
        
        settingsBills.makeCall();

    };

    smsSettingTotalElem.innerHTML = settingsBills.getTotalSmsCost().toFixed(2)

    callSettingTotalElem.innerHTML = settingsBills.getTotalCallCost().toFixed(2)

    settingTotalElem.innerHTML = settingsBills.getTotalCost().toFixed(2)

    
     settingTotalElem.classList.remove('danger');
     settingTotalElem.classList.remove('warning');
     settingTotalElem.classList.add(settingsBills.totalClassName())
  



}


const addSettingBtn = document.querySelector(".add-setting-btn");
addSettingBtn.addEventListener("click", addBtnClick);

