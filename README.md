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
Prueba de eslint en consola para verificar errores instantáneos:
<img width="778" height="361" alt="image" src="https://github.com/user-attachments/assets/920569f3-2387-4f01-9eac-698203ffe8a8" />

Prueba de commit donde husky bloquea basándose en la configuración de eslint:
<img width="541" height="341" alt="image" src="https://github.com/user-attachments/assets/e6d4e705-339f-4e91-a75a-93ca03684b00" />



Vista de la mini API:
<img width="1469" height="597" alt="image" src="https://github.com/user-attachments/assets/7710597e-6bf6-43fc-b039-d6017632b0a4" />
<img width="1600" height="900" alt="image" src="https://github.com/user-attachments/assets/f60eea10-b88e-4d62-9df5-ca5fe5126b90" />


