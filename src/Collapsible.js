export default class Collapsible {
  constructor(container) {
    this.container = container;
    this.button = container.querySelector(".collapsible__btn");
    this.content = container.querySelector(".collapsible__content");

    this.content.style.maxHeight = "0px";

    this.button.addEventListener("click", () => this.toggle());
  }

  toggle() {
    const content = this.content;

    if (content.classList.contains("open")) {
      content.style.maxHeight = "0px";
      content.classList.remove("open");
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.classList.add("open");
    }
  }
}
