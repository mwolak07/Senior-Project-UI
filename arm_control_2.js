// Importing the C++ addon
const cppAddon = require('./build/Release/cppaddon.node');

function moveButtonClick(form) {
    const xAxisValue = Number(form.xAxis.value);
    const yAxisValue = Number(form.yAxis.value);
    const zAxisValue = Number(form.zAxis.value);
    alert('Each desired coordinate position is being multiplied by 2 with a C++ function:\n' +
          'X-Axis: ' + cppAddon.multiplier(xAxisValue, 2) + '\n' +
          'Y-Axis: ' + cppAddon.multiplier(yAxisValue, 2) + '\n' +
          'Z-Axis: ' + cppAddon.multiplier(zAxisValue, 2));
}

// Keeps text boxes updated with current slider position using onclick event
// Takes the form, and the current axis being clicked on
function updateText(form, axisNum) {
    // Acts on appropriate text box/slider pair based on axisNum
    switch(axisNum) {
        case 1:
            form.xAxisText.value = form.xAxis.value;
            break;
        case 2:
            form.yAxisText.value = form.yAxis.value;
            break;
        case 3:
            form.zAxisText.value = form.zAxis.value;
            break;
    }
}