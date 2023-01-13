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
//const skillList = getElementsByTagName('ul');

for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement('li');
  skill.textContent = skills[i];
  skillList.appendChild(skill);
}

//form submission
const messageForm = document.querySelector('#leave_message');
const messageSection = document.getElementById('messages');

messageSection.style.display = 'none';


messageForm.addEventListener('submit', event => {
  //prevent from page refresh and resetting the inputs after submitting the form
  event.preventDefault();
  const form = event.target;
  //save the user inputs values to variables
  let email = form.email.value;
  let name = form.name.value;
  let message = form.message.value;
  form.reset();

  //display the inserted messages bu users
  const messageList = messageSection.querySelector('ul');
  const newMessage = document.createElement('li');
  const revmoveButton = document.createElement('button');


  revmoveButton.textContent = 'x';

  revmoveButton.setAttribute('type', 'button');
  revmoveButton.addEventListener('click', () => {
    const entry = revmoveButton.parentNode;
    //remove the li with message
    entry.remove();
    //if there is no more messages hide the message section
    if (messageList.children.length === 0) {
      messageSection.style.display = 'none';
    }
  })
  //put the name,email and message into li

  newMessage.innerHTML = `<a href = 'mailto:${email}' >${name} </a><span> Message:  ${message} </span>`;

  //add li and button to ul 
  newMessage.appendChild(revmoveButton);
  messageList.appendChild(newMessage);
  //display the message section
  messageSection.style.display = 'block';

});



