import React from 'react';
import JumboData from "../fixtures/jumbo"; //importations des fichiers Jumbo (jumboData) et le styles Jumbotion
import { Jumbotron } from '../components';

export function JumbotronContainer() { //exportation de la fonction par default Jumbotron
  return ( //affichage ; Jumbotron.Container : conteneur de la page
    <Jumbotron.Container> 
      {JumboData.map((item) => ( //importation des items de Jumbodata grâce a leur ID (item.id) ; Pour chacun on créer deux conteneurs nommé "Pane", l'un avec le Titre (Title) et le soustitre (subTitle), et l'autre avec l'image et son alt (pour les personnes mal voyante). direction={item.direction}-> rediriger dans l'index.js 
        <Jumbotron key={item.id} direction={item.direction}> 
          <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Jumbotron.Image src={item.image} alt={item.alt} />
          </Jumbotron.Pane>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}