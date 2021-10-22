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
      listDays[index].style.backgroundColor = '#fff';
    });
  }
}
zoomDays();

function outZoomDays() {
  let listDays = document.querySelector('#days').children;
  for (let index = 0; index < listDays.length; index++) {
    listDays[index].addEventListener('mouseleave', function () {
      listDays[index].style.fontSize = '20px';
      listDays[index].style.backgroundColor = 'rgb(238,238,238)';
    });
  }
}
outZoomDays();
