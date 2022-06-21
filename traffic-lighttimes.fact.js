function theTrafficLights(){

let redlight ="";
let orangelight ="";
let greenlight = "";

function setlightType(trafficTime){

if(trafficTime === "stop"){
    return "stopLight"
}

if(trafficTime === "wait"){
    return 
}

if(trafficTime === "go"){
    return
}

}


  function setRedLightMes(){
      redlight = "Please Stop!!!" 
      return redlight 
}

    
    function setOrangeLightMes(){
        orangelight = "Wait a minute"
        return orangelight
       }
       

           function setGreenLightMes(){
            greenlight = "You may Go"
            return greenlight;
           
           }
           

  function setRedLightBack(){
    redbackground  = "stopLight" 
    return redbackground  
}

  
  function setOrangeLightBack(){
      orangebackground = "waitLight"
      return orangebackground 
     }
     

         function setGreenLightBack(){
          greenbackground  = "goLight"
          return greenbackground ;
         
         }
         
           

return{
    setlightType,
    setRedLightMes,
    setOrangeLightMes,
    setGreenLightMes,
    setRedLightBack,
    setOrangeLightBack,
    setGreenLightBack,
}

}



