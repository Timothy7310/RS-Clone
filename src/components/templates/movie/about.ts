import aboutMiddle from './aboutMiddle';
import aboutTop from './aboutTop';
import { TMovie } from './typesMovie';

const about = (movie: TMovie): string => `
<div class="about">
${aboutTop(movie)}
${aboutMiddle(movie)}
</div>`;

export default about;
