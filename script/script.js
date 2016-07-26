$(document).ready(function(){
$(".slider").slick({

    arrows: false,
    autoplay: true,
    dots: true,
    customPaging : function(slider, i) {
        var thumb = $(slider.$slides[i]).data('thumb');
        return '<a><img src="'+thumb+'"></a>';
    },
});
});