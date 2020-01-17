$( document ).ready(function() {

    swiperMentors = new Swiper ('.swiper-mentors', {
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.mentors-nav-next',
            prevEl: '.mentors-nav-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

    });

    swiperPartners = new Swiper ('.swiper-partners', {
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.partners-nav-next',
            prevEl: '.partners-nav-prev',
        },
        scrollbar: {
            el: '.custom-scrollbar',
            draggable: true,
        },
        breakpoints: {
            320: {
                scrollbar: {
                    dragSize: 16,
                },
            },
            1440: {
                scrollbar: {
                    dragSize: 30,
                },
            }
        }
    });

    (function() {
        'use strict';
        window.addEventListener('load', function() {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function(form) {
                form.addEventListener('submit', function(event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                }, false);
            });
        }, false);
    })();

    $('.form-control').on('input', function() {
        $(this).toggleClass('empty', this.value.length === 0);
    }).trigger('input');

});