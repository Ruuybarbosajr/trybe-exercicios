const states = [
  'Acre',
  'Alagoas',
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Espírito Santo',
  'Goiás',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraima',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins',
];
const siglasStates = [
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'ES',
  'GO',
  'MA',
  'MT',
  'MS',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO',
];

const select = document.getElementById('estado');
const btnSubmit = document.getElementById('btn-submit');
const dateInput = document.getElementById('input-date');
const mainBody = document.getElementById('main-body');
const allInput = document.getElementsByTagName('input');

function createOptions(element, index) {
  let options = document.createElement('option');
  options.innerText = element;
  options.value = siglasStates[index];
  select.appendChild(options);
}

states.forEach(createOptions);

function validatingDate() {
  let validDate = false;
  let dataEntered = dateInput.value.split('/');
  if (dataEntered[0] <= 0 || dataEntered[0] > 31) {
    alert('erro');
  } else if (dataEntered[1] <= 0 || dataEntered[1] > 12) {
    alert('erro');
  } else if (dataEntered[2] <= 0) {
    alert('erro');
  } else {
    validDate = true;
  }
  return validDate;
}

function createConfirmationInf() {
  let newDiv = document.createElement('div');
  mainBody.appendChild(newDiv);
  for (let input of allInput) {
    let paragraph = document.createElement('p');
    newDiv.appendChild(paragraph);
    paragraph.innerText = input.value;
  }
}

function btnPrevent(e) {
  e.preventDefault();
  resultValidation = validatingDate();
  if (resultValidation) {
    createConfirmationInf();
  }
}

btnSubmit.addEventListener('click', btnPrevent);
