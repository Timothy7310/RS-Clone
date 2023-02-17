import Error from '../pages/error_404/ErrorPage';
import Page from '../pages/Page';
import { IPath, Paths } from './Paths';

export interface IRouter {
    getErrorPage:() => IPath;
    listen: () => void;
    navigateToPage(): void;
    updateCurrentPage(page: Page): void;
    // updateQuery: (query: string) => void;
}

export default class Router implements IRouter {
    paths: IPath[];

    currentPage: Page | null;

    rootElement: Element;

    constructor(rootElement: Element) {
        this.rootElement = rootElement;
        this.currentPage = null;
        this.paths = Paths;
    }

    // eslint-disable-next-line class-methods-use-this
    getErrorPage(): IPath {
        return {
            path: 'Error404',
            getPage: (path?: string) => new Error(path),
        };
    }

    listen(): void {
        window.addEventListener('popstate', () => {
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
        const hashParts = hash.split('/');
        const pathFromHash = [hashParts[0], hashParts[1]].join('/');
        const pathName = this.paths.find((route) => pathFromHash === route.path);

        const id = window.location.hash.split('/').pop();
        if (pathName) {
            const pageContent = pathName.getPage(path, id);
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
}
