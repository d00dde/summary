import './scss/main.scss';
import { data as dataRus } from './data-rus';
import { data as dataEng } from './data-eng';
import {
	render,
	renderToggleButton,
	createTitleBlock,
	createPortraitBlock,
	createTextBlock,
	createFlatListBlock,
	createTwoTierListBlock,
	createFootnote
} from './templates';

function construct (data) {
	const leftPanel = [];
	leftPanel.push(createPortraitBlock(data.portrait, 'portrait-wrapper'));
	leftPanel.push(createTextBlock(data.aboutBlock, 'about-block'));
	leftPanel.push(createFlatListBlock(data.contactsBlock, 'contacts-list'));
	leftPanel.push(createFlatListBlock(data.languagesBlock, 'languages-list'));

	const rightPanel = [];
	rightPanel.push(createTitleBlock(data.titleBlock, 'title-block'));
	rightPanel.push(createTwoTierListBlock(data.skillsBlock, 'skill-list'));
	rightPanel.push(createFlatListBlock(data.educationBlock,'education-list'));
	rightPanel.push(createFlatListBlock(data.experienceBlock,'experience-list'));
	rightPanel.push(createFootnote(data.experienceFootnote,'experience-footnote'));

	render(leftPanel, rightPanel, data);
}

renderToggleButton(
	{on:
		{title: 'eng', data: dataEng},
		off:{title: 'rus', data: dataRus}
	},
	'switch-lang',
	(data) =>{
		construct (data);
	}
);

construct (dataEng);
