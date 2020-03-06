import React, {Component} from 'react';
import { Form, FormControl, Button} from 'react-bootstrap';
import './App.css';
import AgeStarts from './AgeStarts';

class App extends Component {
    constructor() {
        super();
        this.state ={
            newDate: "",
            Birthday: "1992-06-21",
            showStats: false
        }
    }
    changeBirthday(){
        console.log(this.state);
        this.setState({
            Birthday:this.state.newDate,
            showStats: true
        });
 }
    render() {
        return (
            <div className="App">
                <Form inLine>
                <h2>Input Your Birthday!</h2>
                <FormControl  type="date"
                onChange={event =>this.setState({newDate:event.target.value})}
                >  
                           
                </FormControl>
                {' '}
                <Button onClick={()=> this.changeBirthday()}>
                    Submit
                </Button>
                {this.state.showStats ? <div className=" fade age-starts"><AgeStarts date={this.state.Birthday}/></div> :
                <div></div>
                }
            </Form>
            </div>
        )
    }
}
export default App;