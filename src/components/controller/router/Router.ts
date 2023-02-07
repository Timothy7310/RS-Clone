import { Error } from "../../pages/error_404/ErrorPage";
import Page from "../../pages/Page";
import { IPath, Paths } from "./Paths";

export interface IRouter {
  getErrorPage:() => IPath;
  listen: () => void;
  navigateToPage(): void;
  updateCurrentPage(page: Page): void;
}

export default class Router {
  paths: IPath[];
  currentPage: Page | null;
  rootElement: Element;

  constructor(rootElement: Element) {
    this.rootElement = rootElement;
    this.currentPage = null;
    this.paths = Paths;
  }

  getErrorPage(): IPath {
    return {
      path: 'Error404',
      getPage: (path?: string) => new Error(path),
    };
  }

  listen(): void {
    window.addEventListener('popstate', (event) => {
      this.navigateToPage();
    });
  }

  navigateToPage(): void {
    let path = '';
    let hash = '';

    [hash, path] = window.location.hash.split('?');

    if (!hash) {
      hash = '#/main';
      window.history.pushState('', '', `${hash}`);
    }

    const pathName = this.paths.find((route) => hash === route.path);
    
    if (pathName) {
      const pageContent = pathName.getPage(path);
      this.updateCurrentPage(pageContent);
    } else {
      const pageContent = this.getErrorPage().getPage(path);
      this.updateCurrentPage(pageContent);
    }
  }

  updateCurrentPage(page: Page): void {
    this.currentPage?.clear();
    this.currentPage = page;
    this.rootElement.append(page.draw());
  }

  //TODO add method to work with Query String
}
