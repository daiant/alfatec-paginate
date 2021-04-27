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
Los datos se mostrarán de realizando la siguiente lógica:
```
    const indexOfLastItem = this.state.currentPage * this.state.itemsPerPage;
    const indexOfFirstItem = indexOfLastEvent - this.state.itemsPerPage;

    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
```
| Nombre        | Tipo          | Descripción  |
| ------------- |:-------------:| :-----|
| itemsPerPage      | int | **Requerido.** Número de elementos que se muestran por página |
| lenResults      | int      |   **Requerido.** Número de elementos en total |
| indexOfFirstItem | int      |    **Requerido.** Primer elemento de la lista  |
| indexOfLastItem | int      |    **Requerido.**  Último elemento de la lista |
| currentPage | int | **Requerido.** Página actual de la paginación |
| setState | state | **Requerido.** Para actualizar los datos del módulo padre con las acciones de Pagination, p=>this.setState(p)|
