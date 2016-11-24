function load_posts() {
	for (i=0; i<posts.length; i++) {
		post_id = posts[i].id.toString();
		$('#posts').append('<div class="post" id="'+post_id+'"></div>');
		$('#'+post_id).append('<h2 class="title">'+posts[i].date+" - "+posts[i].title+'</h2>');
    $('#'+post_id).append('<div class="content" id="'+post_id+'content"></div>');
		$('#'+post_id+'content').append('<p>'+posts[i].content+'</p>');
    if (i != posts.length-1) {
      $('#'+post_id+'content').append('<div class="stretch"></div>');
    }
	}
}

function loader() {
    setTimeout(function () {
      $('#loader').css("opacity", "1");
      setTimeout(function () {
        $('#button').css("opacity", "1");
      }, 1000);
    }, 700);

    $("#button").click(function(){
      $('#loader').css("opacity","0");
      $('#container').css("display","inline");
      setTimeout(function () {
        $('#loader').css("display", "none");
      }, 1500);
    });
}

function click_detector() {
  $("body")
    .mouseup(function() {
      $(this).css('cursor', "url('cursors/alt.cur'), auto");
    })
    .mousedown(function() {
      $(this).css('cursor', "url('cursors/move.cur'), auto");
    });
}

function main() {
	load_posts();
	loader();
  //click_detector();
}

$(document).ready(function() {
    main();
});

$(document).ready(function () {
    $(".title").on('click', function () {
        var $content = $(this).next(".content");
        $content.slideToggle(); //toggle the current one
    });
});

$(document).ready(function () {
    $("#show").on('click', function () {
        $(".content").slideDown(); //close all
    });
    $("#collapse").on('click', function () {
        $(".content").slideUp(); //close all
    });
});