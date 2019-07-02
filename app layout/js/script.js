$(function(){

    // open & close menu
        $('[data-target]').on('click',function(){

            var sLayer = $(this).data('target');
            $(sLayer).addClass('unfold');
        });

        $('[data-dismiss]').on('click',function(){

            var sLayer = $(this).data('dismiss');
            $(sLayer).removeClass('unfold');
        });


  // Home & close menu
        $('.menuButton').click( function() {
            $(".headerNav").toggleClass("navOpen");
            
        });

        $('[data-navHome]').click( function() {
            var sNav = $(this).data('navHome');
            $(".headerNav").toggleClass("navOpen");
            
            if($(".layerMain").siblings().hasClass("unfold")){
                $(".layerMain").siblings().removeClass("unfold");
            }
        });

        
        // nav1 & close menu
        $('[data-nav1]').on('click',function(){
            var sNav = $(this).data('nav1');
            $(sNav).addClass('unfold');
            $(".headerNav").toggleClass("navOpen");
            
            if($(sNav).siblings().hasClass("unfold")){
                $(sNav).siblings().removeClass("unfold");
            }
        });

        // nav2 & close menu
        $('[data-nav2]').on('click',function(){
            var sNav = $(this).data('nav2');
            $(sNav).addClass('unfold');
            $(".headerNav").toggleClass("navOpen");

            if($(sNav).siblings().hasClass("unfold")){
                $(sNav).siblings().removeClass("unfold");
            }
        });

        // nav2 & close menu
        $('[data-nav3]').on('click',function(){
            var sNav = $(this).data('nav3');
            $(sNav).addClass('unfold');
            $(".headerNav").toggleClass("navOpen");

            if($(sNav).siblings().hasClass("unfold")){
                $(sNav).siblings().removeClass("unfold");
            }
        });

        // nav4 & close menu
        $('[data-nav4]').on('click',function(){
            var sNav = $(this).data('nav4');
            $(sNav).addClass('unfold');
            $(".headerNav").toggleClass("navOpen");

            if($(sNav).siblings().hasClass("unfold")){
                $(sNav).siblings().removeClass("unfold");
            }
        });
                
        
        
        
// Proceed through stages

        $('[data-targetstage1]').on('click',function(){
            var sForm = $(this).data('targetstage1');
            $(sForm).addClass('tripStage1');
        });

        $('[data-targetstage2]').on('click',function(){
            var sForm = $(this).data('targetstage2');
            $(sForm).addClass('tripStage2');
        });

        $('[data-targetstage3]').on('click',function(){
            var sForm = $(this).data('targetstage3');
            $(sForm).addClass('tripStage3');
        });

        $('[data-targetstage4]').on('click',function(){
            var sForm = $(this).data('targetstage4');
            $(sForm).addClass('tripStage4');
        });

        $('[data-targetstage5]').on('click',function(){
            var sForm = $(this).data('targetstage5');
            $(sForm).addClass('tripStage5');
        });


    // display button logic     

        $('[data-targetVehicle1]').on('click',function(){
            $('.b2').removeClass('nextButtonHidden2');
            if($('#Input-motorbike').val()=='109') {
                $(".motorbikeClassGrp").addClass('radioButtonShow'); 
                $(".economyClassGrp").removeClass('radioButtonShow');
                $(".mediumClassGrp").removeClass('radioButtonShow'); 
                $(".motorHomeGrp").removeClass('radioButtonShow');      
        }

        });
        $('[data-targetVehicle2]').on('click',function(){
            $('.b2').removeClass('nextButtonHidden2');
            if($('#Input-smallCar').val()=='129') {
                $(".economyClassGrp").addClass('radioButtonShow'); 
                $(".motorbikeClassGrp").removeClass('radioButtonShow');
                $(".mediumClassGrp").removeClass('radioButtonShow'); 
                $(".motorHomeGrp").removeClass('radioButtonShow');  
        }

        });
        $('[data-targetVehicle3]').on('click',function(){
            $('.b2').removeClass('nextButtonHidden2');
            if($('#Input-largeCar').val()=='144') {
                $(".mediumClassGrp").addClass('radioButtonShow'); 
                $(".economyClassGrp").removeClass('radioButtonShow');
                $(".motorbikeClassGrp").removeClass('radioButtonShow'); 
                $(".motorHomeGrp").removeClass('radioButtonShow'); 
        }

        });
        $('[data-targetVehicle4]').on('click',function(){
            $('.b2').removeClass('nextButtonHidden2');
            if($('#Input-motorHome').val()=='200') {
                $(".motorHomeGrp").addClass('radioButtonShow'); 
                $(".economyClassGrp").removeClass('radioButtonShow');
                $(".mediumClassGrp").removeClass('radioButtonShow'); 
                $(".motorbikeClassGrp").removeClass('radioButtonShow'); 
            
            }
        });


        // step progress navigation cleanup

        $('[data-clearstage1]').on('click',function(){
            $('.numberPeople').prop('checked', false);
            $('.vehicle').prop('checked', false);
            $('.b1').addClass('nextButtonHidden');
            $('.b2').addClass('nextButtonHidden2');

            if ($(".transportForm").hasClass('tripStage1')) {
                $(".transportForm").removeClass('tripStage1');
            }
            if ($(".transportForm").hasClass('tripStage2')) {
                $(".transportForm").removeClass('tripStage2');
            }
            if ($(".transportForm").hasClass('tripStage3')) {
                $(".transportForm").removeClass('tripStage3');
            }
            if ($(".form4").hasClass('moveTo5')) {
                $(".form4").removeClass('moveTo5');
            }

        });

        $('[data-clearstage2]').on('click',function(){
            if ($(".transportForm").hasClass('tripStage2')) {
                $(".transportForm").removeClass('tripStage2');
            }
            if ($(".transportForm").hasClass('tripStage3')) {
                $(".transportForm").removeClass('tripStage3');
            }
            if ($(".form4").hasClass('moveTo5')) {
                $(".form4").removeClass('moveTo5');
            }
        });

        $('[data-clearstage3]').on('click',function(){
            if ($(".transportForm").hasClass('tripStage3')) {
                $(".transportForm").removeClass('tripStage3');
            }
            if ($(".form4").hasClass('moveTo5')) {
                $(".form4").removeClass('moveTo5');
            }
        });

        $('[data-clearstage4]').on('click',function(){
            if ($(".transportForm").hasClass('tripStage4')) {
                $(".transportForm").removeClass('tripStage4');
            }
        });

        $('[data-clearstage5]').on('click',function(){
            if ($(".transportForm").hasClass('tripStage5')) {
                $(".transportForm").removeClass('tripStage5');
            }
        });



     
     

    $('.form4').click(function() {
        var sVclass = $('input[name=vehicleClass]:checked').val(); 
        if (sVclass>0){
            $('.b3').removeClass('nextButtonHidden3');
        }
    });

    $('[data-bookingvehicle]').on('click',function(){
        var sForm4 = $(this).data('bookingvehicle');
        $(sForm4).addClass('moveTo5');
    });

    $(function() {

        // Only for example - catch form data when the form is submitted
        $("#example-form").submit(function(e) {
    
          // Stop form submission
          e.preventDefault();
    
          // Read form data
          var data = $("#example-form :input").serializeArray();
    
          var displayText = "";
    
          // For each input field...
          for (var i = 0; i < data.length; i++) {
            var fieldData = data[i];
            var name = fieldData["name"];
            var value = fieldData["value"];
    
            displayText += name + " : " + value + "\n";
          }
    
          alert(displayText);
        });
    
      });

});