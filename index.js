const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/clientes', require('./src/routes/clientes.routes'));
app.use('/productos', require('./src/routes/productos.routes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});