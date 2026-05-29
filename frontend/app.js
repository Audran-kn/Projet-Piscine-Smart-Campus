// ============================================================
// SmartCampus - V1 Squelette brut avec erreurs de rendu
// ============================================================

// ERREUR : Tentative d'utiliser du JSX alors que l'index.html ne charge pas Babel 
// et n'utilise pas le type "text/babel". Le navigateur va bloquer ici.
function HomePage() {
    return (
        <div>
            <h1>SmartCampus</h1>
            <p>Une plateforme moderne pour gérer l'école.</p>
            {/* ERREUR : Les balises Link de React Router sont utilisées sans l'import du Router */}
            <Link to="/login">Connexion</Link>
        </div>
    );
}

// Tentative de rendu sur un élément qui n'est pas prêt
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HomePage />);
