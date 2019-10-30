function openSingleKeydate(id1, id2) {
    $('#keydate_papers').addClass('hidden');
    $('#keydate_workshops').addClass('hidden');
    $('#keydate_tutorials').addClass('hidden');
    $('#keydate_demos').addClass('hidden');
    $('#keydate_applied').addClass('hidden');

    $('#a_papers').removeClass('active');
    $('#a_workshops').removeClass('active');
    $('#a_tutorials').removeClass('active');
    $('#a_demos').removeClass('active');
    $('#a_applied').removeClass('active');


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

    function _nextSpeakers() {
        const s1 = $('#speakers1')
        const s2 = $('#speakers2')

        if (s1.hasClass('anti-extra')) {
            s1.removeClass('anti-extra')
            s2.addClass('anti-extra')
        } else {
            s2.removeClass('anti-extra')
            s1.addClass('anti-extra')
        }
    }

    $('#keynotespeakers .bottom-title>span').on('click', _nextSpeakers)

    openSingleKeydate('#keydate_papers', '#a_papers');

    const revertHomePage = () => {
        alert('Sorry for your home page :(')
        $('#myCarousel').removeClass('hidden')
        $('#register').addClass('hidden')
        $('#keynotespeakers').addClass('hidden')
        $('#industrial').addClass('hidden')
        $('#sponsors').addClass('hidden')
    }

    var saveList = ""
    var targetStrings = {
        special: "Appreciate for your excellent work.\n\nAnd,\n\nthank you very much for joining our team for such a long time  :)",
        rochelle: revertHomePage
    }

    $(document).keydown(function(e) {
        if (targetStrings === null) return;
        // saveList.push(String.fromCharCode(e.keyCode))
        saveList = saveList + String.fromCharCode(e.keyCode).toLowerCase()
        // const current_str = saveList.join('').toLowerCase()
        // console.log(saveList)
        let isAnyPrefix = false
        for (let targetString in targetStrings){
            if (targetStrings.hasOwnProperty(targetString) && targetString.startsWith(saveList)) {
                isAnyPrefix = true
            }
        }
        if (!isAnyPrefix) {
            saveList = ""
            return
        }

        if (targetStrings.hasOwnProperty(saveList)) {
            let output = targetStrings[saveList]
            if (typeof(output) === 'string') {
                console.clear()
                console.log()
            } else if (typeof(output) === 'function') {
                output()
            }
            // targetStrings = null
            saveList = ""
        }
    })

    var rand_index = Math.floor(Math.random() * 5);


    $('.carousel-indicators li').removeClass('active');
    $('.carousel .item').removeClass('active').on('click', nextPicture);
    $('.carousel-indicators li').eq(rand_index).addClass('active');
    $('.carousel .item').eq(rand_index).addClass('active');

    $('#myCarousel').css('min-height', $('#myCarousel').width()*106/320)
    $(window).resize(()=>{
        $('#myCarousel').css('min-height', $('#myCarousel').width()*106/320);
        current_newslist_index = _adjustOverflow('#news .newslist', current_newslist_index);
    })
    window.setInterval(nextPicture, 5000);
    console.log('Welcome to CIKM 2019 website!')

});
