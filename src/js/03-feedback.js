const throttle = require('lodash.throttle');

const refs = {
  form: document.querySelector('.feedback-form'),
  // textarea: document.querySelector('[name="message"]'),
  CONTACT_FORM_LOCAL_STORAGE_KEY: 'feedback-form-state',
  userData: {},
};

refs.form.addEventListener('submit', event => {
  event.preventDefault();

  console.log(
    JSON.parse(localStorage.getItem(refs.CONTACT_FORM_LOCAL_STORAGE_KEY))
  );

  localStorage.removeItem(refs.CONTACT_FORM_LOCAL_STORAGE_KEY);
  event.currentTarget.reset();
});

const onFormElChange = event => {
  const target = event.target;
  console.log(target);

  const formElValue = target.value;
  const formElName = target.name;

  refs.userData[formElName] = formElValue;

  localStorage.setItem(
    refs.CONTACT_FORM_LOCAL_STORAGE_KEY,
    JSON.stringify(refs.userData)
  );
};

refs.form.addEventListener('input', throttle(onFormElChange, 500));

populateFormarea();

function populateFormarea() {
  const savedUserData = JSON.parse(
    localStorage.getItem(refs.CONTACT_FORM_LOCAL_STORAGE_KEY)
  );

  if (savedUserData === null) {
    return;
  }

  const formElements = refs.form.elements;

  for (const key in savedUserData) {
    if (savedUserData.hasOwnProperty(key)) {
      formElements[key].value = savedUserData[key];
    }
  }
}
