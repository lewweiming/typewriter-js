
class TypeWriter {

  constructor() {
    this.startPos = 0;
    this.txt = 'hello'
    this.speed = 50;
    this.el = null
  }

  /* INITIATE */
  type(selector, txt, speed) {
    this.el = document.querySelector(selector);
    this.el.innerHTML = ''; // RESET
    this.txt = txt;
    this.speed = speed;
    this.run();
  }

  run() {
    if (this.startPos < this.txt.length) {
      this.el.innerHTML += this.txt.charAt(this.startPos);
      this.startPos++;
      setTimeout(this.run.bind(this), this.speed);
    }
  }
}
