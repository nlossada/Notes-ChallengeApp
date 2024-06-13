# My Notes App

## Requisitos para Ejecutar la Aplicación

### Frontend

- **npm**: versión 18.17 o superior
- **Node.js**: versión 18.2.0 o superior
- **Vite**: versión 4.4.5
- **React**: versión 18.2.0
- **React DOM**: versión 18.2.0
- **React Icons**: versión 5.2.1
- **React Redux**: versión 9.1.2
- **React Router DOM**: versión 6.23.1
- **Redux Toolkit**: versión 2.2.5
- **Redux**: versión 5.0.1
- **Redux Thunk**: versión 3.1.0
- **ESLint**: versión 8.45.0 (para linting)
- **@types/react**: versión 18.2.15
- **@types/react-dom**: versión 18.2.7

### Backend

- **npm**: versión 18.17 o superior
- **Node.js**: versión 18.2.0 o superior
- **Express**: versión 4.19.2
- **Nodemon**: versión 3.1.3 (para entorno de desarrollo)
- **Axios**: versión 1.7.2
- **Cookie-parser**: versión 1.4.6
- **Dotenv**: versión 16.4.5
- **Morgan**: versión 1.10.0
- **pg**: versión 8.12.0
- **pg-hstore**: versión 2.3.4
- **Sequelize**: versión 6.37.3

## Instrucciones de Instalación y Ejecución

1. **Clona el Repositorio**
   ```bash
   git clone <url_del_repositorio>
   cd <nombre_del_repositorio>

2. **Instala las Dependencias del Frontend**
   ```bash
    cd frontend
    npm install

3. **Instala las Dependencias del Backend**
   ```bash
    cd ../backend
    npm install

4. **Configuración del Entorno y Base de Datos**

   - Crea un archivo `.env` en la carpeta `backend` y configura las variables de entorno necesarias.
   - Asegúrate de tener PostgreSQL instalado y configurado en tu máquina local o en el servidor donde se ejecutará la aplicación.
   - Crea una base de datos llamada `notesapp` en PostgreSQL si aún no está creada.

5. **Ejecuta la Aplicación**

   - Para el Frontend:
     ```bash
     cd frontend
     npm run dev
     ```

   - Para el Backend:
     ```bash
     cd backend
     npm start
     ```

6. **Accede a la Aplicación**

   -  Abre tu navegador web y visita `http://localhost:5173` (o el puerto que hayas configurado para Vite) para acceder al frontend.
