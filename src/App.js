import { BrowserRouter as Router, Switch } from 'react-router-dom'; // importation de react router dom de la classe BrowserRouter,en tant que Router et Switch 
import { Home, Browse, Signin, Signup } from './pages'; //importation des fonctions Home, Browse, Signin et Signup 
import * as ROUTES from './constants/routes'; //importation des constantes de ROUTES
import { IsUserRedirect, ProtectedRoute } from './helpers/routes'; // importation des fonction IsUserRedirect, ProtectedRoute
import { useAuthListener } from './hooks'; // importation de la fonction useAuthListener

export default function App() { // on exporte par default la fonction app
  const { user } = useAuthListener(); // la constante user se définit sur la valeur de useAuthListener
  
  return (
    <Router> 
      <Switch>{/* Utilisation des classes router et switch  */}
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
          <Signin />
        </IsUserRedirect>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
          <Signup />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router >
  );
}
