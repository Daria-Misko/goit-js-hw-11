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