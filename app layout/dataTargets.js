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


        $(document).ready(function(){

            var picker = new Lightpick({ field: document.getElementById('datepicker'),
            singleDate: false,
            repick: true,
            selectForward: true,
            minDays: 1,
            maxDays: 15,
            onSelect: function(start, end){
            var str = '';
            str += start ? start.format('Do MMMM YYYY') + ' to ' : '';
            str += end ? end.format('Do MMMM YYYY') : '...';
            document.getElementById('daysTravel').innerHTML = str;

            var daysOrig = 1;
            var now = moment(start); //
            var end = moment(end); // 
            var duration = moment.duration(end.diff(now));
            var daysNum = duration.asDays() + daysOrig;
            document.getElementById('daysTravelling').innerHTML = daysNum;
                        if (daysNum>0 ){
                $('.formPeeps').removeClass('formboxHidden');
            }
            }

        });


            $('.form1').click(function() {
                var sPeeps = $('input[name=numberPeople]:checked').val(); 
                var sDays = document.getElementById("daysTravelling").innerHTML;
            
            console.log(sPeeps);
            console.log(sDays);

            if (sPeeps<2 && sDays<6 ){
                $('#motorbike').addClass('buttonShow');
                $('#motorbike').removeClass('buttonHidden');
            }
             else {
                $('#motorbike').removeClass('buttonShow');
                $('#motorbike').addClass('buttonHidden');
            }
            if (sPeeps<3 && sDays<11 ){
                $('#smallCar').addClass('buttonShow');
                $('#smallCar').removeClass('buttonHidden');
            }
            else {
                $('#smallCar').removeClass('buttonShow');
                $('#smallCar').addClass('buttonHidden');
            }
            if (sPeeps<6 && sDays<11 && sDays>2 ){
                $('#largeCar').addClass('buttonShow');
                $('#largeCar').removeClass('buttonHidden');
            }
            else {
                $('#largeCar').removeClass('buttonShow');
                $('#largeCar').addClass('buttonHidden');
            }
            if (sPeeps>1 && sDays>1){
                $('#motorHome').addClass('buttonShow');
                $('#motorHome').removeClass('buttonHidden');
            }
            else {
                $('#motorHome').removeClass('buttonShow');
                $('#motorHome').addClass('buttonHidden');
            }
            if (sDays>0 ){
                $('.formPeeps').removeClass('formboxHidden');
            }
            if (sPeeps>0 && sDays>0 ){
                $('.b1').removeClass('nextButtonHidden');
            }

        }).click();
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

});