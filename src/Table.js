import React from 'react';

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Codigo</th>
                <th>Nombre</th>
                <th>Balance</th>
                <th>Fecha de Registro</th>
                <th>Opciones</th>
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
                    <button className="accent-button"
                            >
                        Edit
                        </button>
                    <br/>
                    <button className="accent-button"
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
                           removeClient = {removeClient}/>
            </table>
        );
    }
}

export default Table;