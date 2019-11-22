import React, { Component } from 'react'
import Layout from '../../components/layout'
import { Form, Button, Input } from 'semantic-ui-react'

class FundraiserNew extends Component {
    state = {
        minimumContribution: ''
    }

    render() {
        return (
            <Layout>
                <h3>Create a Fundraiser!</h3>

                <Form>
                    <Form.Field>
                        <label>Enter Minimum Contribution Amount</label>
                        <Input 
                            label="wei" 
                            labelPosition="right"
                            value={this.state.minimumContribution}
                            onChange={event => this.setState({ minimumContribution: event.target.value })} 
                        />
                    </Form.Field>
                
                    <Button primary>Create</Button>
                </Form>

            </Layout>
        )
    }
}

export default FundraiserNew;