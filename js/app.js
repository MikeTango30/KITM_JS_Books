'use strict';

//VAT
const VAT = 1.21;
const VAT_STRING = ((VAT - 1)*100).toFixed(0);

//Books Repository
let bookCatalog =
[
    {
        category: 'Sunkioji mokslinė fantastika',
        books: [
            {
                isbn: '978-7-5366-9293-0',
                year: '2008',
                title: 'The Three Body Problem',
                pages: '302'
            },
            {
                isbn: '978-1784971595',
                year: '2008',
                title: 'The Dark Forest',
                pages: '400'
            },
            {
                isbn: '978-0765377104',
                year: '2010',
                title: 'Death\'s End',
                pages: '592'
            },
            {
                isbn: '0-575-08887-7',
                year: '2010',
                title: 'The Quantum Thief',
                pages: '336'
            },
            {
                isbn: '0-575-08891-5',
                year: '2012',
                title: 'The Fractal Prince',
                pages: '448'
            },
            {
                isbn: '9780765329516',
                year: '2014',
                title: 'The Causal Angel',
                pages: '304'
            }
        ]
    },
    {
        category: 'Kosmoso opera',
        books:
        [
            {
                isbn: '978-0-316-33287-3',
                year: '2019',
                title: 'Tiamat\'s Wrath',
                pages: '544'
            },
            {
                isbn: '978-0-7653-8888-9',
                year: '2017',
                title: 'The Collapsing Empire',
                pages: '336'
            },
            {
                isbn: '978-0-7653-8897-1',
                year: '2018',
                title: 'The Consuming Fire',
                pages: '320'
            },
            {
                isbn: '978-1570900440',
                year: '1997',
                title: 'Birthright: The Book of Man',
                pages: '287'
            }
        ]
    },
    {   category: 'Karinė mokslinė fantastika',
        books:
        [
            {
                isbn: '0-7653-0940-8',
                year: '2005',
                title: 'Old Man\'s War',
                pages: '320'
            },
            {
            isbn: '9780765354068',
            year: '2006',
            title: 'The Ghost Brigades',
            pages: '384'
            }
        ]
    }
];

//Pick correct Lt measure for books qty in category
function pickLtBooksWord(number) {
    let booksLtWord = '';
    switch (number % 10){
        case 0:
            booksLtWord = ' knygų)';
            break;
        case 1:
            booksLtWord = ' knyga)';
            break;
        default:
            booksLtWord = ' knygos)';
    }

    return booksLtWord;
}

let newBook = ' (nauja knyga)';

//book output abstraction
function outputBook(book) {
    if (book.price) {
        console.log("Kaina: " + book.price + " (su PVM " + VAT_STRING + "%)");
    }
    console.log('ISBN: ' + book.isbn);
    book.year === "2019" ?
        console.log('Leidimo metai: ' + book.year + newBook) :
        console.log('Leidimo metai: ' + book.year);
    console.log('Pavadinimas: ' + book.title);
    console.log('Puslapių skaičius: ' + book.pages);
    console.log(' ');
}

// //Initial catalog Console Output
// console.log("INITIAL BOOK CATALOG OUTPUT");
// for(let catalog of bookCatalog) {
//     let booksLtWord = pickLtBooksWord(catalog.books.length);
//     console.log(catalog.category + ' (' + catalog.books.length + booksLtWord);
//     console.log(':');
//     for (let book of catalog.books) {
//                 outputBook(book);
//         }
//     console.log('---------------------------');
//     console.log(' ');
// }
//----------------------------------------------------------------------------------

//add new property 'price', assign rng value and VAT
for(let catalog of bookCatalog) {
    for (let book of catalog.books) {
        Object.assign(book, { price: ((Math.random() * (0.00 - 5.55) + 20)*VAT).toFixed(2) });
    }
}

//sort by title
for(let catalog of bookCatalog) {
        catalog.books.sort(function(a, b) {
            let bookA = a.title.toLowerCase();
            let bookB = b.title.toLowerCase();
            if (bookA < bookB) {
                return -1;
            }
            if (bookA > bookB) {
                return 1;
            }

            return 0;
        });
}

// //Console Output Sorted
// console.log("##### SORTED CATALOG OF BOOKS BY TITLE #####");
// for(let catalog of bookCatalog) {
//     let booksLtWord = pickLtBooksWord(catalog.books.length);
//     console.log(catalog.category + ' (' + catalog.books.length + booksLtWord);
//     console.log(':');
//     for (let book of catalog.books) {
//                 outputBook(book);
//         }
//     console.log('---------------------------');
//     console.log(' ');
// }

// find min/max priced book
function getPricesByCategory(bookCatalog) {
    let bookPrices = [];

    for(let book of bookCatalog) {
            bookPrices.push(book.price);
    }

    return bookPrices;
}

function getAllPrices(bookCatalog) {
    let prices = [];
    for (let catalog of bookCatalog) {
        for (let book of catalog.books) {
            prices.push(book.price);
        }
    }

    return prices;
}

function getBookByPrice(book, price) {
    return book.price === price;
}

function outputBooksByPriceInCategory(bookCatalog, cheapest = true) {
    let prices = [];
    for (let catalog of bookCatalog) {
        prices = getPricesByCategory(catalog.books);
        let price = cheapest ?
            Math.min(...prices).toString() :
            Math.max(...prices).toString();
        for(let book of catalog.books) {
            if (getBookByPrice(book, price)) {
                console.log(catalog.category);
                console.log(":");
                outputBook(book);
            }
        }
    }
}

function outputBookByPrice(bookCatalog, cheapest = true) {
    let prices = getAllPrices(bookCatalog);
    for (let catalog of bookCatalog) {
        for (let book of catalog.books) {
            let price = cheapest ?
                Math.min(...prices).toString() :
                Math.max(...prices).toString();
            if (getBookByPrice(book, price)) {
                outputBook(book);
            }
        }
    }
}

// Console Output
// //########################################################
// //Cheapest/Most Expensive output
// console.log("##### CHEAPEST BOOK IN EACH CATEGORY #####");
// outputBooksByPriceInCategory(bookCatalog);
//
// console.log("##### MOST EXPENSIVE BOOK IN EACH CATEGORY #####");
// outputBooksByPriceInCategory(bookCatalog, false);
//
// console.log("##### CHEAPEST BOOK OVERALL #####");
// outputBookByPrice(bookCatalog);
//
// console.log("##### MOST EXPENSIVE BOOK OVERALL #####");
// outputBookByPrice(bookCatalog, false);

function select(selector) {
    return document.querySelector(selector);
}

function log(variable) {
    return console.log(variable);
}

//Accordion

const headingOne = select('#headingOne button');
const headingTwo = select('#headingTwo button');
const headingThree = select('#headingThree button');

let accordionHeadings = [];
accordionHeadings.push(headingOne);
accordionHeadings.push(headingTwo);
accordionHeadings.push(headingThree);

const collapseOne = select('#collapseOne .card-body');
const collapseTwo = select('#collapseTwo .card-body');
const collapseThree = select('#collapseThree .card-body');

let accordionBodies = [];
accordionBodies.push(collapseOne);
accordionBodies.push(collapseTwo);
accordionBodies.push(collapseThree);

let i = 0;
for (let catalog of bookCatalog) {
    accordionHeadings[i].textContent = catalog.category;
    const bookList =document.createElement('ul');
    for(let book of catalog.books) {
        let bookTitle = (book.title);
        const bookInList = document.createElement('li');
        bookInList.textContent = bookTitle;
        accordionBodies[i].appendChild(bookInList);
    }
    i++;
}

//Feature: SEARCH
//#######################################################
const searchString = select('search.input');


function findBook(bookCatalog, searchString){
    let found = false;
    let nothingFound = true;
    searchString.toLowerCase();

    for(let catalog of bookCatalog) {
        for (let book of catalog.books) {
            for(let [, value] of Object.entries(book)){
                if (value.toLowerCase().search(searchString) >= 0) {
                    found = true;
                    nothingFound = false;
                }
            }
            if (found) {
                outputBook(book);

                found = false;
            }
        }
    }
    if(nothingFound) {
        console.log("Tokių blogų, neįdomių ir neskaitomų knygų čia nėra!");
    }
}
findBook(bookCatalog, searchString);

