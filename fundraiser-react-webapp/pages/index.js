import React, { Component } from 'react';
import instance from '../ethereum/instance';

class KickstarterIndex extends Component {
    async componentDidMount() {
        const instances = await instance.methods.getDeployedInstances().call();

        console.log(instances);
    }

    // Need to define a render method for some jsx
    render() {
        return <div>Kickstarter Instances</div>
    }
}

export default KickstarterIndex;