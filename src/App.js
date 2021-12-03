import { BrowserRouter as Router, Switch } from 'react-router-dom'; // importation de react router dom de la classe BrowserRouter,en tant que Router et Switch 
import { Home, Browse, Signin, Signup, AnimeTVplus } from './pages'; //importation des fonctions Home, Browse, Signin et Signup 
import * as ROUTES from './constants/routes'; //importation des constantes de ROUTES
import { IsUserRedirect, ProtectedRoute } from './helpers/routes'; // importation des fonction IsUserRedirect, ProtectedRoute
import { useAuthListener } from './hooks'; // importation de la fonction useAuthListener

export default function App() { // on exporte par default la fonction app
  const { user } = useAuthListener(); // la constante user se définit sur la valeur de useAuthListener
  
  // le return détermine la route de l'utilisateur en fonction de si il est connecter ou non
  return (
    <Router> 
      <Switch>{/* Utilisation des classes router et switch  */} 
      {/* A chaque fois on va utiliser la fonction IsUserRedirect avec atribue user et loggedInPath auquel on ajoute le path en fonction de la route de la page. */}
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
          <Signin />
        </IsUserRedirect>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
          <Signup />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        <ProtectedRoute user={user} path={ROUTES.AINIMETVPLUS}>
          <AnimeTVplus />
        </ProtectedRoute>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router >
  );
}
