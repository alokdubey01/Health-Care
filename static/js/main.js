// hide bottom nav on scroll
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("side_nav").style.display = "none";
        document.getElementById("logo").style.height = "12px";
    } else {
        document.getElementById("side_nav").style.display = "inline";
    }
}

$(function () {
    // hide comments
    $('.hideComments').on('click', function () {
        var $btn = $(this),
            $parent = $btn.closest('.panel-body'),
            $comments = $parent.find('.comment');
        if (!$btn.hasClass('showComments')) {
            $comments.fadeOut(250);
            $btn.addClass('showComments').text('Show Comments');
        } else if ($btn.hasClass('showComments')) {
            $comments.fadeIn(250);
            $btn.removeClass('showComments').text('Hide Comments');
        }
    });

    // css panels
    $('.css-row').on('click', 'button[data-toggle="collapse"]', function () {
        var $btn = $(this),
            $attr = $btn.attr('data-target'),
            $target = $($attr);
        if ($target.hasClass('in')) {
            $target.collapse('toggle');
            $btn.text($btn.text().replace('Hide', 'Show'));
        } else {
            $('.css-row').find('.collapse.in').removeClass('in');
            $btn.text($btn.text().replace('Show', 'Hide'));
            $btn.siblings('.btn').each(function () {
                var $newBtn = $(this);
                $newBtn.text($newBtn.text().replace('Hide', 'Show'));
            });
        }
    });


});

//cart
$('a.remove').click(function () {
    event.preventDefault();
    $(this).parent().parent().parent().hide(400);

})

// Just for testing, show all items
$('a.btn.continue').click(function () {
    $('li.items').show(400);
})

var countDownDate = new Date("Sep 27, 2021 15:37:25").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("time").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "EXPIRED";
  }
}, 1000);


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

var theToggle = document.getElementById('toggle');

// based on Todd Motto functions
// https://toddmotto.com/labs/reusable-js/

// hasClass
function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
    	elem.className += ' ' + className;
    }
}
// removeClass
function removeClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
	if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
// toggleClass
function toggleClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

theToggle.onclick = function() {
   toggleClass(this, 'on');
   return false;
}