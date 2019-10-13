import React from 'react';

class EditClient extends React.Component {
    constructor(props){
        super(props);
        this.initialState = {
            code: 0,
            name: '',
            balance: parseFloat(0).toFixed(2),
          }
      console.log(this.initialStatex)
        this.state = this.initialState;
    }

    handleChange = event => {
        const {name, value} = event.target;
       
        this.setState({
            code: this.props.clientCode,
            [name]: value,
        });
        
    }

    submitForm = () => {
        this.props.handleEdit(this.state);
        this.setState(this.initialState);
        this.props.toggleMenu();
    }

    render() {
        const {name, balance} = this.state;
        const showMenu = this.props.showMenu ? 'show' : 'hide';
        return(
            <form className={showMenu}>
            <h2>Edit client {this.props.clientCode}</h2>
            <label>Name</label>
            <input type="text"
                   name="name"
                   value={name}
                  onChange = {this.handleChange}
                  />
            <label>Balance</label>
            <input type="number"
                   name="balance"
                   value={balance}
                   onChange={this.handleChange}
                   />
            <input 
                   type="button"
                   value="Submit"
                   onClick={this.submitForm}/>
            <hr/>
        </form>
        );
    }
}

export default EditClient