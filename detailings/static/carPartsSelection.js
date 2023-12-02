var exitClicked = false;

function frontWheelSelected() {
document.getElementById("frontWheelsCheck").checked = document.getElementById("frontWheelsCheck").checked == true ? false : true;
frontWheelsCheck();
}
function rearWheelSelected() {
document.getElementById("rearWheelsCheck").checked = document.getElementById("rearWheelsCheck").checked == true ? false : true;
rearWheelsCheck();
}
function frontWheelSelected2() {
document.getElementById("frontWheelsCheck").checked = document.getElementById("frontWheelsCheck").checked == true ? false : true;
frontWheelsCheck();
}
function rearWheelSelected2() {
document.getElementById("rearWheelsCheck").checked = document.getElementById("rearWheelsCheck").checked == true ? false : true;
rearWheelsCheck();
}
function frontWheelsCheck() {
document.getElementById("frontWheel").style.fill = getComputedStyle(document.getElementById("frontWheel")).getPropertyValue('fill') == 'rgb(0, 0, 128)' ? 'rgb(0, 0, 0)' : 'rgb(0, 0, 128)';
document.getElementById("frontWheel2").style.fill = getComputedStyle(document.getElementById("frontWheel")).getPropertyValue('fill');
}
function rearWheelsCheck() {
document.getElementById("rearWheel").style.fill = getComputedStyle(document.getElementById("rearWheel")).getPropertyValue('fill') == 'rgb(0, 0, 128)' ? 'rgb(0, 0, 0)' : 'rgb(0, 0, 128)';
document.getElementById("rearWheel2").style.fill = getComputedStyle(document.getElementById("rearWheel")).getPropertyValue('fill');
}

function leftSideBackWindowSelected() {
document.getElementById("leftSideBackWindowCheck").checked = document.getElementById("leftSideBackWindowCheck").checked == true ? false : true;
leftSideBackWindowCheck();
}

function leftSideBackWindowCheck() {
total();
document.getElementById("leftSideBackWindow").style.fill = getComputedStyle(document.getElementById("leftSideBackWindow")).getPropertyValue('fill') == 'rgb(0, 0, 128)' ? 'rgb(0, 0, 0)' : 'rgb(0, 0, 128)';
}

function leftSideFrontWindowSelected() {
document.getElementById("leftSideFrontWindowCheck").checked = document.getElementById("leftSideFrontWindowCheck").checked == true ? false : true;
leftSideFrontWindowCheck();
}

function leftSideFrontWindowCheck() {
total();
document.getElementById("leftSideFrontWindow").style.fill = getComputedStyle(document.getElementById("leftSideFrontWindow")).getPropertyValue('fill') == 'rgb(0, 0, 128)' ? 'rgb(0, 0, 0)' : 'rgb(0, 0, 128)';
}

function leftSideMiddleWindowSelected() {
document.getElementById("leftSideMiddleWindowCheck").checked = document.getElementById("leftSideMiddleWindowCheck").checked == true ? false : true;
leftSideMiddleWindowCheck();
}

function leftSideMiddleWindowCheck() {
total();
document.getElementById("leftSideMiddleWindow").style.fill = getComputedStyle(document.getElementById("leftSideMiddleWindow")).getPropertyValue('fill') == 'rgb(0, 0, 128)' ? 'rgb(0, 0, 0)' : 'rgb(0, 0, 128)';
}

function leftSideSelected() {
document.getElementById("leftSideCheck").checked = document.getElementById("leftSideCheck").checked == true ? false : true;
leftSideCheck();
}

function leftSideCheck() {
total();
document.getElementById("leftSide").style.fill = getComputedStyle(document.getElementById("leftSide")).getPropertyValue('fill') == 'rgb(0, 0, 128)' ? 'rgb(0, 0, 0)' : 'rgb(0, 0, 128)';
}

function rightSideBackWindowSelected() {
document.getElementById("rightSideBackWindowCheck").checked = document.getElementById("rightSideBackWindowCheck").checked == true ? false : true;
rightSideBackWindowCheck();
}

function rightSideBackWindowCheck() {
total();
document.getElementById("rightSideBackWindow").style.fill = getComputedStyle(document.getElementById("rightSideBackWindow")).getPropertyValue('fill') == 'rgb(0, 0, 128)' ? 'rgb(0, 0, 0)' : 'rgb(0, 0, 128)';
}

function rightSideFrontWindowSelected() {
document.getElementById("rightSideFrontWindowCheck").checked = document.getElementById("rightSideFrontWindowCheck").checked == true ? false : true;
rightSideFrontWindowCheck();
}

function rightSideFrontWindowCheck() {
console.log(document.getElementById("rightSideFrontWindow").style.fill);
total();
document.getElementById("rightSideFrontWindow").style.fill = getComputedStyle(document.getElementById("rightSideFrontWindow")).getPropertyValue('fill') == 'rgb(0, 0, 128)' ? 'rgb(0, 0, 0)' : 'rgb(0, 0, 128)';
}

function rightSideMiddleWindowSelected() {
document.getElementById("rightSideMiddleWindowCheck").checked = document.getElementById("rightSideMiddleWindowCheck").checked == true ? false : true;
rightSideMiddleWindowCheck();
}

function rightSideMiddleWindowCheck() {
total();
document.getElementById("rightSideMiddleWindow").style.fill = getComputedStyle(document.getElementById("rightSideMiddleWindow")).getPropertyValue('fill') == 'rgb(0, 0, 128)' ? 'rgb(0, 0, 0)' : 'rgb(0, 0, 128)';
}

function rightSideSelected() {
document.getElementById("rightSideCheck").checked = document.getElementById("rightSideCheck").checked == true ? false : true;
rightSideCheck();
}

function rightSideCheck() {
total();
document.getElementById("rightSide").style.fill = getComputedStyle(document.getElementById("rightSide")).getPropertyValue('fill') == 'rgb(0, 0, 128)' ? 'rgb(0, 0, 0)' : 'rgb(0, 0, 128)';
}

function frontBumperSelected() {
document.getElementById("frontBumperCheck").checked = document.getElementById("frontBumperCheck").checked == true ? false : true;
frontBumperCheck();
}

function frontBumperCheck() {
total();
document.getElementById("frontBumper").style.fill = getComputedStyle(document.getElementById("frontBumper")).getPropertyValue('fill') == 'rgb(0, 0, 128)' ? 'rgb(0, 0, 0)' : 'rgb(0, 0, 128)';
}

function rearBumperSelected() {
document.getElementById("rearBumperCheck").checked = document.getElementById("rearBumperCheck").checked == true ? false : true;
rearBumperCheck();
}

function rearBumperCheck() {
total();
document.getElementById("rearBumper").style.fill = getComputedStyle(document.getElementById("rearBumper")).getPropertyValue('fill') == 'rgb(0, 0, 128)' ? 'rgb(0, 0, 0)' : 'rgb(0, 0, 128)';
}

function roofFBSelected() {
document.getElementById("roofFBCheck").checked = document.getElementById("roofFBCheck").checked == true ? false : true;
roofFBCheck();
}

function roofFBCheck() {
total();
document.getElementById("roofFB").style.fill = getComputedStyle(document.getElementById("roofFB")).getPropertyValue('fill') == 'rgb(0, 0, 128)' ? 'rgb(0, 0, 0)' : 'rgb(0, 0, 128)';
}

function upperOpGlassWindowSelected() {
document.getElementById("upperOpGlassWindowCheck").checked = document.getElementById("upperOpGlassWindowCheck").checked == true ? false : true;
upperOpGlassWindowCheck();
}

function upperOpGlassWindowCheck() {
total();
document.getElementById("upperOpGlassWindow").style.fill = getComputedStyle(document.getElementById("upperOpGlassWindow")).getPropertyValue('fill') == 'rgb(0, 0, 128)' ? 'rgb(0, 0, 0)' : 'rgb(0, 0, 128)';
}

function luneBackGlassSelected() {
document.getElementById("luneBackGlassCheck").checked = document.getElementById("luneBackGlassCheck").checked == true ? false : true;
luneBackGlassCheck();
}

function luneBackGlassCheck() {
total();
document.getElementById("luneBackGlass").style.fill = getComputedStyle(document.getElementById("luneBackGlass")).getPropertyValue('fill') == 'rgb(0, 0, 128)' ? 'rgb(0, 0, 0)' : 'rgb(0, 0, 128)';
}

function exitClickedF(){
exitClicked = true;
}

function total() 
{
var form = document.getElementById("formT");
var tot = 0;
for (var i = 0; i < form.elements.length; i++) {
    if (form.elements[i].type == "checkbox") {
        if (form.elements[i].checked) 
        tot += Number(form.elements[i].value);
    }
}
document.getElementById("totalCheck").firstChild.data = "$ " + tot;
document.getElementById("hiddenVal").value = tot;
/*document.getElementById("totalCheck").innerText.replace("$","").trim()*/

}

window.onbeforeunload = function(evt) {
if(evt && !exitClicked) {
return 'Are you sure you want to leave?';
}
};