-----------------------------------------------------------------
# Historias de Usuarios Epicas
-----------------------------------------------------------------

# Inicio de sesión

## Descripción
Como usuario, quiero poder crear una cuenta para poder iniciar sesión en la página.

## Criterios de aceptación
- El sistema debe permitir la creación de cuentas con una dirección de correo electrónico única.
- Los campos obligatorios deben ser validados correctamente antes de crear la cuenta.
- El sistema debe enviar un correo electrónico de confirmación de registro al usuario.
- El sistema debe permitir iniciar sesión solo a usuarios que hayan confirmado su correo electrónico.


# Personalización de Hojas de Vida

## Descripción
Como usuario requiero de la posibilidad de poder actualizar mi hoja de vida con el fin de agregarle información cuando sea necesario.

## Criterios de aceptación
- El sistema debe permitir la edicion de la hoja de vida del usuario.
- Actualizar Información Existente.
- Solo el usuario debe tener acceso a editar su hoja de vida.


# Filtracion de hoja de vida

## Descripción
Como usuario, quiero que el sistema filtre mi hoja de vida para cada vacante específica, omitiendo información irrelevante y destacando las habilidades y experiencias pertinentes, para aumentar mis posibilidades de ser considerado para la posición.

## Criterios de aceptación
- El sistema debe ser capaz de identificar y resaltar las habilidades y experiencias relevantes para la vacante.
- El sistema debe omitir información que no sea relevante para la vacante específica.
- El usuario debe poder revisar y editar la hoja de vida personalizada antes de enviarla.


# Análisis de Vacantes

## Descripción
Como usuario, quiero que el sistema analice las descripciones de las vacantes y me retroalimente sobre mi hoja de vida para alinearla mejor con los requisitos del puesto, aumentando mis oportunidades de éxito.

## Criterios de aceptación
- El sistema debe poder analizar las descripciones de las vacantes y extraer los requisitos clave.
- El sistema debe retroalimentarme en la hoja de vida del usuario para reflejar mejor esos requisitos.
- Las sugerencias deben ser claras y fáciles de implementar por el usuario.

# Optimización integral de la plataforma para usabilidad, seguridad, compatibilidad y rendimiento

## Descripción
Como usuario, quiero que el sistema funcione de la mejor manera posible y que sea seguro navegar en el.

## Criterios de aceptación
- El sistema debe permitir acceder desde diferentes dispositivos y navegadores.
- Que cuente con un sistema solido de seguridad y la integridad delos datos.
- Que sea eficaz al momento de interatuar con las multiples herramientas que el sistema ofrece. 

-----------------------------------------------------------------
# Historias de Usuarios
-----------------------------------------------------------------


# Iniciar sesion en el sistema

| ID      | HU01                                           | versión | v1.0        |
|---------|------------------------------------------------|---------|-------------|
| Nombre  | Iniciar sesión en el sistema                   | Estado  | Pendiente   |
| Actor   | Usuario                                        | Puntos  | 5           |
| Módulo  | Iniciar sesión en el sistema                   | Fecha   | 17/08/2024  |

## Descripción

*Como* usuario, *quiero* inciar sesion en el sistema *para* acceder a mis datos personales y funcionalidades personalizadas.

## Criterios de aceptación

| Condición/Acción                                             | Resultado esperado                                                                                                   |
|--------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| Cuando se ingresa el nombre de usuario y la contraseña en la pantalla de inicio de sesión | Se debe cumplir que el sistema valide los datos del usuario, y permita el acceso si son adecuados.                        |
| Cuando el usuario selecciona "Crear cuenta" después de llenar los campos | La cuenta se crea correctamente, y el usuario recibe un correo de confirmación.                                      |
| Cuando se ha iniciado sesión correctamente | Se debe cumplir que el usuario sea redirigido a la página principal, mostrando una interfaz personalizada con sus datos y opciones relevantes.                                                  |
| Cuando el usuario intenta crear una cuenta con un correo electrónico ya registrado | El sistema debe mostrar un mensaje de error indicando que el correo electrónico ya está en uso.                      |



# Subir la hoja de vida

| ID      | HU02                                           | versión | v1.0        |
|---------|------------------------------------------------|---------|-------------|
| Nombre  | Subir la hoja de vida               | Estado  | Pendiente   |
| Actor   | Usuario                                        | Puntos  | 5           |
| Módulo  | Subir la hoja de vida                 | Fecha   | 17/08/2024  |

## Descripción

**Como** usuario, **quiero** subir mi hoja de vida al sistema **para** que sea almacenada y utilizada en procesos de selección.

## Criterios de aceptación

| Condición/Acción                                                         | Resultado esperado                                                                                         |
|--------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| Cuando el usuario selecciona un perfil específico, y accede al formulario de hoja de vida       | Se debe cumplir que el sistema presente un formulario editable con campos específicos para la experiencia, habilidades y educación, que están adaptados al perfil seleccionado.
| Cuando el usuario completa o actualiza los campos del formulario y presiona el botón "Guardar"  | Se debe cumplir que el sistema valide la información ingresada y guarde los cambios, asegurando que la hoja de vida esté actualizada y lista para ser utilizada en vacantes relacionadas con ese perfil.
| Cuando el usuario intenta salir del formulario sin guardar los cambios | Se debe cumplir que el sistema muestre una advertencia para confirmar si desea salir, evitando la pérdida de información.|


# Leer hoja de vida

| ID      | HU03                                           | versión | v1.0        |
|---------|------------------------------------------------|---------|-------------|
| Nombre  | Leer hoja de vida                         | Estado  | Pendiente   |
| Actor   | Sistema                                        | Puntos  | 5           |
| Módulo  | Leer hoja de vida                   | Fecha   | 17/08/2024  |

## Descripción

**Como** sistema, **quiero**  leer la hoja de vida del usuario **para** procesar la información y presentarla de manera adecuada según el perfil y vacante seleccionados.
## Criterios de aceptación

| Condición/Acción                                           | Resultado esperado                                                                                                                  |
|------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| Cuando el sistema recibe una solicitud para leer la hoja de vida asociada a un perfil específico del usuario    | Se debe cumplir que el sistema acceda a la información del formulario de la hoja de vida almacenada para ese perfil, y la procese correctamente.   | 
| Cuando el sistema detecta que la hoja de vida está incompleta o contiene errores  | Se debe cumplir que el sistema notifique al usuario sobre los campos faltantes o errores, sugiriendo que complete o corrija la información.                   |
| Cuando el sistema prepara la hoja de vida para su visualización o uso en una aplicación a vacantes     | Se debe cumplir que el sistema muestre la información relevante (según el perfil y la vacante) , omitiendo datos innecesarios.                                  |
| Cuando el sistema detecta cambios recientes en la hoja de vida del usuario              |   Se debe cumplir que el sistema realice una verificación automática de la información actualizada y presente al usuario un resumen de los cambios                             |


# Personalización de Hoja de Vida

| ID      | HU04                                           | versión | v1.0        |
|---------|------------------------------------------------|---------|-------------|
| Nombre  | Personalización de Hoja de Vida                | Estado  | Pendiente   |
| Actor   | Usuario                                        | Puntos  | 7           |
| Módulo  | Perfil de Usuario                              | Fecha   | 17/08/2024  |

## Descripción

*Como* usuario, *quiero* poder modificar las hojas de vida almacenadas en mi perfil *para* personalizarlas según las diferentes vacantes a las que quiero aplicar.

## Criterios de aceptación

| Condición/Acción                                             | Resultado esperado                                                                                                   |
|--------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| Cuando el usuario accede a su perfil y selecciona la opción de editar una hoja de vida | El sistema debe mostrar la hoja de vida seleccionada con todas las secciones editables.                        |
| Cuando el usuario edita la información en su hoja de vida    | El sistema debe permitir guardar los cambios realizados y mantener la versión personalizada en el perfil.                      

# Buscar oferta laboral

| ID      | HU05                                           | versión | v1.0        |
|---------|------------------------------------------------|---------|-------------|
| Nombre  | Buscar oferta laboral                          | Estado  | Pendiente   |
| Actor   | Sistema                                        | Puntos  | 5           |
| Módulo  | Filtracion hoja de vida                        | Fecha   | 17/08/2024  |

## Descripción

*Como* usuario, *quiero* que el sistema filtre mi hoja de vida para cada vacante específica, omitiendo información irrelevante y destacando las habilidades y experiencias pertinentes, *para* aumentar mis posibilidades de ser considerado para la posición.

## Criterios de aceptación

| Condición/Acción                                             | Resultado esperado                                                                                                   |
|--------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
|  Cuando se seleccione la vacante especifica | El sistema debe ser capaz de identificar y resaltar las habilidades y experiencias relevantes para la vacante..                        |
|  Cuando se seleccione la vacante | El sistema debe omitir información que no sea relevante para la vacante específica.                                    |
| Cuando se visualizan la vacante | El usuario debe poder revisar la información antes de ser enviada.                                                |
| Cuando se actualice la información | El sistema debe permitir actualizar las habilidades y experiencias con el fin de revisar de nuevo las nuevas vacantes para las que aplica.    

# Aplicar a la oferta laboral

| ID      | HU06                                           | versión | v1.0        |
|---------|------------------------------------------------|---------|-------------|
| Nombre  | Aplicar a la oferta laboral                    | Estado  | Pendiente   |
| Actor   | Usuario                                        | Puntos  | 5           |
| Módulo  | Hoja de vida                                   | Fecha   | 17/08/2024  |

## Descripción

*Como* Candidato *quiero* aplicar de manera eficiente a una oferta laboral *para* aumentar mis posibilidades de ser considerado para el puesto.

## Criterios de aceptación

| Condición/Acción                                             | Resultado esperado                                                                                                   |
|--------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
|  Cuando el candidato selecciona la opción | El sistema debe enviar organizar la hoja de vida optimizada y que este relacionada con las capacidades del candidato.                       |
|  Cuando el candidato revisa los detalles de la oferta laboral | Se debe mostrar un resumen de la información que esta relacionada, y omitir la informacion que no sea relevante.                                    |
| Cuando se visualizan la vacante | El usuario debe poder revisar la información antes de ser enviada.  

# Revisar la oferta laboral

| ID      | HU07                                           | versión | v1.0        |
|---------|------------------------------------------------|---------|-------------|
| Nombre  | Revisar la oferta laboral                      | Estado  | Pendiente   |
| Actor   | Usuario                                        | Puntos  | 5           |
| Módulo  | Hoja de vida                                   | Fecha   | 17/08/2024  |

## Descripción

*Como* Candidato *quiero* revisar los detalles de una oferta laboral *para* determinar si se ajusta a mi perfil y decidir si aplicar o no.

## Criterios de aceptación

| Condición/Acción                                             | Resultado esperado                                                                                                   |
|--------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
|  Cuando el candidato selecciona una oferta laboral | El sistema debe mostrar una vista detallada con la descripción del requisitos con los que debe de cumplir el usuario, para determinar si cumple con estos.                       |
|  Cuando el candidato visualiza la oferta laboral | El sistema debe ofrecer la opción de guardar la hoja de vida, que varia depediendo de las capacidades del usuario y el puesto al que se quiere aplicar.            |
| Cuando el usuario guarde o envíe la hoja de vida filtrada | El sistema debe mostrar únicamente las habilidades y experiencias pertinentes a la vacante.   


# -Vacantes 

| ID      | HU010                                       | versión | v1.0        |
|---------|----------------------------------------------|---------|-------------|
| Nombre  | Búsqueda de Vacantes                         | Estado  | Pendiente   |
| Actor   | Usuario                                      | Puntos  | 5           |
| Módulo  | Vacantes                                     | Fecha   | 19/03/2024  |

## Descripción

**Como** usuario, **quiero** buscar vacantes disponibles en el sistema **para** encontrar oportunidades laborales que se ajusten a mi perfil y preferencias.

## Criterios de aceptación

| Condición/Acción                                           | Resultado esperado                                                                                                     |
|------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| Cuando se accede a la sección de búsqueda de vacantes      | El sistema debe permitir al usuario buscar vacantes mediante palabras clave, ubicación, categoría y otros filtros.      |
| Cuando se visualizan los resultados de búsqueda            | El sistema debe mostrar una lista de vacantes con información básica como título del puesto, empresa, ubicación y fecha. |

# -Vacantes 

| ID      | HU011                                          | versión | v1.0        |
|---------|------------------------------------------------|---------|-------------|
| Nombre  | Análisis de Vacantes                           | Estado  | Pendiente   |
| Actor   | Usuario                                        | Puntos  | 5           |
| Módulo  | Vacantes                                       | Fecha   | 19/03/2024  |

## Descripción

**Como** usuario, **quiero** que el sistema analice las descripciones de las vacantes y me sugiera modificaciones a mi hoja de vida **para** alinearla mejor con los requisitos del puesto, aumentando mis oportunidades de éxito.

## Criterios de aceptación

| Condición/Acción                                             | Resultado esperado                                                                                                   |
|--------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| Cuando se ingresa la descripción de una vacante              | El sistema debe poder analizar las descripciones de las vacantes y extraer los requisitos clave.                       |
| Cuando se sugieren cambios en la hoja de vida                | El sistema debe sugerir cambios específicos en la hoja de vida del usuario para reflejar mejor esos requisitos.        |
| Cuando se revisan las sugerencias                            | Las sugerencias deben ser claras y fáciles de implementar por el usuario.                                              |
| Cuando se guarda la hoja de vida modificada                  | El usuario debe poder revisar y editar la hoja de vida personalizada antes de enviarla.                                |

# -Vacantes

| ID      | HU012                                        | versión | v1.0        |
|---------|----------------------------------------------|---------|-------------|
| Nombre  | Postulación a Vacantes                       | Estado  | Pendiente   |
| Actor   | Usuario                                      | Puntos  | 5           |
| Módulo  | Vacantes                                     | Fecha   | 19/03/2024  |

## Descripción

**Como** usuario, **quiero** postularme a las vacantes que me interesen **para** aplicar a las oportunidades laborales directamente desde el sistema.

## Criterios de aceptación

| Condición/Acción                                           | Resultado esperado                                                                                                     |
|------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| Cuando se selecciona una vacante específica                | El sistema debe mostrar los detalles completos de la vacante, incluyendo requisitos, responsabilidades y beneficios.   |
| Cuando se decide postular a la vacante                     | El sistema debe permitir al usuario enviar su hoja de vida y carta de presentación directamente desde la plataforma.    |
| Cuando se confirma la postulación                          | El sistema debe notificar al usuario que su postulación ha sido enviada exitosamente y registrar la postulación en su perfil. |

# -Vacantes

| ID      | HU013                                          | versión | v1.0        |
|---------|------------------------------------------------|---------|-------------|
| Nombre  | Eliminar postulaciones                         | Estado  | Pendiente   |
| Actor   | Usuario                                        | Puntos  | 5           |
| Módulo  | Postulacion a vacantes                         | Fecha   | 04/08/2024  |

## Descripción

**Como** usuario, **quiero** eliminar las postulaciones a las que ya no quiero aplicar **para** no acumular postulaciones en caso de que pierda el interes en algunas de estas.

## Criterios de aceptación

| Condición/Acción                                             | Resultado esperado                                                                                                   |
|--------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| Cuando se seleccione la postulacion                          | El sistema debe mostrar las postulaciones a las que el usuario aplico y permitirle interactuar con ellas.            |
| Cuando se elimine la postulacion                             | El sistema debe mostrar la opcion de eliminar la postulacion seleccionada y eliminarla.                              |
| Cuando se confirme la eliminacion y comentarios              | El sistema debe mostrar un mensaje de confirmacion de la eliminacion de la postulacion y ademas pedirle al usuario que coloque un comentario de por que cancelo la postulacion. |


# Filtrar Hoja de Vida

| ID      | HU08                                           | versión | v1.0        |
|---------|------------------------------------------------|---------|-------------|
| Nombre  | Filtrar Hoja de Vida                           | Estado  | Pendiente   |
| Actor   | Usuario                                        | Puntos  | 6           |
| Módulo  | Aplicación a Vacante                           | Fecha   | 17/08/2024  |

## Descripción

*Como* usuario, *quiero* poder escoger qué tipo de hoja de vida colocar en el formulario de aplicación *para* que mi perfil se ajuste mejor a los requisitos del trabajo o vacante.

## Criterios de aceptación

| Condición/Acción                                             | Resultado esperado                                                                                                   |
|--------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| Cuando el usuario selecciona una vacante para aplicar        | El sistema debe mostrar opciones de diferentes tipos de hojas de vida relevantes para la vacante seleccionada.                        |
| Cuando el usuario escoge un tipo de hoja de vida en el formulario de aplicación | El formulario se debe llenar automáticamente con la información relevante de la hoja de vida seleccionada.                                      |
| Cuando el usuario revisa la hoja de vida seleccionada        | El usuario debe tener la posibilidad de editar la información antes de enviar la aplicación.                                                  |
| Cuando se envía la aplicación con la hoja de vida seleccionada | El sistema debe guardar la elección y enviar la hoja de vida seleccionada a la vacante aplicada.                      |


# Permitir Usabilidad en la Interfaz

| ID      | HU09                                       | versión | v1.0        |
|---------|------------------------------------------------|---------|-------------|
| Nombre  | Permitir Usabilidad en la Interfaz             | Estado  | Pendiente   |
| Actor   | Usuario                                        | Puntos  | 8           |
| Módulo  | Interfaz de Usuario                            | Fecha   | 17/08/2024  |

## Descripción

*Como* usuario, *quiero* que la interfaz sea intuitiva y fácil de usar *para* poder navegar y completar mis tareas sin necesidad de una capacitación extensa.

## Criterios de aceptación

| Condición/Acción                                             | Resultado esperado                                                                                                   |
|--------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| Cuando un usuario accede a cualquier funcionalidad de la aplicación | La estructura y disposición de la interfaz deben ser claras y coherentes, facilitando la navegación.                        |
| Cuando el usuario interactúa con los elementos de la interfaz (botones, menús, formularios) | Los elementos deben ser fácilmente identificables, accesibles, y proporcionar retroalimentación inmediata a las acciones del usuario.                                      |
| Cuando un usuario se enfrenta a una tarea nueva o compleja   | El diseño debe incluir ayudas contextuales y descripciones para guiar al usuario en sus acciones.                                                  |
| Cuando se realizan pruebas de usabilidad con usuarios representativos | La interfaz debe ser ajustada según los resultados de las pruebas, mejorando la experiencia del usuario.                      |


# 

| ID      | HU09                                       | versión | v1.0        |
|---------|------------------------------------------------|---------|-------------|
| Nombre  | Permitir Usabilidad en la Interfaz             | Estado  | Pendiente   |
| Actor   | Usuario                                        | Puntos  | 8           |
| Módulo  | Interfaz de Usuario                            | Fecha   | 17/08/2024  |

## Descripción

*Como* usuario, *quiero* que la interfaz sea intuitiva y fácil de usar *para* poder navegar y completar mis tareas sin necesidad de una capacitación extensa.

## Criterios de aceptación

| Condición/Acción                                             | Resultado esperado                                                                                                   |
|--------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| Cuando un usuario accede a cualquier funcionalidad de la aplicación | La estructura y disposición de la interfaz deben ser claras y coherentes, facilitando la navegación.                        |
| Cuando el usuario interactúa con los elementos de la interfaz (botones, menús, formularios) | Los elementos deben ser fácilmente identificables, accesibles, y proporcionar retroalimentación inmediata a las acciones del usuario.                                      |
| Cuando un usuario se enfrenta a una tarea nueva o compleja   | El diseño debe incluir ayudas contextuales y descripciones para guiar al usuario en sus acciones.                                                  |
| Cuando se realizan pruebas de usabilidad con usuarios representativos | La interfaz debe ser ajustada según los resultados de las pruebas, mejorando la experiencia del usuario.                      |



