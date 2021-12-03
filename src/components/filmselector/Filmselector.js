import React, { useState } from 'react';
import './Filmselector.css';

const listeFilms = [
    ["Le Voyage de Chihiro",
        "Chihiro, une fillette de 10 ans...",
        //    "Chihiro, une fillette de 10 ans,est en route vers sa nouvelle demeure en compagnie de ses parents. Au cours du voyage, la famille fait une halte dans un parc à thème qui leur paraît délabré. Lors de la visite, les parents s’arrêtent dans un des bâtiments pour déguster quelques mets très appétissants, apparus comme par enchantement.Hélas cette nourriture les transforme en porcs...",
        "hayao miyazaki",
        "https://fr.web.img6.acsta.net/medias/nmedia/00/02/36/71/chihiro.jpg",
        "https://www.youtube.com/embed/QyOn8VfInVc", // mon film 
        false],

    ["Hunter x Hunter",
        "Gon Freecss a douze ans...",
        //    "Gon Freecss a douze ans, et rêve de devenir hunter (chasseur en anglais). Les hunters sont des citoyens d'élite autorisés à faire quasiment tout ce qu'ils souhaitent sur simple présentation de leur carte de membre ",
        " Yuzo Sato",
        "https://media.netflixreleases.com/images/22034e7ce102d9fa1b4d2e22fdf8c4ab/hunter-x-hunter-the-last-mission-2013-poster.jpg",
        "https://www.youtube.com/watch?v=U7ZFxWPPIhs", // mon film 4 
        false],

    ["One Piece",
        "Monkey D. Luffy rêve de...",
        // "Monkey D. Luffy rêve de retrouver ce trésor légendaire et de devenir le nouveau Roi des Pirates. Après avoir mangé un fruit du démon, il possède un pouvoir lui permettant de réaliser son rêve. Il lui faut maintenant trouver un équipage pour partir à l'aventure !",
        "Junji Shimizu",
        "https://images.rtl.fr/~c/770v513/rtl/www/1159313-one-piece-arrive-sur-netflix-en-live-action.jpg",
        "https://www.youtube.com/watch?v=a3HveJDbCJI", // mon film 5 
        false]
];

const Filmselector = () => {
    const [favoris, setFavoris] = useState(false);
    // si elle est false elle passe à true sinon elle passe à false 

    const toto = () => {
        if (favoris ===false) {
            setFavoris(true);  // Un setter est une fonction qui définit la valeur d'une variable
        } else {
            setFavoris(false)
        }
    }


    const invertState = (numFilm) => { // fonction qui inverse l'etat favoris du film passe en parametre
        // alert("ajouter")
        debugger
        if (listeFilms[numFilm][5] === false) {
            listeFilms[numFilm][5] = true;  // Un setter est une fonction qui définit la valeur d'une variable
        } else {
            listeFilms[numFilm][5] = false
        }
    }
    

    return (
        <div class='content'>
            
            {listeFilms.map((elt, index) => <div> {/* elt = un ligne de mon tableau*/}
                <h1>{elt[0]}</h1> {/* elt[0] = le nom du film */}
                <p>{elt[1]}</p>
                <img src={elt[3]} width="150px" alt="pas la" />
                <button onClick={() => invertState(index)}>ajouter aux favoris</button>
            </div>)}


            {/* {favoris ? <div>{listeFilms.map((elt, key) => <h1 key={key}>{elt[1]}</h1>)}</div> : ''}
            {favoris ? <button onClick={(() => {
                // addFavoris(); 
                console.log('favoris=', favoris)
            })}>retirer des favoris</button> : <button onClick={toto}>ajouter aux favoris</button>} */}
        </div>
    );
};

export default Filmselector;



