const input = document.querySelector('input');

input.addEventListener('input', (e) => {
  console.log(e.target.value);
 if (e.target.value === '12345') {
  alert('TA-DA');
  e.target.value = '';
 }
})

