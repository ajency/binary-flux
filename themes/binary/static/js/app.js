$(document).ready(function(){

    if($(".select2-outline-dark").length){
        $(".select2-outline-dark").select2({
            minimumResultsForSearch: -1,
            containerCssClass: "select-out-dark-wrap",
            dropdownCssClass: "select-out-dark-result",
            allowClear: true
        });
    } 
    
    $('.side-menu-toggle').click(function () {
        $('html,body').addClass('overflow-hidden');
        $(".sidear-container").addClass('show');
    });

    $('.mobile-slide-in .close').click(function () {
        $('html,body').removeClass('overflow-hidden');
        $(".sidear-container").removeClass('show');
    });

    $('.openDefault').modal('show');

    $('.nav-lists li a').click(function() {
        $('.nav-lists li a').removeClass('active'); 
        $(this).addClass('active');
        $(this).parent().find('.sub-ul').slideToggle("");
        $(this).parent().find('.list-item-wrap').toggleClass("rotate-down");
    });

    $('.sub-ul li a').click(function() {
        $(this).parent().find('.submenu-ul').slideToggle("");
        $(this).parent().find('.list-item-wrap').toggleClass("rotate");
    });
});