const TestPsicometrico = require("../models/TestPsicometrico");

exports.crearTestPsicometrico = async (req, res) => {
    try {
        const testPsicometrico = new TestPsicometrico(req.body);

        await testPsicometrico.save();
        res.send(testPsicometrico);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerTestsPsicometricos = async (req, res) => {
    try {
        const testsPsicometricos = await TestPsicometrico.find();
        res.json(testsPsicometricos);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarTestPsicometrico = async (req, res) => {
    try {
        const { _id, nombre, descripcion, resultados } = new TestPsicometrico(req.body);
        let testPsicometrico = await TestPsicometrico.findById(req.params.id);

        if (!testPsicometrico) {
            res.status(404).json({ msg: 'No existe el test psicométrico' });
        }

        testPsicometrico._id = _id;
        testPsicometrico.nombre = nombre;
        testPsicometrico.descripcion = descripcion;
        testPsicometrico.resultados = resultados;

        testPsicometrico = await TestPsicometrico.findOneAndUpdate({ _id: req.params.id }, testPsicometrico, { new: true });
        res.json(testPsicometrico);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.verTestPsicometrico = async (req, res) => {
    try {
        let testPsicometrico = await TestPsicometrico.findById(req.params.id);

        if (!testPsicometrico) {
            res.status(404).json({ msg: 'No existe el test psicométrico' });
        }

        res.json(testPsicometrico);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarTestPsicometrico = async (req, res) => {
    try {
        let testPsicometrico = await TestPsicometrico.findById(req.params.id);

        if (!testPsicometrico) {
            res.status(404).json({ msg: 'No existe el test psicométrico' });
        }

        testPsicometrico = await TestPsicometrico.findOneAndRemove(req.params.id);

        res.json({ msg: 'El test psicométrico "' + testPsicometrico.nombre + '" se ha eliminado' });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
