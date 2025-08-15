# Product Management Application - Angular


Aplicación Angular para gestión de productos financieros que implementa todas las funcionalidades requeridas para un rol Senior, incluyendo listado, búsqueda, paginación, creación, edición y eliminación de productos con validaciones avanzadas.

---

## Características principales
- ✅ Listado de productos con paginación  
- ✅ Búsqueda en tiempo real  
- ✅ Formularios reactivos con validaciones complejas  
- ✅ Modales de confirmación  
- ✅ Diseño responsive  
- ✅ Manejo de errores visuales  
- ✅ Pruebas unitarias con >70% de cobertura  
- ✅ Implementación de Clean Code y principios SOLID  

---

## Tecnologías utilizadas
- Angular 18  
- TypeScript 5 
- Jest (Pruebas unitarias)  
- Reactive Forms  
- RxJS  
- HTML5 & CSS3  

---

## Estructura del proyecto

GeovannaFranco/
├── backend/ # Servidor Node.js
├── frontend/ # Aplicación Angular
│ ├── src/
│ │ ├── app/
│ │ │ ├── components # Componentes reutilizables
│ │ │ ├── interfaces # Definiciones de tipos
│ │ │ ├── pages # Vistas principales
│ │ │ ├── services # Lógica de negocio y API
│ │ │ └── utils # Utilidades y validadores
│ │ └── assets # Recursos estáticos
│ └── angular.json # Configuración Angular
├── README.md
└── repo-interview-main.zip # Backend original


---

## ⚙️ Instalación y ejecución

### Requisitos previos
- Node.js v18.x o superior
- npm v9.x o superior
- Angular CLI v15.x

### Configuración del backend
```bash
unzip repo-interview-main.zip -d backend
cd backend
npm install
npm run start:dev

Backend disponible en: http://localhost:3002