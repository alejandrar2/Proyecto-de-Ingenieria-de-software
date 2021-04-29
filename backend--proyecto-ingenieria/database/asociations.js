const User = require('../models/user');
const Producto = require('../models/producto');
const Categoria = require('../models/categoria');
const Denuncia = require('../models/denuncia');
const Administrador = require('../models/administrador');
const Departamento = require('../models/departamento');
const Municipio = require('../models/municipio');
const Persona = require('../models/persona');
const Servicio = require('../models/servicio');
const Publicacion = require('../models/publicacion');
const Venta = require('../models/venta');
const productoDepartamento = require('../models/productoDepartamento');
const productoUsuario = require('../models/productoUsuario');




//RELACION VENTA - PRODUCTO 

Venta.belongsTo(Producto)

Producto.hasMany(Venta)


//RELACION VENTA - USUARIO

Venta.belongsTo(User)

User.hasMany(Venta)


//RELACION CATEGORIA - PRODUCTO (una categoria tiene muchos productos)
Producto.belongsTo(Categoria);

Categoria.hasMany(Producto);

//RELACION PERSONA A USER

User.belongsTo(Persona);

//RELACION PERSONA A ADMINISTRADOR

Administrador.belongsTo(Persona);

//RELACION USUARIO A DENUNCIA

User.hasMany(Denuncia);

Denuncia.belongsTo(User);

//RELACION USUARIO A PUBLICACION

User.hasMany(Publicacion);

Publicacion.belongsTo(User);

//RELACION ADMINISTRADOR

Administrador.hasMany(Servicio);

Servicio.belongsTo(Administrador);

//PRODUCTODEPARTAMENTO A PRODUCTO

productoDepartamento.belongsTo(Producto);

Producto.hasMany(productoDepartamento);

// PRODUCTODEPARTAMENTO A DEPARTAMENTO

productoDepartamento.belongsTo(Departamento);

Departamento.hasMany(productoDepartamento);


// RELACION PRODUCTOUSUARIO PRODUCTO
productoUsuario.belongsTo(Producto); 

Producto.hasMany(productoUsuario);

//RELACION PRODUCTOUSUARIO USUARIO

productoUsuario.belongsTo(User); 

User.hasMany(productoUsuario);

