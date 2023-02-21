import axios from "axios";
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import NewsApiService from "./news_api_service";
import appendImagesMarkup from "./buildMarkup"

const input = document.getElementById('search-form');
const submitBtn = document.querySelector('.submitBtn');
const gallery = document.querySelector('.gallery')

// Не викликає скріпт декілька раз
let waitForFinalEvent = (function() {
	let timers = {};
	return function(callback, ms, uniqueId) {
		if (!uniqueId)
			uniqueId = "Не викликає двічі без унікального ідентифікатору";

		if (timers[uniqueId])
			clearTimeout(timers[uniqueId]);

		timers[uniqueId] = setTimeout(callback, ms);
	};
})();


input.addEventListener('submit', onSubmit)

const newsApiService = new NewsApiService();
const lightbox = new SimpleLightbox('.gallery a');

function onSubmit(event) {
	event.preventDefault();

	// замість const searchQuery достукались до змінної класу
	newsApiService.query = event.currentTarget.elements.searchQuery.value.trim();

	//скидаємо попередні результати
	newsApiService.resetPage();

	newsApiService.fetchPictures().then(data => {
	// appendImagesMarkup(hits)
	
	if (newsApiService.query === '') {
		Notify.failure('Sorry, there are no images matching your search query. Please try again.')
	} else {
		clearContainer();
		appendImagesMarkup(data.hits)
		Notify.success(`Hooray! We found ${data.totalHits} images.`)		
		}
	}).catch(error => {
		console.error(error)
		Notify.failure('Sorry, there are no images matching your search query. Please try again.')
	});
}

function clearContainer() {
	gallery.innerHTML = '';
}


/**
 * Infinite scroll
 */
window.addEventListener('scroll', (e) => {

	const {
		scrollTop,
		scrollHeight,
		clientHeight
	} = document.documentElement;
	
	if (scrollTop + clientHeight >= scrollHeight - 100) {

		waitForFinalEvent(function(){
			newsApiService.fetchPictures().then(data => {
				if (data.hits.length > 0) {
					appendImagesMarkup(data.hits);
				} else {
					Notify.failure('Sorry, there are no images more.');
				}
			}).catch(error => {
				console.error(error)
				Notify.failure('Sorry, there are no images matching your search query. Please try again.')
			});

		}, 300);

	}


}, { passive: true });