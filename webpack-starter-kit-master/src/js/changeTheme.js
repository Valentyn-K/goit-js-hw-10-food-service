console.log(localStorage);
const refs = {
  themeSwitch: document.querySelector('.theme-switch'),
  iconSun: document.querySelector('svg[data-icon=sun] path'),
  iconMoon: document.querySelector('svg[data-icon=moon] path'),
  switch: document.querySelector('.switch'),
  switchInput: document.querySelector('.js-switch-input'),
  label: document.querySelector('.switch__label'),
  marker: document.querySelector('.switch__marker'),
  body: document.querySelector('body'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const lastSavedTheme = localStorage.getItem("Theme");

if (lastSavedTheme === Theme.DARK) {
  refs.switchInput.checked = true;
  refs.body.classList.add(Theme.DARK);
};

if (lastSavedTheme === Theme.LIGHT) {
  refs.switchInput.checked = false;
  refs.body.classList.add(Theme.LIGHT);
};

function handleChangeTheme(event) {

  if (!event.target.checked) {
    refs.body.setAttribute('class', Theme.LIGHT);
    localStorage.setItem('Theme', Theme.LIGHT);

    if (refs.body.classList.contains(Theme.DARK)) {
      refs.body.classList.remove(Theme.DARK);
    };
  } else if (event.target.checked) {
    refs.body.setAttribute('class', Theme.DARK);
    localStorage.setItem('Theme', Theme.DARK);

    if (refs.body.classList.contains(Theme.LIGHT)) {
      refs.body.classList.remove(Theme.LIGHT);
    };
  };
};

refs.themeSwitch.addEventListener('change', handleChangeTheme);
