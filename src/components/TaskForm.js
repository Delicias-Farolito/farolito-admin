import React,{Component} from 'react';

class TaskForm extends Component {
    constructor(){
        super();
        this.state= {
            title:'',
            responsible:'',
            description:'',
            priority: 'low'
        }
    }
    handleInput(){
        console.log("writing..");
    }
    render(){
        return(
            <div className ="card">
                <form className = "card-body">
                    <div className="form-group">
                        <input 
                        type="text"
                        name ="title"
                        onChange={this.handleInput}
                        className="form-control"
                        placeholder="Title"
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="text"
                        name ="responsible"
                        className="form-control"
                        placeholder="Responsible"
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="text"
                        name ="description"
                        className="form-control"
                        placeholder="Description"
                        />
                    </div>
                    <div className="form-group">
                        <input 
                        type="text"
                        name ="priority"
                        className="form-control"
                        placeholder="Priority"
                        />
                    </div>

            
                </form>
            </div>
        )
    }

}

export default TaskForm;