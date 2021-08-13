// Botones ESP-ENG

const traducirESP = () => {
  $changeHome.innerText = "Inicio";
  $changeContact.innerText = "Contacto";
  $changeSkills.innerText = "Habilidades";
  $changeWorks.innerText = "Trabajos";
  $changeCV.innerText = "Ver CV";
  $changeTitleSkills.innerText = "Habilidades";
  $changeTitleWorks.innerText = "Trabajos";
  $changeTogether.innerText = "Trabajemos juntos!";
  $changeContactMe.innerText = "Contactame";
  $changeNombre.innerText = "Nombre";
  $changeEmail.innerText = "Email";
  $changeMensaje.innerText = "Mensaje";
  $changeFooter.innerHTML = `<p id="footer-text">&copy; Vectores sacados de <a target="_blank" href="https://worldvectorlogo.com/" class="text-primary">worldvectorlogo</a></p>`;
  $changeSubir.value = "Enviar";
  $changeText.innerText =
    "Hola! soy un programador autodidacta, actualmente empecé a tomarme el tiempo de especializarme en varios ámbitos de la programación. Como corto plazo tengo interés en el desarrollo web front end y como largo plazo me interesaría aprender machine learning e inteligencia artificial, también tengo amplio conocimiento en software y hardware para hacer de soporte técnico o atención al cliente en tiendas relacionadas. Aprender es algo que adoro y lo hago en varios ámbitos; espero con ansias poder adquirir un lugar donde brindar, toda mi experiencia y deseos por progresar.";
};

const traducirENG = () => {
  $changeHome.innerText = "Home";
  $changeContact.innerText = "Contact";
  $changeSkills.innerText = "Skills";
  $changeWorks.innerText = "Works";
  $changeCV.innerText = "Get CV";
  $changeTitleSkills.innerText = "Skills";
  $changeTitleWorks.innerText = "Works";
  $changeTogether.innerText = "Let's work together!";
  $changeContactMe.innerText = "Contact me!";
  $changeNombre.innerText = "Name";
  $changeEmail.innerText = "Email";
  $changeMensaje.innerText = "Message";
  $changeFooter.innerHTML = `<p id="footer-text">&copy; SVG files from <a target="_blank" href="https://worldvectorlogo.com/" class="text-primary">worldvectorlogo</a></p>`;
  $changeSubir.value = "Submit";
  $changeText.innerText =
    "Hello! I'am a self-taught person; I am currently starting to take the time to specialize in various areas of programming. As a short term I have an interest in front end web development and as a long term I would be interested in learning machine learning and artificial intelligence, I also have extensive knowledge in software and hardware to provide technical support or customer service in related stores. Learning is something that I adore and I do it in various fields; I look forward to acquiring a place to give, all my experience and wishes to progress.";
};

const $changeToEsp = document.querySelector("#ESP");
const $changeToEnd = document.querySelector("#ENG");

const $changeText = document.querySelector("#presentacion-es");
const $changeContact = document.querySelector("#contact");
const $changeSkills = document.querySelector("#skills");
const $changeTitleSkills = document.querySelector("#Skills");
const $changeWorks = document.querySelector("#works");
const $changeTitleWorks = document.querySelector("#Works");
const $changeHome = document.querySelector("#home");
const $changeCV = document.querySelector("#CV");
const $changeTogether = document.querySelector("#together");
const $changeContactMe = document.querySelector("#contactme");
const $changeNombre = document.querySelector("#nombre");
const $changeEmail = document.querySelector("#email");
const $changeMensaje = document.querySelector("#mensaje");
const $changeSubir = document.querySelector("#subir");
const $changeFooter = document.querySelector("#footer-text");

$changeToEsp.addEventListener("click", traducirESP);
$changeToEnd.addEventListener("click", traducirENG);

// Formulario

const $close = document.querySelector(".close");
const $closeX = document.querySelector(".closeX");
const $form = document.querySelector("#form");
const $modal = document.querySelector("#modal11");
const $modalText = document.querySelector("#modal-text");
$form.addEventListener("submit", subir);
$close.addEventListener("click", cerrar);
$closeX.addEventListener("click", cerrar);

const cerrar = () => {
  $modal.style.display = "none";
};

// Formulario - funcion para subir

const subir = async (e) => {
  e.preventDefault();
  const nombreForm = document.querySelector("#name").value;
  const form = new FormData(this);
  const response = await fetch(this.action, {
    method: this.method,
    mode: "no-cors",
    body: form,
    header: {
      Accept: "application/json",
      mode: "no-cors",
    },
  });

  if (response.status === 0) {
    $modalText.innerHTML = `${nombreForm} gracias por enviar tu formulario! estare leyendo tu propuesta al instante.`;
    $modal.style.display = "flex";
  }
};
