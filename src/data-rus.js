export const data = {
	fonts: {
		serif: 'Roboto Slab, serif',
		sansSerif: 'Roboto, sans-serif',
	},
	titleBlock: {
		name: 'Андрей Лопатко',
		position: 'Frontend разработчик && React разработчик',
	},
	portrait: {
		src: 'src/images/image.jpeg',
		alt: 'portrait',
	},
	aboutBlock: {
		title: 'Обо мне',
		content: 'Я занимаюсь разработкой приложений и сайтов с использованием React и смежных технологий (таких как Router, Redux, Thunk и т. д.). На базовом уровне владею технологиями backend-разработки (express, Next.js) и React Native. Знаком с технологиями тестирования приложений Java Script. Знаком с C++ и Java, и вообще интересуюсь computer science. Знаю алгоритмы и паттерны проектирования.',
	},
	skillsBlock: {
		title: 'Навыки',
		content: [
			{
				subtitle: 'Базовые навыки',
				items:[
					'HTML5',
					'CSS3',
					'Java Script (ES6+)',
					'TypeScript',
				]
			},
			{
				subtitle: 'Экосистема React',
				items:[
					'React',
					'Redux',
					'Styled Components',
					'Thunk',
				]
			},
			{
				subtitle: 'Технологии тестирования',
				items:[
					'Jest',
					'Enzyme',
					'React Testing Library',
				]
			},
			{
				subtitle: 'Вспомогательные технологии',
				items:[
					'SCSS',
					'Webpack',
					'Git',
					'Github',
				]
			},
			{
				subtitle: 'REST API\'s',
				items:[
					'Google API',
					'Firebase API',
					'MongoDB API',
					'Telegram API',
				]
			},
			{
				subtitle: 'Backend-технологии',
				items:[
					'NodeJS',
					'Express',
					'Web Socket'
				]
			},
		],
	},
	educationBlock: {
		title: 'Образование',
		content:[
			{
				period: '2001 - 2006',
				course: 'Криворожский Национальный университет (инженер-технолог)',
			},
			{
				period: '2008 - 2011',
				course: 'Криворожский Национальный университет (экономика предприятий)',
			},
			{
				period: 'Август 2019',
				course: 'Онлайн курс \"Udemy: Юрий Бура React + Redux - Профессиональная Разработка\"',
			},
			{
				period: 'Октябрь 2019',
				course: 'Онлайн курс \"Webformyself: React с нуля до профи\"',
			},
			{
				period: 'Декабрь 2019',
				course: 'Онлайн курс \"Дмитрий Лаврик: React. Интенсивный курс для программистов\"',
			},
			{
				period: 'Январь 2020',
				course: 'Онлайн курс \"Microsoft: Introduction to React JS\"',
			},
			{
				period: 'Март 2020',
				course: 'Онлайн курс \"MERN - Сокращение Ссылок с Нуля до Деплоя (Mongo, Express, React, Node)\"',
			},
		]
	},
	contactsBlock: {
		title: 'Contacts',
		content: [
			{
				name: 'Локация',
				value: 'Украина, Кривой Рог',
			},
			{
				name: 'Тел., viber',
				value: '+38 (097) 207-45-57',
			},
			{
				name: 'Email',
				value: 'd48564@gmail.com',
			},
			{
				name: 'Github',
				value: 'https://github.com/d00dde',
			},
			{
				name: 'Linkedin',
				value: 'https://www.linkedin.com/in/andrei-lopatko-674b62184',
			},
			{
				name: 'Сайт',
				value: 'https://react-dev.ml',
			},
		]
	},
	languagesBlock: {
		title: 'Языки',
		content: [
			{
				langName: 'Русский',
				degree: 'Носитель',
			},
			{
				langName: 'Украинский',
				degree: 'Носитель',
			},
			{
				langName: 'Английский',
				degree: 'Средний',
			},
		],
	},
	experienceBlock : {
		title: 'Опыт',
		content: [
			'Разработка личного сайта. Использованы технологии: React, Router, Firebase, Github pages.',
			'Разработка приложения, реализующего интеграцию браузерного чата на web socket с Telegram посредством сервера heroku. Использованы технологии: node.js, express, web socket, telegram API, native JS.',
			'Выполнение тестового задания React+Redux разработчика. Использованы технологии: React, Redux, Styled Components, HTML5, Intersection Observer.',
			'Работа над учебным проектом, в котором создаётся REST API сервер на express и клиентское приложение на React, взаимодействующее с сервером. На сервере реализована регистрация пользователей и авторизация с помощью JVT-токена, к серверу подключена удалённая БД MongoDB. Использованы технологии: React, Redux, REST API, Express, JVT, MongoDB API.',
			'Выполнение тестового задания. Использованы технологии React, Google maps API.',
			'Создание приложения, отображающего список отделений "Новой почты" в выбранном городе, и показывающем подробную информацию о выбранном отделении и его местоположение на карте. Использованы технологии: React, google maps API, API Новой почты, Redux.',
			'Создание пет-приложения, реализующего кроме базовой функциональности регистрацию и авторизацию на сервере, разделение прав пользователей, смену языка приложения. Использованы технологии: React, REST API.',
		],
	},
	experienceFootnote: {
		value: 'Все проекты можно найти на  https://github.com/d00dde или https://react-dev.ml',
	}

}
