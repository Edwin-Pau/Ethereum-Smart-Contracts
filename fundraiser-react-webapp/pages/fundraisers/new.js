import React, { Component } from 'react'
import Layout from '../../components/layout'
import { Form, Button, Input, Message } from 'semantic-ui-react'
import instance from '../../ethereum/instance'
import web3 from '../../ethereum/web3'

class FundraiserNew extends Component {
    state = {
        minimumContribution: '',
        errorMessage: ''
    }

    onSubmit = async (event) => {
        event.preventDefault();

        try {
            // Get our accounts from metamask
            const accounts = await web3.eth.getAccounts();

            await instance.methods
                .createNewInstance(this.state.minimumContribution)
                .send({
                    from: accounts[0]
                })
        } catch (err) {
            this.setState({ errorMessage: err.message })
        }
    }

    render() {
        return (
            <Layout>
                <h3>Create a Fundraiser!</h3>

                <Form error={this.state.errorMessage} onSubmit={this.onSubmit}>
                    <Form.Field>
                        <label>Enter Minimum Contribution Amount</label>
                        <Input
                            style={{ width: '20vw' }} 
                            label="wei" 
                            labelPosition="right"
                            value={this.state.minimumContribution}
                            onChange={event => this.setState({ minimumContribution: event.target.value })} 
                        />
                    </Form.Field>

                    <Message error header="Something went wrong!" content={this.state.errorMessage} />
                
                    <Button primary>Create</Button>
                </Form>

            </Layout>
        )
    }
}

export default FundraiserNew;