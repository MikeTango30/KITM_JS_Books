'use strict';

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

//Console Output
for(let catalog of bookCatalog) {
    let booksLtWord = pickLtBooksWord(catalog.books.length);
    console.log(catalog.category + ' (' + catalog.books.length + booksLtWord);
    console.log(':');
    for (let book of catalog.books) {
                console.log('ISBN: ' + book.isbn);
                book.year === "2019" ?
                    console.log('Leidimo metai: ' + book.year + newBook) :
                    console.log('Leidimo metai: ' + book.year);
                console.log('Pavadinimas: ' + book.title);
                console.log('Puslapių skaičius: ' + book.pages);
                console.log(' ');
        }
    console.log('---------------------------');
    console.log(' ');
}