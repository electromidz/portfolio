import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/header';
import Footer from './component/footer';
import './css/style.css';

function ListNumber (props){
    const numbers = props.number;
    const multy = numbers.map((x) => 
        <li key={x.toString()}>{x}</li>
    );
    return <ul>{multy}</ul>
}

const num = [1,2,3,4,5];

const App = () => {
    return <div>
            <Header/>
            {/* <ListNumber number={num}/> */}
            <h3 className="logo">Omid Moghadas</h3>
            <Footer/>
           </div>
}

ReactDOM.render(<App/>,document.querySelector('#root'));
