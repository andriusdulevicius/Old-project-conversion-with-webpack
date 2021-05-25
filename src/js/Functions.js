import { postsArr } from './posts.js';
import { printResults } from '../index.js';
const inputVal = document.getElementById('inputVal');
export class Functions {
    static mainDiv = document.querySelector('.app');
    static submitValidation() {
        Functions.mainDiv.textContent = '';
        if (isNaN(inputVal.value) || +inputVal.value > postsArr.length || inputVal.value === '')
            alert('Iveskite skaiciu, nedidesni nei straipsniu kiekis');
        else {
            let updatedPostsArr = postsArr.slice(0, inputVal.value);
            printResults(updatedPostsArr);
        }
    }

    static filteredUser3() {
        Functions.mainDiv.textContent = '';
        let updatedPostsArr = postsArr.filter(({ userId }) => userId === 3);
        printResults(updatedPostsArr);
    }
    static filteredUser4() {
        Functions.mainDiv.textContent = '';
        let updatedPostsArr = postsArr.filter(({ userId }) => userId === 4);
        printResults(updatedPostsArr);
    }
}
