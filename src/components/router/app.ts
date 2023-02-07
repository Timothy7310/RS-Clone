import Router, { IRouter } from "./Router";

const rootElement = document.querySelector('#content');

export default class App {
  router!: IRouter;
  
  constructor() {
    if (rootElement) {
      this.router = new Router(rootElement);
    }
    this.drawContent();
  }
  
  drawContent() {
    this.router.listen();
    this.router.navigateToPage();
  }
}