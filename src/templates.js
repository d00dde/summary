function createPanel(className, childs) {
	return `
		<div class="${className}">
			${childs.join('')}
		</div>
	`;
}
export function render (leftPanel, rightPanel) {
	const container = document.querySelector('.container');
	container.insertAdjacentHTML("beforeend", createPanel('left-panel', leftPanel));
	container.insertAdjacentHTML("beforeend", createPanel('right-panel', rightPanel));
}
export function createTitleBlock({name, position}) {
	return `
		<div class="title-block">
			<h1 class="name">${name}</h1>
			<h2 class="position">${position}</h2>
		</div>
	`;
}
export function createPortraitBlock({src}) {
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
export function createFlatListBlock ({title, content}, className){
	const list = content.map(createListItem).join('')
	return `
	<div class="block">
		<h2 class="block-title">${title}</h2>
		<ul class="${className}">
			${list}
		</ul>
	</div>
`;
}

export function createTwoTierListBlock ({title, content}, className) {
	let items = [];
	content.forEach((group) => {
		items.push(`
			<h3>${group.subtitle}</h3>
			<ul class="tier-2">
				${group.items.map(createListItem).join('')}
			</ul>
		`);
	});
	return createFlatListBlock({title, content: items}, className);
}

function createListItem (item) {
	if(typeof item !== 'object') {
		return `<li>${item}</li>`;
	}
	const content = Object.keys(item).map((key) => {
		return `<span class="${key}">${item[key]}</span>`;
	}).join('');
	return `
		<li>
			${content}
		</li>
	`;
}
