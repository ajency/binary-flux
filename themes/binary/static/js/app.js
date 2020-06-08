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
        $(this).parent().find('.navlistwrap').toggleClass("rotate");
    });

    $('.sub-ul .list-item a').click(function() {
        $(this).parent().find('.submenu-ul').slideToggle("");
        $(this).parent().find('.list-item-wrap').toggleClass("rotate");
    });

    $(window).on("scroll", function() {
        if($(window).scrollTop() > 0) {
            $(".sidebar ").addClass("sidebar-scroll");
        } else {
            $(".sidebar ").removeClass("sidebar-scroll");
        }
    });
    
    $('#avatar').bind('change', function () {
        var filename = $("#avatar").val();
        if (/^\s*$/.test(filename)) {
          $("#noFile").text("No file chosen..."); 
        }
        else {
          $("#noFile").text(filename.replace("C:\\fakepath\\", "")); 
        }
    });

    $('.front-slider').slick({
        slidesToScroll: 1,
        arrows: true,
      	dots: false,
      	infinite: true,
      	speed: 1000,
        autoplaySpeed: 3000,
      	fade: true,
        autoplay: true,
        cssEase: 'linear',  
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',  
        nextArrow: '<button type="button" class="slick-next"></button>'
    });
    

    var $carousel = $('.dashboard-slider');

    var settings = {
        dots: false,
        arrows: false,
        slide: '.slick-slideshow__slide',
        slidesToShow: 4,
        centerMode: true,
        centerPadding: '30px',
        arrows: true,
        infinite: true,
        cssEase: 'linear', 
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [
        {
            breakpoint: 1290,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            }
        },
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            }
        },
        {
            breakpoint: 991,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2
            }
        },
        {
            breakpoint: 575,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
    ]};

    function setSlideVisibility() {
        var visibleSlides = $carousel.find('.slick-slideshow__slide[aria-hidden="false"]');
        $(visibleSlides).each(function() {
            $(this).css('opacity', 1);
        });
        $(visibleSlides).first().prev().css('opacity', 1);
    }

    $carousel.slick(settings);
    $carousel.slick('slickGoTo', 1);
    setSlideVisibility();

    $carousel.on('afterChange', function() {
        setSlideVisibility();
    });

    $('input[type=checkbox]').on('change', function() {
        var div = $(this).closest('tr');
        $(this).is(":checked") ? div.addClass("selected") : div.removeClass("selected");
    });

    $('input[type=checkbox]').on('change', function() {
       $(".btnBlock").toggleClass('d-none')
    });

    $('.modal-content').on('shown.bs.modal', function () {
      $("#myDropdown").removeClass('show')
    })

    window.onclick = function(event) {
        var dropdrown = document.getElementById("myDropdown");
        var dropdrown1 = document.getElementById("myDropdownRole");
        var dropdrown2 = document.getElementById("myDropdownRoles");
        var dropdrown3 = document.getElementById("myDropdownGroup");
        var dropdrown4 = document.getElementById("myDropdownStatus");
        var role = document.getElementById("role");
        var role1 = document.getElementById("roles");
        var userrole = document.getElementById("u-roles");
        var addGroup = document.getElementById("addGroup");
        var status = document.getElementById("status");
        if (event.target != dropdrown && $(event.target).attr('id') != $(role).attr('id') && !dropdrown.contains(event.target)) {
            $("#myDropdown").removeClass("show");
        }
        if (event.target != dropdrown1 && $(event.target).attr('id') != $(role1).attr('id') && !dropdrown1.contains(event.target)) {
            $("#myDropdownRole").removeClass("show");
        }
        if (event.target != dropdrown2 && $(event.target).attr('id') != $(userrole).attr('id') && !dropdrown2.contains(event.target)) {
            $("#myDropdownRoles").removeClass("show");
        }
        if (event.target != dropdrown3 && $(event.target).attr('id') != $(addGroup).attr('id') && !dropdrown3.contains(event.target)) {
            $("#myDropdownGroup").removeClass("show-group");
        }
        if (event.target != dropdrown4 && $(event.target).attr('id') != $(status).attr('id') && !dropdrown4.contains(event.target)) {
            $("#myDropdownStatus").removeClass("show-status");
        }
    }

    // particlesJS("particles-js", {
    //     "particles": {
    //         "number": {
    //           "value": 150,
    //           "density": {
    //             "enable": true,
    //             "value_area": 800
    //           }
    //         },
    //         "color": {
    //           "value": "#ffffff"
    //         },
    //         "shape": {
    //           "type": "circle",
    //           "stroke": {
    //             "width": 0,
    //             "color": "#000000"
    //           },
    //           "polygon": {
    //             "nb_sides": 5
    //           },
    //           "image": {
    //             "src": "img/github.svg",
    //             "width": 100,
    //             "height": 100
    //           }
    //         },
    //         "opacity": {
    //           "value": 0.5,
    //           "random": false,
    //           "anim": {
    //             "enable": false,
    //             "speed": 1,
    //             "opacity_min": 0.1,
    //             "sync": false
    //           }
    //         },
    //         "size": {
    //           "value": 3,
    //           "random": true,
    //           "anim": {
    //             "enable": false,
    //             "speed": 40,
    //             "size_min": 0.1,
    //             "sync": false
    //           }
    //         },
    //         "line_linked": {
    //           "enable": true,
    //           "distance": 150,
    //           "color": "#ffffff",
    //           "opacity": 0.4,
    //           "width": 1
    //         },
    //         "move": {
    //           "enable": true,
    //           "speed": 6,
    //           "direction": "none",
    //           "random": false,
    //           "straight": false,
    //           "out_mode": "out",
    //           "bounce": false,
    //           "attract": {
    //             "enable": false,
    //             "rotateX": 600,
    //             "rotateY": 1200
    //           }
    //         }
    //       },
    //       "interactivity": {
    //         "detect_on": "canvas",
    //         "events": {
    //           "onhover": {
    //             "enable": false,
    //             "mode": "repulse"
    //           },
    //           "onclick": {
    //             "enable": true,
    //             "mode": "push"
    //           },
    //           "resize": true
    //         },
    //         "modes": {
    //           "grab": {
    //             "distance": 400,
    //             "line_linked": {
    //               "opacity": 1
    //             }
    //           },
    //           "bubble": {
    //             "distance": 400,
    //             "size": 40,
    //             "duration": 2,
    //             "opacity": 8,
    //             "speed": 3
    //           },
    //           "repulse": {
    //             "distance": 200,
    //             "duration": 0.4
    //           },
    //           "push": {
    //             "particles_nb": 4
    //           },
    //           "remove": {
    //             "particles_nb": 2
    //           }
    //         }
    //       },
    //     "retina_detect": true
    // });

    // particlesJS("particles-js-bottom", {
    //     "particles": {
    //         "number": {
    //           "value": 120,
    //           "density": {
    //             "enable": true,
    //             "value_area": 800
    //           }
    //         },
    //         "color": {
    //           "value": "#ffffff"
    //         },
    //         "shape": {
    //           "type": "circle",
    //           "stroke": {
    //             "width": 0,
    //             "color": "#000000"
    //           },
    //           "polygon": {
    //             "nb_sides": 5
    //           },
    //           "image": {
    //             "src": "img/github.svg",
    //             "width": 100,
    //             "height": 100
    //           }
    //         },
    //         "opacity": {
    //           "value": 0.5,
    //           "random": false,
    //           "anim": {
    //             "enable": false,
    //             "speed": 1,
    //             "opacity_min": 0.1,
    //             "sync": false
    //           }
    //         },
    //         "size": {
    //           "value": 3,
    //           "random": true,
    //           "anim": {
    //             "enable": false,
    //             "speed": 40,
    //             "size_min": 0.1,
    //             "sync": false
    //           }
    //         },
    //         "line_linked": {
    //           "enable": true,
    //           "distance": 150,
    //           "color": "#ffffff",
    //           "opacity": 0.4,
    //           "width": 1
    //         },
    //         "move": {
    //           "enable": true,
    //           "speed": 6,
    //           "direction": "none",
    //           "random": false,
    //           "straight": false,
    //           "out_mode": "out",
    //           "bounce": false,
    //           "attract": {
    //             "enable": false,
    //             "rotateX": 600,
    //             "rotateY": 1200
    //           }
    //         }
    //       },
    //       "interactivity": {
    //         "detect_on": "canvas",
    //         "events": {
    //           "onhover": {
    //             "enable": false,
    //             "mode": "repulse"
    //           },
    //           "onclick": {
    //             "enable": true,
    //             "mode": "push"
    //           },
    //           "resize": true
    //         },
    //         "modes": {
    //           "grab": {
    //             "distance": 400,
    //             "line_linked": {
    //               "opacity": 1
    //             }
    //           },
    //           "bubble": {
    //             "distance": 400,
    //             "size": 40,
    //             "duration": 2,
    //             "opacity": 8,
    //             "speed": 3
    //           },
    //           "repulse": {
    //             "distance": 200,
    //             "duration": 0.4
    //           },
    //           "push": {
    //             "particles_nb": 4
    //           },
    //           "remove": {
    //             "particles_nb": 2
    //           }
    //         }
    //       },
    //     "retina_detect": true
    // });

});

