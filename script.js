var loaded = false;

// Fetch running twice ??
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
          json[i].text;
        +'</div>';
      }
      populateContent();
    }
    loaded = true;
  });

function populateContent() {
  let details = [],
    checkBoxes = [];

  details = Array.from(document.querySelectorAll('.see-more'));
  checkBoxes = Array.from(document.querySelectorAll('.checkbox'));

  for (let i = 0; i < details.length; i++) {
    details[i].addEventListener('click', (e) => {
      e.target.parentElement.classList.remove('show-details');
    });
  }

  for (let i = 0; i < checkBoxes.length; i++) {
    checkBoxes[i].addEventListener('click', (e) => {
      let item = e.target.parentElement.querySelector('.partial');
      item.classList.toggle('show-details');
      toggleCheckmark(item);
    });
  }
  function toggleCheckmark(elem) {
    console.log(elem)
    elem.classList.contains('show-details')
      ? (elem.parentElement.querySelector('.checkbox').innerHTML = '&check;')
      : (elem.parentElement.querySelector('.checkbox').innerHTML = '');
  }
}
