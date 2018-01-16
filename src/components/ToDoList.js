import React, { Component } from 'react';
// import Todo Component เข้ามา
import Todo from './Todo';

// export Component ToDoList ออกไป
export default class ToDoList extends Component {
    // สร้าง constructor ขึ้นมา
    constructor(props) {
        super(props);
        // กำหนด Default state
        this.state = {
            // กำหนดให้ todos เป็น array เปล่า
           todos: []
        }
        // กำหนดให้ todoInput state มีค่าว่าง
        this.todoInput = ""
    }

    // ฟังก์ชัน addTodo
    addTodo() {
        // รับค่าจาก inputbox
        let todoValue = this.todoInput.value
        // ทุกครั้งที่มีการกด add จะรับ state ในขณะนั้นเข้ามา หรือ state ณ ปัจจุบันนั่นเอง
        let newTodos = this.state.todos
        // เพิ่มค่าใหม่เข้าไปใน array เดิม
        newTodos.push(todoValue)
        // เปลี่ยน todos state ให้มีค่าเท่ากับ newTodos
        this.setState({
            todos: newTodos
        })
        // เคลียร์ inputbox ให้ว่างเหมือนเดิม
        this.todoInput.value = ''
        // กำหนดให้ focus ที่ inputbox ทุกครั้งที่ทำการเพิ่ม items
        this.todoInput.focus();

    }
    // ฟังก์ชัน remove item 
    // รับ รับไอดีเข้ามา จากตัวแปล index
    removeTodo(id) {
        // ประกาศให้ตัวแปล todos มีค่าเท่ากับ state todos ที่ค่า id ไม่เท่ากับ ค่าของ index
        // หมายถึงจะเลือกแสดงเฉพาะค่าที่ไม่ถูกคลิ๊ก remove นั้นเอง
        let todos = this.state.todos.filter((todo,index) => {
            return id !== index
        })
        // กำหนด state ใหม่ ให้ todos state เท่ากับตัวแปล todos
        this.setState({
            todos: todos
        })
    }

   

    render() {
        return (
            <div>
               { /*แสดงจำนวนของ items ใน todos list */} 
                <p>Todo Count: { this.state.todos.length }</p>
                
                <ul>
                    {
                        // แสดง list items ทั้งหมดที่อยู่ใน state
                        this.state.todos.map((todo,index) => {
                            return (
                                //เมือมีการกด remove จะส่ง index ของ item ไปยังฟังก์ชัน removeTodo
                                // id กับ key มีค่าเท่ากัน
                                // render Todo component และใน component มี props ดังนี้ id,key,todo,onRemove
                                <Todo id={index} key={index} todo={todo} onRemove={() => this.removeTodo(index)}/>
                            )
                        })
                    }
                </ul>
                { /* สร้าง input box */}
                <input type="text" placeholder="Enter todo"  ref={(input) => this.todoInput = input}/>
                { /* สร้างปุ่มสำหรับ add items*/}
                <button onClick={this.addTodo.bind(this)}>Add</button>
            </div>
        )
    }
}