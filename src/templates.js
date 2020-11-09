export function createPanel(className, childs) {
	return `
		<div class="${className}">
			${childs.join('')}
		</div>

	`;
}
export function createTitle({name, position}) {
	return `
		<div class="title-block">
			<h1 class="name">${name}</h1>
			<h2 class="position">${position}</h2>
		</div>
	`;
}
export function createPortrait({src}) {
	return `
		<div class="portrait-wrapper">
			<img src="${src}" alt="portrait" class="portrait">
		</div>
	`;
}
export function createTextBlock({title, content}) {
	return `
		<div class="block">
			<h2 class="block-title">${title}</h2>
			<p>${content}</p>
		</div>
	`;
}
function createList (title, content, type){
	return `
	<div class="block">
		<h2 class="block-title">${title}</h2>
		<ul class="${type}">
			${content}
		</ul>
	</div>
`;
}
function createListItem (item) {
	return `<li>${item}</li>`;
}
export function createTwoTierListBlock ({title, content}) {
	let items = [];
	content.forEach((group) => {
		items.push(`
			<li>
				<h3>${group.subtitle}</h3>
				<ul class="tier-2">
					${group.items.map(createListItem).join('')}
				</ul>
			</li>
		`);
	});
	return createList(title, items.join(''), 'two-tiers-list');
}

function createEducationItem ({period, course}) {
	return `
		<li>
			<span class="period">${period}</span>
			<span class="course">${course}</span>
		</li>
	`;
}
export function createEducationBlock({title, content}) {
	return createList(title, content.map(createEducationItem).join(''), 'education-list');
}
