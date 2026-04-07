# Déploiement GitHub + Fly.io

Ce dépôt contient **deux applications Fly.io** :

1. **`backend/`** — API Django (contact + admin), URL du type `https://<nom-api>.fly.dev`
2. **racine** — site Vite/React servi par Nginx, URL du type `https://<nom-web>.fly.dev`

Le front appelle l’API via `VITE_CONTACT_API_URL`, injectée **au build** Docker (voir `fly.toml` à la racine).

## Prérequis

- Compte [GitHub](https://github.com)
- Compte [Fly.io](https://fly.io) et CLI : [installation `flyctl`](https://fly.io/docs/hands-on/install-flyctl/)
- (Optionnel) [Docker](https://www.docker.com/) pour tester les images en local

## 1. Pousser le code sur GitHub

Depuis la racine du projet :

```powershell
git init
git add .
git commit -m "Initial commit: portfolio + API Django"
```

Sur GitHub : créer un dépôt vide (sans README imposé), puis :

```powershell
git remote add origin https://github.com/TON_USER/TON_REPO.git
git branch -M main
git push -u origin main
```

## 2. Déployer l’API Django (`backend/`)

```powershell
cd backend
fly auth login
fly apps create portfolio-api
```

Si le nom `portfolio-api` est pris, choisis un autre nom et mets-le dans `backend/fly.toml` (`app = "..."`).

Secrets (adapte les valeurs ; **ne commite pas** les secrets) :

```powershell
fly secrets set SECRET_KEY="une-cle-longue-et-aleatoire" -a portfolio-api
fly secrets set DJANGO_DEBUG="False" -a portfolio-api
fly secrets set DJANGO_ALLOWED_HOSTS="portfolio-api.fly.dev" -a portfolio-api
fly secrets set DJANGO_CORS_ALLOWED_ORIGINS="https://portfolio-web.fly.dev" -a portfolio-api
fly secrets set DJANGO_CSRF_TRUSTED_ORIGINS="https://portfolio-web.fly.dev" -a portfolio-api
fly secrets set EMAIL_HOST_USER="ton@gmail.com" -a portfolio-api
fly secrets set EMAIL_HOST_PASSWORD="mot_de_passe_application" -a portfolio-api
fly secrets set DEFAULT_FROM_EMAIL="ton@gmail.com" -a portfolio-api
fly secrets set CONTACT_RECEIVER_EMAIL="ton@gmail.com" -a portfolio-api
```

Remplace `portfolio-api` / `portfolio-web` par les noms réels de tes apps.

Déploiement :

```powershell
fly deploy -a portfolio-api
```

Test : `POST https://portfolio-api.fly.dev/api/contact/` (JSON : `name`, `email`, `subject`, `message`).

## 3. Déployer le site React (racine)

Mets à jour **`fly.toml`** à la racine :

- `app = "portfolio-web"` (ou le nom créé avec `fly apps create`)
- Dans `[build.args]`, **`VITE_CONTACT_API_URL`** doit être l’URL exacte de ton API, par ex.  
  `https://portfolio-api.fly.dev/api/contact/`

Puis :

```powershell
cd ..
fly apps create portfolio-web
fly deploy -a portfolio-web
```

Ouvre l’URL affichée par Fly (`https://portfolio-web.fly.dev`) et teste le formulaire de contact.

## Ordre recommandé

1. Déployer l’**API** et noter son URL HTTPS.
2. Mettre cette URL dans **`fly.toml`** (`[build.args]`) pour le front.
3. Déployer le **site** (rebuild nécessaire si tu changes l’URL de l’API).

## Notes

- **SQLite** sur Fly : le fichier peut être réinitialisé selon les redémarrages ; pour de la persistance forte, envisage [Fly Postgres](https://fly.io/docs/postgres/).
- Après changement de `VITE_CONTACT_API_URL`, il faut **reconstruire** l’image du front (`fly deploy`).
