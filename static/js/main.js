// hide bottom nav on scroll
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("side_nav").style.display = "none";
        document.getElementById("mySidenav").style.display = "inline";
    } else {
        document.getElementById("side_nav").style.display = "inline";
    }
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementsByClassName("container").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementsByClassName("container").style.marginLeft = "0";
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
