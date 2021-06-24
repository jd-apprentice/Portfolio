// Botones ESP-ENG

function traducirESP() {
  $changeHome.innerText = 'Inicio';
  $changeContact.innerText = 'Contacto';
  $changeSkills.innerText = 'Habilidades';
  $changeWorks.innerText = 'Trabajos';
  $changeCV.innerText = 'Ver CV';
  $changeTitleSkills.innerText = 'Habilidades';
  $changeTitleWorks.innerText = 'Trabajos';
  $changeTogether.innerText = 'Trabajemos Juntos!';
  $changeContactMe.innerText = 'Contactame';
  $changeNombre.innerText = 'Nombre';
  $changeEmail.innerText = 'Email';
  $changeMensaje.innerText = 'Mensaje';
  $changeSubir.value = 'Enviar';
  $changeText.innerText = 'Soy Jonathan me considero una persona autodidacta; actualmente empecé a tomarme el tiempo de especializarme en varios ámbitos de la programación. Como corto plazo tengo interés en el desarrollo web front end y como largo plazo me interesaría aprender machine learning e inteligencia artificial, también tengo amplio conocimiento en software y hardware para hacer de soporte técnico o atención al cliente en tiendas relacionadas. Aprender es algo que adoro y lo hago en varios ámbitos; espero con ansias poder adquirir un lugar donde brindar, toda mi experiencia y deseos por progresar.';
}

function traducirENG() {
  $changeHome.innerText = 'Home';
  $changeContact.innerText = 'Contact';
  $changeSkills.innerText = 'Skills';
  $changeWorks.innerText = 'Works';
  $changeCV.innerText = 'Get CV';
  $changeTitleSkills.innerText = 'Skills';
  $changeTitleWorks.innerText = 'Works';
  $changeTogether.innerText = "Let's work together!";
  $changeContactMe.innerText = 'Contact me!';
  $changeNombre.innerText = 'Name';
  $changeEmail.innerText = 'Email';
  $changeMensaje.innerText = 'Message';
  $changeSubir.value = 'Sumbit';
  $changeText.innerText = "I'm Jonathan. I consider myself a self-taught person; I am currently starting to take the time to specialize in various areas of programming. As a short term I have an interest in front end web development and as a long term I would be interested in learning machine learning and artificial intelligence, I also have extensive knowledge in software and hardware to provide technical support or customer service in related stores. Learning is something that I adore and I do it in various fields; I look forward to acquiring a place to give, all my experience and wishes to progress.";
}

let $changeToEsp = document.getElementById('ESP');
let $changeToEnd = document.getElementById('ENG');

let $changeText = document.getElementById('presentacion-es');
let $changeContact = document.getElementById('contact');
let $changeSkills = document.getElementById('skills');
let $changeTitleSkills = document.getElementById('Skills');
let $changeWorks = document.getElementById('works');
let $changeTitleWorks = document.getElementById('Works');
let $changeHome = document.getElementById('home');
let $changeCV = document.getElementById('CV');
let $changeTogether = document.getElementById('together');
let $changeContactMe = document.getElementById('contactme');
let $changeNombre = document.getElementById('nombre');
let $changeEmail = document.getElementById('email');
let $changeMensaje = document.getElementById('mensaje');
let $changeSubir = document.getElementById('subir');

$changeToEsp.addEventListener("click", traducirESP);
$changeToEnd.addEventListener("click", traducirENG);

// Formulario

const $form = document.querySelector('#form');
const $modal = document.querySelector('#modal11');
$form.addEventListener('submit', subir);

function retraso() {
  setTimeout(function(){ $modal.style.display = 'none'; }, 3000);
}

async function subir(event) {
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
    method: this.method, 
    mode: 'no-cors',
    body: form,
    header: {
        'Accept': 'application/json',
        'mode': "no-cors"
        }
    })
    
    if (response.status == 0 ) {
        $modal.style.display = 'flex';
        retraso()
    }
}