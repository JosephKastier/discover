# Discover - Nx Monorepo

Ein Nx Monorepo mit zwei Angular-Anwendungen für Bier-Enthusiasten.

## 📦 Projekte

- **discover-beer** - Finde das perfekte Bier
- **beer-rack** - Verwalte deine Biersammlung
- **api** - Express.js REST API mit Prisma ORM

## 🗄️ Datenbank Setup

### PostgreSQL lokal installieren (macOS)

```bash
# PostgreSQL installieren
brew install postgresql@14

# PostgreSQL starten
npm run db:start

# Datenbank erstellen
createdb discover

# Prisma Migrationen ausführen
npx prisma migrate dev

# Datenbank mit Testdaten füllen
npm run db:seed

# Prisma Studio öffnen (GUI)
npm run db:studio
```

### Datenbank Commands

```bash
npm run db:start    # PostgreSQL starten
npm run db:stop     # PostgreSQL stoppen
npm run db:restart  # PostgreSQL neustarten
npm run db:status   # Status anzeigen
npm run db:seed     # Testdaten einfügen
npm run db:studio   # Prisma Studio öffnen
```

### Umgebungsvariablen

Erstelle eine `.env` Datei im Root:

```env
DATABASE_URL="postgresql://josephkastier@localhost:5432/discover"
```

## 🚀 Apps starten

```bash
# Discover Beer starten (Port 4201)
npm run start:discover-beer

# Beer Rack starten (Port 4202)
npm run start:beer-rack

# API starten (Port 3000)
npm run start:api
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
- **Backend:** Express.js 4 + Prisma ORM
- **Database:** PostgreSQL 14
- **Build Tool:** Nx 22
- **Bundler:** Webpack
- **Styling:** SCSS
- **Testing:** Jest + Spectator
- **Package Manager:** npm
