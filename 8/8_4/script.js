class Article {
	constructor(id, title) {
		this.id = id;
		this.title = title;
	}
	getId(){
		return this.id;
	}
	static compareId(a,b){
		const id1 = a.id;
		const id2 = b.id;

		if (id1>id2){
			return true;
		}
		else{
			return false;
		}
	}
}

const art = new Article(987, 'Filtry w CSS3');
console.log(art.id);
console.log(art.title);

console.log(art.getId());

const art2 = new Article(999, 'React podstawy');

console.log(Article.compareId(art,art2));