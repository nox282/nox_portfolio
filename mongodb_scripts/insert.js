db = connect("localhost:27017/portfolio_db");

db.project.insert([
	{
		title: 'Test Project',
		description: 'This is a test project',
		url: 'http://github.com',
		imageURL: 'https://static.pexels.com/photos/126407/pexels-photo-126407.jpeg',
		screenshots:[
			'https://www.petmd.com/sites/default/files/petmd-cat-happy-10.jpg',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg',
			'https://d4n5pyzr6ibrc.cloudfront.net/media/27FB7F0C-9885-42A6-9E0C19C35242B5AC/4785B1C2-8734-405D-96DC23A6A32F256B/thul-90efb785-97af-5e51-94cf-503fc81b6940.jpg?response-content-disposition=inline'
		],
		videoURL: 'https://www.youtube.com/watch?v=hY7m5jjJ9mM'
	}
]);