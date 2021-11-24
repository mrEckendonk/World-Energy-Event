const menuHamburgerBtn = document.querySelector('#hamburger');
const closeBtn = document.querySelector('.close_btn');
const mobileMenu = document.querySelector('.menu');


function displayMenu() {
  mobileMenu.classList.toggle('hidden');
  menuHamburgerBtn.classList.toggle('hidden');
}

menuHamburgerBtn.addEventListener('click', displayMenu);
closeBtn.addEventListener('click', displayMenu);

const agenda = [
  {
    image: 'assets/images/icon1.png',
    about: 'Speach',
    text: 'Speakers from various countries explain their project to natural sources to generate energy.',
  },
  {
    image: 'assets/images/icon5.png',
    about: 'Examples',
    text: 'Team of speakers disussing about the most efficient and less or non polution energy source .',
  },
  {
    image: 'assets/images/icon3.png',
    about: 'Lessons',
    text: 'Increase your knowleding with many lessons that become availible online after the event.',
  },
  {
    image: 'assets/images/icon4.png',
    about: 'Groups',
    text: 'All invited persons are divided into small groups to exchanges ideas, innovation and more .',
  },
  {
    image: 'assets/images/icon2.png',
    about: 'Q&A',
    text: 'At the end of the event there will be a lot of time for Questions and Answers.',
  },
];

for (let i = 0; i < agenda.length; i += 1) {
  document.getElementById('cards-js').innerHTML += `
  <li class="cards-event">
          <span class="cards-icon"
            ><img src="${agenda[i].image}"
              alt="logo about"
              /></span>
          <span class="cards-type">${agenda[i].about}</span>
          <p class="cards-info"
            >${agenda[i].text}</p
          >
        </li>`;
}

const personsFirst = [
  {
    name: 'David Kolman',
    title:
      'Phd Electronics University Boston',
    work: 'The speaker that has an personality to explain in detail new projects. Famous for his work in the forest.',
    photo: 'assets/images/speaker1.png',
  },
  {
    name: 'Aeson Jökull',
    title:
      'Denmark Nuclear Electronics Engineer',
    work: 'Deactivated the platinum used in the process to generate Nuclear Energy, deplated plutonium in bullets used in the War.',
    photo: 'assets/images/speaker2.png',
  },
];

for (let j = 0; j < personsFirst.length; j += 1) {
  document.getElementById('persons-first').innerHTML += `
  <li class="person-card">
        <span class="person-photo"
          ><img src="${personsFirst[j].photo}" alt="user-icon" width="150" height="150"
        /></span>
        <div class="person-info">
          <h3 class="person-name">${personsFirst[j].name}</h3>
          <br />
          <p class="person-title">${personsFirst[j].title}</p>
          <br />
          <p class="person-work">${personsFirst[j].work}</p>
        </div>
      </li>`;
}

const PersonsLast = [
  {
    name: 'Dorian Cecily',
    title:
      'President of Shell Solar panels',
    work: 'A keen driver of continuous improvement activities sustained through behaviours to deliver beyond expectations.',
    photo: 'assets/images/speaker3.png',
  },
  {
    name: 'Nada Eadwulf',
    title:
      'CEO LM wind power plant',
    work: 'He is a self-starter who can manage projects from inception through execution and strive for excellence in everything he undertakes.',
    photo: 'assets/images/speaker4.png',
  },
  {
    name: 'Rita Kendal',
    title:
      'CTO of the hoover dam Las Vegas, USA',
    work: 'Energy management and Renewable Energy expert blending and leveraging existing technologies with new innovations reducing energy footprint and supplementing energy.',
    photo: 'assets/images/speaker5.png',
  },
  {
    name: 'Nicolaas Wilbert',
    title:
      'CEO of oil and gas in Brazil',
    work: 'founder and CEO of Olive Energy, an integrated junior E&P company focused on the development of complex oil and gas fields in South America.',
    photo: 'assets/images/speaker6.png',
  },
];

for (let k = 0; k < PersonsLast.length; k += 1) {
  document.getElementById('persons-first').innerHTML += `
  <li class="person-card">
        <span class="person-photo"
          ><img src="${PersonsLast[k].photo}" alt="user-icon" alt="user-icon" width="150" height="150"
        /></span>
        <div class="person-info">
          <h3 class="person-name">${PersonsLast[k].name}</h3>
          <br />
          <p class="person-title">${PersonsLast[k].title}</p>
          <br />
          <p class="person-work">${PersonsLast[k].work}</p>
        </div>
      </li>`;
}

const moreSpeakers = document.getElementById('persons-more');
const moreBttn = document.getElementById('more-bttn');

function showSpeakers() {
  if (moreSpeakers.classList.contains('more')) {
    moreSpeakers.classList.remove('more');
    document.getElementById('more-txt').innerText = 'MORE';
    document.getElementById('arrowhead').src = 'assets/images/arrow-down.png';
  } else {
    moreSpeakers.classList.add('more');
    document.getElementById('more-txt').innerText = 'LESS';
    document.getElementById('arrowhead').src = 'assets/images/arrow-up.png';
  }
}

moreBttn.addEventListener('click', showSpeakers);
