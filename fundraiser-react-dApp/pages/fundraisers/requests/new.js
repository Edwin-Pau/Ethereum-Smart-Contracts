import React, { Component } from 'react'
import { Form, Button, Message, Input } from 'semantic-ui-react'
import fundraiser from '../../../ethereum/fundraiser'
import web3 from '../../../ethereum/web3'
import { Link, Router } from '../../../routes'
import Layout from '../../../components/layout'

class NewRequest extends Component {
    state = {
        amount: '',
        description: '',
        recipient: ''
    }

    static async getInitialProps(props) {
        const { address } = props.query;

        return { address }
    }

    render() {
        return (
            <Layout>
                <h3>Create a Spending Request</h3>
                <Form>
                    <Form.Field>
                        <label>Description</label>
                        <Input 
                            value={this.state.description}
                            onChange={event => this.setState({ description: event.target.value })}
                        />
                    </Form.Field>

                    <Form.Field>
                        <label>Amount in Ether</label>
                        <Input 
                            value={this.state.amount}
                            onChange={event => this.setState({ amount: event.target.value })}
                        />
                    </Form.Field>

                    <Form.Field>
                        <label>Recipient Address</label>
                        <Input 
                            value={this.state.recipient}
                            onChange={event => this.setState({ recipient: event.target.value })}
                        />
                    </Form.Field>

                    <Button primary>Create</Button>
                </Form>
            </Layout>
        )
    }
}

export default NewRequest;