import React, {Component} from 'react';
import FoodList from './components/foodList';
import FoodInput from './components/foodInput';
import uuid from 'uuid';


class App extends Component {

    state ={
      items : [],
      id : uuid(),
      item : "",
      editItem : false,
    }

  handleSubmit=(e)=>{
    e.preventDefault();
    const newItem ={
      id: this.state.id ,
      name : this.state.item
    }

    const updateItems = [...this.state.items,newItem];
    this.setState({
      items : updateItems,
      item: '',
      id: uuid(),
      editItem : false
    })
  }

  handleChange=(e)=>{
    this.setState({
      item: e.target.value,
    })
  }

  handleList=()=>{
    
    this.setState({
      items : [],
    })
  }

  handleDelete=(id)=>{
    const  filterItems = this.state.items.filter(item=>item.id!==id);

    this.setState({
      items : filterItems
    })

  }

  handleEdit=(id)=>{
    const filterItems = this.state.items.filter(item=>item.id!==id);
    const selectItems = this.state.items.find(item=>item.id===id);

    this.setState({
      items : filterItems,
      item : selectItems.name,
      id : id,
      editItem : true
    })
  }




  render() {
    return (
      <div className="container">
        <h2 align="center" style={{paddingTop:10}}>Food Queue Application</h2>
          <div className="row">
            <FoodInput 
            item ={this.state.item}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            editItem={this.state.editItem}
            />
          </div>

            <FoodList 
            items={this.state.items}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
            handleList={this.handleList}
            />
      </div>
    )
  }
}


export default App;


