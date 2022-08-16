export default class TimeDate {
    constructor() {
        this.time = document.querySelector('.time');
    }

    setDate() {
      const date = new Date();
      this.time.innerHTML = date.toLocaleString('en-US');
    }
}