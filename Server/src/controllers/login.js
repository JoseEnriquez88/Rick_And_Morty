const users = require('../utils/users')

const login = (req, res) => {
    try {
        const { email, password } = req.query;
        const userFound = users.find((users) => users.email === email && users.password === password);

        if(!userFound) return res.status(401).send({ message: 'Email o Contraseña inválidos.', access: false });

        return res.status(200).json({ access: true });
    } catch (error) {
        console.error(error);
        return res.status(500).send('Ocurrio un error en el servidor');
    }
};

module.exports = {
    login
};