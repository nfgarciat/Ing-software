document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM completamente cargado");

    const loginButton = document.querySelector('.login-button');
    const signupButton = document.querySelector('.signup-button');
    const buttonsContainer = document.querySelector('.buttons-container');
    const loginForm = document.querySelector('.login-form');
    const signupForm = document.querySelector('.signup-form');
    const backButtons = document.querySelectorAll('.back-button');

    const listaOfertas = document.getElementById('lista-ofertas');
    const vacantesDataElement = document.getElementById('vacantes-data');
    const positionInput = document.getElementById('position-input');
    const cityFilter = document.getElementById('city-filter');

    const modal = document.getElementById('formulario-perfil');
    const btnCrearPerfil = document.getElementById('crear-perfil');
    const btnGuardarPerfil = document.querySelector('#formulario-perfil .boton-perfil');
    const spanCerrar = document.getElementsByClassName('close-button')[0];
    const listaPerfiles = document.getElementById('lista-perfiles');

    let vacantes = [];
    if (vacantesDataElement) {
        try {
            vacantes = JSON.parse(vacantesDataElement.textContent);
        } catch (error) {
            console.error("Error al parsear el JSON de vacantes:", error);
        }
    } else {
        console.warn("Elemento #vacantes-data no encontrado en el DOM.");
    }

    const toggleDisplay = (element, action) => {
        if (element) {
            element.style.display = action === 'show' ? 'block' : 'none';
        }
    };

    if (loginButton) {
        loginButton.addEventListener('click', () => {
            toggleDisplay(buttonsContainer, 'hide');
            toggleDisplay(loginForm, 'show');
            toggleDisplay(signupForm, 'hide');
        });
    }

    if (signupButton) {
        signupButton.addEventListener('click', () => {
            toggleDisplay(buttonsContainer, 'hide');
            toggleDisplay(loginForm, 'hide');
            toggleDisplay(signupForm, 'show');
        });
    }

    backButtons.forEach(backButton => {
        backButton.addEventListener('click', () => {
            toggleDisplay(buttonsContainer, 'show');
            toggleDisplay(loginForm, 'hide');
            toggleDisplay(signupForm, 'hide');
        });
    });

    if (loginForm) {
        loginForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const data = {
                correo: loginForm.querySelector('input[type="email"]').value,
                password: loginForm.querySelector('input[type="password"]').value
            };

            try {
                const response = await fetch('/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });

                const result = await response.json();

                if (response.ok) {
                    alert(result.message);
                    window.location.href = '/home';  
                } else {
                    alert(result.message);
                }
            } catch (error) {
                console.error('Error en la solicitud fetch:', error);
                alert('Error al comunicarse con el servidor.');
            }
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const data = {
                nombre: signupForm.querySelector('input[placeholder="Nombre"]').value,
                apellido: signupForm.querySelector('input[placeholder="Apellido"]').value,
                nombre_usuario: signupForm.querySelector('input[placeholder="Nombre de usuario"]').value,
                correo: signupForm.querySelector('input[placeholder="Correo electrónico"]').value,
                password: signupForm.querySelector('input[placeholder="Contraseña"]').value
            };

            try {
                const response = await fetch('/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });

                const result = await response.json();

                if (response.ok) {
                    alert(result.message);
                    toggleDisplay(signupForm, 'hide');
                    toggleDisplay(loginForm, 'show');
                } else {
                    alert(result.message);
                }
            } catch (error) {
                console.error('Error en la solicitud fetch:', error);
                alert('Error al comunicarse con el servidor.');
            }
        });
    }

    function mostrarVacantes(vacantesFiltradas) {
        if (listaOfertas) {
            listaOfertas.innerHTML = ''; 

            if (vacantesFiltradas.length === 0) {
                listaOfertas.innerHTML = '<p>No se encontraron vacantes para los filtros seleccionados.</p>';
                return;
            }

            vacantesFiltradas.forEach(vacante => {
                listaOfertas.innerHTML += `
                    <div class="oferta">
                        <h3>${vacante.titulo}</h3>
                        <p>${vacante.empresa}</p>
                        <p>${vacante.ciudad}</p>
                        <p>${vacante.modalidad}</p>
                        <a href="#" class="aplicar">
                            <span class="material-icons">send</span> Aplicar
                        </a>
                    </div>
                `;
            });
        } else {
            console.warn("Elemento #lista-ofertas no encontrado en el DOM.");
        }
    }

    mostrarVacantes(vacantes);

    window.filtrarVacantes = function() {
        const textoCargo = positionInput ? positionInput.value.toLowerCase() : '';
        const ciudadFiltro = cityFilter ? cityFilter.value : '';

        const vacantesFiltradas = vacantes.filter(vacante => {
            const coincideCargo = vacante.titulo.toLowerCase().includes(textoCargo);
            const coincideCiudad = ciudadFiltro === "" || vacante.ciudad === ciudadFiltro;

            return coincideCargo && coincideCiudad;
        });

        mostrarVacantes(vacantesFiltradas);
    };

    btnCrearPerfil.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    spanCerrar.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    function guardarPerfil() {
        console.log('Intentando guardar perfil');

        const nombre = document.getElementById('nombre').value;
        const correo = document.getElementById('correo').value;
        const telefono = document.getElementById('telefono').value;
        const direccion = document.getElementById('direccion').value;
        const fechaNacimiento = document.getElementById('fecha_nacimiento').value;
        const nacionalidad = document.getElementById('nacionalidad').value;
        const carrera = document.getElementById('carrera').value;
        const experiencia = document.getElementById('experiencia').value;
        const empresa = document.getElementById('empresa').value;
        const cargo = document.getElementById('cargo').value;
        const estudios = document.getElementById('estudios').value;
        const idiomas = document.getElementById('idiomas').value;
        const habilidades = document.getElementById('habilidades').value;
        const hobbies = document.getElementById('hobbies').value;
        const logros = document.getElementById('logros').value;

        const perfilHTML = `
            <div class="recuadro-perfil">
                <h3>${nombre}</h3>
                <p><strong>Correo:</strong> ${correo}</p>
                <p><strong>Teléfono:</strong> ${telefono}</p>
                <p><strong>Dirección:</strong> ${direccion}</p>
                <p><strong>Fecha de Nacimiento:</strong> ${fechaNacimiento}</p>
                <p><strong>Nacionalidad:</strong> ${nacionalidad}</p>
                <p><strong>Carrera:</strong> ${carrera}</p>
                <p><strong>Experiencia:</strong> ${experiencia} años</p>
                <p><strong>Última Empresa:</strong> ${empresa}</p>
                <p><strong>Cargo:</strong> ${cargo}</p>
                <p><strong>Estudios:</strong> ${estudios}</p>
                <p><strong>Idiomas:</strong> ${idiomas}</p>
                <p><strong>Habilidades:</strong> ${habilidades}</p>
                <p><strong>Hobbies:</strong> ${hobbies}</p>
                <p><strong>Logros:</strong> ${logros}</p>
            </div>
        `;

        if (listaPerfiles) {
            listaPerfiles.insertAdjacentHTML('beforeend', perfilHTML);
            console.log("Perfil agregado a la lista de perfiles");
        } else {
            console.error("No se encontró el contenedor #lista-perfiles en el DOM.");
        }

        alert('Perfil guardado exitosamente');
        modal.style.display = 'none';
    }

    const crearPerfilForm = document.querySelector('.crear-perfil-form');

    if (crearPerfilForm) {
        crearPerfilForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const fotoInput = document.getElementById('foto');
            const nombre = document.getElementById('nombre').value;
            const correo = document.getElementById('correo').value;
            const telefono = document.getElementById('telefono').value;
            const direccion = document.getElementById('direccion').value;
            const fecha_nacimiento = document.getElementById('fecha_nacimiento').value;
            const nacionalidad = document.getElementById('nacionalidad').value;
            const carrera = document.getElementById('carrera').value;
            const experiencia = document.getElementById('experiencia').value;
            const empresa = document.getElementById('empresa').value;
            const cargo = document.getElementById('cargo').value;
            const estudios = document.getElementById('estudios').value;
            const idiomas = document.getElementById('idiomas').value;
            const habilidades = document.getElementById('habilidades').value;
            const hobbies = document.getElementById('hobbies').value;
            const logros = document.getElementById('logros').value;

            if (fotoInput.files.length === 0 ||
                !nombre || !correo || !telefono || !direccion || !fecha_nacimiento ||
                !nacionalidad || !carrera || !experiencia || !empresa || !cargo ||
                !estudios || !idiomas || !habilidades || !hobbies || !logros) {
                alert('Por favor, completa todos los campos y selecciona una foto de perfil.');
                return;
            }

            const reader = new FileReader();
            reader.onload = async function(e) {
                const foto = e.target.result;

                const perfilData = {
                    foto: foto,
                    nombre: nombre,
                    correo: correo,
                    telefono: telefono,
                    direccion: direccion,
                    fecha_nacimiento: fecha_nacimiento,
                    nacionalidad: nacionalidad,
                    carrera: carrera,
                    experiencia: parseInt(experiencia),
                    empresa: empresa,
                    cargo: cargo,
                    estudios: estudios,
                    idiomas: idiomas,
                    habilidades: habilidades,
                    hobbies: hobbies,
                    logros: logros
                };

                try {
                    const response = await fetch('/guardarPerfil', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(perfilData)
                    });

                    const result = await response.json();
                    if (response.ok) {
                        alert(result.message || 'Perfil guardado exitosamente');
                    } else {
                        alert(result.message || 'Error al guardar el perfil.');
                    }
                } catch (error) {
                    console.error('Error en la solicitud fetch:', error);
                    alert('Error al comunicarse con el servidor.');
                }
            };

            reader.readAsDataURL(fotoInput.files[0]);
        });
    }
});

    if (btnGuardarPerfil) {
        btnGuardarPerfil.addEventListener('click', guardarPerfil);
    } else {
        console.error('Botón de guardar perfil no encontrado');
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
;
document.addEventListener('DOMContentLoaded', () => {
  
    const vacantes = [
        { titulo: "iOS Developer", empresa: "2Animation", ciudad: "Medellín", modalidad: "Híbrido" },
        { titulo: "QA Automation Engineer", empresa: "VGF Management", ciudad: "Bogotá", modalidad: "Remoto" },
        { titulo: "Backend Developer", empresa: "Tech Solutions", ciudad: "Cali", modalidad: "Presencial" },
        { titulo: "Frontend Developer", empresa: "Design Corp", ciudad: "Bogotá", modalidad: "Híbrido" },
        { titulo: "Data Scientist", empresa: "Big Data Inc", ciudad: "Medellín", modalidad: "Remoto" }
    ];

    const listaOfertas = document.getElementById('lista-ofertas');

    function mostrarVacantes() {
        listaOfertas.innerHTML = ''; 

        vacantes.forEach(vacante => {
            const ofertaHTML = `
                <div class="oferta">
                    <h3>${vacante.titulo}</h3>
                    <p>${vacante.empresa}</p>
                    <p>${vacante.ciudad}</p>
                    <p>${vacante.modalidad}</p>
                    <button class="aplicar">Aplicar</button>
                </div>
            `;
            listaOfertas.insertAdjacentHTML('beforeend', ofertaHTML);
        });

        document.querySelectorAll('.aplicar').forEach(button => {
            button.addEventListener('click', aplicarOferta);
        });
    }

    function mostrarPerfilesParaAplicar() {
        const listaPerfiles = document.getElementById('lista-perfiles-modal');
        listaPerfiles.innerHTML = ''; 

        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                const perfil = JSON.parse(localStorage.getItem(key));

                const perfilItem = document.createElement('div');
                perfilItem.className = 'perfil-item';
                perfilItem.innerHTML = `
                    <h3>${perfil.nombre}</h3>
                    <p><strong>Email:</strong> ${perfil.correo}</p>
                    <button onclick="aplicarConPerfil('${key}')" class="boton-aplicar">Seleccionar</button>
                `;
                listaPerfiles.appendChild(perfilItem);
            }
        } else {
            listaPerfiles.innerHTML = '<p>No hay perfiles creados.</p>';
        }
    }

    function aplicarOferta(event) {
        event.preventDefault(); 
        const modal = document.getElementById('modal-perfiles'); 
        modal.style.display = 'block';
        mostrarPerfilesParaAplicar(); 
    }

    window.aplicarConPerfil = function(key) {
        const perfil = JSON.parse(localStorage.getItem(key));
        alert(`Aplicaste con el perfil de ${perfil.nombre}`);
        cerrarModal();
    };

    function cerrarModal() {
        const modal = document.getElementById('modal-perfiles');
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        const modal = document.getElementById('modal-perfiles');
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    mostrarVacantes();
});
