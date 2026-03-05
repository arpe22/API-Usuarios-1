# API REST Modularizada - Express

Proyecto de API de gestión de usuarios con sistema de seguridad por doble token y estructura profesional de carpetas.

## 🚀 Instalación y Uso

1. Clonar el repositorio.
2. Ejecutar `npm install` para instalar dependencias.
3. Iniciar el servidor:
   - Modo producción: `npm start`
   - Modo desarrollo: `npm run dev`

## 🔐 Seguridad (Middlewares)

La API cuenta con dos capas de seguridad vía Headers:

- **Authorization**: Requerido para todas las rutas (`fha5HpDXSXSjKU0QCbdXiz1a`).
- **token**: Requerido para métodos de escritura (POST, PUT, DELETE) (`HIZe4D32twWOUP9h0I1IVTlr`).

## 🛠️ Endpoints

| Método | Endpoint            | Descripción                     |
| :----- | :------------------ | :------------------------------ |
| GET    | `/api/v1/users`     | Listar todos los usuarios       |
| POST   | `/api/v1/users`     | Crear un nuevo usuario          |
| PUT    | `/api/v1/users/:id` | Actualizar un usuario existente |
| DELETE | `/api/v1/users/:id` | Eliminar un usuario             |

_Probado con Thunder Client en VS Code._
