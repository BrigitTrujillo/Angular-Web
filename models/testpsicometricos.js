const mongoose = require('mongoose');

const TestPsicometricoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String
    },
    resultados: {
        type: String
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('TestPsicometrico', TestPsicometricoSchema);
