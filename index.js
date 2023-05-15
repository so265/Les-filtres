let colorH1 = document.querySelector("h1")
colorH1.style.color = " #FF00FF";
colorH1.style.fontSize = "40px";

window.onload = () => { //si mon script est déplacé ou si une personne à oublié l'attribut deffer, avec window.onload sur que mes images seront chargées
    let filters = document.querySelectorAll("#filters button");
    //console.log(filters);
    //Je boucle sur mes 4 buttons et je vais aller écouter le click
    for(let filter of filters){  //Je crée 1 nouvelle variable que j'appelle filter, pour chaque filtre de filters(pour les 4 filtres), je fais un adentEventListenner qui va écouter le click
    filter.addEventListener("click", function(){      //Je mets le mot function pour utiliser la variable this qui va permettre de me référer à filter(ma nvelle variable)
        let tag = this.id;  //je vais comparer mon tag avec le data-set de ttes mes images(ds index.html =data-oiseaux, data-arbres ..)
        //console.log(tag)

let images = document.querySelectorAll("#gallery img"); //une fois que j'ai fait ce querySelectorAll, j'ai ttes mes images ds ma variable images
for(let image of images){        //je boucle sur chaque image //Je désactive ttes les images pour ne laisser que celles qui correspondent au tag
    image.classList.replace("active", "inactive");  //pr chaque images, je vais ds sa classList pour remplacer active par inactive, tous ceux qui ont la class active prendront la class inactive
    
if (tag in image.dataset || tag === "all" ) { //si le tag est ds le dataset (image.dataset, c'est le dataset de chacune des images = tous les datas), je verifie si le tag se trouve dedans ex, j'ai bird, il va verifier si j'ai databird
 image.classList.replace("inactive", "active");                            //le in me permet de verifier si le tag est ds le dataset
}
}                                                    //si tag est = à all on remet toutes les images en place, j'utilse le ou || double paille
    });
    }                           
}