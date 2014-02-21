(function($) {
    $.fn.hitarea = function(fn_enter, fn_leave, options) {
        var el = $(this); // targetted element

        var settings = $.extend({
            // default settings
            radius: 20,
            shape: "square",
            repeat: true,
            endOn: "enter"
        }, options);

        // wrap element in hitarea tags
        el.wrap('<div class="hitarea-wrapper"><div class="hitarea">');

        // get parent wrapper and use it as hitElem's context
        // this allows for targeting multiple hitaera elements without collision
        var context = el.closest('.hitarea-wrapper');
        var hitElem = $('.hitarea', context);

        // apply correct positioning to hitElem
        hitElem.css({
            'width': el.outerWidth(),
            'height': el.outerHeight(),
            'padding': settings.radius,
            'margin-top': -(settings.radius),
            'margin-right': -(settings.radius),
            'margin-bottom': -(settings.radius),
            'margin-left': -(settings.radius)
        });

        if (settings.shape === "circle")
            hitElem.css('border-radius', '50%');


        hitElem.hover(
            // mouse enter
            function() {
                fn_enter(el[0]); // trigger enter function passing the element as the only parameter

                if (settings.repeat === false && settings.endOn === "enter")
                    hitElem.unbind('mouseenter mouseleave');
            },
            // mouse leave
            function() {
                fn_leave(el[0]); // trigger leave function passing the element as the only parameter

                if (settings.repeat === false && settings.endOn === "leave")
                    hitElem.unbind('mouseenter mouseleave');
            }
        );
    };
}(jQuery));