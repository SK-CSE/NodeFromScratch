var bookController = function(Book){

	var post = function(req,res){

	 	var book = new Book(req.body);
	 	book.save();
	 	res.status(201).send(book);
	}

	var get = function(req,res){

		var query = req.query;
		Book.find(query,function(err,books){
			if (err) {
				res.status(500).send(err);
			}else{
				res.json(books);
			}
		});
	}

	return{
		post : post,
		get  : get
	}
}


module.export = bookController;