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

        $('.link1').click( function() {
            if($(".layer1").hasClass("unfold")){
                $(".layer1").removeClass('unfold');
                $(".headerNav").toggleClass("navOpen");
            }
            else {
                $(".headerNav").toggleClass("navOpen");
            }
        } );


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


    // display button logic     

        $('[data-targetVehicle1]').on('click',function(){
            $('.b2').removeClass('nextButtonHidden2');
            if($('#Input-motorbike').val()=='motorbike') {
                $(".motorbikeClassGrp").addClass('radioButtonShow'); 
                $(".economyClassGrp").removeClass('radioButtonShow');
                $(".mediumClassGrp").removeClass('radioButtonShow'); 
                $(".motorHomeGrp").removeClass('radioButtonShow');      
        }

        });
        $('[data-targetVehicle2]').on('click',function(){
            $('.b2').removeClass('nextButtonHidden2');
            if($('#Input-smallCar').val()=='smallCar') {
                $(".economyClassGrp").addClass('radioButtonShow'); 
                $(".motorbikeClassGrp").removeClass('radioButtonShow');
                $(".mediumClassGrp").removeClass('radioButtonShow'); 
                $(".motorHomeGrp").removeClass('radioButtonShow');  
        }

        });
        $('[data-targetVehicle3]').on('click',function(){
            $('.b2').removeClass('nextButtonHidden2');
            if($('#Input-largeCar').val()=='largeCar') {
                $(".mediumClassGrp").addClass('radioButtonShow'); 
                $(".economyClassGrp").removeClass('radioButtonShow');
                $(".motorbikeClassGrp").removeClass('radioButtonShow'); 
                $(".motorHomeGrp").removeClass('radioButtonShow'); 
        }

        });
        $('[data-targetVehicle4]').on('click',function(){
            $('.b2').removeClass('nextButtonHidden2');
            if($('#Input-motorHome').val()=='motorHome') {
                $(".motorHomeGrp").addClass('radioButtonShow'); 
                $(".economyClassGrp").removeClass('radioButtonShow');
                $(".mediumClassGrp").removeClass('radioButtonShow'); 
                $(".motorbikeClassGrp").removeClass('radioButtonShow'); 
            
            }
        });

        $('[data-targetNext]').on('click',function(){
            $('.b1').removeClass('nextButtonHidden');
        });


        // step navigation cleanup

        $('[data-clearstage1]').on('click',function(){
            if ($(".transportForm").hasClass('tripStage1')) {
                $(".transportForm").removeClass('tripStage1');
            }
            if ($(".transportForm").hasClass('tripStage2')) {
                $(".transportForm").removeClass('tripStage2');
            }
            if ($(".transportForm").hasClass('tripStage3')) {
                $(".transportForm").removeClass('tripStage3');
            }

        });
        $('[data-clearstage2]').on('click',function(){
            if ($(".transportForm").hasClass('tripStage2')) {
                $(".transportForm").removeClass('tripStage2');
            }
            if ($(".transportForm").hasClass('tripStage3')) {
                $(".transportForm").removeClass('tripStage3');
            }
        });

        $('[data-clearstage3]').on('click',function(){
            if ($(".transportForm").hasClass('tripStage3')) {
                $(".transportForm").removeClass('tripStage3');
            }
        });

        // full name input for next

        $('#firstname').keyup(function() {
            if ($(this).val().length < 2) {
                $('.b1').addClass('nextButtonHidden');
                $('.b1').removeClass('buttonShow');
            } else {
                $('.b1').removeClass('nextButtonHidden');
                $('.b1').addClass('buttonShow');
            }
        }).keyup();



        $('#numPeople,#numDays').click(function() {

            if($("#numPeople").val()<2 && $("#numDays").val()<6 ){
                $('#motorbike').addClass('buttonShow');
                $('#motorbike').removeClass('buttonHidden');
            }
             else {
                $('#motorbike').removeClass('buttonShow');
                $('#motorbike').addClass('buttonHidden');
            }
            if($("#numPeople").val()<3 && $("#numDays").val()<11 ){
                $('#smallCar').addClass('buttonShow');
                $('#smallCar').removeClass('buttonHidden');
            }
            else {
                $('#smallCar').removeClass('buttonShow');
                $('#smallCar').addClass('buttonHidden');
            }
            if($("#numPeople").val()<6 && $("#numDays").val()<11 && $("#numDays").val()>2 ){
                $('#largeCar').addClass('buttonShow');
                $('#largeCar').removeClass('buttonHidden');
            }
            else {
                $('#largeCar').removeClass('buttonShow');
                $('#largeCar').addClass('buttonHidden');
            }
            if($("#numPeople").val()>1 && $("#numDays").val()>1){
                $('#motorHome').addClass('buttonShow');
                $('#motorHome').removeClass('buttonHidden');
            }
            else {
                $('#motorHome').removeClass('buttonShow');
                $('#motorHome').addClass('buttonHidden');
            }
            
        }).click();
    
});