// eslint-disable-next-line import/no-cycle
import { backDrop } from '../index';

// eslint-disable-next-line import/no-mutable-exports
export let postDiv;
// eslint-disable-next-line import/no-mutable-exports
export let readMoreBtn;
const modal = document.createElement('div');
export class Post {
  constructor({
    userId, id, title, body,
  }) {
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
    <p>${`${this.body.split(' ').slice(0, 2).join(' ')}...`}</p>
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

  // eslint-disable-next-line class-methods-use-this
  addBackDrop() {
    backDrop.className = 'back-drop';
    document.body.appendChild(backDrop);
  }

  // eslint-disable-next-line class-methods-use-this
  removeModal() {
    modal.classList.add('remove');
  }

  // eslint-disable-next-line class-methods-use-this
  removeBackDrop() {
    backDrop.classList.add('remove');
  }
}
