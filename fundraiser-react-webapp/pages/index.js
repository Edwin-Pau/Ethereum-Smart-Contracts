import React, { Component } from 'react';
import instance from '../ethereum/instance';

class KickstarterIndex extends Component {
    // Required to be static by Next.js
    static async getInitialProps() {
        const instances = await instance.methods.getDeployedInstances().call();

        return { instances };
    }

    // Need to define a render method for some jsx
    render() {
        return <div>{this.props.instances[0]}</div>
    }
}

export default KickstarterIndex;