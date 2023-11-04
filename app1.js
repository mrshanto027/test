$(document).ready(function(){
    // $('.hide').click(function() {
    //     $('.box').hide(500);
    // })

    // $('.show').click(function(){
    //     $('.box').show(500);
    // })

    // $('.toggle').click(function(){
    //     $('.box').toggle(500);
    // })

    // $('.see_more').click(function() {
    //     $('.hidden_content').show(250)
    //     // $('.see_more').toggleClass('active')
    //     if($('.see_more').hasClass('active')) {
    //         $('.see_less').removeClass('active')
    //     } else {
    //         $('.see_less').addClass('active')
    //     }
    // })

    // $('.see_less').click(function() {
    //     $('.hidden_content').hide(250)
    //     // location.reload();
    //     if($('.see_less').hasClass('active')) {
    //         $('.see_more').removeClass('active')
    //     } else {
    //         $('.see_more').addClass('active')
    //     }
    // })

    $('.menu_active').click(function() {
        $('.dropmenu').slideToggle()
    })
    
    $('.toggle_btn').click(function() {
        $('.menu').slideToggle()
    })
});
