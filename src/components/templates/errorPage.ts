const errorPageTemplate = (number: number) => `
    <div class="error__textContentError">
        <h2 class="error__textContentError_title">404. Страница не найдена</h2>
        <p class="error__textContentError_message">Возможно, она была перемещена, или вы просто неверно указали адрес
            страницы.</p>
    </div><video class="error__videoContentError" autoplay="" loop="" playsinline=""
        src="https://www.kinopoisk.ru/public/videos/errors/desktop/404/${number}.mp4" width="500"></video>
`;

export default errorPageTemplate;
