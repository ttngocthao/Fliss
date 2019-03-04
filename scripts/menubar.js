$(document).ready(function(){
    $('#menuIcon').on('click',function(){
        $(this).toggleClass('expand');
        $('#menuIcon span').toggleClass('expand')
        $('.menuBar-small .mainList').toggleClass('expand');
      })

    $('.classesIcon').on('click',function(){
        $(this).toggleClass('expand');
        $('.classesMenu').toggleClass('expand');
    })
})