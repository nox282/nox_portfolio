db = connect("localhost:27017/portfolio_db");

db.project.insert([
	{
		title: 'Avocado Wars',
		description: 'Game developed in a span of 3 days during the UQAMJAM 2017 under the theme  “Avocado RPG”. It is a (local on one computer) multiplayer turn based game in which your goal is to destroy your opponent’s avocado tree. A tree produces one seed every three turns. During your turn, you can select a tree and throw a seed from it. If the seed lands on the ground, an avocado tree will grow where the seed landed. If the seed touches a wall or a rock, it will be destroyed. If the seed lands on a tree, the tree will lose 1 life point no matter its faction. Every tree spawns with 2 life points. The game ends when one of the player’s starter tree gets destroyed.',
		controls: [
			'Left click to select a tree (there is no selection animation)',
			'With a tree selected, left click to throw a seed (the mouse position gives the direction, the distance between the cursor and the tree gives the force)',
			'Space to pass your turn (or use the UI button)'
		],
		note: 'The in game tutorial was written after 2 sleepless nights and isn’t of any help… sorry!',
		url: '',
		sourceURL: 'https://bitbucket.org/nox282/uqamjam_2017_avocadowars',
		imageURL: 'https://i.imgur.com/aqbu44W.jpg',
		screenshots: [
			'https://i.imgur.com/kTN6gPM.png', 
			'https://i.imgur.com/1p4lgMJ.png', 
			'https://i.imgur.com/LqsOiZL.jpg'
		],
		videoURL: '',
		team: [
			{ name: 'Nicolas Hamard', url: 'https://www.linkedin.com/in/nicolas-hamard-a33127bb/'}
		],
		gameEngine: 'Unity',
		technologies:[
			'C#',
			'Tiled',
			'Tiled2Unity',
			'Gimp'
		],
		tags:[
			'TurnBased',
			'Avocado',
			'Worms'
		]
	},
	{
		title: 'Veritas',
		description: 'Project as part of a course. Veritas is a proof of concept for a web application aiming to motivate primary school students by making homeworks playful and accessible. The service has two access points : teacher side, where they can schedule and publish exercices, and the student side, which is a navigator game using WebG. The student side uses exercices published by teachers to generate quests and fight events in game. The student must resolve the assignment (questions are given by the monsters) in order to complete an event and be rewarded. The project is inspired by the platform <a href=”https://www.prodigygame.com/” class="portfolio-link">Prodigy</a> which is not available in french.',
		controls: [],
		note: 'The game implements HTTP sockets client side as well as server side. Unfortunately, Unity builds to WebGL application does not support websockets. The multiplayer has been deactivated. To access the game, be sure to use HTTP, not HTTPS',
		url: 'http://veritas-jeu.herokuapp.com/',
		sourceURL: 'https://github.com/nox282/inm5151-veritas',
		imageURL: 'https://i.imgur.com/u3BWPBU.jpg',
		screenshots: [
			'https://i.imgur.com/S43Uu0F.png',
			'https://i.imgur.com/2pjm91M.png',
			'https://i.imgur.com/jJBkCP3.jpg',
			'https://i.imgur.com/PL63Kzj.jpg',
			'https://i.imgur.com/lLUGatR.png',
			'https://i.imgur.com/iyPRnTH.png',
			'https://i.imgur.com/urEbmpa.jpg',
			'https://i.imgur.com/s1Lopn7.png',
			'https://i.imgur.com/XDFVbKX.png',
			'https://i.imgur.com/eGtxqNm.jpg',
			'https://i.imgur.com/XvFvPHx.png',
			'https://i.imgur.com/mV9jxai.jpg'
		],
		videoURL: '',
		team: [
			{ name: 'Giulia Cantoni (Web Developpement)', url: 'https://www.linkedin.com/in/giulia-cantoni/'},
			{ name: 'Samuel Pilon (Game Developpement)', url: 'https://www.linkedin.com/in/samuel-pilon/'},
			{ name: 'Alyson Appleby (Art assets)', url: ''},
			{ name: 'Nicolas Hamard (Web/game Developement)', url: 'https://www.linkedin.com/in/nicolas-hamard-a33127bb/'}
		],
		gameEngine: 'Unity',
		technologies:[
			'C#',
			'Tiled',
			'Tiled2Unity',
			'Node.js',
			'express',
			'WebGL',
			'3DSMax',
			'Photoshop'
		],
		tags:[
			'education',
			'RPG',
			'pokemon'
		]
	},
	{
		title: 'Marco et le capitalisme',
		description: 'Project as part of a course. This game is a school project and also a test project as it was my first experience with Unity. It is a 2D runner-like with random obstacles (selected from a pool of prefabs). If the player reach the score goal, they enter in a boss stage. The game then turns into a 3D third person shooter. The player can fire paintballs. They can change the paint color by stepping on color spheres. They must hit targets that randomly spawn on the boss’s body with the proper color in order to deal damage.',
		controls: [
			'1st phase : use the mouse cursor to move around',
			'2nd phase : WASD to move, left click to fire'
		],
		note: '',
		url: 'https://github.com/nox282/INF5071_tp1/releases',
		sourceURL: 'https://bitbucket.org/mordinox/inf5071_project/overview',
		imageURL: 'https://i.imgur.com/2gbgxWu.jpg',
		screenshots: [
			'https://i.imgur.com/JcIzMDj.jpg',
			'https://i.imgur.com/vBK1S9f.jpg',
			'https://i.imgur.com/xcEJiKb.png',
			'https://i.imgur.com/BTSnK98.png',
			'https://i.imgur.com/kQf2aBm.png',
			'https://i.imgur.com/lQ4W9Sq.png'
		],
		videoURL: '',
		team: [
			{ name: 'Maude-Amélie Dufresne', url: ''},
			{ name: 'Nicolas Hamard', url: 'https://www.linkedin.com/in/nicolas-hamard-a33127bb/'}
		],
		gameEngine: 'Unity',
		technologies:[
			'C#',
			'Blender',
			'Photoshop'
		],
		tags:[
			'runner',
			'TPS'
		]
	},
	{
		title: 'Nicolas Hamard\'s portfolio',
		description: 'My portfolio sources',
		controls: [],
		note: '',
		url: 'https://www.nicolashamard.ca',
		sourceURL: 'https://github.com/nox282/nox_portfolio',
		imageURL: 'https://i.imgur.com/KkvihOd.png',
		screenshots: [],
		videoURL: '',
		team: [
			{ name: 'Nicolas Hamard', url: 'https://www.linkedin.com/in/nicolas-hamard-a33127bb/'}
		],
		gameEngine: 'Spring boot',
		technologies:[
			'Java',
			'Springboot',
			'Mongo',
			'Javascript (ES6)',
			'Bootstrap',
			'Photoshop'
		],
		tags:[
			'web',
			'portfolio'
		]
	},
	{
		title: 'AI Project',
		description: 'Project as part of an artificial intelligence course. This project is our introduction to what genetic algorithms have to offer in AI. The agents are cars with simple physics. These cars must find their way around a track in a set amount of time. At the end of the timer, the next generation of agents is produced. A track editor is also provided. Parameters for the heuristic function are not optimal which produce underwhelming results. With more time and tweaking, agents capabilities could be greatly improved.',
		controls: [],
		note: 'You can play around with just one car (arrow key to control) by checking out the tag v0.1 from the linked repository',
		url: '',
		sourceURL: 'https://bitbucket.org/gdnox/inf4230_tp3/overview',
		imageURL: 'https://i.imgur.com/MMVRWrp.png',
		screenshots: [
			'https://i.imgur.com/k96qBu2.png',
			'https://i.imgur.com/2ymaan1.png',
			'https://i.imgur.com/Eo2hQ5z.png' 
		],
		videoURL: '',
		team: [
			{ name: 'Nicolas Hamard', url: 'https://www.linkedin.com/in/nicolas-hamard-a33127bb/'}
		],
		gameEngine: 'P5.js',
		technologies:[
			'Javascript',
			'P5.js'
		],
		tags:[
			'AI',
			'experiment'
		]
	},
	{
		title: 'Montreal event web service',
		description: 'Project as part of a course. This web service lets you see events in Montreal city using an interactive map. The objective of the course was to build a Restful web service using the microservices/supervisor pattern.',
		controls: [],
		note: 'Project is not deployed online.',
		url: '',
		sourceURL: 'https://bitbucket.org/jsnxteam/inf4375-project',
		imageURL: 'https://i.imgur.com/oNYn2aD.png',
		screenshots: [],
		videoURL: '',
		team: [
			{ name: 'Jean-Sebastien Paul', url: 'https://www.linkedin.com/in/jean-s%C3%A9bastien-paul-0b4ba7126/'},
			{ name: 'Nicolas Hamard', url: 'https://www.linkedin.com/in/nicolas-hamard-a33127bb/'}
		],
		gameEngine: 'Spring boot',
		technologies:[
			'Java',
			'Springboot',
			'PostgresSQL',
			'Javascript'
		],
		tags:[
			'web'
		]
	}	
]);

db.resume.insert([
	{
		firstname: 'Nicolas',
		lastname: 'Hamard',
		pictureURL: 'https://memegenerator.net/img/images/600x600/11424146/begging-kitty.jpg',
		location: 'Montréal, Québec, Canada',
		languages: [
			'French (Native)',
			'English (Professional proficiency)'
		],
		description: 'I am a young graduate in software engineering looking for new opportunities in the game development world.',
		education: [
			{
				school: 'UQAM | Université du Québec à Montréal',
				url: 'https://uqam.ca/',
				diploma: 'Baccalauréat en Informatique et Génie Logiciel',
				fromYear: '2015',
				toYear: '2017'
			},
			{
				school: 'SUPINFO International University',
				url: 'https://www.supinfo.com/',
				diploma: 'License en Informatique',
				fromYear: '2010',
				toYear: '2012'	
			}
		],
		employment: [
			{
				company: 'BeeCee',
				jobTitle: 'Web developer',
				location: 'Martinique',
				description:'During this internship, I had the chance to discover new technologies without any background in web development. This opportunity helped me hone my adaptability and flexibility as I (knowingly) did not have anyone as a security net to fallback on.',
				from: 'June 2012',
				to: 'September 2012'
			},
			{
				company: 'Atouclim',
				jobTitle: 'System administrator',
				location: 'Martinique',
				description:'During this internship, I was in charge of migrating the IT infrastructure of a small company. From handling a budget and argue with providers to installing and configuring both hardware and software, we could not afford downtime. In the end, the migration went rather smoothly.',
				from: 'June 2011',
				to: 'September 2011'
			}
		],
		technologies: [
			'C/C++',
			'C#',
			'Unreal Engine',
			'Unity',
			'Git',
			'Linux',
			'P5.js',
			'Java',
			'Javascript',
			'Node.js',
			'Java Sprint Framework'
		],
		socials: [
			{
				name: 'email',
				url: 'nicolas.hamard@gmail.com'
			},
			{
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/nicolas-hamard-a33127bb/'
			}
		],
		interestedIn: [
			'C/C++',
			'General Game Developpement',
			'Gameplay Programming',
			'Tools Programming',
			'Engine Programming'
		]
	}
]);