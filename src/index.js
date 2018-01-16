//import React ในหารสร้าง component หรือ element ต่างๆ
import React from 'react';
//import ReactDOM ใช้ในการ render dom
import ReactDOM from 'react-dom';
//import component App
import App  from './app';

//Render App component ไปที่ root (selector)
ReactDOM.render(<App />, document.getElementById('root'));
