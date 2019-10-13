import React from 'react';

class Navigation extends React.Component {
    render() {
        return (
            <div>
                <h1>Clients Data</h1>
                <button onClick={() => this.props.showMenu()}>Add client</button>
            </div>
        );
    }
}

export default Navigation;