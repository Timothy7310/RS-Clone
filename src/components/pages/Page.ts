export default class Page {
    container: HTMLElement;

    path: string;
  
    constructor(path?: string) {
      this.container = document.createElement('div');
      if (path) {
        this.path = path;
      } else {
        this.path = '';
      }
    }
  
    draw(): HTMLElement {
      this.container.insertAdjacentHTML('afterbegin', this.path);
      return this.container;
    }
  
    clear(): void {
      this.container.remove();
    }
  }