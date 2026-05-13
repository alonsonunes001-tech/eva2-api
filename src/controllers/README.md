# EVA2 - API REST con Express + SQL

## Descripción
API REST construida con Node.js + Express + MySQL para gestionar clientes y productos.

## Requisitos
- Node.js v18 o superior
- MySQL
- Postman

## Instalación

1. Clonar el repositorio:
git clone https://github.com/alonsonunes001-tech/eva2-api.git

2. Entrar a la carpeta:
cd eva2-api

3. Instalar dependencias:
npm install

4. Configurar variables de entorno:
Editar el archivo .env con tus datos de MySQL:
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=eva2_db

5. Crear la base de datos ejecutando el archivo estructura.sql en MySQL Workbench

6. Ejecutar el servidor:
node index.js

## Endpoints

### Clientes
- POST   /clientes
- GET    /clientes
- GET    /clientes/:id
- PUT    /clientes/:id
- DELETE /clientes/:id

### Productos
- POST   /productos
- GET    /productos
- GET    /productos/:id
- PUT    /productos/:id
- DELETE /productos/:id