import React, { Component } from 'react'
import { Form, Input, Message, Button } from 'semantic-ui-react'
import Fundraiser from '../ethereum/fundraiser'
import web3 from '../ethereum/web3'
import { Router } from '../routes'

class ContributeForm extends Component {
    // Initialize state object
    state = {
        value: '',
        errorMessage: '',
        loading: false
    }

    onSubmit = async (event) => {
        event.preventDefault();
        
        // ContributeForm has a props with the address passed in from display.js
        const fundraiser = Fundraiser(this.props.address);

        try {
            const accounts = await web3.eth.getAccounts();
            await fundraiser.methods.contribute().send({
                from: accounts[0],
                value: web3.utils.toWei(this.state.value, 'ether')
            })

            // Force a refresh of the current page
            Router.replaceRoute(`/campaigns/${this.props.address}`)
        } catch (err) {
            
        }
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
                        onChange={event => this.setState({ value: event.target.value })} 
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