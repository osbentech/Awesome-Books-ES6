/* eslint-disable max-classes-per-file */

export default class ArrayTemplate {
  constructor() {
  this.titleSelector = document.querySelector('.title');
  this.authorSelector = document.querySelector('.author');
  this.addSelector = document.querySelector('.btn');
  this.listSelector = document.querySelector('.list');
  this.navList = document.getElementById('link1');
  this.navAdd = document.getElementById('link2');
  this.navContact = document.getElementById('link3');
  this.listHeader = document.querySelector('.header');
  this.contactSection = document.querySelector('.contact-info');
  this.addSection = document.querySelector('.form');
  this.titleArr = [];
  this.authorArr = [];
  this.buttonArr = [];
  this.bookElement = [];
  this.books = [];
  this.bookInfo = {};
  this.by = [];
  }
  
  getInfo() {
    const obtainedInfo = JSON.parse(localStorage.getItem('book'));
      for (let i = 0; i < obtainedInfo.length; i += 1) {
        this.books.push(obtainedInfo[i]);
      }
    }
  
  forLoop() {
    for (let i = 0; i < this.books.length; i += 1) {
      this.bookElement[i] = document.createElement('div');
      this.listSelector.appendChild(this.bookElement[i]);
      this.bookElement[i].classList.add('bookbox');
      this.titleArr[i] = document.createElement('h2');
      this.authorArr[i] = document.createElement('p');
      this.by[i] = document.createElement('span');
      this.by[i].classList.add('span');
      this.bookElement[i].appendChild(this.titleArr[i]);
      this.bookElement[i].appendChild(this.by[i]);
      this.bookElement[i].appendChild(this.authorArr[i]);
      this.titleArr[i].textContent = `"${this.books[i].title}"`;
      this.by[i].textContent = 'by';
      this.authorArr[i].textContent = `${this.books[i].author}`;
      this.buttonArr[i] = document.createElement('button');
      this.buttonArr[i].classList.add('remove-button');
      this.buttonArr[i].textContent = 'Remove 🗑';
      this.bookElement[i].appendChild(this.buttonArr[i]);
    }
  }
  
  storeInfo() {
    this.bookInfo.title = this.titleSelector.value;
      this.bookInfo.author = this.authorSelector.value;
      localStorage.setItem('book', JSON.stringify(this.books));
  }
  
  addfunction() {
    this.addSelector.addEventListener('click', () => {
      if (this.titleSelector.value !== '' && this.authorSelector.value !== '') {
        const newBook = {};
        this.storeInfo();
        newBook.title = this.titleSelector.value;
        newBook.author = this.authorSelector.value;
        this.titleSelector.value = '';
        this.authorSelector.value = '';
        this.listSelector.textContent = '';
        this.books.push(newBook);
        localStorage.setItem('book', JSON.stringify(this.books));
        for (let i = 0; i < this.books.length; i += 1) {
          this.bookElement[i] = document.createElement('div');
          this.listSelector.appendChild(this.bookElement[i]);
          this.bookElement[i].classList.add('bookbox');
          this.titleArr[i] = document.createElement('h2');
          this.authorArr[i] = document.createElement('p');
          this.by[i] = document.createElement('span');
          this.by[i].classList.add('span');
          this.bookElement[i].appendChild(this.titleArr[i]);
          this.bookElement[i].appendChild(this.by[i]);
          this.bookElement[i].appendChild(this.authorArr[i]);
          this.titleArr[i].textContent = `"${this.books[i].title}"`;
          this.by[i].textContent = 'by';
          this.authorArr[i].textContent = `${this.books[i].author}`;
          this.buttonArr[i] = document.createElement('button');
          this.buttonArr[i].classList.add('remove-button');
          this.buttonArr[i].textContent = 'Remove 🗑';
          this.bookElement[i].appendChild(this.buttonArr[i]);
        }
      }
    });
  }
  
  removeItem(item) {
    this.books = this.books.filter((el) => `"${el.title}"` !== item.textContent);
    localStorage.setItem('book', JSON.stringify(this.books));
  }
  
  removeFunction() {
    const x = document.getElementsByClassName('list')[0];
    x.addEventListener('click', (e) => {
      if (e.target.textContent === 'Remove 🗑') {
        this.removeItem(e.target.parentElement.firstChild);
        e.target.parentElement.remove();
      }
    });
  }
  
  localCheck() {
    if (!localStorage.getItem('book')) {
      ocalStorage.setItem('book', JSON.stringify(this.bookInfo));
    }
  }
  
}

  
  