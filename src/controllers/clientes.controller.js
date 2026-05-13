const db = require('../db/connection');

const crearCliente = (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: 'El body no puede estar vacío' });
  }
  const { nombre, apellido, email, telefono, fecha_registro, activo, pais_residencia } = req.body;
  if (!nombre || !apellido || !email || !pais_residencia) {
    return res.status(400).json({ error: 'nombre, apellido, email y pais_residencia son obligatorios' });
  }
  const sql = 'INSERT INTO clientes_web (nombre, apellido, email, telefono, fecha_registro, activo, pais_residencia) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.query(sql, [nombre, apellido, email, telefono, fecha_registro, activo ?? true, pais_residencia], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Cliente creado', id: result.insertId });
  });
};

const listarClientes = (req, res) => {
  db.query('SELECT * FROM clientes_web', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

const obtenerCliente = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM clientes_web WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ error: 'Cliente no encontrado' });
    res.json(results[0]);
  });
};

const actualizarCliente = (req, res) => {
  const { id } = req.params;
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: 'El body no puede estar vacío' });
  }
  const { nombre, apellido, email, telefono, fecha_registro, activo, pais_residencia } = req.body;
  if (!nombre || !apellido || !email || !pais_residencia) {
    return res.status(400).json({ error: 'nombre, apellido, email y pais_residencia son obligatorios' });
  }
  const sql = 'UPDATE clientes_web SET nombre=?, apellido=?, email=?, telefono=?, fecha_registro=?, activo=?, pais_residencia=? WHERE id=?';
  db.query(sql, [nombre, apellido, email, telefono, fecha_registro, activo, pais_residencia, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Cliente no encontrado' });
    res.json({ message: 'Cliente actualizado' });
  });
};

const eliminarCliente = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM clientes_web WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Cliente no encontrado' });
    res.json({ message: 'Cliente eliminado' });
  });
};

module.exports = { crearCliente, listarClientes, obtenerCliente, actualizarCliente, eliminarCliente };