import React from "react";
import './css/home.css';

export class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="content">
                    <div className="f-scontent">
                        <p className="f-text"><span>🖐️</span> Bonjour, je m'appelle</p>
                        <p className="s-text">Sergen.</p>
                    </div>
                    <div className="s-scontent">
                        <p className="f-text">Développeur UI/UX & Front End</p>
                        <p className="s-text">JE CRÉE DES SITES WEB STATIQUE ET DYNAMIQUE QUI SONT AGRÉABLES À UTILISER.<br></br> JE LES CONÇOIS AVEC UNE BELLE TYPOGRAPHIE, A L'AIDE D'UNE MAQUETTE GRAPHIQUE JE FAIS EN SORTE QUE L'ASPECT VISUEL VOUS CORRESPOND.</p>
                    </div>
                    <button className="contact"><p className="contact-txt">Contactez-moi</p></button>
                </div>
                <div className="photo-content">
                    <div className="photo"></div>
                </div>
                <div className="light"></div>
            </div>
        )
    }
}