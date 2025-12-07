# Development Guidelines

## Component Generation

### SCSS Files
- **Verzichte auf SCSS-Dateien**, wenn kein Styling benötigt wird
- Beim Generieren von Komponenten nur `--style=scss` verwenden, wenn tatsächlich Styles nötig sind
- Andernfalls: `--style=none` verwenden

```bash
# Mit Styling
npx nx g @nx/angular:component my-component --style=scss

# Ohne Styling
npx nx g @nx/angular:component my-component --style=none
```

## Dependency Management

### Installation
- **NIEMALS** `--legacy-peer-deps` Flag verwenden
- Bei Peer Dependency Konflikten: Passende Versionen finden und installieren
- **Immer explizite Versionen** statt Ranges verwenden

```bash
# ✅ Richtig - Explizite Version
npm install @angular/animations@20.3.15

# ❌ Falsch - Range
npm install @angular/animations@~20.3.0
npm install @angular/animations@^20.0.0

# ❌ Falsch - legacy-peer-deps
npm install @ngneat/spectator --legacy-peer-deps
```

### Version Specification in package.json
```json
{
  "dependencies": {
    "@angular/core": "20.3.15",        // ✅ Explizit
    "@angular/common": "~20.3.0",      // ❌ Range
    "@angular/router": "^20.0.0"       // ❌ Range
  }
}
```

## Testing

### Spectator Setup
- Verwende `@ngneat/spectator/jest` für Component Tests
- Stelle sicher dass `@angular/animations` mit passender Version installiert ist
- Prüfe Tests mit: `npm run test`

## Library Struktur

### Path Aliases
- Format: `@discover/library-name`
- Konfiguration in `tsconfig.base.json`

```json
{
  "paths": {
    "@discover/beer-rack-domain": ["libs/beer-rack-domain/src/index.ts"]
  }
}
```

## CI/CD

### GitHub Actions
- Node.js Version: 24 (wie lokal)
- Nx Affected wird verwendet für optimierte Builds
- Dependencies werden mit `npm ci` installiert
