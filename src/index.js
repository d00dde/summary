import './scss/main.scss';
import { data } from './data';
import {
	createPanel,
	createTitle,
	createPortrait,
	createTextBlock,
	createTwoTierListBlock,
	createEducationBlock,
} from './templates';

const leftPanel = [];
leftPanel.push(createPortrait(data.portrait));
leftPanel.push(createTextBlock(data.aboutBlock));

const rightPanel = [];
rightPanel.push(createTitle(data.titleBlock));
rightPanel.push(createTwoTierListBlock(data.skillsBlock));
rightPanel.push(createEducationBlock(data.educationBlock));

const container = document.querySelector('.container');
container.insertAdjacentHTML("beforeend", createPanel('left-panel', leftPanel));
container.insertAdjacentHTML("beforeend", createPanel('right-panel', rightPanel));
