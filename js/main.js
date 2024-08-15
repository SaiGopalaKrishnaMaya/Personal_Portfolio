(function ($) {
    "use strict";

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
    
})(jQuery);



document.addEventListener("DOMContentLoaded", function() {
    // Function to handle showing and hiding overlays
    function handleOverlay(overlayId, action) {
        var overlay = document.getElementById(overlayId);
        if (action === 'show') {
            overlay.style.display = 'flex';
        } else if (action === 'hide') {
            overlay.style.display = 'none';
        }
    }

    // Add event listeners for each "Read More" button
    document.querySelectorAll('.read-more').forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            var targetOverlayId = this.getAttribute('data-target');
            handleOverlay(targetOverlayId, 'show');
        });
    });

    // Add event listeners for close buttons
    document.querySelectorAll('.overlay .close').forEach(function(closeBtn) {
        closeBtn.addEventListener('click', function() {
            var overlay = this.closest('.overlay');
            handleOverlay(overlay.id, 'hide');
        });
    });

    // Add event listener for clicking outside the overlay
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('overlay')) {
            handleOverlay(event.target.id, 'hide');
        }
    });
});

//<!-- JavaScript for popup message -->

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    fetch(this.action, {
        method: this.method,
        body: new FormData(this),
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            // Show custom success message
            alert("Thank you! Your form has been submitted successfully. We will get back to you shortly.");
            this.reset(); // Reset the form fields
        } else {
            // Handle any errors that occur
            alert("Oops! There was a problem with your submission. Please try again.");
        }
    }).catch(error => {
        // Handle any network errors
        alert("Oops! There was a problem with your submission. Please try again.");
    });
});



