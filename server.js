const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session'); 

const app = express();
const db = new sqlite3.Database('./users.db');

app.use(session({
    secret: 'tu_secreto_seguro', 
    resave: false,
    saveUninitialized: false
}));

app.use(bodyParser.json());
app.use(express.static(__dirname)); 

db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    apellido TEXT NOT NULL,
    nombre_usuario TEXT NOT NULL UNIQUE,
    correo TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
  )
`);

db.run(`
    CREATE TABLE IF NOT EXISTS perfiles (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      foto TEXT,
      nombre TEXT NOT NULL,
      correo TEXT NOT NULL UNIQUE,
      telefono TEXT NOT NULL,
      direccion TEXT NOT NULL,
      fecha_nacimiento DATE NOT NULL,
      nacionalidad TEXT NOT NULL,
      carrera TEXT NOT NULL,
      experiencia INTEGER NOT NULL,
      empresa TEXT NOT NULL,
      cargo TEXT NOT NULL,
      estudios TEXT NOT NULL,
      idiomas TEXT NOT NULL,
      habilidades TEXT NOT NULL,
      hobbies TEXT NOT NULL,
      logros TEXT NOT NULL
    )
  `);
  

app.post('/register', async (req, res) => {
    const { nombre, apellido, nombre_usuario, correo, password } = req.body;

    try {
        if (password.length < 6) {
            return res.status(400).send({ message: 'La contraseña debe tener al menos 6 caracteres' });
        }

        const hashedPassword = await bcrypt.hash(password, 10); 

        const query = `INSERT INTO users (nombre, apellido, nombre_usuario, correo, password) VALUES (?, ?, ?, ?, ?)`;
        db.run(query, [nombre, apellido, nombre_usuario, correo, hashedPassword], function(err) {
            if (err) {
                console.error(err); 
                if (err.code === 'SQLITE_CONSTRAINT') {
                    return res.status(400).send({ message: 'El nombre de usuario o correo ya existe' });
                }
                return res.status(500).send({ message: 'Error al crear la cuenta' });
            }

            res.status(201).send({ message: 'Cuenta creada exitosamente' });
        });
    } catch (error) {
        console.error(error); 
        res.status(500).send({ message: 'Error al crear la cuenta' });
    }
});

app.post('/login', (req, res) => {
    const { correo, password } = req.body;

    const query = `SELECT * FROM users WHERE correo = ?`;
    db.get(query, [correo], async (err, user) => {
        if (err || !user) {
            return res.status(400).json({ message: 'Usuario no encontrado' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Contraseña incorrecta' });
        }

        req.session.usuario = { correo }; 

        res.json({ success: true, message: 'Inicio de sesión exitoso' }); 
    });
});

app.get('/home', (req, res) => {
    if (req.session.usuario) {
        res.sendFile(path.join(__dirname, 'home.html'));
    } else {
        res.redirect('/'); 
    }
});

app.get('/perfil', (req, res) => {
    if (req.session.usuario) {
        res.sendFile(path.join(__dirname, 'perfil.html'));
    } else {
        res.redirect('/'); 
    }
});

app.post('/guardarPerfil', (req, res) => {
    const {
        foto, nombre, correo, telefono, direccion, fecha_nacimiento,
        nacionalidad, carrera, experiencia, empresa, cargo, estudios,
        idiomas, habilidades, hobbies, logros
    } = req.body;

    const query = `
      INSERT INTO perfiles (
        foto, nombre, correo, telefono, direccion, fecha_nacimiento,
        nacionalidad, carrera, experiencia, empresa, cargo, estudios,
        idiomas, habilidades, hobbies, logros
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.run(query, [
        foto, nombre, correo, telefono, direccion, fecha_nacimiento,
        nacionalidad, carrera, experiencia, empresa, cargo, estudios,
        idiomas, habilidades, hobbies, logros
    ], function(err) {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error al guardar el perfil' });
        }
        res.status(201).json({ message: 'Perfil guardado exitosamente' });
    });
});


const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});