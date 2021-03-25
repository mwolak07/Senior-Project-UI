// Importing the C++ addon
const cppAddon = require('./build/Release/cppaddon.node');

// Makes an alert for the positions of the axes when "Move" button is pressed
function moveButtonClick(form) {
    const axisValue1 = Number(form.axis1.value);
    const axisValue2 = Number(form.axis2.value);
    const axisValue3 = Number(form.axis3.value);
    const axisValue4 = Number(form.axis4.value);
    const axisValue5 = Number(form.axis5.value);
    alert('Each desired axis position is being multiplied by 2 with a C++ function:\n' +
          'Axis 1: ' + cppAddon.multiplier(axisValue1, 2) + '\n' +
          'Axis 2: ' + cppAddon.multiplier(axisValue2, 2) + '\n' +
          'Axis 3: ' + cppAddon.multiplier(axisValue3, 2) + '\n' +
          'Axis 4: ' + cppAddon.multiplier(axisValue4, 2) + '\n' +
          'Axis 5: ' + cppAddon.multiplier(axisValue5, 2) + '\n');
}

// Keeps text boxes updated with current slider position using onclick event
// Takes the form, and the current axis being clicked on
function updateText(form, axisNum) {
    // Acts on appropriate text box/slider pair based on axisNum
    switch(axisNum) {
        case 1:
            form.axisText1.value = form.axis1.value;
            break;
        case 2:
            form.axisText2.value = form.axis2.value;
            break;
        case 3:
            form.axisText3.value = form.axis3.value;
            break;
        case 4:
            form.axisText4.value = form.axis4.value;
            break;
        case 5:
            form.axisText5.value = form.axis5.value;
            break;
    }
}