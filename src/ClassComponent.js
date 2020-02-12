import React, { Component } from 'react'
import { Link } from 'react-router-dom';
class ClassComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            canShow: true,
            name2:"Name2",
            name3:"Name3",
            numbers:[1,2,3,4,9,12],
         }
         this.otherVar = "Other"
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {}
    }

    shouldComponentUpdate(nextProps, nextState) {
        
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        
    }

    componentDidUpdate(prevProps, prevState) {
        
    }

    componentWillUnmount() {
         
    }
    
    componentDidMount() {
        setTimeout(()=>{
            this.setState({ name2: "Not some name" });
            this.otherVar = "not other"
        }, 2000)
    }
    clicked=()=>{

    }

    conditionalRender=(canShow)=>{
        if (canShow) {
            return (<div>True</div>)
        } else {
            return (<div>False</div>)
        }
    }

    render() { 
        return ( 
            <div onClick={this.props.click}>
                <Link to="/">Home</Link>
                {
                    this.state.numbers.map((item,index)=>{
                        return(
                            <div key={index}>{item} {index}</div>
                        )   
                    })
                }
            </div>
         );
    }




}
 
export default ClassComponent;