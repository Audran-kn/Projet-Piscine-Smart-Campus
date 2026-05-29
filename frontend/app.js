// ============================================================
// SmartCampus - V3 Logique React et Composants (Routage temporaire)
// ============================================================

const { useState, useEffect } = React;
const { BrowserRouter, Routes, Route, Link } = ReactRouterDOM;

function HomePage() {
    return (
        <div className="min-vh-100 d-flex flex-column">
            {/* Hero Section */}
            <section className="hero-section text-white py-5">
                <div className="container py-5 text-center">
                    <h1 className="display-3 fw-bold mb-3">SmartCampus</h1>
                    <p className="lead mb-4">La gestion académique de notre époque</p>
                    <div className="d-flex gap-3 justify-content-center">
                        {/* Utilisation de la balise Link de React Router */}
                        <Link to="/login" className="btn btn-light btn-lg">Se connecter</Link>
                        <Link to="/register" className="btn btn-outline-light btn-lg">S'inscrire</Link>
                    </div>
                </div>
            </section>

            {/* Features intégrées sous forme de composants */}
            <section className="py-5 bg-light flex-grow-1">
                <div className="container py-5">
                    <div className="row g-4">
                        <FeatureCard icon="bi-people-fill" color="primary" title="Étudiants" text="Accès aux cours et notes." />
                        <FeatureCard icon="bi-book-fill" color="success" title="Enseignants" text="Saisie des notes et gestion." />
                        <FeatureCard icon="bi-gear-fill" color="danger" title="Administration" text="Pilotage global de l'école." />
                    </div>
                </div>
            </section>
        </div>
    );
}

function FeatureCard({ icon, color, title, text }) {
    return (
        <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm text-center p-4">
                <div className={`text-${color} mb-3`}><i className={`bi ${icon}`} style={{fontSize: '2.5rem'}}></i></div>
                <h4 className="fw-bold">{title}</h4>
                <p className="text-muted mb-0">{text}</p>
            </div>
        </div>
    );
}

// Pages temporaires : Il manque encore le bouton de retour à l'accueil et le design final
function LoginPage() { return <div className="p-5"><h2>Page de connexion</h2><p>En cours de création...</p></div>; }
function RegisterPage() { return <div className="p-5"><h2>Page d'inscription</h2><p>En cours de création...</p></div>; }

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
