document.querySelector('#header-container').style.color = 'with';

document.querySelectorAll('footer div')[0].style.padding = '20px';

function backGroundColor(elemento, index, color) {
  document.querySelectorAll(elemento)[index].style.backgroundColor = color;
}
backGroundColor('#header-container', 0, 'green');
backGroundColor('#container', 0, 'gray');
backGroundColor('.emergency-tasks', 0, 'salmon');
backGroundColor('.no-emergency-tasks', 0, 'yellow');
backGroundColor('.emergency-tasks h3', 0, 'purple');
backGroundColor('.emergency-tasks h3', 1, 'purple');
backGroundColor('.no-emergency-tasks h3', 0, 'black');
backGroundColor('footer div', 0, 'darkgreen');
backGroundColor('.no-emergency-tasks h3', 1, 'black');
