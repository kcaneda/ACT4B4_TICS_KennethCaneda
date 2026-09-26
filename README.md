# Documentación 

## ¿Qué hacen estas herramientas?

| Herramienta | Función |
|---|---|
| **ESLint** | Revisa tu código JavaScript y detecta errores o malas prácticas |
| **Husky** | Ejecuta ESLint automáticamente antes de cada commit |

**Resultado:** si tu código tiene errores, el commit **se bloquea** hasta que se corrija.

---

## Instalación

```bash
pnpm add -D eslint @eslint/js globals husky
pnpm exec husky init
```

Esto crea la carpeta `.husky/` y un archivo `pre-commit`.

---

## Configuración de ESLint

Archivo `eslint.config.js`:

```javascript
import js from "@eslint/js";
import globals from "globals";

export default [
    js.configs.recommended,
    {
        files: ["**/*.js"],
        languageOptions: {
            globals: {
                ...globals.browser,
            },
        },
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "error",
            "semi": ["error", "always"],
        },
    },
];
```

### ¿Qué significa cada regla?

| Regla | Qué hace |
|---|---|
| `no-unused-vars` | Avisa si se deja una variable sin usar |
| `no-undef` | Error si se usa algo que no está definido |
| `semi` | Obliga a terminar cada línea con `;` |

---

## Configuración de Husky

Archivo `.husky/pre-commit`:

```bash
pnpm exec eslint .
```

Cada vez que se haga un `git commit`, Husky ejecutará ESLint sobre todos los archivos `.js`.

---

## Comandos útiles

| Comando | Qué hace |
|---|---|
| `pnpm exec eslint .` | Revisa todo el código |
| `pnpm exec eslint script.js` | Revisa solo un archivo |
| `pnpm exec eslint . --fix` | Corrige errores automáticamente (cuando sea posible) |
| `git commit -m "msg" --no-verify` | Salta el hook|

---

## Pruebas:
