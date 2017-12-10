import React, { Component } from 'react';

class Table extends Component {
  
  // Table spec width : 870 px
  // Table cfg spec : {width, name, value, className (optionnal)}
  row(rowData, columns){
    return columns.map((column,i,a) => <td key={i} className={column.className}>{column.value(rowData)}</td>);
  }

  render() {
    var data = this.props.data;
    var columns = this.props.columns;

    if(data){
      var headers = columns.map((column,i,a) => <th key={i} width={column.width}>{column.name}</th>);
      var rows = data.map((rowData,i,a) => <tr key={i}>{this.row(rowData, columns)}</tr>);
      return (
        <table>
            <tr>{headers}</tr>
             {rows}
        </table>
        );
    }

    return '';
  }
}

export default Table;
