# joaquinbecerra.me

Sitio personal, hecho con [Astro](https://astro.build) y publicado en GitHub Pages.

## Desarrollo

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
```

## Agregar un proyecto

Crear un archivo en `src/content/proyectos/<slug>.md`:

```md
---
titulo: Mi proyecto
resumen: Una línea que lo describa.
stack: [TypeScript, Astro]
orden: 4            # posición en la home (menor = primero)
demo: https://...   # opcional
repo: https://...   # opcional
borrador: true      # opcional, lo oculta
---

Descripción más larga en Markdown.
```

Queda publicado en `/proyectos/<slug>/`.

## Deploy

Cada push a `main` dispara `.github/workflows/deploy.yml`, que buildea y publica en GitHub Pages
(Settings → Pages → Source: **GitHub Actions**). El dominio se configura con `public/CNAME`.
