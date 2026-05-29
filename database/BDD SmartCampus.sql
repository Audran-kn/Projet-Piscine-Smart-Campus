USE smartcampus;

-- Désactivation des contraintes pour vider proprement les tables
SET FOREIGN_KEY_CHECKS = 0;

DELETE FROM note;
DELETE FROM seance;
DELETE FROM inscription;
DELETE FROM cours;
DELETE FROM etudiant;
DELETE FROM enseignant;
DELETE FROM administrateur;
DELETE FROM notification;

-- Reset des compteurs auto-incrémentaux
ALTER TABLE note AUTO_INCREMENT = 1;
ALTER TABLE seance AUTO_INCREMENT = 1;
ALTER TABLE inscription AUTO_INCREMENT = 1;
ALTER TABLE cours AUTO_INCREMENT = 1;
ALTER TABLE etudiant AUTO_INCREMENT = 1;
ALTER TABLE enseignant AUTO_INCREMENT = 1;
ALTER TABLE administrateur AUTO_INCREMENT = 1;
ALTER TABLE notification AUTO_INCREMENT = 1;

SET FOREIGN_KEY_CHECKS = 1;

-- ============================================================
-- IMPORTANT : Le hash bcrypt ci-dessous correspond au mdp "mateolpb"
-- Pour le régénérer si besoin :
-- php -r "echo password_hash('mateolpb', PASSWORD_DEFAULT);"
-- ============================================================

-- 1. ADMINISTRATEURS
INSERT INTO administrateur (id_admin, nom, prenom, email, mdp) VALUES
(1, 'Delliste', 'Lucas', 'lucas.delliste@edu.ece.fr', '$2y$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW'),
(2, 'Chevalier', 'Audran', 'audran.chevalier@edu.ece.fr', '$2y$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW');

-- 2. ENSEIGNANTS
INSERT INTO enseignant (id_enseignant, nom, prenom, email, mdp, departement, grade) VALUES
(1, 'Dupont', 'Jean', 'jean.dupont@ece.fr', '$2y$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW', 'Informatique', 'Professeur Principal'),
(2, 'Martin', 'Sophie', 'sophie.martin@ece.fr', '$2y$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW', 'Informatique', 'Maître de conférences'),
(3, 'Durand', 'Pierre', 'pierre.durand@ece.fr', '$2y$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW', 'Mathématiques', 'Professeur émérite'),
(4, 'Lefebvre', 'Chantal', 'chantal.lefebvre@ece.fr', '$2y$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW', 'Électronique', 'Intervenant extérieur'),
(5, 'Moreau', 'Robert', 'robert.moreau@ece.fr', '$2y$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36WQoeG6Lruj3vjPGga31lW', 'Sciences Humaines', 'Enseignant-Chercheur');

-- (La suite est identique à votre fichier, juste remplacer le hash partout)
