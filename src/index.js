import './scss/main.scss';
import { data } from './data';
import {
	render,
	createTitleBlock,
	createPortraitBlock,
	createTextBlock,
	createFlatListBlock,
	createTwoTierListBlock,
} from './templates';

const leftPanel = [];
leftPanel.push(createPortraitBlock(data.portrait));
leftPanel.push(createTextBlock(data.aboutBlock));
leftPanel.push(createFlatListBlock(data.contactsBlock, 'contacts-list'));
leftPanel.push(createFlatListBlock(data.languagesBlock, 'languages-list'));

const rightPanel = [];
rightPanel.push(createTitleBlock(data.titleBlock));
rightPanel.push(createTwoTierListBlock(data.skillsBlock, 'skill-list'));
rightPanel.push(createFlatListBlock(data.educationBlock,'education-list'));

render(leftPanel, rightPanel);
