import React from 'react';
import ReactDOM from 'react-dom';
import './Index.css';
import Navigation from './Nav';
import Table from './Table';
import Form from './Form';

class App extends React.Component {
    static clientRegisterDate = () => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); 
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;
        return today;
    }

    state = {
        clients : [
            {
                code: 1,
                name: 'Albin',
                balance: 1250.35,
                registerDate: App.clientRegisterDate(),
                
            },
            {
                code: 2,
                name: 'Roniel',
                balance: 125.35,
                registerDate: App.clientRegisterDate(),
            }
        ],

        showMenu: false,
    }

    handleDeleteClient = code => {
        const {clients} = this.state;

        this.setState({
            clients: clients.filter((client) => {
                return client.code !== code;
            }),
        });
    }

    handleSubmit = client => {
        client.balance = parseFloat(client.balance).toFixed(2);
        client.code = this.state.clients.length > 0 ? this.state.clients[this.state.clients.length - 1].code + 1 : 1
        this.setState({clients: [...this.state.clients, client]});
    }

    toggleMenu = () => {
        this.setState({showMenu: !this.state.showMenu})
    }
    

    render() {
        return (
            <div className="container">
                <Navigation showMenu = {this.toggleMenu}/>
                <hr/>
                <Form handleSubmit={this.handleSubmit} registerClientDate = {App.clientRegisterDate} showMenu = {this.state.showMenu} toggleMenu = {this.toggleMenu}/>
                <Table clientsData = {this.state.clients} removeClient = {this.handleDeleteClient}/>
            </div>
        );
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
