import React, { Component } from 'react'
import Layout from '../../components/layout'
import Fundraiser from '../../ethereum/fundraiser'
import { Card } from 'semantic-ui-react';

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

    renderFundraiserDetails() {
        // Destructuring
        const {
            balance,
            manager,
            minimumContribution,
            requestsCount,
            contributorsCount,
            title,
            description
        } = this.props;

        const items = [
            {
                header: manager,
                meta: 'Address of Contract Manager',
                description: 'The manager created this fundraiser contract and can create spending requests to withdraw ether.',
                style: { overflowWrap: 'break-word' }
            }
        ]

        return <Card.Group items={items} />
    }

    render() {
        return (
            <Layout>
                <h3>Display Active Fundraisers</h3>
                {this.renderFundraiserDetails()}
            </Layout>
        )
    }
}

export default FundraiserDisplay