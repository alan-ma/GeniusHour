posts = [
	['General Goals', 'Sept. 30, 2016', "First things first: The blog has been created! This will be where I'll write updates on the project as the semester progresses. <br> As the first day of the project, I'm beginning with a general direction I see the project going in. The goal of the game is having the player use a physical device to input the acceleration of an object inside the game, and model its realistic movement. <br> The two main aspects of the project are the physical input system and the game. Currently, I am thinking of building the game in a website through Hyper Text Markup Language (HTML), Cascading Style Sheets (CSS), as well as JavaScript. The reason is because the game will then be accessible everywhere with internet, and there are many articles that deal with developing physics engines on websites. I've found a great <a href=\"http://brm.io/game-physics-for-beginners/\" target=\"_blank\">resource</a> for beginning with game physics, so the plan is to begin learning how to develop a physics engine. <br> As for the physical input system, I envision a peripheral device that can be spun to simulate acceleration. If I am able to repurpose a mouse's scroll wheel and turn it into a large wheel that can be spun; it will be a single-function peripheral that, when spun, will input acceleration into the game. In order to find the incremental input of a scroll wheel, something like <a href=\"https://css-tricks.com/mousewheel-inputs/\" target=\"_blank\">this</a> can be used. <br> So that's it for the first day; next week, I'll be doing more research into creating physics engines."],
  ['Blog Update', 'Oct. 4, 2016', "The blog has been overhauled! Hopefully, the design’s better than the previous version. Take a look at the <a href=\"https://gyazo.com/9434d49471b574ae9059af50503187a0\" target=\"_blank\">before</a> and <a href=\"https://gyazo.com/e84b804e6ee9aa59cc4b821b3919a3c4\" target=\"_blank\">after</a>. There will be more to come in terms of the research on physics engines, so stay tuned!"],
  ['Updates', 'Oct. 5, 2016', "There's a <a href=\"http://www.rw-designer.com/cursor-view/35050.png\" target=\"_blank\">new</a> <a href=\"http://www.rw-designer.com/cursor-view/35055.png\" target\"http://www.rw-designer.com/cursor-view/35055.png\">cursor</a>! They're an homage to an old game named <a href=\"http://maplestory.nexon.net/\" target=\"_blank\">Maplestory</a>, something that I used to play quite a bit. Maybe it represents the 'game' part of game physics, or maybe it's just a fun-looking cursor. <br> Apart from that, I've found another great resource for beginning with physics engines <a href=\"http://buildnewgames.com/gamephysics/\" target=\"_blank\">here</a>. The guide is based on creating a physics engine in a website, so it's perfect for this project. <br> More updates soon!"],
];

function load_posts(post_array) {
	for (i=0; i<posts.length; i++) {
		title = posts[i][0];
		date = posts[i][1];
		content = posts[i][2];
		post_id = "post" + String(i);
		$('#posts h1').after('<div class="post" id="'+post_id+'"></div>');
		$('#'+post_id).append('<h2>'+title+'</h2>');
		$('#'+post_id).append('<h4>'+date+'</h4>');
		$('#'+post_id).append('<p>'+content+'</p>');
    if (i > 0) {
      $('#'+post_id).append('<div class="stretch"></div>');
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

function main() {
	load_posts();
	loader();
}

$(document).ready(function() {
    main();
});