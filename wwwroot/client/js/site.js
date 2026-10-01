// Script riêng của dự án (nút tăng/giảm số lượng dùng chung cho Chi tiết SP và Giỏ hàng)
(function ($) {
    'use strict';

    function getInput(el) {
        return $(el).closest('.quantity').find('.qty-text');
    }

    $(document).on('click', '.quantity .qty-plus', function (e) {
        e.preventDefault();
        var input = getInput(this);
        var max = parseInt(input.attr('max'), 10) || 99;
        var value = parseInt(input.val(), 10) || 1;
        if (value < max) input.val(value + 1);
    });

    $(document).on('click', '.quantity .qty-minus', function (e) {
        e.preventDefault();
        var input = getInput(this);
        var min = parseInt(input.attr('min'), 10) || 1;
        var value = parseInt(input.val(), 10) || 1;
        if (value > min) input.val(value - 1);
    });
})(jQuery);
