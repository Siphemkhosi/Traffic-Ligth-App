var theDom = theTrafficLights();
const turnLightButElem = document.querySelector(".Traffic");
const lightCommandElem = document.querySelector(".trafficTime");

const redLightPertElem = document.querySelector(".redMessage");

const orangeLightPertElem = document.querySelector(".orangeMessage");

const greenLightPertElem = document.querySelector(".greenMessage");

turnLightButElem.addEventListener("click", function () {
  if (lightCommandElem.value === "stop") {
    //   redLightPertElem.classList.add(".stopLight")
    redLightPertElem.innerHTML = theDom.setRedLightMes();
    redLightPertElem.classList.add(theDom.setRedLightBack());
    orangeLightPertElem.classList.remove(theDom.setOrangeLightBack());
    greenLightPertElem.classList.remove(theDom.setGreenLightBack());


    orangeLightPertElem.innerHTML = "robot"
    greenLightPertElem.innerHTML = "robot"
  }

  if (lightCommandElem.value === "wait") {
    orangeLightPertElem.innerHTML = theDom.setOrangeLightMes();
    orangeLightPertElem.classList.add(theDom.setOrangeLightBack());
    redLightPertElem.classList.remove(theDom.setRedLightBack());
    greenLightPertElem.classList.remove(theDom.setGreenLightBack());
    

    redLightPertElem.innerHTML = "robot"
    greenLightPertElem.innerHTML = "robot"
  }

  if (lightCommandElem.value === "go") {
    greenLightPertElem.innerHTML = theDom.setGreenLightMes();
    greenLightPertElem.classList.add(theDom.setGreenLightBack());
    orangeLightPertElem.classList.remove(theDom.setOrangeLightBack());
    redLightPertElem.classList.remove(theDom.setRedLightBack());

    orangeLightPertElem.innerHTML = "robot"
    redLightPertElem.innerHTML = "robot"
  }
});

// const buttonElem = document.querySelector(".Traffic");
// const lightCommandElem = document.querySelector(".trafficTime");

// function trafficLightTimes(){
//     const redLightPertElem = document.querySelector(".redMessage");

// const orangeLightPertElem = document.querySelector(".orangeMessage");

// const greenLightPertElem = document.querySelector(".greenMessage");

//         let lightString =  lightCommandElem.value;

//         redLightPertElem.innerHTML=lightType(lightString);
//         orangeLightPertElem.innerHTML=lightType(lightString);
//         greenLightPertElem.innerHTML=lightType(lightString);
// }
// buttonElem.addEventListener('click', trafficLightTimes);
// let lightOFTraffic = lightType();
// const buttonElem = document.querySelector("Traffic");
// buttonElem.addEventListener("click", function(){
//      lightString =  document.querySelector("trafficTime").value;
//      lightOFTraffic.lightString;
// })
