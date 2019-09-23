import React from 'react';

class Navigation extends React.Component {
    render() {
        return (
            <div>
                <h1>Tabla de clientes</h1>
                <button className="accent-button" onClick={() => this.props.showMenu()}>Agregar cliente</button>
            </div>
        );
    }
}

export default Navigation;