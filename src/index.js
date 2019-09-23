import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './Nav';
import Table from './Table';
import Form from './Form';
import EditClient from './EditClient';

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
        clients : JSON.parse(localStorage.getItem('clients')) || [],
        showMenu: false,
        showMenu2: false,
        clientCode: 0,
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
        client.code = this.state.clients.length > 0 ? 
        this.state.clients[this.state.clients.length - 1].code + 1 : 1;
        this.setState({clients: [...this.state.clients, client]});
    }

    toggleMenu = () => {
        this.setState({showMenu: !this.state.showMenu})
    }

    toggleMenu2 = () => {
        this.setState({showMenu2: !this.state.showMenu2})
    }

    changeClientCode = (code) => {
        this.setState({clientCode: code,})
    }
    
    handleEdit = (client) => {
        client.balance = parseFloat(client.balance).toFixed(2);
        this.setState({ 
            clients: 
            this.state.clients.map(x => 
            x.code === client.code ? {
            code: x.code, 
            name: client.name, 
            balance: client.balance,
            registerDate: App.clientRegisterDate(),
        } : x)});
    }

    componentDidUpdate(){
        localStorage.setItem('clients', JSON.stringify(this.state.clients))
    }


    render() {
        return (
            <div className="container">
                <Navigation showMenu = {this.toggleMenu}/>
                <hr/>
                <Form handleSubmit={this.handleSubmit} 
                      registerClientDate = {App.clientRegisterDate} 
                      showMenu = {this.state.showMenu} 
                      toggleMenu = {this.toggleMenu}/>
                <EditClient showMenu = {this.state.showMenu2} 
                toggleMenu={this.toggleMenu2}
                clientCode = {this.state.clientCode}
                handleEdit = {this.handleEdit}/>
                <Table clientsData = {this.state.clients} 
                       showMenu = {this.toggleMenu2} 
                       removeClient = {this.handleDeleteClient}
                       indexState = {this.changeClientCode}/>
            </div>
        );
    }
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
