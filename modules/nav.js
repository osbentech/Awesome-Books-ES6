export default class Navbars {
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

  navbar() {
    this.navList.addEventListener('click', () => {
    this.listSelector.classList.toggle('hidden');
    this.listHeader.classList.toggle('hidden');
    this.disableList();
    if (this.contactSection.classList.contains('hidden')) {
        this.addSection.classList.toggle('hidden');
        } else if (this.addSection.classList.contains('hidden')) {
        this.contactSection.classList.toggle('hidden');
        }
    });

    this.navAdd.addEventListener('click', () => {
        this.addSection.classList.toggle('hidden');
        this.disableAdd();
          if (this.listSelector.classList.contains('hidden')) {
            this.contactSection.classList.toggle('hidden');
          } else if (this.contactSection.classList.contains('hidden')) {
            this.listSelector.classList.toggle('hidden');
            this.listHeader.classList.toggle('hidden');
          }
        });
        this.navContact.addEventListener('click', () => {
          this.contactSection.classList.toggle('hidden');
          this.disableContact();
          if (this.listSelector.classList.contains('hidden')) {
            this.addSection.classList.toggle('hidden');
          } else if (this.addSection.classList.contains('hidden')) {
            this.listSelector.classList.toggle('hidden');
            this.listHeader.classList.toggle('hidden');
          }
        });
      }

      disableList() {
        this.navList.classList.toggle('disable');
        if (this.navAdd.classList.contains('disable')) {
          this.navAdd.classList.toggle('disable');
        } else if (this.navContact.classList.contains('disable')) {
          this.navContact.classList.toggle('disable');
        }
      }
    
      disableAdd() {
        this.navAdd.classList.toggle('disable');
        if (this.navList.classList.contains('disable')) {
          this.navList.classList.toggle('disable');
        } else if (this.navContact.classList.contains('disable')) {
          this.navContact.classList.toggle('disable');
        }
      }
    
      disableContact() {
        this.navContact.classList.toggle('disable');
        if (this.navList.classList.contains('disable')) {
          this.navList.classList.toggle('disable');
        } else if (this.navAdd.classList.contains('disable')) {
          this.navAdd.classList.toggle('disable');
        }
    }
      
}