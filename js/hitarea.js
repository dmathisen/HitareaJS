(function($) {
    $.fn.hitarea = function(fn_enter, fn_leave, options) {
        var el = $(this);

        var settings = $.extend({
            // default settings
            radius: 20,
            shape: "square",
            repeat: true,
            endOn: "enter"
        }, options);

        // wrap element in hit area
        el.wrap('<div class="hitarea-wrapper"><div class="hitarea">');

        // get wrapper and apply
        var wrapper = el.closest('.hitarea-wrapper');
        var hitElem = $('.hitarea', wrapper);

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
            function() {
                fn_enter(el[0]);

                if (settings.repeat === false && settings.endOn === "enter")
                    hitElem.unbind('mouseenter mouseleave');
            },
            function() {
                fn_leave(el[0]);

                if (settings.repeat === false && settings.endOn === "leave")
                    hitElem.unbind('mouseenter mouseleave');
            }
        );
    };
}(jQuery));