// const addBtn = document.querySelector('[data-action=render]');
// const clearBtn = document.querySelector('[data-action=destroy]');
// const inputEl = document.querySelector('input');
// const divEl = document.querySelector('#boxes');

// const amount = inputEl.value;

// addBtn.addEventListener('click', createBoxes);


// const divEL = document.querySelector('#boxes');

// creatPaletteItems(25);

// function creatPaletteItems(amount) {
//     const items = [];
//     for (let i = 0; i < amount; i++) {
//         const color = getRandomColor();
//         const button = document.createElement('button');
//         button.type = button;
//         button.classList.add('item');
//         button.style.background = color;
//         items.push(button)
//     }
//     console.log(items);
//     divEL.append(...items);
// }




// function getRandomColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }


// const allStudents = [
//   'Jayne Kuyper',
//   'Tiesha Laine',
//   'Lupe Olague',
//   'Clarita Bellman',
//   'Laura Munden',
//   'Bertram Calvi',
//   'Georgianna Sparr',
//   'Carolann Seller',
//   'Felicia Midgette',
//   'Kasandra Bezio',
//   'Elias Vanwyk',
//   'Yu Mccool',
//   'Kati Golub',
//   'Pat Dalley',
//   'Loreta Francis',
//   'Beatris Larusso',
//   'Corrin Vancleve',
//   'Sofia Ressler',
//   'Erlene Burke',
//   'Breann Sande',
//   'Samatha Sao',
//   'Henry Say',
//   'Monnie Bernhard',
//   'Dia Culbert',
//   'Sunny Disandro',
//   'Mack Sen',
//   'Jeremiah Astle',
//   'Misha Ono',
//   'Silas Aubry',
//   'Kenya Longmore',
//   'Mirta Brandenberger',
//   'Eneida Overholt',
//   'Marcelo Popejoy',
//   'Serafina Irvin',
//   'Leroy Tacey',
//   'Brice Hedrick',
//   'Elana Hoops',
//   'Keena London',
//   'Enriqueta Hein',
//   'Valeria Turnbull',
//   'Earlean Canchola',
//   'Corinna Tousignant',
//   'Sherry Rivera',
//   'Chasity Janda',
//   'Tamela Barlow',
//   'Leandro Lonergan',
//   'Karlene Breunig',
//   'Winter Endicott',
//   'Salena Nail',
//   'Tanner Clapper',
// ];

const searchBox = document.querySelector('#inp');
const sudentList = document.querySelector('.student-list')

// searchBox.addEventListener('input', _.throttle(onSearch, 300));
// searchBox.addEventListener('input', _.debounce(onSearch, 150));

searchBox.addEventListener('input', onSearch);

function onSearch() {
    const filter = searchBox.value.toLowerCase();
    const filterStudents = allStudents.filter(student => student.toLowerCase().includes(filter));
    console.log(filterStudents)
    populatteStudentList(filterStudents);
}


const studentBox = [];
populatteStudentList(allStudents);
function populatteStudentList(students) {
    const markup = students.map(student => `<li>${student}</li>`).join('');
    // console.log(markup);
    sudentList.innerHTML = markup;
    // sudentList.insertAdjacentHTML('afterend', markup)
}

