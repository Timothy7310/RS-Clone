import Page from "../Page";
import { ErrorContent } from "./ErrorContent";

export class Error extends Page {
  content: ErrorContent;

  constructor(path?: string) {
    super(path);
    this.content = new ErrorContent();
  }

  draw(): HTMLElement {
    this.container.appendChild(this.content.draw());
    this.container.classList.add('error_404');
    return this.container;
  }

  clear(): void {
    super.clear();
    this.content.clear();
  }
}