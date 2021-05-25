import { postsArr } from './posts';
// eslint-disable-next-line import/no-cycle
import { printResults } from '../index';

const inputVal = document.getElementById('inputVal');
const mainDiv = document.querySelector('.app');
// eslint-disable-next-line import/prefer-default-export
export class Functions {
  static submitValidation() {
    mainDiv.textContent = '';
    if (Number.isNaN(inputVal.value) || +inputVal.value > postsArr.length || inputVal.value === '') {
      throw new Error('Iveskite skaiciu, nedidesni nei straipsniu kiekis');
    } else {
      const updatedPostsArr = postsArr.slice(0, inputVal.value);
      printResults(updatedPostsArr);
    }
  }

  static filteredUser3() {
    mainDiv.textContent = '';
    const updatedPostsArr = postsArr.filter(({ userId }) => userId === 3);
    printResults(updatedPostsArr);
  }

  static filteredUser4() {
    mainDiv.textContent = '';
    const updatedPostsArr = postsArr.filter(({ userId }) => userId === 4);
    printResults(updatedPostsArr);
  }
}
