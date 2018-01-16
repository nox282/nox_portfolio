db.projectEN.drop();
db.projectFR.drop();
db.resumeEN.drop();
db.resumeFR.drop();

//##########################################################################################
						//PROJECTS ENGLISH
//##########################################################################################

db.projectEN.insert([
	{
		title: 'Avocado Wars',
		description: 'Game developed in a span of 3 days during the UQAMJAM 2017 under the theme  “Avocado RPG”. It is a (local on one computer) multiplayer turn based game in which your goal is to destroy your opponent’s avocado tree. A tree produces one seed every three turns. During your turn, you can select a tree and throw a seed from it. If the seed lands on the ground, an avocado tree will grow where the seed landed. If the seed touches a wall or a rock, it will be destroyed. If the seed lands on a tree, the tree will lose 1 life point no matter its faction. Every tree spawns with 2 life points. The game ends when one of the player’s starter tree gets destroyed.',
		controls: [
			'Left click to select a tree (there is no selection animation)',
			'With a tree selected, right click to load a seed (once a seed is loaded, you can\'t go back on your move)',
			'With a seed loaded, left click to throw a seed (the mouse position gives the direction, the distance between the cursor and the tree gives the force)',
			'Space to pass your turn (or use the UI button)'
		],
		note: 'The in game tutorial was written after 2 sleepless nights and isn’t of any help… sorry!',
		url: '',
		sourceURL: 'https://bitbucket.org/nox282/uqamjam_2017_avocadowars',
		imageURL: 'img/portfolio/AvocadoWars/1.jpg',
		screenshots: [
			'img/portfolio/AvocadoWars/2.png',
			'img/portfolio/AvocadoWars/3.png',
			'img/portfolio/AvocadoWars/4.jpg'
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
		description: 'Project as part of a class. Veritas is a proof of concept for a web application aiming to motivate primary school students by making homeworks playful and accessible. The service has two access points : teacher side, where they can schedule and publish exercices, and the student side, which is a navigator game using WebG. The student side uses exercices published by teachers to generate quests and fight events in game. The student must resolve the assignment (questions are given by the monsters) in order to complete an event and be rewarded. The project is inspired by the platform <a href=”https://www.prodigygame.com/” class="portfolio-link">Prodigy</a> which is not available in french.',
		controls: [],
		note: 'The game implements HTTP sockets client side as well as server side. Unfortunately, Unity builds to WebGL application does not support websockets. The multiplayer has been deactivated. To access the game, be sure to use HTTP, not HTTPS',
		url: 'http://veritas-jeu.herokuapp.com/',
		sourceURL: 'https://github.com/nox282/inm5151-veritas',
		imageURL: 'img/portfolio/Veritas/1.jpg',
		screenshots: [
			'img/portfolio/Veritas/2.png',
			'img/portfolio/Veritas/3.png',
			'img/portfolio/Veritas/4.jpg',
			'img/portfolio/Veritas/5.jpg',
			'img/portfolio/Veritas/6.png',
			'img/portfolio/Veritas/7.png',
			'img/portfolio/Veritas/8.jpg',
			'img/portfolio/Veritas/9.png',
			'img/portfolio/Veritas/10.png',
			'img/portfolio/Veritas/11.jpg',
			'img/portfolio/Veritas/12.png',
			'img/portfolio/Veritas/13.jpg',

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
		description: 'Project as part of a class. This game is a school project and also a test project as it was my first experience with Unity. It is a 2D runner-like with random obstacles (selected from a pool of prefabs). If the player reach the score goal, they enter in a boss stage. The game then turns into a 3D third person shooter. The player can fire paintballs. They can change the paint color by stepping on color spheres. They must hit targets that randomly spawn on the boss’s body with the proper color in order to deal damage.',
		controls: [
			'1st phase : use the mouse cursor to move around',
			'2nd phase : WASD to move, left click to fire'
		],
		note: '',
		url: 'https://github.com/nox282/INF5071_tp1/releases',
		sourceURL: 'https://bitbucket.org/mordinox/inf5071_project/overview',
		imageURL: 'img/portfolio/Marco/1.jpg',
		screenshots: [
			'img/portfolio/Marco/2.jpg',
			'img/portfolio/Marco/3.jpg',
			'img/portfolio/Marco/4.png',
			'img/portfolio/Marco/5.png',
			'img/portfolio/Marco/6.png',
			'img/portfolio/Marco/7.png'
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
		imageURL: 'img/portfolio/portfolio/1.png',
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
		description: 'Project as part of an artificial intelligence class. This project is our introduction to what genetic algorithms have to offer in AI. The agents are cars with simple physics. These cars must find their way around a track in a set amount of time. At the end of the timer, the next generation of agents is produced. A track editor is also provided. Parameters for the heuristic function are not optimal which produce underwhelming results. With more time and tweaking, agents capabilities could be greatly improved.',
		controls: [],
		note: 'You can play around with just one car (arrow key to control) by checking out the tag v0.1 from the linked repository',
		url: '',
		sourceURL: 'https://bitbucket.org/gdnox/inf4230_tp3/overview',
		imageURL: 'img/portfolio/AIProject/1.png',
		screenshots: [
			'img/portfolio/AIProject/2.png',
			'img/portfolio/AIProject/3.png',
			'img/portfolio/AIProject/4.png'
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
		description: 'Project as part of a class. This web service lets you see events in Montreal city using an interactive map. The objective of the course was to build a Restful web service using the microservices/supervisor pattern.',
		controls: [],
		note: 'Project is not deployed online.',
		url: '',
		sourceURL: 'https://bitbucket.org/jsnxteam/inf4375-project',
		imageURL: 'img/portfolio/MtlWebService/1.png',
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

//##########################################################################################
						//PROJECTS FRENCH
//##########################################################################################


db.projectFR.insert([
	{
		title: 'Avocado Wars',
		description: 'Jeu réalisé en 3 jours dans le cadre de l’UQAMJAM 2017 avec comme thème RPG Avocat. C\’est un jeu multijoueur (local sur un seul ordinateur) tour par tour où le but est de détruire l\'avocatier adverse. Un arbre génère une graine tous les 3 tours. Pendant votre tour vous pouvez sélectionner un arbre et lancer un pépin. Si le pépin touche le sol, un avocatier pousse à cet endroit. S’il touche un mur ou une roche, le pépin est détruit. Si le pépin touche un arbre (peu importe à quelle faction cet arbre appartient), l’arbre perd 1 point de vie. Chaque arbre démarre avec 2 points de vie. La partie se termine lorsque l’arbre originel d’un joueur est abattu.',
		controls: [
			'Clic gauche pour sélectionner un arbre', 
			'Avec un arbre sélectionné, clic droit pour charger une graine (une fois une graine chargée, vous ne pouvez plus retourner en arrière)',
			'Avec une graine chargée, clic gauche pour lancer une graine (la souris détermine la direction et la distance avec l’arbre détermine la force)',
			'Espace pour passer le tour (ou le bouton sur l\’interface)'
		],
		note: 'Le tutorial du jeu a été fait en dernier après 2 nuits blanches... Désolé!',
		url: '',
		sourceURL: 'https://bitbucket.org/nox282/uqamjam_2017_avocadowars',
		imageURL: 'img/portfolio/AvocadoWars/1.jpg',
		screenshots: [
			'img/portfolio/AvocadoWars/2.png',
			'img/portfolio/AvocadoWars/3.png',
			'img/portfolio/AvocadoWars/4.jpg'
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
		description: 'Projet dans le cadre d’un cours. Veritas est une preuve de concept d’une application de type web service visant à motiver et intéresser les élèves de primaire en rendant les devoirs à la maison ludiques et accessibles. Le web service a deux facades : la partie professeur, permettant de planifier et mettre à disposition les exercices à faire, et la partie élèves, un jeu navigateur utilisant WebGL. La partie élève utilise les exercices publiés par les professeurs pour produire des quêtes et des événements de combat dans le jeu. Les élèves doivent résoudre les exercices (les énoncés sont donnés par les monstres) pour réussir le combat et obtenir une récompense. Le projet s’inspire de la plateforme <a href=”https://www.prodigygame.com/” class="portfolio-link">Prodigy</a> qui n’est pas disponible en français.',
		controls: [],
		note: 'Le jeu implémente des sockets HTTP côté client et côté serveur. Cependant, le build de Unity vers une application WebGL ne permet pas l’utilisation de websocket. la fonctionnalité multijoueur a donc été désactivée. Pour accéder à la partie jeu, soyez sûr d’utiliser HTTP et non HTTPS',
		url: 'http://veritas-jeu.herokuapp.com/',
		sourceURL: 'https://github.com/nox282/inm5151-veritas',
		imageURL: 'img/portfolio/Veritas/1.jpg',
		screenshots: [
			'img/portfolio/Veritas/2.png',
			'img/portfolio/Veritas/3.png',
			'img/portfolio/Veritas/4.jpg',
			'img/portfolio/Veritas/5.jpg',
			'img/portfolio/Veritas/6.png',
			'img/portfolio/Veritas/7.png',
			'img/portfolio/Veritas/8.jpg',
			'img/portfolio/Veritas/9.png',
			'img/portfolio/Veritas/10.png',
			'img/portfolio/Veritas/11.jpg',
			'img/portfolio/Veritas/12.png',
			'img/portfolio/Veritas/13.jpg',

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
		description: 'Projet dans le cadre d’un cours. Ce jeu a été à la fois un projet d\'école et un projet de test de Unity puisque c\'était ma première expérience avec ce moteur. C’est un runner en 2D avec un placement aléatoire d’obstacle (pris dans une pool de prefab). Si le joueur atteint un objectif de points, il accède à un boss stage. Le jeu se transforme en shooter à la troisième personne. Le joueur peut donc tirer de la peinture. Il peut changer la couleur de la peinture en marchant sur les sphères de couleur. Il doit tirer sur des cibles générées aléatoirement sur le corps du boss avec la bonne couleur pour infliger des dégâts.',
		controls: [
			'1ère phase : le pointeur de la souris pour se diriger',
			'2ème phase : WASD pour bouger, clic gauche pour tirer'
		],
		note: '',
		url: 'https://github.com/nox282/INF5071_tp1/releases',
		sourceURL: 'https://bitbucket.org/mordinox/inf5071_project/overview',
		imageURL: 'img/portfolio/Marco/1.jpg',
		screenshots: [
			'img/portfolio/Marco/2.jpg',
			'img/portfolio/Marco/3.jpg',
			'img/portfolio/Marco/4.png',
			'img/portfolio/Marco/5.png',
			'img/portfolio/Marco/6.png',
			'img/portfolio/Marco/7.png'
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
		description: 'Les sources de mon portfolio',
		controls: [],
		note: '',
		url: 'https://www.nicolashamard.ca',
		sourceURL: 'https://github.com/nox282/nox_portfolio',
		imageURL: 'img/portfolio/portfolio/1.png',
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
		description: 'Projet dans le cadre d’un cours d’intelligence artificielle. Ce projet vise à nous introduire aux possibilités des algorithmes génétiques en intelligence artificielle. Les agents sont des voitures ayant une physique simple. Ces voitures doivent faire un tour du circuit dans un temps restreint. Une fois ce temps écoulé, la prochaine génération d’agent est générée. Un éditeur de circuit est aussi disponible. Les paramètres de la fonction de l\'heuristique ne sont pas optimaux ce qui produit des résultats peu convaincants. Avec plus de temps et d’ajustements, les résultats des agents pourraient être grandement améliorés',
		controls: [],
		note: 'Vous pouvez jouer avec une voiture (les touches fléchées pour la contrôler) en consultant le tag v0.1 du dépot de source fourni',
		url: '',
		sourceURL: 'https://bitbucket.org/gdnox/inf4230_tp3/overview',
		imageURL: 'img/portfolio/AIProject/1.png',
		screenshots: [
			'img/portfolio/AIProject/2.png',
			'img/portfolio/AIProject/3.png',
			'img/portfolio/AIProject/4.png'
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
		description: 'Projet dans le cadre d’un cours. Ce web service permet d\'accéder aux événements de la ville de Montréal via une map interactive. L’objet du cours était de construire un web service Restful en utilisant le pattern microservice/superviseur',
		controls: [],
		note: 'Le projet n’est pas déployé en ligne.',
		url: '',
		sourceURL: 'https://bitbucket.org/jsnxteam/inf4375-project',
		imageURL: 'img/portfolio/MtlWebService/1.png',
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

//##########################################################################################
						//RESUME ENGLISH
//##########################################################################################


db.resumeEN.insert([
	{
		firstname: 'Nicolas',
		lastname: 'Hamard',
		pictureURL: 'img/profile.png',
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
				diploma: 'Software Engineering Bachelor',
				fromYear: '2015',
				toYear: '2017'
			},
			{
				school: 'SUPINFO International University',
				url: 'https://www.supinfo.com/',
				diploma: '',
				fromYear: '2010',
				toYear: '2012'	
			}
		],
		employment: [
			{
				company: 'BeeCee',
				jobTitle: 'Web developer',
				location: 'Martinique',
				experience: [
					'CMS (Wordpress) website maintenance',
					'Flash website indexing',
					'Facebook app (using the Facebook Graph PHP API)'
				],
				from: 'June 2012',
				to: 'September 2012'
			},
			{
				company: 'Atouclim',
				jobTitle: 'System administrator',
				location: 'Martinique',
				experience: [
					'Network and server maintenance',
					'Server Migration from windows server 2003 r2 to a hypervisor architecture (file sharing server and windows server 2008 r2)',
					'Client Migration from Windows XP to MAC OSX'
				],
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

//##########################################################################################
						//RESUME FRENCH
//##########################################################################################


db.resumeFR.insert([
	{
		firstname: 'Nicolas',
		lastname: 'Hamard',
		pictureURL: 'img/profile.png',
		location: 'Montréal, Québec, Canada',
		languages: [
			'Français (Natif)',
			'Anglais (Capacité Professionnelle)'
		],
		description: 'Je suis un jeune diplômé en génie logiciel à Montréal et à la recherche de nouvelles opportunités dans le monde du développement de jeux vidéo.',
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
				diploma: '',
				fromYear: '2010',
				toYear: '2012'	
			}
		],
		employment: [
			{
				company: 'BeeCee',
				jobTitle: 'Développeur Web',
				location: 'Martinique',
				experience: [
					'Maintenance d\'un CMS (Wordpress)', 
					'Référencement d\'un site en Flash',
					'App Facebook (utilisant l\'API PHP de Facebook Graph)'
				],
				from: 'Juin 2012',
				to: 'Septembre 2012'
			},
			{
				company: 'Atouclim',
				jobTitle: 'Administrateur Système',
				location: 'Martinique',
				experience: [
					'Maintenance serveur et réseau',
					'Migration serveur de Windows Server 2003 r2 vers une architecture hyperviseur (serveur de partage de fichiers et Windows Server 2008 r2)',
					'Migration des machines clientes de Windows XP vers MAC OSX'
				],
				from: 'Juin 2011',
				to: 'Septembre 2011'
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
			'Programmation généraliste Jeux Vidéo',
			'Programmation Gameplay',
			'Programmation d\'outils',
			'Programmation Engin'
		]
	}
]);