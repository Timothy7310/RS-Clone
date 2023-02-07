import Page from "../Page";
import { Cash } from "./sections/Cash";
import { Popular } from "./sections/Popular";
import { Soon } from "./sections/soon";
import { Tickets } from "./sections/Tickets";

export class Main extends Page {
  popular: Popular;
  tickets: Tickets;
  soon: Soon;
  cash: Cash;

  constructor(path?: string) {
    super(path);
    this.popular = new Popular();
    this.tickets = new Tickets();
    this.soon = new Soon();
    this.cash = new Cash();
  }

  draw(): HTMLElement {
    this.container.appendChild(this.popular.draw());
    this.container.appendChild(this.tickets.draw());
    this.container.appendChild(this.soon.draw());
    this.container.appendChild(this.cash.draw());

    this.container.classList.add('main');
    return this.container;
  }

  clear(): void {
    super.clear();
  }
}