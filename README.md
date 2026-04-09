# Rutilo


Aplicación React mínima con Vite para practicar despliegue en GitHub Pages y validación con GitHub Actions.

## Cómo usar

1. Instala dependencias:
   ```bash
   npm install
   ```
2. Ejecuta en local:
   ```bash
   npm run dev
   ```
3. Construye para producción:
   ```bash
   npm run build
   ```

## Estructura del proyecto

- `.github/workflows/deploy-pages.yml` — workflow de GitHub Actions
- `src/` — código React
- `public/` — archivos públicos estáticos
- `vite.config.ts` — configuración de Vite para GitHub Pages