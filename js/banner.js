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
    openSingleKeydate('#keydate_papers', '#a_papers');
    console.log('Welcome to CIKM 2019 website!')
 });