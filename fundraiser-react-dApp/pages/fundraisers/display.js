import React, { Component } from 'react'
import Layout from '../../components/layout'
import Fundraiser from '../../ethereum/fundraiser'

class FundraiserDisplay extends Component {
    // Function gets called automatically before component is rendered.
    // Returned as an object and can now access via the props object.
    static async getInitialProps(props) {
        // Call our created function which creates an instance of the
        // contract and passing in the address of the url obtained
        // from the props.query property.
        const fundraiser = Fundraiser(props.query.address);

        const summary = await fundraiser.methods.getSummary().call();

        return {
            minimumContribution: summary[0],
            balance: summary[1],
            requestsCount: summary[2],
            contributorsCount: summary[3],
            manager: summary[4],
            title: summary[5],
            description: summary[6]
        };
    }

    render() {
        return (
            <Layout>
                <h3>Display Fundraisers</h3>
            </Layout>
        )
    }
}

export default FundraiserDisplay