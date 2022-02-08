import luhnCheck from './luhnCheck';

const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const img = document.querySelectorAll('.card');


btn.addEventListener('click', (e) => {
  e.preventDefault();
  if (luhnCheck(input.value)) {

    const a = input.value;
    const idA = a.toString();
    const idB = idA.slice(0,2);

    if (idA[0] === '2') { //мир
      input.classList.add('ok');
      img[0].classList.add('active');
    }
    if (idB === '30' || idB === '36' || idB === '38') { //30,36,38-Diners Club
      input.classList.add('ok');
      img[1].classList.add('active');
    }
    if (idB === '31' || idB === '35') { //31,35-JCB International
      input.classList.add('ok');
      img[2].classList.add('active');
    }
    if (idB === '34' || idB === '37') { //34,37-American Express
      input.classList.add('ok');
      img[3].classList.add('active');
    }
    if (idA[0] === '4') { //4-visa
      input.classList.add('ok');
      img[4].classList.add('active');
    }
    if (idB === '50' || idB === '56' || idB === '57' || idB === '58' || idB === '63' || idB === '67') { //50,56,57,58,63,67-Maestro
      input.classList.add('ok');
      img[5].classList.add('active');
    }
    if (idB === '51' || idB === '52' || idB === '53' || idB === '54'|| idB === '55') { //51,52,53,54,55-MasterCard
      input.classList.add('ok');
      img[6].classList.add('active');
    }
    if (idB === '60') { //60-Discover
      input.classList.add('ok');
      img[7].classList.add('active');
    }
    if (idB === '62') { //62 - China UnionPay
      input.classList.add('ok');
      img[8].classList.add('active');
    }
    if (idA[0] === '7') { //7-УЭК
      input.classList.add('ok');
      img[9].classList.add('active');
    }

  }else {
    input.classList.remove('ok');
    img.forEach(item => {
      item.classList.remove('active');
    })
    input.value = '';
    alert('Not VALID!');
  }
})

input.addEventListener('input', () => {
  if (input.value === '') {
    input.classList.remove('ok');
    img.forEach(item => {
      item.classList.remove('active');
    })
  }
})

