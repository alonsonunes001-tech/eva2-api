const db = require('../db/connection');

const crearProducto = (req, res) => {
  const { nombre, descripcion, precio, stock, categoria_texto, disponible } = req.body;
  if (!nombre || !precio) {
    return res.status(400).json({ error: 'nombre y precio son obligatorios' });
  }
  const sql = 'INSERT INTO productos_tienda (nombre, descripcion, precio, stock, categoria_texto, disponible) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(sql, [nombre, descripcion, precio, stock ?? 0, categoria_texto, disponible ?? true], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Producto creado', id: result.insertId });
  });
};

const listarProductos = (req, res) => {
  db.query('SELECT * FROM productos_tienda', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

const obtenerProducto = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM productos_tienda WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(results[0]);
  });
};

const actualizarProducto = (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, precio, stock, categoria_texto, disponible } = req.body;
  if (!nombre || !precio) {
    return res.status(400).json({ error: 'nombre y precio son obligatorios' });
  }
  const sql = 'UPDATE productos_tienda SET nombre=?, descripcion=?, precio=?, stock=?, categoria_texto=?, disponible=? WHERE id=?';
  db.query(sql, [nombre, descripcion, precio, stock, categoria_texto, disponible, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json({ message: 'Producto actualizado' });
  });
};

const eliminarProducto = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM productos_tienda WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json({ message: 'Producto eliminado' });
  });
};

module.exports = { crearProducto, listarProductos, obtenerProducto, actualizarProducto, eliminarProducto };