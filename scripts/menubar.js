$(document).ready(function(){
    // $('#menuIcon').click(function(){
    //     $('.menuBar-small').toggleClass('show');
    //     $(this).toggleClass('expand')
    // })
    // $('.menuBar-small ul').click(function(){
    //     $('.menuBar-small ul').toggleClass('expand');
    // })
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