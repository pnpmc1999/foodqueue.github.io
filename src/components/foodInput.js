import React, { Component } from 'react';

export default class foodInput extends Component {
    render() {
        const {handleSubmit,handleChange,item,editItem} = this.props;
        return (
            <div className="card-body card my-3">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="">ป้อนรายการอาหาร</label>
                        <input type="text" value={item} className="form-control" onChange={handleChange}/>
                    </div>
                    <input type="submit" disabled={item?false:true} name="" id="" className={editItem?"btn btn-primary":"btn btn-success"} value={editItem?"แก้ไขรายการ":"บันทึกรายการ"} />
                </form>
            </div>
        )
    }
}
