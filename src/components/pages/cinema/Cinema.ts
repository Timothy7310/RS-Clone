import Page from "../Page";

export class Cinema extends Page {

  constructor(path?: string) {
    super(path);
  }

  draw(): HTMLElement {
    const title = document.createElement('p');
    title.textContent = 'Тут будет страница сеансов кино в кинотеатре';
    this.container.appendChild(title);
    
    this.container.classList.add('cinema', 'container');
    return this.container;
  }

  clear(): void {
    super.clear();
  }
}