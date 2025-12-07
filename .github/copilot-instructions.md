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
    "@angular/core": "20.3.15", // ✅ Explizit
    "@angular/common": "~20.3.0", // ❌ Range
    "@angular/router": "^20.0.0" // ❌ Range
  }
}
```

## Testing

### Unit Tests - Spectator/Jest

- **IMMER** `@ngneat/spectator/jest` für Component Tests verwenden
- **NIEMALS** die Standard-TestBed Syntax verwenden
- Neue Tests oder angepasste Tests **müssen immer grün sein** bevor sie committed werden
- Alle Tests immer ausführen mit: `npm run test` oder `nx run-many -t test`

```typescript
// ✅ RICHTIG - Mit Spectator
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { MyComponent } from './my.component';

describe('MyComponent', () => {
  let spectator: Spectator<MyComponent>;
  const createComponent = createComponentFactory(MyComponent);

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
```

```typescript
// ❌ FALSCH - Standard TestBed
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyComponent } from './my.component';

describe('MyComponent', () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyComponent],
    }).compileComponents();
    // ... rest of TestBed code
  });
});
```

### Test Anforderungen

- Tests müssen nach jeder Änderung grün sein
- Neue Features müssen mit Tests versehen werden
- Code Coverage sollte angemessen sein
- Tests dokumentieren das gewünschte Verhalten

## Library Struktur

### Path Aliases

- Format: `@discover/library-name`
- Konfiguration in `tsconfig.base.json`

```json
{
  "paths": {
    "@discover/rack": ["rack/src/index.ts"]
  }
}
```

## Code Style

### Einrückung

- **Immer 2 Spaces** für alle Dateitypen (TypeScript, JavaScript, HTML, SCSS, JSON, YAML, etc.)
- **Niemals Tabs** verwenden
- Konfiguriert in: `.editorconfig`, `.prettierrc`, ESLint

## CI/CD

### GitHub Actions

- Node.js Version: 24 (wie lokal)
- Nx Affected wird verwendet für optimierte Builds
- Dependencies werden mit `npm ci` installiert
