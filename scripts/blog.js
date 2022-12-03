const cardContainer = document.querySelector('.blog__cards');
const blogCardTemplate = document.querySelector('#blogCardTemplate').content;

function copyBlogCard(type, date, image, title, description) {
	const blogCardElement = blogCardTemplate.querySelector('.blog-card').cloneNode(true);
	const cardTypeBackground = blogCardElement.querySelector('.blog-card__type');

	if (type === 'Статистика') {
		cardTypeBackground.style.background = '#00FFFA';
	} else if (type === 'Разбор') {
		cardTypeBackground.style.background = '#FFA923';
	}

	blogCardElement.querySelector('.blog-card__type-text').textContent = type;
	blogCardElement.querySelector('.blog-card__date').textContent = date;
	blogCardElement.querySelector('.blog-card__image').src = image;
	blogCardElement.querySelector('.blog-card__image').alt = title;
	blogCardElement.querySelector('.blog-card__title').textContent = title;
	blogCardElement.querySelector('.blog-card__description').textContent = description;

	return blogCardElement;
}

function createBlogCard(type, date, image, title, description) {
	const blogCardElement = copyBlogCard(type, date, image, title, description);
	cardContainer.append(blogCardElement);
}

const initialCards = [
	{
		type: 'Статистика',
		date: '7 июля 2021',
		image: 'images/blog/russiaandcharity.png',
		title: 'Россияне и благотворительность',
		description: 'Что статистика знает о добрых делах'
	},
	{
		type: '',
		date: '7 июля 2021',
		image: 'images/blog/mshpf.png',
		title: 'Выпускной МШПФ 3.0',
		description: 'Выпуск уже третьего набора Московской Школы Профессиональной Филантропии'
	},
	{
		type: 'Разбор',
		date: '7 июля 2021',
		image: 'images/blog/charityinrussia.png',
		title: 'Благотворительность в России',
		description: 'Как работает благотворительность в России: кто, как, почему и сколько жертвует другим'
	},
	{
		type: '',
		date: '7 июля 2021',
		image: 'images/blog/donation.png',
		title: 'Кому жертвуют в России?',
		description: 'Самые частые случаи благотворительности — поддержка детей, религиозных ..'
	},
	{
		type: '',
		date: '7 июля 2021',
		image: 'images/blog/happybirthday.png',
		title: 'День рождения фонда «Друзья»',
		description: 'День, в который собрались все друзья фонда.'
	}
];

initialCards.forEach(function (element) {
	const items = Object.keys(element);
	const type = element[items[0]];
	const date = element[items[1]];
	const image = element[items[2]];
	const title = element[items[3]];
	const description = element[items[4]];
	createBlogCard(type, date, image, title, description);
})
