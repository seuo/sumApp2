$(function(){
    $(function(){
        
        $('[data-target]').on('click',function(){

            var sLayer = $(this).data('target');
            $(sLayer).addClass('current');
        });

        $('[data-dismiss]').on('click',function(){

            var sLayer = $(this).data('dismiss');
            $(sLayer).removeClass('current');
        });


    // // formStage1 validation
    //     $('#tripPlanner').validate({
    //         rules:{
    //             firstname:{
    //                 required:true,
    //             },
    //         },
    //         messages:{
    //             firstname:{
    //                 required:'Please fill in your First Name',
    //             }

    //          },
    //     });

    });
    $(function(){


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


        $('#firstname').keyup(function() {
    
            // If value is not empty
            if ($(this).val().length < 2) {
            // Hide the elementx
                $('.nextButton').addClass('buttonHidden');
                $('.nextButton').removeClass('buttonShow');
            } else {
            // Otherwise show it
                $('.nextButton').removeClass('buttonHidden');
                $('.nextButton').addClass('buttonShow');
            }
        }).keyup();

        // if($(this).val()<11 && $("#smallCar").hasClass("buttonShow")){

        $('#numPeople,#numDays').click(function() {
    
            // If value is not empty
            if($("#numPeople").val()<2 && $("#numDays").val()<6 ){
            // Hide the elementx
                $('#motorbike').addClass('buttonShow');
                $('#motorbike').removeClass('buttonHidden');
            }
             else {
            // Otherwise show it
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
            
            // if($("#numPeople").val()>6){
            //     $('.vfo2').addClass('buttonShow');
            //     $('.vfo2').removeClass('buttonGone');
            // }
            //      else {
            //     $('.vfo2').removeClass('buttonShow');
            //     $('.vfo2').addClass('buttonGone');
            // }

            // if($("#numPeople").val()<8 && $("#numDays").val()<6 ){
            //     // Hide the elementx
            //         $('#motorbike2').addClass('buttonShow');
            //         $('#motorbike2').removeClass('buttonHidden');
            //     }
            //      else {
            //     // Otherwise show it
            //         $('#motorbike2').removeClass('buttonShow');
            //         $('#motorbike2').addClass('buttonHidden');
            //     }
            //     if($("#numPeople").val()<9 && $("#numDays").val()<11 ){
            //         $('#smallCar2').addClass('buttonShow');
            //         $('#smallCar2').removeClass('buttonHidden');
            //     }
            //          else {
            //         $('#smallCar2').removeClass('buttonShow');
            //         $('#smallCar2').addClass('buttonHidden');
            //     }
            //     if($("#numPeople").val()<12 && $("#numDays").val()<11 && $("#numDays").val()>2 ){
            //         $('#largeCar2').addClass('buttonShow');
            //         $('#largeCar2').removeClass('buttonHidden');
            //     }
            //          else {
            //         $('#largeCar2').removeClass('buttonShow');
            //         $('#largeCar2').addClass('buttonHidden');
            //     }
            //     if($("#numPeople").val()<13 && $("#numDays").val()>1){
            //         $('#motorHome2').addClass('buttonShow');
            //         $('#motorHome2').removeClass('buttonHidden');
            //     }
            //          else {
            //         $('#motorHome2').removeClass('buttonShow');
            //         $('#motorHome2').addClass('buttonHidden');
            //     }
        }).click();


    });
});