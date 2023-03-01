const tableLine = (title: string, text: string | number): string => `
<div class="about__middle_movie_table_line">
    <div class="about__middle_movie_table_line_title">${title}</div>
    <div class="about__middle_movie_table_line_text">${text}</div>
</div>`;

export default tableLine;
