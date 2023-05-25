const mongoose = require('mongoose');

const EmpresaSchema = mongoose.Schema({
    rubro: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    telefono: {
        type: String
    },
    correoElectronico: {
        type: String
    },
    sitioWeb: {
        type: String
    },
    descripcion: {
        type: String
    },
    fundacion: {
        type: Date
    },
    empleados: {
        type: Number
    },
    activo: {
        type: Boolean,
        default: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Empresa', EmpresaSchema);
