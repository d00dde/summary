function createPanel(className, childs) {
	return `
		<div class="${className}">
			${childs.join('')}
		</div>
	`;
}
function createBlock (title, content, className){
	return `
	<div class="block ${className}">
		<h2 class="block-title">${title}</h2>
		${content}
	</div>
	`
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
function setFonts({serif, sansSerif}) {
	document.body.style.fontFamily = sansSerif;
	document.querySelectorAll('.serif-font').forEach((el)=> {
		el.style.fontFamily = serif;
	});
}
export function renderToggleButton ({on, off}, className, clickHandler) {
	const button = document.createElement('button');
	button.classList.add(className);
	button.dataset.status = 'on';
	button.innerText = on.title;
	button.onclick = () => {
		if(button.dataset.status === 'on') {
			button.dataset.status = 'off';
			button.innerText = off.title;
			clickHandler(off.data);
		} else {
			button.dataset.status = 'on';
			button.innerText = on.title;
			clickHandler(on.data);
		}
	};
	document.body.appendChild(button);
}
export function render (leftPanel, rightPanel, data) {
	const container = document.querySelector('.container');
	container.innerHTML = '';
	container.insertAdjacentHTML("beforeend", createPanel('left-panel', leftPanel));
	container.insertAdjacentHTML("beforeend", createPanel('right-panel', rightPanel));
	setFonts(data.fonts);
}
export function createTitleBlock({name, position}, className) {
	return `
		<div class="${className} serif-font">
			<h1 class="name">${name}</h1>
			<h2 class="position">${position}</h2>
		</div>
	`;
}
export function createPortraitBlock({src, alt}, className) {
	return `
		<div class="${className}">
			<img src="${src}" alt="${alt}" class="portrait">
		</div>
	`;
}
export function createTextBlock({title, content}, className) {
	return createBlock(
		title,
		`<p>${content}</p>`,
		className
	);
}

export function createFlatListBlock ({title, content}, className){
	const list = content.map(createListItem).join('')
	return createBlock(
		title,
		`<ul class="tier-1">
			${list}
		</ul>`,
		className
	);
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

export function createFootnote ({value}, className) {
	return `
		<div class="${className}">
			<span>${value}</span>
		</div>
	`;
}
