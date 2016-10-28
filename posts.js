//Genius Hour Project Notes/Blog Posts
function addlink(link, word) {
	return("<a href=\""+link+"\" target=\"_blank\">"+word+"</a>");
}
function addimg(link) {
	return("<img src=" + link + ">");
}
var posts = [
	{
		id: 5,
		title: "The Second Law",
		date: "Oct. 28, 2016",
		content: "Based on the code from the guide, I've created a simple vector class that allows for vector manipulation. I had a bit of knowledge on matrices and vectors from the Machine Learning " + addlink('https://www.coursera.org/learn/machine-learning', 'course') + " that I did last year (although I have yet to finish the last few weeks that talk about unsupervised learning). Anyways, the lienar algebra review in that course didn't go over vector cross product and rotation, so I watched " + addlink('https://www.youtube.com/watch?v=pJzmiywagfY', 'these') + " " + addlink('https://www.youtube.com/watch?v=lPWfIq5DzqI', 'videos') + " to understand Kanber's code (thanks Khan Academy). <br> The code: </p>" + '<iframe width="100%" height="300" src="//jsfiddle.net/alan_ma/k6nkfdzc/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>' + "<p>"
	},
	{
		id: 4,
		title: "Building a Physics Engine",
		date: "Oct. 21, 2016",
		content: "I will be basing my physics engine off of the guide by " + addlink('https://www.burakkanber.com', 'Burak Kanber') + ", linked in the previous post. It's very informative, and is great for a beginners to follow. <br> As we've learned in class, Newton's equations of motion allow us to do calculations separately for each of the x, y, and z axes. For example, if we are throwing a ball in 2 dimensions, the horizontal motion is constant (ignoring air resistance), while the vertical motion - affected by gravity - can be calculated separately. <br> While this may seem easier, it requires more class types, and is more complicated. What we want to do instead is model everything as vectors, which requires vector math/linear algebra, but it's very useful. For example, a line AB will have 2 \"points\" A and B, which are actually both vectors stemming from (0,0). To get line AB, just take B-A:" + addimg('img/vectors.png') + "(at least I think that's what the guide is describing) <br> Until the next post, I will be working on a simple implementation of a vector class that allows for \"vector addition, subtraction, multiplication, dot product, and rotation.\" Time for some linear algebra!"
	},	
	{
		id: 3,
		title: "Updates",
		date: "Oct. 5, 2016",
		content: "There are " + addlink("http://www.rw-designer.com/cursor-view/35050.png", "new") + " " + addlink("http://www.rw-designer.com/cursor-view/35055.png", "cursors") + "! They're a reference to an old game named " + addlink("http://maplestory.nexon.net/", "Maplestory") + ", a game that I used to play quite a bit. Maybe they represent the 'game' part of game physics, or maybe they're just fun-looking cursors. <br> Apart from that, I've found another great resource for beginning with physics engines " + addlink("http://buildnewgames.com/gamephysics/", "here") + ". The guide is based on creating a physics engine in a website, so it's perfect for this project. <br> More updates soon!"
	},
	{
		id: 2,
		title: "Blog Update",
		date: "Oct. 4, 2016",
		content: "The blog has been overhauled! Hopefully, the design’s better than the previous version. Take a look at the " + addlink("https://gyazo.com/9434d49471b574ae9059af50503187a0", "before") + " and " + addlink("https://gyazo.com/e84b804e6ee9aa59cc4b821b3919a3c4", "after") + ". There will be more to come in terms of the research on physics engines, so stay tuned!"
	},
	{
		id: 1,
		title: "General Goals",
		date: "Sept. 30, 2016",
		content: "First things first: The blog has been created! This will be where I'll write updates on the project as the semester progresses. <br>	As the first day of the project, I'm beginning with a general direction I see the project going in. The goal of the game is having the player use a physical device to input the acceleration of an object inside the game, and model its realistic movement. <br> The two main aspects of the project are the physical input system and the game. Currently, I am thinking of building the game in a website through Hyper Text Markup Language (HTML), Cascading Style Sheets (CSS), as well as JavaScript. The reason is because the game will then be accessible everywhere with internet, and there are many articles that deal with developing physics engines on websites. I've found a great " + addlink("http://brm.io/game-physics-for-beginners/", "resource") + " for beginning with game physics, so the plan is to begin learning how to develop a physics engine. <br> As for the physical input system, I envision a peripheral device that can be spun to simulate acceleration. If I am able to repurpose a mouse's scroll wheel and turn it into a large wheel that can be spun; it will be a single-function peripheral that, when spun, will input acceleration into the game. In order to find the incremental input of a scroll wheel, something like " + addlink("https://css-tricks.com/mousewheel-inputs/", "this") + " can be used. <br>	So that's it for the first day; next week, I'll be doing more research into creating physics engines."
	}
];























