$(document).ready(function () {
    $("#featuredblunt").owlCarousel({

        autoplay: true, //Set AutoPlay to 3 seconds
        items: 4,
        dots: true,
        autoplayTimeout: 2000,
        loop: true,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1

        },
        600: {
            items: 3
            
        },
        1000: {
            items: 4,
            loop: true,
            margin: 20
        }
    }

        
    });
    });
