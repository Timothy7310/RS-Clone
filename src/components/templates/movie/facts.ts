import oneFact from './oneFact';

const facts = (allFacts: string[]): string => `
<h3 class="facts__title">
    <a href="#">Знаете ли вы, что…</a>
</h3>
<ul class="facts__list">
    ${allFacts.map((fact) => oneFact(fact)).join('')}
</ul>
`;

export default facts;
