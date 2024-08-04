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




#Historias de Usuarios Epicas
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
