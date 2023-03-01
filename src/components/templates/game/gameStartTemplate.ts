const gameStartTemplate = `
<h2 class="quiz-start__title">
    Викторина
</h2>
<div class="quiz-start__content">
    <div class="quiz-start__content_greeting">
        Предлагаем вам немного расслабиться и проверить себя. 
        Насколько вы знаете фильмы из нашего 
        <a href="#/movies" class="quiz-start__content_greeting_link">топ 250?</a>
    </div>
    <div class="quiz-start__content_description">
        Угадайте что это за фильм по случайному кадру.
    </div>
    <a href="#/game">
        <button class="quiz-button">Начать игру</button>
    </a>
</div>
`;

export default gameStartTemplate;
