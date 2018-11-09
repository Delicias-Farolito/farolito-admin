import React, {Component} from 'react';

class Navigation extends Component {


    render(){
        return (
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Delicias Farolito</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="true" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div classNameName="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Inicio<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Colaboradores</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Reportes
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <a className="dropdown-item" href="#">Ventas</a>
                    <a className="dropdown-item" href="#">Vales</a>
                    <a className="dropdown-item" href="#">Productos</a>
                    </div>
                </li>
              </ul>
            </div>
          </nav>
        )
        
    }
}

export default Navigation;