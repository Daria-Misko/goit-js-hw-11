import axios from "axios";
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import NewsApiService from "./news_api_service";
import appendImagesMarkup from "./buildMarkup"

const input = document.getElementById('search-form');
const submitBtn = document.querySelector('.submitBtn');
const gallery = document.querySelector('.gallery')

input.addEventListener('submit', onSubmit)

const newsApiService = new NewsApiService();
const lightbox = new SimpleLightbox('.gallery a');

function onSubmit(event) {
	event.preventDefault();

	// замість const searchQuery достукались до змінної класу
	newsApiService.query = event.currentTarget.elements.searchQuery.value.trim();

	//скидаємо попередні результати
	newsApiService.resetPage();

	newsApiService.fetchPictures().then(hits => {
		// appendImagesMarkup(hits)
	
	if (newsApiService.query === 	'') {
			Notify.failure('Sorry, there are no images matching your search query. Please try again.')
	} else {
		clearContainer();
		appendImagesMarkup(hits)
			Notify.success(`"Hooray! We found ${hits.totalHits} images.`)		
		}
	}).catch(error => {
		console.error(error)
		Notify.failure('Sorry, there are no images matching your search query. Please try again.')
	});
}

function clearContainer() {
	gallery.innerHTML = '';
}