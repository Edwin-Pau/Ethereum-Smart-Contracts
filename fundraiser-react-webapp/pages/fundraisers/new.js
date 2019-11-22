import React, { Component } from 'react'
import Layout from '../../components/layout'
import { Form, Button } from 'semantic-ui-react'

class FundraiserNew extends Component {
    render() {
        return (
            <Layout>
                <h3>Create a Fundraiser!</h3>

                <Form>
                    <Form.Field>
                        <label>Minimum Contribution</label>
                        <input />
                    </Form.Field>
                
                    <Button primary>Create</Button>
                </Form>

            </Layout>
        )
    }
}

export default FundraiserNew;