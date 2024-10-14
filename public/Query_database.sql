-- Crear la base de datos
CREATE DATABASE inventario_ventas;


USE inventario_ventas;

-- Crear tabla de dispositivos
CREATE TABLE Dispositivos (
    Id INT IDENTITY(1,1) PRIMARY KEY,
    Nombre NVARCHAR(100) NOT NULL,
    Marca NVARCHAR(50) NOT NULL,
    Modelo NVARCHAR(50) NOT NULL,
    Precio DECIMAL(10, 2) NOT NULL,
    Estado NVARCHAR(20) DEFAULT 'disponible',
    FechaRegistro DATETIME DEFAULT GETDATE()
);
GO

-- Insertar algunos dispositivos iniciales
INSERT INTO Dispositivos (Nombre, Marca, Modelo, Precio, Estado)
VALUES 
('iPhone 14 Pro', 'Apple', 'A2893', 1099.99, 'disponible'),
('Galaxy S23 Ultra', 'Samsung', 'SM-S918B', 1199.99, 'disponible'),
('Pixel 8 Pro', 'Google', 'GP8P', 999.99, 'disponible');
GO

