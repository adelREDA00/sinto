'use strict';



/**
 * add Event on elements
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header & back top btn show when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 80) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", headerActive);

//services

const list = document.querySelector(".grid-list");

const info = document.querySelector(".info");
const info_title = document.querySelector(".info_title");



let origin ={
  title:` Gérez votre entreprise avec nos <span class="has-before">meilleurs services</span>`,
  content: `
  <li data-id="0" class="services">
  <div class="service-card" style="--color: 174, 77%, 50%">
  
    <div class="card-icon">
      <img src="./assets/images/service-icon-1.png" width="30" height="30" loading="lazy"
        alt="service icon">
    </div>
  
    <h3 class="h3">
      <a href="#service" class="card-title">COMMUNICATION LOCALE</a>
    </h3>



  
  </div>
  
  
  </li>
  
  <li data-id="1" class="services">
  <div class="service-card" style="--color: 267, 76%, 57%">
  
    <div class="card-icon">
      <img src="./assets/images/service-icon-2.png" width="30" height="30" loading="lazy"
        alt="service icon">
    </div>
  
    <h3 class="h3">
      <a href="#service" class="card-title">Web & Mobile Development</a>
    </h3>
  
  </div>
  </li>
  
  <li data-id="2" class="services">
  <div class="service-card" style="--color: 17, 100%, 68%">
  
    <div class="card-icon">
      <img src="./assets/images/service-icon-3.png" width="30" height="30" loading="lazy"
        alt="service icon">
    </div>
  
    <h3 class="h3">
      <a href="#service" class="card-title">BRANDING & IMAGE DE MARQUE</a>
    </h3>
  
  </div>
  </li>
  
  <li data-id="3" class="services">
  <div class="service-card" style="--color: 343, 98%, 60%">
  
    <div class="card-icon">
      <img src="./assets/images/service-icon-4.png" width="30" height="30" loading="lazy"
        alt="service icon">
    </div>
  
    <h3 class="h3">
      <a href="#service" class="card-title">VIDÉOS PUBLICITAIRES & FILMS D’ENTREPRISES</a>
    </h3>
  
  </div>
  </li>
  
  <li data-id="4" class="services">
  <div class="service-card" style="--color: 210, 100%, 53%">
  
    <div class="card-icon">
      <img src="./assets/images/service-icon-5.png" width="30" height="30" loading="lazy"
        alt="service icon">
    </div>
  
    <h3 class="h3">
      <a href="#service" class="card-title">EVENEMENTIEL </a>
    </h3>
  
  </div>
  </li>
  
  <li data-id="5" class="services">
  <div class="service-card" style="--color: 157, 89%, 44%">
  
    <div class="card-icon">
      <img src="./assets/images/service-icon-6.png" width="30" height="30" loading="lazy"
        alt="service icon">
    </div>
  
    <h3 class="h3">
      <a href="#service" class="card-title">COMMUNICATION PRINT & GRAPHISME</a>
    </h3>
  
  </div>
  </li>
   
  <li  data-id="6" class="services">
  <div class="service-card" style="--color: 52, 98%, 50%">
  
    <div class="card-icon">
      <img src="./assets/images/service-icon-7.png" width="30" height="30" loading="lazy"
        alt="service icon">
    </div>
  
    <h3 class="h3">
      <a href="#service" class="card-title">COMMUNICATION DIGITALE & PUBLICITÉS</a>
    </h3>
  
  </div>
  </li>
  `,
}

let change = [

  {
    title:` COMMUNICATION <span class="has-before"> LOCALE  </span>`,
    content:`    <p class="intro" >Les spécialistes de la communication locale sont à même de renforcer votre présence aux alentours de votre point de vente en prenant en charge différentes tâches telles que l'affichage local, la conception du design de votre point de vente, la création graphique de votre vitrine et la signalétique.
    Pour accroître la visibilité de votre offre dans les environs de votre point de vente, vous pouvez opter pour des campagnes d'affichage locales. Vous pouvez également envisager de revoir le design de votre point de vente pour créer une ambiance stimulante et susciter l'envie chez les clients
    
    </p>
    <br>
    <h2>DESIGN DE POINT DE VENTE / PLV</h2>
    <p>Repensez et travaillez l’expérience client en point de vente pour attirer vos consommateurs et améliorer la rentabilité globale de votre activité. Nos designers conçoivent avec vous une nouvelle identité <strong>visuelle pour votre magasin</strong>  ou stand de salon évènementiel</p>
    <br>
    <h2>SIGNALÉTIQUE / STAND SUR-MESURE</h2>
    <p>Utilisez les bons éléments graphiques et choisissez les bons matériaux pour concrétiser vos projets de <strong>signalétique en point de vente</strong> , de <strong>marquage publicitaire sur véhicule</strong> , ou de <strong>création de stand sur-mesure</strong> 
      </p>
      <br>
      
      <button class="backBtn" >  <ion-icon class="backicon" name="arrow-undo-circle-outline"></button>`,

  },

  {
    title:` DÉVELOPPEMENT  <span class="has-before"> WEB  </span>`,
    content:`   <p class="intro" >De nos jours, il est incontournable pour une entreprise d'être présente sur Internet. Notre agence est là pour vous accompagner dans votre projet de développement web en vous proposant les services suivants:
    <br>
   > La création d'un site vitrine ou d'un site e-commerce pour votre entreprise.
    <br>
> Le développement d'une application web pour vos besoins spécifiques.
<br>
> L'optimisation de votre référencement naturel pour améliorer votre visibilité sur les moteurs de recherche.

    
    </p>
    <br>
    <h2>CRÉATION DE SITE INTERNET</h2>
    <p> <strong>Développez un site internet</strong>  vitrine ou e-commerce à votre image. Nos développeurs web et nos graphistes soutiendront votre projet et seront fort de proposition</p>
    <br>
    <h2>APPLICATION MOBILE</h2>
    <p>Créez une application mobile pour être au plus proche de vos clients et de votre communauté. Nos développeurs vous accompagnent dans votre projet pour valoriser votre marque 
      </p>
      <br>
      <h2>RÉFÉRENCEMENT SEO</h2>
      <p>Utilisez les stratégies du référencement naturel (SEO) pour apparaître <strong>dans les premiers résultats</strong>  sur un moteur de recherche et générer du trafic
        </p>
        <br>
      
      <button class="backBtn" >  <ion-icon class="backicon" name="arrow-undo-circle-outline"></button>`,

  },

  {
    title:`  <span class="has-before"> BRANDING </span>
    & IMAGE DE MARQUE `,
    content:`  <p class="intro" >La première étape du lancement d'une marque consiste à concevoir et construire une image de marque forte. Notre agence est spécialisée dans le branding et l'image de marque et vous accompagne pour:<br>
    > Créer un logo qui reflète les valeurs essentielles de votre entreprise, conçu par nos graphistes expérimentés <br>
> Trouver un nom de marque qui soit attrayant et séduisant
> Créer ou moderniser votre identité visuelle<br>
> Rédiger des articles ou des traductions en arabe en français ou en anglais.


    </p>
    <br>
    <h2>CRÉATION D'UN LOGOTYPE</h2>
    <p>Élément incontournable de votre identité visuelle, votre logo doit faire émerger les valeurs de votre marque en un clin d’œil dans l’esprit de vos consommateurs. Nos graphistes créent au quotidien des <strong>logos sur-mesure </strong> et déclinables en fonction de vos activités</p>
    <br>
    <h2>RECHERCHE DE NOM DE MARQUE / NAMING</h2>
    <p>Votre nom est révélateur de votre identité et de votre positionnement de marque. Qu’il s’agisse d’un <strong>nom de marque</strong>, d’un produit, d’un service, ou d’une gamme de produit, chaque mot compte sur la perception et la communication de votre offre vis-à-vis du consommateur
      </p>
      <br>
    <h2> TRADUCTION / CREATION DE CONTENUS</h2>
    <p>Notre  équipe de rédaction prête sa plume à votre entreprise pour <strong>l’écriture d’articles</strong> , de contenus textuels. Votre communication dépend aussi des mots utilisés, du wording, et du ton employé. Trilingue Arabe-Français – Anglais, Sinto Agency est en mesure d’assurer un <strong>service de création de contenus</strong>  de qualité.
      </p>
      <br>
      
      <button class="backBtn" >  <ion-icon class="backicon" name="arrow-undo-circle-outline"></button>`,

  },

  {
    title:`  VIDÉOS <span class="has-before"> PUBLICITAIRES  </span>
    & FILMS D’ENTREPRISES `,
    content:`    <p class="intro" >La vidéo est un outil de communication incontournable pour l'avenir. Donnez de l'élan à votre communication en créant des vidéos d'entreprise ou d'animation de logo. Notre agence de communication et de publicité offre une gamme complète de services de création et de communication vidéo, adaptés à tous vos besoins : <br>
    > Produisez des vidéos de qualité, qu'il s'agisse de films publicitaires ou institutionnels présentant votre offre. <br>
> Créez des vidéos animées en motion design réalisées par nos graphistes professionnels. <br>
> Donnez vie à votre logo en l'animant pour dynamiser votre contenu.

    </p>
    <br>
    <h2>PRODUCTION VIDÉO</h2>
    <p>Concevez des <strong>films publicitaires</strong>  pour rendre attractif votre offre et gagner en notoriété. Notre agence de communication analyse vos projets et apporte sa créativité dans toutes vos productions audiovisuelles : film d’entreprise, publicité, interview.</p>
    <br>
    <h2>MOTION DESIGN</h2>
    <p>Donnez du mouvement à vos créations graphiques en créant des <strong>animations en motion design</strong> . Présentez votre offre ou concevez une <strong> publicité en motion design</strong> pour simplifier votre valeur ajoutée
      </p>
      <br>
    <h2>ANIMATION DE LOGO</h2>
    <p>Donnez un nouveau souffle à votre logo en lui donnant vie. En utilisant nos connaissances de la communication vidéo et de notre expertise print, notre agence <strong>dynamisera votre logo</strong>  afin d’appuyer votre image de marque
      </p>
      <br>
      
      <button class="backBtn" >  <ion-icon class="backicon" name="arrow-undo-circle-outline"></button>`,

  },

  {
    title:` <span class="has-before"> EVENEMENTIEL  </span>`,
    content:`    <p class="intro" >Organiser un événement est un vrai métier d’expérience, de connaissance du réseau, de capacité d’anticipation visant à faciliter une organisation sans faille !

                  
    </p>
    <br>
    <h2>gestion globale de votre événement</h2>
    <p>SINTO Agency propose la <strong>gestion globale de votre événement </strong> d’entreprise, en mettant en avant l’innovation, le sport, la culture du spectacle et les nouvelles technologies. 
      Nous vous proposons des animations en tous genres, des animations ludiques digitales, de la réalité virtuelle, des solutions d’images 360 et bien d’autres encore
      </p>
        <br>
      
      <button class="backBtn" >  <ion-icon class="backicon" name="arrow-undo-circle-outline"></button>`,

  },


  {
    title:`<span class="has-before">COMMUNICATION </span> PRINT & GRAPHISME`,
    content:` 
    <p class="intro" >Concevez une communication print réussie en respectant les codes établis pour créer une image tangible auprès des consommateurs :   <br>
    > Formulez votre offre de manière simple et concise  <br>
> Utilisez le ton adéquat pour améliorer votre notoriété et votre image <br>
> Démarquez-vous de la concurrence en proposant des produits innovants et en adoptant une esthétique originale.

    </p>
    <br>
    <h2>SUPPORTS DE COMMUNICATION</h2>
    <p>Nos graphistes vous accompagnent dans la conception et la fabrication de vos cartes de visites, flyers, plaquettes commerciales, catalogues. Nos créations sont aux couleurs de votre charte graphique pour tous types de supports de communication.</p>
    <br>
    <h2>PACKAGING</h2>
    <p>Valorisez votre produit en utilisant un emballage au design attrayant pour affirmer l’identité de votre marque.
      Le packaging est le seul obstacle marketing entre la prise de décision et l’achat !
      </p>
      <br>
    <h2>CRÉATION GRAPHIQUE</h2>
    <p>Faites appel à nos graphistes pour des créations graphiques sur-mesure : Infographie, schéma, graphisme en tout genre.
      Remodelez l’image de votre marque en quelques coups de plumes ou de souris
      </p>
      <br>
      
      <button class="backBtn" >  <ion-icon class="backicon" name="arrow-undo-circle-outline"></button>`

  },

  {
    title:`COMMUNICATION <span class="has-before"> DIGITALE</span>  & PUBLICITÉS `,
    content:`<p class="intro" >Utilisez la communication digitale pour toucher efficacement votre audience cible. Concevez un site web qui reflète l'image de votre marque et exploitez divers leviers de communication et de publicité en ligne : <br>
    > Créez un site web personnalisé, qu'il s'agisse d'un site vitrine ou d'une boutique en ligne <br>
> Gérez votre présence sur les réseaux sociaux pour maintenir l'image de votre marque <br>
> Augmentez votre visibilité en utilisant des publicités sur les moteurs de recherche <br>
> Concevez et mettez en place des campagnes d'e-mailing pour maintenir votre réseau.

    </p>
    <br>
    <h2>COMMUNITY MANAGEMENT</h2>
    <p>Développez votre image de marque sur les réseaux sociaux et créez du lien avec votre communauté. Engagez votre communauté en vous appuyant sur nos community managers.</p>
    <br>
    <h2>RELATIONS INFLUENCEUR</h2>
    <p>Développez votre image de marque sur les réseaux sociaux et créez du lien avec votre communauté
      </p>
      <br>
    <h2>SOCIAL ADS</h2>
    <p>Ciblez les bonnes personnes et déployez votre publicité sur les réseaux sociaux : Facebook, Instagram, Linkedin, Youtube
      </p>
      <br>
      <h2>GOOGLE ADS</h2>
      <p>Positionnez-vous sur les meilleures requêtes de votre marché en utilisant les liens sponsorisés sur les moteurs de recherche
        </p>
        <br>
        <h2>NEWSLETTER</h2>
        <p>Construisez des campagnes d’e-mailing pour déployer vos messages ou pour fidéliser votre communauté.
          </p>
      <br>
      
      <button class="backBtn" >  <ion-icon class="backicon" name="arrow-undo-circle-outline"></button>`,

  },

  
]


function changing_services(){
  info.style.display = "none"
  list.innerHTML = ``
  list.innerHTML = origin.content
  info_title.innerHTML = origin.title 
  gsap.from('.services', {opacity:0, duration: 1.5, y: 100,stagger: .2});
  gsap.from('.info_title', {opacity: 0, duration: .5, y: -100})

  const services = document.querySelectorAll(".services");

  
services.forEach((service)=>{
  service.addEventListener('click',(serv)=>{
    location.href = "#service";
    let clicked = serv.currentTarget.dataset.id
    info.style.display = "block"
    list.innerHTML = ``
    info.innerHTML = change[clicked].content
    info_title.innerHTML = change[clicked].title 
    gsap.from(info_title, {opacity: 0, duration: .4, y: -100})
    gsap.from('.info', {opacity: 0, duration: .2, scale: .5})

    const backbtn = document.querySelector(".backBtn");
    backbtn.addEventListener("click",()=>{
      location.href = "#service";
      changing_services()
    })


  })
})


}

changing_services()




/**
 * skills toggle
 */

const content = document.querySelector("#sb");
const dec_com = document.querySelector(".dc");
const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }


for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }

  });
}


//web and desgin projects

let web = [
  {
    title:`<span class="has-before">Découvrez-nous</span>`,
    cont:`
    <p class="strg">
    <h4 class="com has-before" >SINTO Agency est une agence de communication dite « globales » qui prend en charge toute la communication de nos clients, de la publicité au marketing, les médias, le web, la communication format papier, le marketing, les relations publiques ou de presse ou l’événementiel</h4> <br> 
    Au-delà des compétences et de l'expérience, la créativité est l'un des piliers d'une agence de communication réussie. Cependant, ce n'est pas tout ! Notre but est d'apporter une réelle <strong>valeur ajoutée à votre entreprise</strong>. Pour y parvenir, nous mobilisons toutes nos ressources afin de concevoir des solutions de communication efficaces. 
    </p>
    <br> <br>

    <p class="strg">
    Pour mieux comprendre vos problématiques et élaborer une <strong>stratégie de communication pertinente</strong>, nous prenons le temps d'apprendre à vous connaître. Nous nous intéressons à votre entreprise dans son ensemble, en étudiant son histoire, son marché, vos ambitions, ainsi que les membres de votre équipe.
    </p>
    <br> <br>
    <p class="strg">
    <strong>Chez SINTO Agency</strong>, nous sommes avant tout attachés aux relations authentiques et à la convivialité. Nous passerons beaucoup de temps ensemble, il est donc primordial de travailler en toute confiance. C'est dans une ambiance chaleureuse et décontractée que nous mettons notre créativité en ébullition, en nous concentrant au maximum.
    </p>
    <br>  <br>
    <p class="strg">
    Pour être au plus proche de vous, notre agence se digitalise et peut vous accompagner partout dans le monde.
    </p>
    <br>  <br>
     La distance ne constitue plus un frein pour travailler ensemble
    `
  }
]

let cont = [
  {
    title:`<span class="has-before">Nos compétences</span>`,
    cont:`
    <h3 class="com has-before" >Marketing & Communication</h3>
    Boostez votre communication
    Impactez vos cibles
    <br>
    <br>
    <h3 class="com has-before" >Organisation & Gestion Intégrale d’Évènements</h3>
    
    Réussissez vos meetings professionnels
    <br>
    <br>
    <h3 class="com has-before" >Études de Marché Enquêtes et Sondages</h3>
    Evaluez votre marché
    Mesurez ses tendances et ajustez vos stratégies
    <br>
    <br>
    <h3 class="com has-before" >e-Communication</h3>
    
    Digitalisez votre communication
    <br>
    <br>
    <h3 class="com has-before" >Système de Vote Interactif</h3>
    
    Sondez votre auditoire
    Ajoutez de l’interactivité à vos réunions
    <br>
    <br>
    <h3 class="com has-before" >Revue professionnelle </h3>
    Edition de revues pour les entreprises dans les différents secteurs d’activités 

    `
  }
]

let track = "web";


function generate (num){
  if(num==="web"){
    content.innerHTML =web[0].cont;
    dec_com.innerHTML =web[0].title;
    anim('.strg')
    anim(dec_com)
  }else if(num==="cont") {
    content.innerHTML =cont[0].cont;
    dec_com.innerHTML =cont[0].title;
    anim('.com')
    anim(dec_com)
  }

}


function anim(cl){
  gsap.from(cl, {opacity:0, duration: 1, x: 100,stagger: .1});
}


toggleBtnBox.addEventListener("click",()=>{

  content.innerHTML = "";
  dec_com.innerHTML = "";
  location.href = "#sinto";


  if(toggleBtnBox.classList.contains("active")){

    track = "cont"
  }else{
    track = "web"

  }

   generate(track)
   gsap.from('#sb', {opacity:0, duration: 1, x: -100});


})

generate(track)





const overlay2 = document.querySelector('[data-overlay2]');
const loc = document.querySelector('.btn-newsletter1');
const te = document.querySelector('.hero-btn');
// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { modal.classList.add('closed') }

// modal eventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);

te.addEventListener("click",()=>{
  modal.classList.remove("closed")
})

loc.addEventListener("click",()=>{
  modal.classList.add('closed')
  console.log("el");
})
