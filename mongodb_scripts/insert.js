db = connect("localhost:27017/portfolio_db");

db.project.insert([
	{
		title: 'Avocado Wars',
		description: 'Game developed in a span of 3 days during the UQAMJAM 2017 with “Avocado RPG” as the theme.</br></br> It is a (local on one computer) multiplayer turn based game where you aim to destroy your opponent’s avocado tree. A tree produce one seed every three turns. During your turn, you can select a tree and throw a seed. If the seed lands on the ground, an avocado tree will grow where the seed landed. If the seed touches a wall or a rock, it will be destroyed. If the seed lands on a tree, the tree will lose 1 life point no matter its faction. Every tree starts off with 3 life points. The game ends when one of the player’s original tree gets destroyed.',
		controls: [
			'Left click to select a tree (there is no selection animation)',
			'With a tree selected, left click to throw a seed (the mouse position gives the direction, the distance between the cursor and the tree gives the force)',
			'Space to pass your turn (or use the UI button)'
		],
		note: 'The tutorial was written after 2 sleepless nights and isn’t of any help… sorry!',
		url: 'https://bitbucket.org/nox282/uqamjam_2017_avocadowars',
		imageURL: 'https://static.pexels.com/photos/126407/pexels-photo-126407.jpeg',
		screenshots: [
			'https://www.petmd.com/sites/default/files/petmd-cat-happy-10.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg',
			'https://d4n5pyzr6ibrc.cloudfront.net/media/27FB7F0C-9885-42A6-9E0C19C35242B5AC/4785B1C2-8734-405D-96DC23A6A32F256B/thul-90efb785-97af-5e51-94cf-503fc81b6940.jpg?response-content-disposition=inline'
		],
		videoURL: 'https://www.youtube.com/watch?v=hY7m5jjJ9mM',
		team: [
			'Nicolas Hamard'
		],
		gameEngine: 'Unity',
		technologies:[
			'C#',
			'Tiled',
			'Tiled2Unity'
		],
		tags:[
			'TurnBased',
			'Avocado',
			'Worms'
		]
	}
]);

db.resume.insert([
	{
		firstname: 'Nicolas',
		lastname: 'Hamard',
		pictureURL: '',
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
				toYear: '2018'
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
			'Generalist Programming',
			'Gameplay Programming',
			'Tools Programming',
			'Engine Programming'
		]
	}
]);