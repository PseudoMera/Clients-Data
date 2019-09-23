import React from 'react';


class Form extends React.Component {
    constructor(props){
        super(props);
        this.initialState = {
            code: 0,
            name: '',
            balance: parseFloat(0).toFixed(2),
            registerDate: this.props.registerClientDate(),

          }
      
        this.state = this.initialState;
    }

    handleChange = event => {
        const {name, value} = event.target;
        if(typeof value === Number) {
            this.setState({
                [name]: parseFloat(value).toFixed(2),
            });
        } else {
            this.setState({
                [name]: value,
            });
        }
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
        this.props.toggleMenu();
    }

    render() {
        const {name, balance} = this.state;
        const showMenu = this.props.showMenu ? 'show' : 'hide';
        return (
            <form className={showMenu}>
                <label>Name</label>
                <input type="text"
                       name="name"
                       value={name}
                       onChange = {this.handleChange}/>
                <label>Balance</label>
                <input type="number"
                       name="balance"
                       value={balance}
                       onChange={this.handleChange}/>
                <input className="accent-button"
                       type="button"
                       value="Submit"
                       onClick={this.submitForm}/>
                <hr/>
            </form>
        );
    }
}

export default Form;