'use strict';

let bookCatalog =
[
    {
        hard_science_fiction: //'Sunkioji mokslinė fantastika'
        [
            {
                book:
                {
                isbn: '978-7-5366-9293-0',
                year: '2008',
                title: 'The Three Body Problem',
                pages: '302'
                }
            },
            {
                book:
                {
                isbn: '978-1784971595',
                year: '2008',
                title: 'The Dark Forest',
                pages: '400'
                }
            },
            {
                book:
                {
                isbn: '978-0765377104',
                year: '2010',
                title: 'Death\'s End',
                pages: '592'
                }
            },
            {
                book:
                {
                isbn: '0-575-08887-7',
                year: '2010',
                title: 'The Quantum Thief',
                pages: '336'
                }
            },
            {
                book:
                {
                isbn: '0-575-08891-5',
                year: '2012',
                title: 'The Fractal Prince',
                pages: '448'
                }
            },
            {
                book:
                {
                isbn: 	'9780765329516',
                year: '2014',
                title: 'The Causal Angel',
                pages: '304'
                }
            }
        ],
        space_opera:
        [
            {
                book:
                {
                isbn: '978-0-316-33287-3',
                year: '2019',
                title: 'Tiamat\'s Wrath',
                pages: '544'
                },
            },
            {
                book:
                {
                isbn: '978-0-7653-8888-9',
                year: '2017',
                title: 'The Collapsing Empire',
                pages: '336'
                }
            },
            {
                book:
                {
                isbn: '978-0-7653-8897-1',
                year: '2018',
                title: 'The Consuming Fire',
                pages: '320'
                }
            },
            {
                book:
                {
                isbn: '978-1570900440',
                year: '1997',
                title: 'Birthright: The Book of Man',
                pages: '287'
                }
            }
        ],
        military_science_fiction:
        [
            {
                book:
                {
                isbn: '0-7653-0940-8',
                year: '2005',
                title: 'Old Man\'s War',
                pages: '320'
                }
            },
            {
                book:
                {
                isbn: '9780765354068',
                year: '2006',
                title: 'The Ghost Brigades',
                pages: '384'
                }
            }
        ]
    }
];

for(let catalog of bookCatalog) {
    for (let [category, entry] of Object.entries(catalog)){
        console.log(' ');
        entry.length === 0 || entry.length >= 10 ?
            console.log(category + ' (' + entry.length + ' knygų)') :
            console.log(category + ' (' + entry.length + ' knygos)');
        console.log(':');
        for (let [, properties] of Object.entries(Object(entry))) {
            console.log('ISBN: ' + properties.book.isbn);
            properties.book.year === "2019" ?
                console.log('Leidimo metai: ' + properties.book.year + ' (nauja knyga)') :
                console.log('Leidimo metai: ' + properties.book.year);
            console.log('Pavadinimas: ' + properties.book.title);
            console.log('Puslapių skaičius: ' + properties.book.pages);
            console.log("------------------");
        }
    }
}



// for(let catalog of bookCatalog){
//     console.log('Sunkioji mokslinė fantastika (' + catalog.hard_science_fiction.length + ' knygų)');
//     console.log(':');
//     for(let category of catalog.hard_science_fiction){
//         console.log(category.book.isbn);
//         console.log('ISBN: ' + category.book.isbn);
//         if(category.book.year === "2019"){
//             console.log('Leidimo metai: ' + category.book.year + ' (nauja knyga)');
//         } else {
//             console.log('Leidimo metai: ' + category.book.year);
//         }
//         console.log('Pavadinimas: ' + category.book.title);
//         console.log('Puslapių skaičius: ' + category.book.pages);
//         console.log("------------------");
//     }
//     console.log(' ');
//     console.log('Kosmoso opera (' + catalog.space_opera.length + ' knygų)');
//     console.log(':');
//     for(let category of catalog.space_opera){
//         console.log(category.book.isbn);
//         console.log('ISBN: ' + category.book.isbn);
//         if(category.book.year === "2019"){
//             console.log('Leidimo metai: ' + category.book.year + ' (nauja knyga)');
//         } else {
//             console.log('Leidimo metai: ' + category.book.year);
//         }
//         console.log('Pavadinimas: ' + category.book.title);
//         console.log('Puslapių skaičius: ' + category.book.pages);
//         console.log("------------------");
//     }
//     console.log(' ');
//     console.log('Karinė mokslinė fantastika (' + catalog.military_science_fiction.length + ' knygų)');
//     console.log(':');
//     for(let category of catalog.military_science_fiction){
//         console.log(category.book.isbn);
//         console.log('ISBN: ' + category.book.isbn);
//         if(category.book.year === "2019"){
//             console.log('Leidimo metai: ' + category.book.year + ' (nauja knyga)');
//         } else {
//             console.log('Leidimo metai: ' + category.book.year);
//         }
//         console.log('Pavadinimas: ' + category.book.title);
//         console.log('Puslapių skaičius: ' + category.book.pages);
//         console.log("------------------");
//     }
// }
