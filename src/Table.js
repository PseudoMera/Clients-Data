import React from 'react';

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Balance</th>
                <th>Register date</th>
                <th>Options</th>
            </tr>
        </thead>
    );
}

const TableBody = (props) => {
    const rows = props.clientsData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.code}</td>
                <td>{row.name}</td>
                <td>{row.balance}</td>
                <td>{row.registerDate}</td>
                <td>
                    <button 
                            onClick={() => {
                                props.indexState(row.code);
                                props.showMenu();
                             }
                            }>
                        Edit
                    </button>
                    <br/>
                    <button 
                            onClick={() => props.removeClient(row.code)}>
                        Delete
                        </button>

                </td>
            </tr>
        );
    })    

    return <tbody>{rows}</tbody>
}

class Table extends React.Component {
    render() {
        const {clientsData, removeClient} = this.props;
        return (
            <table className="striped-table">
                <TableHead/>
                <TableBody clientsData = {clientsData}
                           removeClient = {removeClient}
                           showMenu = {this.props.showMenu}
                           indexState = {this.props.indexState}/>
            </table>
        );
    }
}

export default Table;