function openSingleKeydate(id1, id2) {
    $('#keydate_papers').addClass('hidden');
    $('#keydate_workshops').addClass('hidden');
    $('#keydate_tutorials').addClass('hidden');
    $('#keydate_demos').addClass('hidden');

    $('#a_papers').removeClass('active');
    $('#a_workshops').removeClass('active');
    $('#a_tutorials').removeClass('active');
    $('#a_demos').removeClass('active');


    $(id1).removeClass('hidden');
    $(id2).addClass('active');
}

jQuery(document).ready(function($) {
    'use strict';

    function nextPicture() {
        var indicators_list = $('.carousel-indicators li');
        var current_index = indicators_list.index(indicators_list.filter('.active')), l = 5;
        if (current_index < 0) current_index = Math.floor(Math.random() * 5);
        
        indicators_list[(current_index+1)%l].click();
    }
    
    function _adjustOverflow(selector, start = 0, height = 300) {
        var s = $(selector),
            c = s.children(),
            i = start >= c.length ? 0 : start;
        
        c.addClass('hidden');
        for (; i < c.length; ++i) {
            var child = c.eq(i).removeClass('hidden');
            if (s.height() > height) {
                child.addClass('hidden');
                return i;
            }
        }
        return i;
    }
    var current_newslist_index = _adjustOverflow('#news .newslist')
    $('#news .right>a').on('click', function() {
        current_newslist_index = _adjustOverflow('#news .newslist', current_newslist_index);
    })

    openSingleKeydate('#keydate_papers', '#a_papers');
    
    var rand_index = Math.floor(Math.random() * 5);
    $('.carousel-indicators li').removeClass('active');
    $('.carousel .item').removeClass('active').on('click', nextPicture);
    $('.carousel-indicators li').eq(rand_index).addClass('active');
    $('.carousel .item').eq(rand_index).addClass('active');

    $('#myCarousel').css('min-height', $('#myCarousel').width()*106/320)
    $(window).resize(()=>{
        $('#myCarousel').css('min-height', $('#myCarousel').width()*106/320);
    })
    window.setInterval(nextPicture, 5000);
    console.log('Welcome to CIKM 2019 website!')
 });