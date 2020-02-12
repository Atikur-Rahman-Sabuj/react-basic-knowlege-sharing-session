import React, { Component } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom';
class ToDoDetails extends Component {
    constructor(props) {
        super(props);
        //console.log(this.props.match.params.toDoId)
        this.state = { 
            toDoId: this.props.match.params.toDoId,
            error: false,
            loading: true,
            todo:{}

         }
         console.log("data")
    }
    componentDidMount() {
        Axios.get(`https://jsonplaceholder.typicode.com/todos/${this.state.toDoId}`).then(response=>{
            console.log(response.data)
            this.setState({ todo:  response.data, loading: false  });
        }).catch(error=>{
            console.log("Executes when error" + error)
            this.setState({ loading: false, error: true });
        }).finally(()=>{
            console.log("This alwasy executes")
        })

        Axios.post('url', {name: "My name"}, {}).then()
        .catch()
    }
    render() { 
        if(this.state.loading){
            return (<div>Loading</div>)
        }
        if(this.state.error){
            return (<div>Error</div>)
        }
        return ( 
            <div>
                <h2>To Do Details</h2>
                <div>
                    <strong>Title: </strong> {this.state.todo.title}
                </div>
                <div>
                    <strong>Completed: </strong> {this.state.todo.completed?"Yes":"No"}
                </div>
                <Link style={{textDecoration: 'none', cursor:'pointer'}} to="/">
                    <button style={{cursor:'pointer'}}>ToDo list</button>
                </Link>
            </div>
         );
    }
}
 
export default ToDoDetails;