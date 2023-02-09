import './index.html';
import './scss/main.scss';
import App from './components/router/app';

// For example
import Controller from './components/controller/controller';

const controller = new Controller();

const movie = await controller.searchMovie('326', 'id');
const test = movie.poster;

console.log(movie);
console.log(test);

// eslint-disable-next-line no-new
new App();
