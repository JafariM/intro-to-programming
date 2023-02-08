const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector('footer');
//create copyright element and appened it to footer
const copyright = document.createElement('span');
copyright.innerHTML = 'Masooma Jafari  &copy' + thisYear;
copyright.setAttribute('id', 'copyRight');
footer.appendChild(copyright);

//array of skills
let skills = ['mysql.png', 'html.png', 'git.png', 'css.png', 'github.png', 'javascript.png', 'microsoft-office.png', 'vuejs.png'];

const skillSection = document.querySelector('#skills');
const skillList1 = document.querySelector('.skillRow1')
const skillList2 = document.querySelector('.skillRow2')
let num = 1;
for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement('img');
  skill.setAttribute('src', `img/${skills[i]}`);
  skill.setAttribute('class', 'skillItem');
  if (num % 2 == 0) {
    skillList1.appendChild(skill);
  }
  else {
    skillList2.appendChild(skill);
  }
  num++;
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

//retrive github repos with ajax
// let githubRequest = new XMLHttpRequest();
const projectSection = document.getElementById('projects');
const projectList = projectSection.querySelector('ol');

// githubRequest.open('GET', 'https://api.github.com/users/JafariM/repos');
// githubRequest.send();
// githubRequest.addEventListener('load', function () {
//   let repositories = JSON.parse(this.response);
//   console.log(repositories);
//   for (rep of repositories) {

//     let project = document.createElement('li');
//     project.innerText = rep.name;
//     projectList.appendChild(project);
//   }
// })

let githubRequest = fetch('https://api.github.com/users/JafariM/repos')
  .then((response) => response.json())

  .then((response) => {
    console.log(response)
    for (rep of response) {
      let project = document.createElement('li');
      let projectLink = document.createElement('a');
      projectLink.setAttribute('href', rep.html_url);
      projectLink.setAttribute('target', '_blank');
      projectLink.innerText = rep.name;
      project.appendChild(projectLink);
      projectList.appendChild(project);
    }
  })




