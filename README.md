# Discover - Nx Monorepo

Ein Nx Monorepo mit zwei Angular-Anwendungen für Bier-Enthusiasten.

## 📦 Projekte

- **discover-beer** - Finde das perfekte Bier
- **beer-rack** - Verwalte deine Biersammlung

## 🚀 Apps starten

```bash
# Discover Beer starten (Port 4201)
npm run start:discover-beer

# Beer Rack starten (Port 4202)
npm run start:beer-rack
```

Beide Apps öffnen sich automatisch im Browser.

## 🛠️ Weitere Befehle

```bash
# Alle Apps bauen
npm run build:all

# Einzelne App bauen
npm run build:discover-beer
npm run build:beer-rack

# Tests ausführen
npm run test

# Linting
npm run lint
```

## 🔧 Tech Stack

- **Framework:** Angular 20 (Standalone Components)
- **Build Tool:** Nx 22
- **Bundler:** Webpack
- **Styling:** SCSS
- **Testing:** Jest + Cypress
- **Package Manager:** npm
