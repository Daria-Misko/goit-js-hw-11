export default function fetchPictures(requestName) {
	const URL = `https://pixabay.com/api/?key=33738394-f05239cb600a9563394d46095&q=${requestName}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=1`;
	return fetch(URL)
		.then(res => {
			if (!res.ok) {
				throw new Error(res.status);
			}
			return res.json();
		})
		.then(data => {
			return data;
		})
		.catch(error => {
			console.error(error);
		})
}

// axios.get(`https://pixabay.com/api/?key=33738394-f05239cb600a9563394d46095&q=cat&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=1`).then(res => {
// 	return console.log(res.data);
// }).catch(error => 
// 	console.log(error))

axios.get(URL).then(res => {
	return res.data;
}).then(data => {
				this.incrementPage()
//результат роботи цього зена -> проміс, значення якого те, що ми вернули з його колбека
				return data.hits
})
			


fetchPictures() {
	const URL = `https://pixabay.com/api/?key=33738394-f05239cb600a9563394d46095&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`;

	return axios.get(URL)
		.then(res => {
			if (res.status !== 200 || res.data.hits.length === 0) {
				throw new Error(res.status);
			}
			return res.data;
		})
		.then(data => {
			this.incrementPage()
			return data.hits
			});
	}