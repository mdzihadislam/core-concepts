import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
      const  nayoks=['sabbir','shafayat','manik']
      const products=[
        {name:'photoshoop',price:'$90,99'},
        {name:'Illustrator',price:'$60.99'},
        {name:'PDF Reader',price:'$6.99'}
      ]
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
            <Users></Users>
        <Counter></Counter>
            <ul>
             {
               nayoks.map(nayok => <li>{nayok}</li>)
             }
              </ul>  
              {
          products.map(product => <Product product={product}></Product>)
         }
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Person name="zihad" profession="market"></Person>
        <Person name={nayoks[0]} profession="market"></Person>
        <Person name="zihad" profession="market"></Person>
        <Person name="zihad" profession="market"></Person>
      </header>
    </div>
  );
}

function Users(){
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return(
    <div>
      <h3>Dynamic Users : {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}







function Product(props){
 
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'400px',
    float:'left'
  }
 const {name,price}=props.product;

  return(
    <div style={productStyle}>
          <h2>Name:{name}</h2>
          <h4>price:{price}</h4>
          <button>Buy now</button>
    </div>
  )
}
function Person(props){
  return(
       <div style={{border:"2px solid gold", width:"500px", margin:"10px"}}>
         <h1>my name: {props.name}</h1>
        <h2>profession: {props.profession}</h2>
       </div>
  )
}
 
function Counter(){
  const [count, setCount]=useState(10);
  const handleIncrease= () => {
    const newcount=count + 1;
    setCount(newcount);
  }
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handleIncrease}>increase</button>
    </div>
  )
}


export default App;
