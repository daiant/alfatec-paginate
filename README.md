# alfatec-paginate
Módulo de paginación basado en ReactJS

Instalación: 
------
Puedes copiar los archivos para una completa personalización del módulo, y cambiar el idioma, por ejemplo, que es lo que te recomiendo la verdad.
Pendiente queda subirlo como módulo a npmjs.com

Utilización:
------
`import Pagination from "./Pagination";`
Y después insertar en el return del render:
```
<Pagination {con los siguientes props} /> 
```
Y establecer el state del módulo padre con: 
```
this.state = {
  currentPage: 1,
  itemsPerPage: this.props.maxEvents
}
```
| Nombre        | Tipo          | Descripción  |
| ------------- |:-------------:| :-----|
| itemsPerPage      | int | **Requerido.** Número de elementos que se muestran por página |
| lenResults      | int      |   **Requerido.** Número de elementos en total |
| indexOfFirstItem | int      |    **Requerido.** Primer elemento  |
| indexOfLastItem | int      |    **Requerido.**  Último elemento |
| currentPage | int | **Requerido.** Página en la que se quiere empezar. Generalmente la 1 pero no sé |
| setState | state | **Requerido.** Realmente no sé para qué. Por ejemplo, p=>this.setState(p)|
