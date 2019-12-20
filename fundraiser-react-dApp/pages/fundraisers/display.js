import React, { Component } from 'react'
import Layout from '../../components/layout'
import Fundraiser from '../../ethereum/fundraiser'

class FundraiserDisplay extends Component {
    // Function gets called automatically before component is rendered.
    // Returned as an object and can now access via the props object.
    static async getInitialProps(props) {
        // Called with a separate props object of its own which
        // has the query property with the token url address.
        const fundraiser = Fundraiser(props.query.address);

        const summary = await fundraiser.methods.getSummary().call();

        console.log(summary);

        return {};
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