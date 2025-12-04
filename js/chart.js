$(function() {
$('.chart').easyPieChart({
    easing: 'easeOutBounce',
	barColor:'#03CC85',
    onStep: function(from, to, percent) {
        $(this.el).find('.percent').text(Math.round(percent));
    }
});
var chart = window.chart = $('.chart').data('easyPieChart');
});