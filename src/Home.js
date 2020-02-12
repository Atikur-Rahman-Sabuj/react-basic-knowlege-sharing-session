import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Axios from 'axios'
import './index.css'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            toDoList:[],
         }
    }
    componentDidMount() {
        Axios.get("https://jsonplaceholder.typicode.com/todos").then((response)=>{
            this.setState({ toDoList: response.data });
        }).catch(error=>{
            console.log("Executes when error" + error)
        }).finally(()=>{
            console.log("This alwasy executes")
        })
    }
    render() { 
        return ( 
            <div>
                Home
                <Link to="/class">Go to Class Comp</Link>
                <Link to="/func">Go to Func Comp</Link>
                <Link to="/form">Form</Link>
                {
                    this.state.toDoList.map((item,index)=>{
                        return (
                            <div key={index}  className="sa-list" >
                                <Link style={{textDecoration:'none', color:'black'}} to={`/tododetails/${item.id}`}>{item.title} </Link>
                            </div>
                        )
                    })
                }
            </div>
         );
    }
}
 
export default Home;