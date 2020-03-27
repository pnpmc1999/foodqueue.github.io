import React, { Component } from 'react';

export default class foodItem extends Component {
    render() {
        const {name,handleEdit,handleDelete} = this.props;
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-1">
               <h6>{name}</h6> 

               <div>
                    <span onClick={handleEdit} className="mx-2"><i className="fas fa-edit"></i></span>
                    <span onClick={handleDelete}><i className="fas fa-trash-alt"></i></span>
               </div>
            </li>
        )
    }
}
