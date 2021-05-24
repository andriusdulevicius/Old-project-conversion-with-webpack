export class Functions {
    static submitValidation() {
        mainDiv.textContent = '';
        if (isNaN(inputVal.value) || +inputVal.value > postsArr.length || inputVal.value === '')
            alert('Iveskite skaiciu, nedidesni nei straipsniu kiekis');
        else {
            let updatedPostsArr = postsArr.slice(0, inputVal.value);
            printResults(updatedPostsArr);
        }
    }

    static filteredUser3() {
        mainDiv.textContent = '';
        let updatedPostsArr = postsArr.filter(({ userId }) => userId === 3);
        printResults(updatedPostsArr);
    }
    static filteredUser4() {
        mainDiv.textContent = '';
        let updatedPostsArr = postsArr.filter(({ userId }) => userId === 4);
        printResults(updatedPostsArr);
    }
}
