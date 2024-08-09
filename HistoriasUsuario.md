-----------------------------------------------------------------
# Historias de Usuarios Epicas
-----------------------------------------------------------------


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

# -Personalizacion hoja de vida

| ID      | HU01                                           | versión | v1.0        |
|---------|------------------------------------------------|---------|-------------|
| Nombre  | Actualizar informacion personal                | Estado  | Pendiente   |
| Actor   | Usuario                                        | Puntos  | 5           |
| Módulo  | Personalización hoja de vida                   | Fecha   | 04/08/2024  |

## Descripción

**Como** usuario, **quiero** actualizar mi informacion personal en mi hoja de vida **para** añadir informacion cuando lo requiera

## Criterios de aceptación

| Condición/Acción                                                         | Resultado esperado                                                                                         |
|--------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| Cuando el usuario seleccione el boton que lo dirija a su cuenta          | Se debe cumplir que el sistema le permita editar su informacion personal                                   |
| Cuando el usuario guarde los cambios                                     | Se debe cumplir que el sistema actualice la informacion y la guarde con éxito                              |
| Cuando el usuario ingrese nueva informacion en los campos del formulario | Se debe cumplir que el sistema valide los datos, para asegurarse de que cumplen con los formatos correctos |


# -Personalizacion hoja de vida

| ID      | HU02                                           | versión | v1.0        |
|---------|------------------------------------------------|---------|-------------|
| Nombre  | Editar hoja de vida                            | Estado  | Pendiente   |
| Actor   | Usuario                                        | Puntos  | 5           |
| Módulo  | Personalización hoja de vida                   | Fecha   | 04/08/2024  |

## Descripción

**Como** usuario, **quiero**  que mi hoja de vida solo sea editable por mí **para** asegurar que mi información personal y profesional permanezca segura y confidencial.

## Criterios de aceptación

| Condición/Acción                                           | Resultado esperado                                                                                                                  |
|------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| Cuando el usuario inicie sesion en el sistema              | Se debe cumplir que el sistema verifica la identidad del usuario para garantizar que solo él pueda acceder a su propia hoja de vida.| 
| Cuando un usuario no autenticado intente acceder al sistema| Se debe cumplir que el sistema muestre un mensaje de error y redirige al usuario a la página de inicio de sesión.                   |
| Cuando el usuario guarde cambios en su hoja de vida        | Se debe cumplir que el sistema confirme la acción y actualice la hoja de vida.                                                      |
| Cuando el usuario inicie sesión                            | El sistema debe permitir al usuario acceder a su hoja de vida sin requerir autenticación adicional.                                 |


# -Personalizacion hoja de vida

| ID      | HU03                                           | versión | v1.0        |
|---------|------------------------------------------------|---------|-------------|
| Nombre  | Añadir informacion                             | Estado  | Pendiente   |
| Actor   | Usuario                                        | Puntos  | 5           |
| Módulo  | Personalización hoja de vida                   | Fecha   | 04/08/2024  |

## Descripción

**Como** usuario, **quiero**  poder añadir referencias profesionales e informacion a mi hoja de vida, **para** proporcionar evidencia adicional de mi desempeño y habilidades a potenciales empleadores.

## Criterios de aceptación

| Condición/Acción                                           | Resultado esperado                                                                                                                  |
|------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| Cuando se añada una nueva referencia profesional           | Se debe cumplir que el sistema presente campos editables para ingresar detalles.                                                    | 
| Cuando el usuario complete los campos de informacion       | Se debe cumplir que el sistema le permita revisar su hoja de vida antes de guardarla.                                               |
| Cuando el usuario agrege nueva informacion                 | Se debe cumplir que el sistema muestre una interfaz de edición clara y actualice la hoja de vida, sin eliminar datos anteriores.    |
| Cuando el usuario agrege informacion                       | Se debe cumplir que el sistema proporciond una confirmación visual (por ejemplo, un mensaje emergente o notificación).              |


# -Personalizacion hoja de vida

| ID      | HU04                                           | versión | v1.0        |
|---------|------------------------------------------------|---------|-------------|
| Nombre  | Actualizar o añadir foto de perfil             | Estado  | Pendiente   |
| Actor   | Usuario                                        | Puntos  | 5           |
| Módulo  | Personalización hoja de vida                   | Fecha   | 04/08/2024  |

## Descripción

**Como** usuario, **quiero# -Filtracion hoja de vida
**  actualizar la foto de perfil de la hoja de vida , **para** mantener un estandar profesional. 

## Criterios de aceptación

| Condición/Acción                                           | Resultado esperado                                                                                                                  |
|------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| Cuando el usuario quiera actualizar su foto                | Se debe cumplir que el sistema por medio de una opcion facil de ver, poder modificar la foto de la hoja de vida.                    | 
| Cuando el usuario seleccione la foto                       | Se debe cumplir que el sistema le permita al usuario seleccionar de su galeria de fotos la imagen que desee agregar.                |
| Cuando el usuario agregue la foto                          | Se debe cumplir que el sistema de la opcion de agregar la foto seleccionada y esta debera aparecer en la hoja de vida.              |




# -Filtracion hoja de vida

| ID      | HU05                                           | versión | v1.0        |
|---------|------------------------------------------------|---------|-------------|
| Nombre  | Hoja de vida                                   | Estado  | Pendiente   |
| Actor   | Usuario                                        | Puntos  | 5           |
| Módulo  | Filtracion hoja de vida                        | Fecha   | 04/08/2024  |

## Descripción

**Como** usuario, **quiero** que el sistema filtre mi hoja de vida **para** cada vacante específica, omitiendo información irrelevante y destacando las habilidades y experiencias pertinentes, para aumentar mis posibilidades de ser considerado para la posición.

## Criterios de aceptación

| Condición/Acción                                             | Resultado esperado                                                                                                   |
|--------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| Cuando se seleccione la vacante específica                   | El sistema debe ser capaz de identificar y resaltar las habilidades y experiencias relevantes para la vacante.         |
| Cuando se seleccione la vacante                              | El sistema debe omitir información que no sea relevante para la vacante específica.                                    |
| Cuando se visualizan la vacante                              | El usuario debe poder revisar la información antes de ser enviada.                                                     |
| Cuando se actualice la información                           | El sistema debe permitir actualizar las habilidades y experiencias con el fin de revisar de nuevo las nuevas vacantes. |

# -Filtracion hoja de vida

| ID      | HU06                                           | versión | v1.0        |
|---------|------------------------------------------------|---------|-------------|
| Nombre  | Actualización de perfil                        | Estado  | Pendiente   |
| Actor   | Usuario                                        | Puntos  | 5           |
| Módulo  | Filtracion hoja de vida                        | Fecha   | 04/08/2024  |

## Descripción

**Como** usuario, **quiero** poder actualizar mi perfil con nuevas habilidades y experiencias **para** que mi hoja de vida esté siempre actualizada y relevante para futuras vacantes.

## Criterios de aceptación

| Condición/Acción                                             | Resultado esperado                                                                                                   |
|--------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| Cuando se edite el perfil del usuario                        | El sistema debe permitir la actualización de las habilidades y experiencia de cada usuario.                            |
| Cuando se guarde el perfil actualizado                       | El sistema debe re-filtrar la hoja de vida para todas las vacantes disponibles.                                        |
| Cuando se visualice el perfil actualizado                    | El usuario debe de poder ver todas las actualizaciones que se vean reflejadas en su hoja de vida.                      |
| Cuando se filtre nuevamente para vacantes existentes         | El sistema debe actualizar las coincidencias de vacantes con la nueva información del perfil.                          |

# -Filtracion hoja de vida

| ID      | HU07                                           | versión | v1.0        |
|---------|------------------------------------------------|---------|-------------|
| Nombre  | Omisión de información irrelevante             | Estado  | Pendiente   |
| Actor   | Usuario                                        | Puntos  | 5           |
| Módulo  | Filtracion hoja de vida                        | Fecha   | 04/08/2024  |

## Descripción

**Como** usuario, **quiero** que el sistema omita información que no sea relevante **para** la vacante específica, para asegurarme de que solo se destaquen las habilidades y experiencias pertinentes para la posición.

## Criterios de aceptación

| Condición/Acción                                             | Resultado esperado                                                                                                   |
|--------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| Cuando se seleccione la vacante específica                   | El sistema debe analizar la hoja de vida del usuario y determinar qué información es relevante para la vacante.        |
| Cuando se identifique información irrelevante                | El sistema debe ocultar o eliminar esta información de la versión de la hoja de vida que se enviará para la vacante.   |
| Cuando el usuario revise la hoja de vida filtrada            | El sistema debe mostrar únicamente las habilidades y experiencias pertinentes a la vacante.                            |

# -Filtracion hoja de vida

| ID      | HU08                                           | versión | v1.0        |
|---------|------------------------------------------------|---------|-------------|
| Nombre  | filtracion manual                              | Estado  | Pendiente   |
| Actor   | Usuario                                        | Puntos  | 5           |
| Módulo  | Filtracion hoja de vida                        | Fecha   | 04/08/2024  |

## Descripción

**Como** usuario, **quiero** que el sistema permita hacer filtraciones manuales **para** casos en los que el sistema oculte alguna informacion que quiero que aparezca en la hoja de vida, o simplemente por si se presenta un error a la hora de hacer la filtracion de informacion.

## Criterios de aceptación

| Condición/Acción                                             | Resultado esperado                                                                                                   |
|--------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------|
| Cuando se modifique la filtracion de informacion             | El sistema debe permitir al usuario modificar la filtracion de informacion por medio de una opcion en la U.I.        |
| Cuando se seleccione la informacion                          | El sistema debe permitir al usuario seleccionar que informacion quiere que aparezca.                                 |
| Cuando se confirme la informacion                            | El sistema debe confirmar la informacion que se selecciono y finalmente mostrar la hoja de vida con las modificaciones seleccionadas.  |

# -Vacantes 

| ID      | HU009                                        | versión | v1.0        |
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

| ID      | HU010                                          | versión | v1.0        |
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

| ID      | HU011                                        | versión | v1.0        |
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

| ID      | HU012                                          | versión | v1.0        |
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




