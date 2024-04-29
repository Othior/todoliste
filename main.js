let tache_liste = [];
let valeur_tache = document.querySelector(".valeur_input_tache");
let section_tache = document.querySelector(".section_tache");

let mois = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];
let date_now = new Date();

let date = document.querySelector(".date").innerHTML="<p class='date'>"+ date_now.getDate() + " " + mois[date_now.getMonth()] + " " + date_now.getFullYear() + "</p>";

let envoie_tache = () => {
 tache_liste.push(valeur_tache.value);
 affiche_tache();
}

let affiche_tache = () => {
  section_tache.innerHTML="";
  tache_liste.forEach(function(element,index){
    if(element!=""){
      section_tache.innerHTML+=`<section class="section_groupe_tache"> <div class=" btn btn_${index}"></div><p class="tache_${index}"> ${element} </p> </section>`;
      
    }

  });
}


section_tache.addEventListener("click", function(event) {
  // Vérifiez si l'élément cliqué est un bouton
  if (event.target.classList.contains("btn")) {
    // Récupérez l'index de la tâche en parcourant les classes du bouton
    let index = event.target.className.match(/btn_(\d+)/)[1];
    // Utilisez l'index pour sélectionner le paragraphe associé
    let paragraph = document.querySelector(".tache_" + index);
    // Toggle classe "coche" sur le paragraphe
    paragraph.classList.toggle("coche");
    // Toggle classe "btn_coche" sur le bouton
    event.target.classList.toggle("btn_coche");
  }
});


let btn_envoyer = document.querySelector(".btn_envoyer").addEventListener("click",envoie_tache());

