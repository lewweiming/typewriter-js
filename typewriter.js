
class TypeWriter {

  constructor() {
    this.startPos = 0;
    this.txt = 'hello'
    this.speed = 50;
    this.el = null
    this.timeout = null; // The timeout function controlling the speed of text
  }

  /* INITIATE */
  type(selector, txt, speed) {
    this.el = document.querySelector(selector);
    this.el.innerHTML = ''; // RESET
    this.startPos = 0;
    clearTimeout(this.timeout);
    this.txt = txt;
    this.speed = speed;
    this.run();
  }

  run() {
    if (this.startPos < this.txt.length) {
      this.el.innerHTML += this.txt.charAt(this.startPos);
      this.startPos++;
      this.timeout = setTimeout(this.run.bind(this), this.speed);
    }
  }
}
