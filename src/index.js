'use strict';

const BOOKS = {
	fantazy: [
		{
			id: 1,
			title: 'The Lord of the Rings',
			author: 'J.R.R. Tolkien',
			year: 1954,
		},
		{
			id: 2,
			title: 'A Song of Ice and Fire',
			author: 'George R.R. Martin',
			year: 1996,
		},
		{
			id: 3,
			title: 'Fourth Wing',
			author: 'Rebecca Yarros',
			year: 2023,
		},
		{
			id: 4,
			title: 'The Earthsea Quartet',
			author: 'Ursula K. Le Guin',
			year: 1993,
		},
		{
			id: 5,
			title: 'Percy Jackson and the Olympians',
			author: 'Rick Riordan',
			year: 2005,
		},
	],
	scienceFiction: [
		{
			id: 1,
			title: 'Dune',
			author: 'Frank Herbert',
			year: 1965,
		},
		{
			id: 2,
			title: 'Stranger in a Strange Land',
			author: 'Robert Heinlein',
			year: 1961,
		},
		{
			id: 3,
			title: 'Neuromancer',
			author: 'William Gibson',
			year: 1984,
		},
		{
			id: 4,
			title: 'Foundation',
			author: 'Isaac Asimov',
			year: 1951,
		},
		{
			id: 5,
			title: '1984',
			author: 'George Orwell',
			year: 1949,
		},
	],
};

const {fantazy: [, , thirdBook],  scienceFiction: [, , , {author: writer}]} = BOOKS;
console.log(thirdBook);
console.log(writer);