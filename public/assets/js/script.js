let antenna = document.querySelectorAll(".antenna_top");
let powerbutton = document.querySelector("#powerbutton");
powerbutton.addEventListener("click", powerOnOff);

function powerOnOff(e){
   for (i = 0; i < antenna.length; i++){
       antenna[i].classList.toggle("antenna_active");
   }
   checkPower();
};

function checkPower(){
    if (antenna[i].classList.contains("antenna_active")){
        socket.emit('peripheralsStatus', "ON");
    } else {
        console.log("Power Off")
    }
};