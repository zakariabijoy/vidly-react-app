import React, { Component } from 'react';

class TableBody extends Component {
    const {data, columns} = this.props;
    render() { 
        return ( <tbody>
            {data.map( item => <tr>
                {columns.map(column => <td></td>)}
            </tr>)}
        </tbody> );
    }
}
 
export default TableBody;