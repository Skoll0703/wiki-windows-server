# Wiki RIQCHR — Laboratorio Windows Server

Este repositorio contiene una pequeña aplicación React + Vite que sirve como interfaz para la
documentación del laboratorio Windows Server (Active Directory, DNS, DHCP y GPO).

Contenido principal
- Documentos Markdown: `docs_wiki_riqchr/*.md` — aquí está la documentación editable.
- Imágenes: `docs_wiki_riqchr/img_riqchr/` — evidencia y capturas usadas en la documentación.
- Componentes UI: `src/componentes/*.jsx` — páginas y layout que muestra la documentación en la app.

Recomendación sobre fuente canonical
- Actualmente los componentes JSX contienen contenido que también está en los archivos Markdown,
	por lo que hay duplicación. Recomendamos usar los archivos Markdown como fuente canonical
	y renderizarlos desde React (con `react-markdown` o MDX) si deseas que los `.md` sean lo editable.

Instalación y uso
```bash
npm install
npm run dev      # iniciar servidor de desarrollo (http://localhost:5173 por defecto)
npm run build    # compilar para producción (genera carpeta dist)
npm run preview  # vista previa de la build
```

Estructura relevante
- `src/` — código React y componentes.
- `docs_wiki_riqchr/` — archivos Markdown usados como documentación fuente.
- `public/` — lugar recomendado para mover imágenes si quieres referenciarlas directamente desde Markdown.

Cómo integrar Markdown en la app (opciones)
- Importar MD en tiempo de desarrollo y renderizar con `react-markdown`:
	```js
	import ReactMarkdown from 'react-markdown'
	import content from '../docs_wiki_riqchr/inicio_riqchr.md?raw'

	export default function Page(){
		return <ReactMarkdown>{content}</ReactMarkdown>
	}
	```
- Servir MD desde `public/` y `fetch()` si quieres editar sin rebuild.
- Usar MDX si quieres mezclar JSX interactivo dentro del Markdown.

Notas sobre imágenes
- Renombrar archivos para eliminar espacios y caracteres especiales facilita su uso desde código.
- Mover imágenes a `public/docs/img/` permite referenciarlas en Markdown con rutas absolutas: `/docs/img/imagen.png`.

Si quieres que adapte el proyecto para que los componentes carguen los `*.md` automáticamente
(mover imágenes a `public/`, actualizar rutas y usar `react-markdown`), dime y lo hago.

---
Pequeña guía de contribución
- Edita los archivos en `docs_wiki_riqchr/` para cambiar el contenido de la wiki.
- Para cambios visuales o nuevas páginas, edita o crea componentes en `src/componentes/`.

Licencia
- Este repositorio es privado/educativo — añade una licencia si piensas compartirlo públicamente.
