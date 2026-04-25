const Btn = document.querySelector("submit");

function sendData(data) {
    const XHR = new XMLHttpRequest();
    const FD = new FormData();
    
  console.log("Envoi des donnée");
}
const XHR = new XMLHttpRequest();
const urlEncodedDataPairs = [];
// On transforme l'objet des données en un seul tableau
//de paires clé/valeur encodés en URL.

for (const [name, value] of Object.entries(data)) {
    FD.append(name, value);
  urlEncodedDataPairs.push(
    `${encodeURIComponent(name)}=${encodedURIComponent(value)}`,
  );
}

// On combine les pairs en une seule chaîne de caractères
// et on remplace les espaces encodés par le scaractère +

//afin de correspondre au comportement des navigateurs
//pour les envois de formulaires.

const urlEncodedData = urlEncodedDataPairs.join("&").replace(/%20/g, "+");

//On définit ce qui se produit lorsque
//les donnée sont bien envoyées
XHR.addEventListener("load", (event) => {
  alert("Les données ont été envoyées.");
});

//On défint ce qui se produit en cas
//d'Erreur
XHR.addEventListener("error", (event) => {
  alert("Une erreur est survenue.");
});

//On prépare la requête
XHR.open("POST", "https://example.com/cors.php"); //a changer

//On ajoute l'en-tête HTTP nécessaire pour le format
//des données de formulaires
XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

//pour finir, on envoi les données.
XHR.send(urlEncodedData);

{
  Btn.addEventListener("click", () => {
    sendData({ test: "ok" });
  });
}
