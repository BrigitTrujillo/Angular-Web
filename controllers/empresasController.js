const Empresa = require("../models/Empresa");

exports.crearEmpresa = async (req, res) => {
    try {
        const empresa = new Empresa(req.body);

        await empresa.save();
        res.send(empresa);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerEmpresas = async (req, res) => {
    try {
        const empresas = await Empresa.find();
        res.json(empresas);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarEmpresa = async (req, res) => {
    try {
        const { _id, rubro, nombre, direccion } = new Empresa(req.body);
        let empresa = await Empresa.findById(req.params.id);

        if (!empresa) {
            res.status(404).json({ msg: 'No existe la empresa' });
        }

        empresa._id = _id;
        empresa.rubro = rubro;
        empresa.nombre = nombre;
        empresa.direccion = direccion;

        empresa = await Empresa.findOneAndUpdate({ _id: req.params.id }, empresa, { new: true });
        res.json(empresa);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.verEmpresa = async (req, res) => {
    try {
        let empresa = await Empresa.findById(req.params.id);

        if (!empresa) {
            res.status(404).json({ msg: 'No existe la empresa' });
        }

        res.json(empresa);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarEmpresa = async (req, res) => {
    try {
        let empresa = await Empresa.findById(req.params.id);

        if (!empresa) {
            res.status(404).json({ msg: 'No existe la empresa' });
        }

        empresa = await Empresa.findOneAndRemove(req.params.id);

        res.json({ msg: 'La empresa: ' + empresa.nombre + ' se ha eliminado' });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
