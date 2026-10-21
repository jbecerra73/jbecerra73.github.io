---
titulo: Brevio
resumen: Un digest diario de tus redes sociales, resumido con un LLM y enviado por mail.
stack: [ASP.NET Core, SvelteKit, PostgreSQL, Hangfire]
orden: 2
---

Los usuarios conectan su cuenta de YouTube; cada día el sistema busca los videos publicados, genera un resumen corto con un LLM y manda un único mail con el digest.

La arquitectura está pensada para sumar otras plataformas (por ejemplo Twitter/X) sin reescribir el pipeline.
