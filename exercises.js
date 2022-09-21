$(document).ready(function() {
    console.log("Let's get ready to party with jQuery!");
})

$('article img').addClass('image-center');

const removeParagraph = $('article p').eq(5);
removeParagraph.remove();

$('h1').css('fontSize', '40px');

$('<li>This is my list item</li>').appendTo('ol');

$('aside ol').remove();

const asideTextAndMove = $('p').eq(0);
$("<aside>I'm sorry the list was there. It's gone now.</aside>").appendTo(asideTextAndMove);

// const red = $('.form-control').eq(0).val();
// const blue = $('.form-control').eq(1).val();
// const green = $('.form-control').eq(2).val();

$('.form-control').on('keyup blur change', function() {
    const red = $('.form-control').eq(0).val();
    const blue = $('.form-control').eq(1).val();
    const green = $('.form-control').eq(2).val();
    $('body').css('background-color', `rgb(${red},${blue},${green})`);
})

$('img').on('click', function() {
    $('img').remove()
});

