import ArrayTemplate from './modules/main.js';
import Navbars from './modules/nav.js';

// bookArr starts here
const bookArr = new ArrayTemplate();
bookArr.localCheck();
bookArr.getInfo();
bookArr.addfunction();
bookArr.forLoop();
bookArr.storeInfo();
bookArr.removeFunction();

// navs file starts here
const navx = new Navbars();
navx.navbar();