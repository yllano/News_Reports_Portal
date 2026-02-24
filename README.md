# 🌿 EcoMonitor Global — News & Reports Portal

Portal de Centro de Recursos institucional construido como solución al reto técnico de **IDEA (Instituto de Estudios Ambientales)**.

---

## 🛠 Tecnologías utilizadas

| Tecnología | Rol |
|---|---|
| **React 19** | Framework UI basado en componentes |
| **Vite 7** | Bundler y servidor de desarrollo ultrarrápido |
| **Tailwind CSS 4** | Estilos utilitarios CSS-first |
| **Framer Motion** | Animaciones de layout fluidas |
| **Lucide React** | Librería de iconos SVG |
| **Docker + Nginx** | Contenerización y servidor de producción |

---

## 🐳 Ejecución con Docker

> **No necesitas tener Node.js ni ninguna otra dependencia instalada.** Solo necesitas [Docker](https://www.docker.com/products/docker-desktop/).

```bash
# 1. Clonar el repositorio
git clone https://github.com/yllano/News_Reports_Portal.git
cd News_Reports_Portal

# 2. Construir la imagen
docker build -t news-portal .

# 3. Correr el contenedor
docker run -p 8080:80 news-portal
```

La app estará disponible en **http://localhost:8080**

---

## 💻 Ejecución local (desarrollo — opcional)

Si deseas ejecutar el proyecto en modo desarrollo sin Docker, necesitas **Node.js 20+**.

```bash
cd News_Reports_Portal/portal-idea

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La app estará disponible en **http://localhost:5173**

---

## 📁 Estructura del proyecto

```
News_Reports_Portal/
├── Dockerfile                          # Contenerización (raíz)
├── .dockerignore
├── README.md
└── portal-idea/
    ├── src/
    │   ├── components/
    │   │   ├── Banner.jsx              # Autocarrusel de slides cada 5s
    │   │   ├── Filters.jsx             # Filtros por tipo
    │   │   ├── PublicationCard.jsx      # Tarjeta con botón Ver PDF
    │   │   ├── PublicationsList.jsx     # Grid con filtros y animaciones
    │   │   ├── common/
    │   │   │   ├── Header.jsx          # Navegación y toggle de tema
    │   │   │   └── Footer.jsx          # Footer institucional
    │   │   ├── modals/
    │   │   │   ├── DetailModal.jsx     # Vista detalle de publicación
    │   │   │   └── InfoModal.jsx       # Modal informativo
    │   │   └── publications/
    │   │       ├── SearchBar.jsx       # Barra de búsqueda
    │   │       ├── CategoryFilters.jsx # Filtros por categoría
    │   │       └── SortDropdown.jsx    # Ordenamiento
    │   ├── config/
    │   │   └── portalConfig.jsx        # Navegación y contenido de modales
    │   ├── hooks/
    │   │   └── useTheme.js             # Custom hook para modo oscuro
    │   ├── data/
    │   │   └── data.json               # Fuente de datos
    │   ├── App.jsx                     # Componente raíz
    │   └── index.css                   # Variables CSS y tema
    ├── index.html
    └── package.json
```

---

## ✅ Funcionalidades implementadas

- **Banner dinámico**: Autocarrusel con 3 slides, transición suave cada 5 segundos e indicadores clickeables.
- **Lista de publicaciones**: Renderizado desde JSON con soporte para `informe` y `evento`.
- **Filtros por Categoría**: Filtrado en tiempo real por área temática.
- **Modo Lectura / Dark Mode**: Soporte nativo para tema oscuro (Forest Dark) con persistencia local.
- **Ordenamiento Avanzado**: Clasificación por fecha, nombre y tamaño de archivo.
- **Animaciones Fluidas**: Integración de **Framer Motion** para transiciones suaves al filtrar y ordenar.
- **Ver PDF**: Botón en informes que abre el archivo en nueva pestaña.
- **Diseño responsive**: Adaptable a móvil, tablet y escritorio con Tailwind CSS.
- **Arquitectura modular**: Componentes pequeños, hooks reutilizables y configuración centralizada.
