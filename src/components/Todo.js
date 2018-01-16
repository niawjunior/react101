import React, { Component } from 'react';

// export class Todo ออกไป
export default class Todo extends Component {

    render() {
        // กำหนดตัวแปล id,to,onRemove ให้เท่ากับ props ที่ถูกส่งมาจาก component อื่น
        let {id, todo, onRemove } = this.props
        return (
            <div>
         { /*return ค่าที่อยู่ใน state ออกไป พร้อมปุ่ม remove */}
                <li>{todo} <button onClick={() => onRemove(id)}>x</button></li>
            </div>
        )
    }
}