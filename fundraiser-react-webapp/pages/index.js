import React, { Component } from 'react';
import instance from '../ethereum/instance';
import { Card, Button } from 'semantic-ui-react'
import Layout from '../components/layout'

class KickstarterIndex extends Component {
    // Required to be static by Next.js
    static async getInitialProps() {
        const instances = await instance.methods.getDeployedInstances().call();

        return { instances };
    }

    // Card for different deployed fundraiser instances
    renderInstances() {
        const items = this.props.instances.map(address => {
            return {
                header: address,
                description: <a>View Fundraiser</a>,
                fluid: true
            }
        });

        return <Card.Group items={items} />;
    }

    // Need to define a render method for some jsx
    render() {
        return <Layout>
                
                    <h3>Active Fundraisers</h3>
                    
                    <Button floated="right" content="Create Fundraiser" 
                    icon="add circle" primary={true} labelPosition="right" />

                    {this.renderInstances()}
                
               </Layout>
    }
}

export default KickstarterIndex;