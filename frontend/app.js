const { useState, useEffect } = React;
const { BrowserRouter, Routes, Route, Link, useNavigate } = ReactRouterDOM;

function HomePage() {
    return (
        <div className="min-vh-100 d-flex flex-column">
            {/* Hero Section */}
            <section className="hero-section text-white py-5">
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <h1 className="display-3 fw-bold mb-3">
                                SmartCampus
                            </h1>
                            <p className="lead mb-4 fs-4">
                                La gestion académique de notre époque
                            </p>
                            <p className="mb-4 fs-5 opacity-75">
                                Une plateforme moderne pour gérer cours, notes, emploi du temps et inscriptions
                                au sein de votre école d'ingénieurs.
                            </p>
                            <div className="d-flex gap-3 flex-wrap">
                                <Link to="/login" className="btn btn-light btn-lg px-4">
                                    <i className="bi bi-box-arrow-in-right me-2"></i>
                                    Se connecter
                                </Link>
                                <Link to="/register" className="btn btn-outline-light btn-lg px-4">
                                    <i className="bi bi-person-plus me-2"></i>
                                    S'inscrire
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-5 d-none d-lg-block text-center">
                            <i className="bi bi-mortarboard-fill" style={{fontSize: '15rem', opacity: 0.2}}></i>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-5 bg-light flex-grow-1">
                <div className="container py-5">
                    <h2 className="text-center mb-5 fw-bold text-primary">
                        Une plateforme complète
                    </h2>
                    <div className="row g-4">
                        <FeatureCard
                            icon="bi-people-fill"
                            color="primary"
                            title="Pour les étudiants"
                            text="Consultez vos cours, notes, emploi du temps et recevez des notifications en temps réel."
                        />
                        <FeatureCard
                            icon="bi-book-fill"
                            color="success"
                            title="Pour les enseignants"
                            text="Gérez vos cours, saisissez les notes, suivez vos étudiants en toute simplicité."
                        />
                        <FeatureCard
                            icon="bi-gear-fill"
                            color="danger"
                            title="Pour l'administration"
                            text="Pilotez l'ensemble : étudiants, enseignants, cours, inscriptions, statistiques."
                        />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-dark text-white-50 py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="mb-0">
                                <strong className="text-white">SmartCampus</strong> · ECE · 2026
                            </p>
                        </div>
                        <div className="col-md-6 text-md-end">
                            <small>
                                Lucas Delliste · Mateo Cambon · Audran Chevalier · Mathieu Le Nilias Houmeau
                            </small>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

// ============================================================
// Composant : Carte de feature
// ============================================================
function FeatureCard({ icon, color, title, text }) {
    return (
        <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                    <div className={`text-${color} mb-3`}>
                        <i className={`bi ${icon}`} style={{fontSize: '3rem'}}></i>
                    </div>
                    <h4 className="card-title fw-bold">{title}</h4>
                    <p className="card-text text-muted">{text}</p>
                </div>
            </div>
        </div>
    );
}

function LoginPage() {
    return (
        <div className="min-vh-100 d-flex align-items-center bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="card shadow border-0">
                            <div className="card-body p-5">
                                <div className="text-center mb-4">
                                    <h2 className="fw-bold text-primary">SmartCampus</h2>
                                    <p className="text-muted">Connexion à votre espace</p>
                                </div>
                                <div className="alert alert-info">
                                    <i className="bi bi-info-circle me-2"></i>
                                    Page de connexion à implémenter (commit suivant)
                                </div>
                                <Link to="/" className="btn btn-outline-secondary w-100">
                                    <i className="bi bi-arrow-left me-2"></i>
                                    Retour à l'accueil
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function RegisterPage() {
    return (
        <div className="min-vh-100 d-flex align-items-center bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card shadow border-0">
                            <div className="card-body p-5">
                                <div className="text-center mb-4">
                                    <h2 className="fw-bold text-primary">SmartCampus</h2>
                                    <p className="text-muted">Créer un compte étudiant</p>
                                </div>
                                <div className="alert alert-info">
                                    <i className="bi bi-info-circle me-2"></i>
                                    Page d'inscription à implémenter (commit suivant)
                                </div>
                                <Link to="/" className="btn btn-outline-secondary w-100">
                                    <i className="bi bi-arrow-left me-2"></i>
                                    Retour à l'accueil
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function NotFoundPage() {
    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light text-center">
            <div>
                <h1 className="display-1 fw-bold text-primary">404</h1>
                <p className="lead">Page non trouvée</p>
                <Link to="/" className="btn btn-primary">
                    <i className="bi bi-house-fill me-2"></i>
                    Retour à l'accueil
                </Link>
            </div>
        </div>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
