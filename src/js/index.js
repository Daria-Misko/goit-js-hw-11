import axios from "axios";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import fetchPictures from "./fetchPictures";

const input = document.getElementById('search-form');
const submitBtn = document.querySelector('.submitBtn');

// submitBtn.addEventListener('submit', onSubmit)

// function onSubmit(e) {
// 	let searchName = e.target.value.trim();

// пишемо логіку для отпримання запросу. searchPics - це назва масиву картинок, які ми отримуємо
fetchPictures('jnjnvkdjn')
	.then(searchPics => {
		console.log(searchPics)
	})
	.catch(error => {
		console.log(error);
		Notify.failure("Sorry, there are no images matching your search query. Please try again.")
	})

// const URL = 'https://pixabay.com/api/?key=33738394-f05239cb600a9563394d46095&q=yellow+flowers&image_type=photo&orientation=horizontal&safesearch=true&&per_page=40&page=1';
// fetch(URL).then(res => res.json()).then(console.log)


// export default class PixabayApiService {
//   constructor() {
//     this.searchQuery = '';
//     this.page = 1;
//   }

//   fetchPictures() {
//     console.log(this);
//     const URL = `https://pixabay.com/api/?key=33700008-b0f3fc2623c0687ada0dd2d9b&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`;
//     return fetch(URL)
//       .then(response => response.json())
//       .then(data => {
//         this.incrementPage();
// 			console.log
// 			console.log(this);
//         return data.hits;
//       });

//     // return axios.get(url);
//   }

//   incrementPage() {
//     this.page += 1;
//   }

//   resetPage() {
//     this.page = 1;
//   }

//   get query() {
//     return this.searchQuery;
//   }

//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }
// }