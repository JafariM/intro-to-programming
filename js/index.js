const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector('footer');
//create copyright element and appened it to footer
const copyright = document.createElement('p');
copyright.innerHTML = 'Masooma Jafari ' + thisYear;
footer.appendChild(copyright);

//array of skills
let skills = ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'Mysql'];

const skillSection = document.querySelector('#skills');
//select the ul
const skillList = skillSection.children[1];

for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement('li');
  skill.textContent = skills[i];
  skillList.appendChild(skill);
}