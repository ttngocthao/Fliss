$('.event-read-btn').on('click',function(){
//    console.log($(this).parents().next('.event-detail').html())
$(this).parents().next('.event-detail').toggleClass('expand');
$(this).find('.fas').toggleClass('rotate');
})