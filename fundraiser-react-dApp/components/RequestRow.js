import React, { Component } from 'react'
import { Table, Button } from 'semantic-ui-react'
import web3 from '../ethereum/web3'
import { Link } from '../routes'
import Fundraiser from '../ethereum/fundraiser'

class RequestRow extends Component {
    onApprove = async () => {
        const fundraiser = Fundraiser(this.props.address)

        const accounts = await web3.eth.getAccounts()

        await fundraiser.methods.approveRequest(this.props.id).send({
            from: accounts[0]
        })
    }

    onFinalize = async () => {
        const fundraiser = Fundraiser(this.props.address)

        const accounts = await web3.eth.getAccounts()

        await fundraiser.methods.finalizeRequest(this.props.id).send({
            from: accounts[0]
        })
    }

    render() {
        //Destructuring for cleaner syntax
        const { Row, Cell } = Table
        const { id, request, contributorsCount } = this.props

        //A flag to determine if a spending request can be finalized (total / 2)
        const canFinalize = request.contributorsCount > contributorsCount / 2

        return (
            <Row 
                disabled={request.complete} 
                positive={canFinalize && !request.complete}>

                <Cell>{id}</Cell>

                <Cell>{request.description}</Cell>

                <Cell>{web3.utils.fromWei(request.value, 'ether')}</Cell>

                <Cell>
                    {request.complete ? request.recipient :
                        <Link route={'https://rinkeby.etherscan.io/address/' + request.recipient}>
                            <a>{request.recipient}</a>
                        </Link>
                    }                    
                </Cell>

                <Cell>{request.numOfYesVotes} of {contributorsCount}</Cell>

                <Cell>{Math.ceil(contributorsCount / 2)}</Cell>

                <Cell>
                    {request.complete ? 'Completed' : (
                        <Button color="green" basic onClick={this.onApprove}>
                            Approve
                        </Button>
                    )}
                </Cell>

                <Cell>
                    {request.complete ? 'Completed' : (
                        <Button color="teal" basic onClick={this.onFinalize}>
                            Finalize
                        </Button>
                    )}
                </Cell>

            </Row>
        )
    }
}

export default RequestRow