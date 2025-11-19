var loaded = false;

fetch('data.json')
  .then((response) => response.json())
  .then((json) => {
    let content = document.querySelector('.content');
    if (!loaded) {
      for (let i = 0; i < json.length; i++) {
        content.innerHTML +=
          '<div class="row"><div class="checkbox"></div><span>' +
          json[i].city +
          '</span><span>CA</span><span>' +
          json[i].attractions +
          '</span><span>' +
          json[i].climate +
          '</span><div class="partial">' +
          json[i].text +
          '</div>';
      }
      populateContent();
    }
    loaded = true;
  });

function populateContent() {
  let checkBoxes = [];

  checkBoxes = Array.from(document.querySelectorAll('.checkbox'));
  console.log(checkBoxes);

  for (let i = 0; i < checkBoxes.length; i++) {
    checkBoxes[i].addEventListener('click', (e) => {
      console.log(e);
      let item = e.target.parentElement.querySelector('.partial');
      item.classList.toggle('show-details');
      toggleCheckmark(item);
    });
  }
}

function toggleCheckmark(elem) {
  elem.classList.contains('show-details')
    ? (elem.parentElement.querySelector('.checkbox').innerHTML = '&check;')
    : (elem.parentElement.querySelector('.checkbox').innerHTML = '');

  condition ? true : false;
}
