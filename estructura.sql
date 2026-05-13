CREATE DATABASE IF NOT EXISTS eva2_db;
USE eva2_db;

CREATE TABLE clientes_web (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  apellido VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL,
  telefono VARCHAR(20),
  fecha_registro DATE,
  activo BOOLEAN DEFAULT true,
  pais_residencia VARCHAR(80) NOT NULL DEFAULT 'Chile'
);

CREATE TABLE productos_tienda (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(120) NOT NULL,
  precio DECIMAL(10,2) NOT NULL,
  stock INT DEFAULT 0,
  categoria_texto VARCHAR(80),
  disponible BOOLEAN DEFAULT true
);