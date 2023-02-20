import axios from "axios";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import fetchPictures from "./fetchPictures";

const input = document.getElementById('search-form');
const submitBtn = document.querySelector('.submitBtn');

submitBtn.addEventListener('submit', onSubmit)

	console.log(111);
function onSubmit(event) {
	event.preventDefault();

	const searchQuery = event.currentTarget.elements.searchQuery.value.trim();
	console.log(searchQuery);
	console.log(111);
	// let searchName = event.target.value.trim();

}

// пишемо логіку для отпримання запросу. searchPics - це назва масиву картинок, які ми отримуємо
// fetchPictures('cat')
// 	.then(searchPics => {
// 		console.log(searchPics)
// 	})
// 	.catch(error => {
// 		Notify.failure("Sorry, there are no images matching your search query. Please try again.")
// 	})
