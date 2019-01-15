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

function openMap() {

}

jQuery(document).ready(function($) {
    'use strict';

    $('.hover-item').css("display", "none")
    openSingleKeydate('#keydate_papers', '#a_papers');
    $('.map-button').hover(function() {
        $('.hover-item').css("display", "unset");
    }, function(){
        $('.hover-item').css("display", "none")
    })
 });