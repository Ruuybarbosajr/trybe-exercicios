function createDaysOfTheWeek() {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function addDaysInList() {
  let ulListDays = document.querySelector('#days');
  for (let index of dezDaysList) {
    let liListDays = document.createElement('li');
    liListDays.className = 'day';
    liListDays.innerText = index;
    if (index == 24 || index == 25 || index == 31) {
      liListDays.className += ' holiday';
    }
    if (index === 4 || index == 11 || index == 18 || index == 25) {
      liListDays.className += ' friday';
    }
    ulListDays.appendChild(liListDays);
  }
}
addDaysInList();

let btnHoliday = document.createElement('button');

function createButton(parameterHoliday) {
  btnHoliday.id = 'btn-holiday';
  btnHoliday.innerText = parameterHoliday;
  let divButton = document.querySelector('.buttons-container');
  divButton.appendChild(btnHoliday);
}
createButton('Feriados');

btnHoliday.addEventListener('click', function () {
  let holidays = document.getElementsByClassName('holiday');
  for (let index of holidays) {
    if (index.style.backgroundColor === 'darkgreen') {
      index.style.backgroundColor = 'rgb(238,238,238)';
    } else {
      index.style.backgroundColor = 'darkgreen';
    }
  }
});

let btnFriday = document.createElement('button');

function daysFriday(parameterFriday) {
  btnFriday.id = 'btn-friday';
  btnFriday.innerText = parameterFriday;
  let divButton = document.querySelector('.buttons-container');
  divButton.appendChild(btnFriday);
}
daysFriday('Sexta-feira');

btnFriday.addEventListener('click', function () {
  let daysFriday = document.getElementsByClassName('friday');
  let fridays = [4, 11, 18, 25];

  for (let index of daysFriday) {
    if (index.innerText === 'SEXTOU') {
      for (secondIndex = 0; secondIndex < fridays.length; secondIndex++) {
        daysFriday[secondIndex].innerText = fridays[secondIndex];
      }
    } else {
      index.innerText = 'SEXTOU';
    }
  }
});

function zoomDays() {
  let listDays = document.querySelector('#days').children;
  for (let index = 0; index < listDays.length; index++) {
    listDays[index].addEventListener('mouseover', function () {
      listDays[index].style.fontSize = '50px';
    });
  }
}
zoomDays();

function outZoomDays() {
  let listDays = document.querySelector('#days').children;
  for (let index = 0; index < listDays.length; index++) {
    listDays[index].addEventListener('mouseleave', function () {
      listDays[index].style.fontSize = '20px';
    });
  }
}
outZoomDays();

function addTask(parameterTask) {
  let taskOfCalendar = document.createElement('span'); //Criando a tag span.
  taskOfCalendar.innerText = parameterTask; // Adicionando conteúdo a tag criada o parâmetro da function
  let divMyTask = document.querySelector('.my-tasks'); // selecionando a tag pai, para ligar a anteriormente criada
  divMyTask.appendChild(taskOfCalendar); // ligando as tags (div = pai / span = filho )
}
addTask('Cozinhar'); // chamando função.

function addColorTask(parameterColor) {
  let newDivMyTask = document.createElement('div'); //Criando a tag div
  newDivMyTask.className = 'task'; // adicionando a tag criada uma class
  newDivMyTask.style.background = parameterColor; // adicionado uma cor ao background através de um parâmetro
  let divMyTask = document.querySelector('.my-tasks'); //selecionando o elemento pai, da tag criada
  divMyTask.appendChild(newDivMyTask); // 'ligando pai e filho'
}
addColorTask('red'); // chamador com a cor que irá receber o parâmetro

function addTaskSelect() {
  let taskCompleted = document.querySelector('.task');

  taskCompleted.addEventListener('click', function () {
    if (taskCompleted.classList == 'task selected') {
      taskCompleted.className = 'task';
    } else {
      taskCompleted.className = 'task selected';
    }
  });
}
addTaskSelect();

function markDay() {
  let dadList = document.querySelector('#days');
  let childrenList = dadList.children;
  for (let index = 0; index < childrenList.length; index++) {
    childrenList[index].addEventListener('click', function () {
      if (childrenList[index].style.backgroundColor === 'red') {
        childrenList[index].style.backgroundColor = 'rgb(238,238,238)';
        console.log('aqui');
      } else {
        childrenList[index].style.backgroundColor = 'red';
        console.log('ou aqui');
      }
    });
  }
}
markDay();

// function desmarkDay() {
//   let dadList = document.querySelector('#days');
//   let childrenList = dadList.children;
//   for (let index of childrenList) {
//     index.addEventListener('click', () => {});
//   }
// }
