import axios from "axios";

export default class NewsApiService {
	constructor() {
		this.searchQuery = '';
		this.page = 1;
	}
	//заість окремої функції записуємо як метод класу
	async fetchPictures() {
	const URL = `https://pixabay.com/api/?key=33738394-f05239cb600a9563394d46095&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`;
		
	// повертаємо проміс, для використання у зовнішньому коді
	const res = await axios.get(URL);
		if (res.status !== 200 || res.data.hits.length === 0) {
			throw new Error(res.status);
		}
		const data = res.data;
		this.incrementPage();
		return data;
	}

	//збільшення сторінки
	incrementPage() {
		this.page += 1
	}

	//скидаємо сторінку до 1
	resetPage() {
		this.page = 1
	}

	get query() {
		return this.searchQuery
	}

	set query(newQuery) {
		this.searchQuery = newQuery
	}
}