'use strict';
import './src/css/style.css';
import Functions from './src/js/Functions.js';
import Post from './src/js/Post.js';
import { postsArr } from './src/js/posts.js';

const inputDiv = document.querySelector('.input');
let mainDiv = document.querySelector('.app');
let readMoreBtn;
let postDiv;
let modal = document.createElement('div');
let backDrop = document.createElement('div');
const inputVal = document.getElementById('inputVal');
const submitBtn = document.querySelector('.submit');
const user3 = document.querySelector('.user3');
const user4 = document.querySelector('.user4');

submitBtn.addEventListener('click', Functions.submitValidation);
user3.addEventListener('click', Functions.filteredUser3);
user4.addEventListener('click', Functions.filteredUser4);

function printResults(arr) {
    arr.forEach((post) => {
        let postEl = new Post(post);

        mainDiv.prepend(postEl.generateHtml());

        readMoreBtn.addEventListener('click', function () {
            postEl.addModal();
            postEl.addBackDrop();
        });

        backDrop.addEventListener('click', function () {
            postEl.removeModal();
            postEl.removeBackDrop();
        });
        //geresnis variantas butu uzdeti event listeneri visam psl ir klausytis ar paspaus ant readmore klase turincio mygtuko / ir jei taip , uzdeda modalui klase open... ziureti Mariaus variante padarytam.
    });
}
printResults(postsArr);
