# Playlist

## How to Run Playlist
- npm install
- npm run start

## View at
https://hellenfc.github.io/playlist-test/

## React Questions
- Explique la diferencia entre inputs controlados y no controlados? <br />
Los inputs controlados utilizan el state de React para manejar los valores, en el caso de los no controlados utilizan refs o eventos para poder acceder a los valores.
Los no controlados permiten un código menos complejo y las validaciones se realizan con el evento submit, los controlados utilizan un código relativamente más complejo y permiten una validación en el momento en el que se ingresa el valor.

- Cómo prevenir que los components vuelvan a ser re-renderizados? <br />
En el caso de class componentes se puede hacer uso de shouldComponentUpdate or extender de React.PureComponent. En el caso de functional component se utiliza React.memo() que permite el uso de memoization.

- Qué son los HOC ? Agregar ejemplo. <br />
Los HOC toman un componente y retorna un nuevo componente, este componente no es modificado, este es envuelto en otro componente que lo mejorará con funciones y data.
Se puede ver su uso al utilizarse `withRouter()` de `react-router`, en donde un componente por ejemplo `NavBar` se retorna de esta manera `withRouter(NavBar)` permitiendo tener acceso a match, location y history dentro del componente `Navbar` al ser renderizado.

import { withRouter } from 'react-router-dom';<br />
function NavBar (){<br />
  // acceso a props.history, props.location and props.match<br />
  return Navbar<br />
}<br />
export default withRouter(NavBar)

- Que es React Redux ? <br />
Redux permite controlar el estado de la aplicación basandose en 3 principios: Debe existir una sola fuente de la verdad, el estado solo permite lectura y los cambios se hace utilizando funciones puras. Es un patrón de arquitectura donde la vista hace dispatch de acciones, el reducer es llamado con el estado y la acción retornando así un nuevo estado, la información deseada se encuentro dentro del strre encontrandose esta disponible a lo largo de la aplicación.

- Para que sirven las ‘Arrow function’ en react ?<br />
Un arrow function no redefine el valor de this dentro del cuerpo de la función, permitiendo de esta forma hacer más fácil predecir su comportamiento y evitar bugs
