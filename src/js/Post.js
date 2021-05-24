export default class Post {
    constructor({ userId, id, title, body }) {
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.body = body;
    }

    generateHtml() {
        postDiv = document.createElement('div');
        readMoreBtn = document.createElement('button');
        readMoreBtn.className = 'read-more';
        readMoreBtn.textContent = 'Read more...';
        postDiv.className = 'post';
        postDiv.innerHTML = `<h2>${this.title}</h2>
    <p>${this.body.split(' ').slice(0, 2).join(' ') + '...'}</p>
    <h4>User id: ${this.userId}</h4>`;
        postDiv.appendChild(readMoreBtn);
        return postDiv;
    }

    addModal() {
        modal.className = 'modal';
        modal.innerHTML = `<h2>${this.title}</h2>
    <p>${this.body}</p>`;
        document.body.appendChild(modal);
    }
    addBackDrop() {
        backDrop.className = 'back-drop';
        document.body.appendChild(backDrop);
    }
    removeModal() {
        modal.classList.add('remove');
    }
    removeBackDrop() {
        backDrop.classList.add('remove');
    }
}
