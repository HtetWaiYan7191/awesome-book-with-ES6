export default function Navigation() {
  // Control which section to show
  const list = document.getElementById('list');
  const listAdd = document.getElementById('list-add-new');
  const listContact = document.getElementById('list-contact');
  const logoText = document.querySelector('.logo');
  // Three main sections
  const mainSection = document.getElementById('main');
  const addBookSection = document.getElementById('add-new');
  const contactSection = document.getElementById('contact');

  list.addEventListener('click', () => {
    mainSection.style.display = 'block';
    addBookSection.style.display = 'none';
    contactSection.style.display = 'none';
    list.classList.add('orange');
    listAdd.classList.remove('orange');
    listContact.classList.remove('orange');
  });

  listAdd.addEventListener('click', () => {
    addBookSection.style.display = 'block';
    mainSection.style.display = 'none';
    contactSection.style.display = 'none';
    listAdd.classList.add('orange');
    listContact.classList.remove('orange');
    list.classList.remove('orange');
  });

  listContact.addEventListener('click', () => {
    contactSection.style.display = 'block';
    addBookSection.style.display = 'none';
    mainSection.style.display = 'none';
    listContact.classList.add('orange');
    list.classList.remove('orange');
    listAdd.classList.remove('orange');
  });

  logoText.addEventListener('click', () => {
    addBookSection.style.display = 'block';
    mainSection.style.display = 'block';
    contactSection.style.display = 'block';
    list.classList.remove('orange');
    listAdd.classList.remove('orange');
    listContact.classList.remove('orange');
  });
}
