# Solara Corporación — Web

Sitio corporativo en **Astro (estático)** con identidad verde esmeralda + oro.

## Desarrollo

```bash
npm install
npm run dev
```

## Build para DonWeb

DonWeb / Ferozo Git solo publica archivos. El servidor **no** ejecuta Astro.

```bash
npm run build
```

Esto genera la carpeta `dist/`.

### Opción recomendada con el panel GIT

1. En local: `npm run build`
2. Sube a GitHub el contenido de `dist/` (o configura el remote para desplegar solo `dist`)
3. En Ferozo: repositorio + rama `main` + directorio `public_html/`
4. `public_html/` debe estar vacío antes del primer deploy

Si tu repo tiene el código fuente Astro completo, **no** enlaces la raíz del repo a `public_html` (aparecerían `src/`, `package.json`, etc.). Publica únicamente el contenido de `dist/`.

## Marca

Documentación y assets en `/brand/`.
