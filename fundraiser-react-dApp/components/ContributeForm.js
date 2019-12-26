import React, { Component } from 'react'
import { Form, Input, Message, Button } from 'semantic-ui-react'
import Fundraiser from '../ethereum/fundraiser'

class ContributeForm extends Component {
    // Initialize state object
    state = {
        value: ''
    };

    onSubmit = (event) => {
        event.preventDefault();
        
        // ContributeForm has a props with the address passed in from display.js
        const fundraiser = Fundraiser(this.props.address);
    }

    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Field>
                    <label>Enter a Contribution Amount</label>
                    <Input 
                        label="ether" 
                        labelPosition="right"
                        value={this.state.value}
                        onChange={event => this.setState({ value: event.target })}
                    />
                </Form.Field>

                <Button primary>
                    Contribute
                </Button>
            </Form>
        )

    }
}

export default ContributeForm;