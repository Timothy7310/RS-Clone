function getScore(data: string) {
    if (Number(data) === 50) {
        const message = 'Игра окончена! Поздравляем, в настоящий киноман! Вы набрали максимальное количество очков';
        return message;
    }
    if (Number(data) < 50 && Number(data) > 40) {
        const message = 'Игра окончена! Поздравляем! Вы смотрите много фильмов и наверняка хорошо в них разбираетесь';
        return message;
    }
    if (Number(data) < 40 && Number(data) > 30) {
        const message = 'Игра окончена! А вы точно заглядывали в наш топ фильмов?';
        return message;
    }
    if (Number(data) < 30 && Number(data) > 20) {
        const message = 'Игра окончена! Ну хоть Титаник то вы смотрели?';
        return message;
    }
    if (Number(data) < 20 && Number(data) > 10) {
        const message = 'Игра окончена! Ну... Это еще не самый плохой результат';
        return message;
    }
    if (Number(data) < 10 && Number(data) > 0) {
        const message = 'Игра окончена! Уверены, если начнете смотреть фильмы, то скоро справитесь с этой игрой';
        return message;
    }
    return 'Игра окончена!';
}

// repeatButton.addEventListener('click', clearStorage);

const gameFinishTemplate = (data: string): string => `
<h2 class="quiz-finish__title">
    Викторина
</h2>
<div class="quiz-finish__content">
    <div class="quiz-finish__content_greeting">
        ${getScore(data)}
        <div class="quiz-finish__content_greeting_score">
            Ваш результат: ${data}/50!
        </div>
    </div>
    <a href="#/game">
        <button class="quiz-button">Попробовать еще</button>
    </a>
</div>
`;

export default gameFinishTemplate;
