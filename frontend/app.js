// ============================================================
// SmartCampus - V2 Intégration Graphique (Sans React Router)
// ============================================================

// Version HTML/JS classique injectée pour tester le visuel Bootstrap.
// On n'utilise pas encore le JSX complexe pour éviter que tout crash sans Babel.
function HomePage() {
    return React.createElement(
        'div',
        { className: 'min-vh-100 d-flex flex-column bg-light' },
        
        // Hero Section
        React.createElement('section', { className: 'hero-section text-white py-5 text-center' },
            React.createElement('div', { className: 'container py-5' },
                React.createElement('h1', { className: 'display-3 fw-bold' }, 'SmartCampus'),
                React.createElement('p', { className: 'lead' }, 'La gestion académique de notre époque'),
                React.createElement('div', { className: 'd-flex gap-3 justify-content-center mt-4' },
                    // LIENS MORTS : Les boutons utilisent des "#" pour l'instant
                    React.createElement('a', { href: '#', className: 'btn btn-light btn-lg' }, 'Se connecter'),
                    React.createElement('a', { href: '#', className: 'btn btn-outline-light btn-lg' }, 'S\'inscrire')
                )
            )
        ),

        // Section d'information basique
        React.createElement('section', { className: 'container py-5 flex-grow-1' },
            React.createElement('h2', { className: 'text-center mb-4 text-primary' }, 'Une plateforme en cours de développement'),
            React.createElement('p', { className: 'text-center text-muted' }, 'Le système de routage et les espaces utilisateurs seront intégrés au prochain commit.')
        )
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(HomePage));
