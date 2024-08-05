# Ing-software

## Requisitos Funcionales
| Codigo | Descripcion                           | Actor   |
|--------|---------------------------------------|---------|
| RF1    | Iniciar sesion en el sistema          | Usuario |
| RF2    | Subir la hoja de vida                 | Usuario |
| RF3    | Leer hoja de usuario                  | Sistema |
| RF4    | Personalizar (modificar) hoja de vida | Usuario |
| RF5    | Buscar oferta laboral                 | Usuario |
| RF6    | Aplicar a la oferta laboral           | Usuario |
| RF7    | Revisar la oferta laboral             | Sistema |
| RF8    | Filtrar la hoja de vida               | Sistema |


## Requisitos no funcionales
| Codigo | Descripcion                | Criterio                                                                 |
|--------|----------------------------|--------------------------------------------------------------------------|
| RNF1   | Permitir usabilidad        | La interfaz debe ser intuitiva y fácil de usar                            |
| RNF2   | Implementar seguridad      | Cada usuario debe ingresar con el usuario y contraseña                    |
| RNF3   | Propiciar compatibilidad   | La aplicación debe ser compatible con múltiples dispositivos y navegadores web. |
| RNF4   | Dar rendimiento            | El sistema debe responder a las solicitudes de los usuarios en menos de 2 segundos. |




# Historias de Usuarios Epicas
-----------------------------------------------------------------
# Filtracion de hoja de vida

## Descripción
Como usuario, quiero que el sistema filtre mi hoja de vida para cada vacante específica, omitiendo información irrelevante y destacando las habilidades y experiencias pertinentes, para aumentar mis posibilidades de ser considerado para la posición.

## Criterios de aceptación
- El sistema debe ser capaz de identificar y resaltar las habilidades y experiencias relevantes para la vacante.
- El sistema debe omitir información que no sea relevante para la vacante específica.
- El usuario debe poder revisar y editar la hoja de vida personalizada antes de enviarla.


# Personalización de Hojas de Vida

## Descripción
Como usuario requiero de la posibilidad de poder actualizar mi hoja de vida con el fin de agregarle información cuando sea necesario.

## Criterios de aceptación
- El sistema debe permitir la edicion de la hoja de vida del usuario.
- Actualizar Información Existente.
- Solo el usuario debe tener acceso a editar su hoja de vida.


# Análisis de Vacantes

## Descripción
Como usuario, quiero que el sistema analice las descripciones de las vacantes y me retroalimente sobre mi hoja de vida para alinearla mejor con los requisitos del puesto, aumentando mis oportunidades de éxito.

## Criterios de aceptación
- El sistema debe poder analizar las descripciones de las vacantes y extraer los requisitos clave.
- El sistema debe retroalimentarme en la hoja de vida del usuario para reflejar mejor esos requisitos.
- Las sugerencias deben ser claras y fáciles de implementar por el usuario.

# Historia de Usuario - Filtracion hoja de vida

| ID      | HU05                                           | versión | v1.0        |
|---------|------------------------------------------------|---------|-------------|
| Nombre  | Actualización de perfil                        | Estado  | Pendiente   |
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

# Historia de Usuario - Filtracion hoja de vida

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
| Cuando se filtre nuevamente para vacantes existentes         | El sistema debe actualizar las coincidencias de vacantes con la nueva información del perfil                           |

# Historia de Usuario - Filtracion hoja de vida

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

# Historia de Usuario - Búsqueda de Vacantes  

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

# Historia de Usuario - Análisis de Vacantes  

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

# Historia de Usuario - Postulación a Vacantes

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



