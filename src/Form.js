import React, { Component } from 'react'
class MyForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
        this.myref = React.createRef();
    }
    render() { 
        return ( 
            <div>
                <form>
                    <input
                        type="text"
                        onChange={(e) => { this.setState({ name: e.target.value }); }}
                        value={this.state.name} />
                    <input ref={this.myref} type="text" />
                </form>
            </div>
        );
    }
}
 
export default MyForm;