import React, {Component} from 'react';
import FoodItem from './foodItem';

export default class foodList extends Component {
    render() {
        const {items,handleEdit,handleDelete,handleList} = this.props;
        return (
            <ul className="list-group my-2">
              <h4>รายการอาหาร</h4>
                {
                    items.map(item=>{
                        return (
                            <FoodItem 
                            key={item.id} 
                            name={item.name} 
                            handleEdit={()=>handleEdit(item.id)}
                            handleDelete={()=>handleDelete(item.id)}
                            />
                        )
                    })
                }
               <button className="btn btn-danger" onClick={handleList}>Clear List</button>
            </ul>
        )
    }
}

