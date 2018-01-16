import React from 'react';
//import ToDoList จาก ToDoList Component
import ToDoList from './components/ToDoList';

//สร้าง class App ขึ้นมา
class App extends React.Component {
    render() {
        return (
            <div>
                { /* ToDoList Component */}
                <ToDoList/>
            </div>
        )
    }
}
{ /* Export Class App ออกไป */}
export default App;