describe("The test for the traffic light function", function(){
    it("should set a Stop message at traffic light ", function() { 
        let traffic = theTrafficLights();
        

        assert.equal("Please Stop!!!", traffic.setlightType("Stop"))
    });


    it("should set a wait message at traffic light ", function() {
        let traffic = theTrafficLights();
      
       assert.equal("Wait a minute", traffic.setlightType("Wait"))
    });


    it("should set go message at traffic light ", function() {
        let traffic = theTrafficLights();
   

        assert.equal("You may Go", traffic.setlightType("Go"))
    });

    describe("use set values", function(){

        it("should return message 'Please Stop!!! ", function() {
            let traffic = theTrafficLights();
            traffic.setlightType("Stop")

            traffic.setRedLightMes()
    
            assert.equal("Stop", traffic.getRedLightMes())
        });


        it("should return message 'Please Stop!!! ", function() {
            let traffic = theTrafficLights();
            traffic.setlightType("Wait")

            traffic.setOrangeLightMes()
    
            assert.equal("Wait", traffic.getOrangeLightMes())
        });

        it("should return message 'Please Stop!!! ", function() {
            let traffic = theTrafficLights();
            traffic.setlightType("Go")

            traffic.setGreenLightMes()
    
            assert.equal("Go", traffic.getGreenLightMes())
        });



});







});

