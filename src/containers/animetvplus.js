import { useState, useEffect, useContext } from "react";
import { Filmselector, Loading } from "../components";
import { Feature } from "../components/card/styles/card";
import { FooterContainer } from "./footer";
import { HeaderContainer2 } from "./header";
import { FirebaseContext } from '../context/firebase';

export function AnimeTVplusContainer() {
    const [loading, setLoading] = useState(true);
    const [profile, setProfile] = useState({});
    const { firebase } = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};
    useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }, [profile.displayName]);
    return (
        <>
        {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
            <HeaderContainer2>
                <Feature>
                    <Filmselector />
                </Feature>
            </HeaderContainer2>
            <FooterContainer />
        </>
    )
}