import ArrayTemplate from './modules/main.js';
import Navbars from './modules/nav.js';
import TimeDate from './modules/time.js';

// bookArr starts here
const bookArr = new ArrayTemplate();
bookArr.localCheck();
bookArr.getInfo();
bookArr.forLoop();
bookArr.storeInfo();
bookArr.removeFunction();
bookArr.addfunction();

// navs file starts here
const navx = new Navbars();
navx.navbar();

const y = new TimeDate();
y.setDate();