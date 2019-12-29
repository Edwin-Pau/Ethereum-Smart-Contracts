import React, { Component } from 'react'
import { Table, Button } from 'semantic-ui-react'
import web3 from '../ethereum/web3'
import { Link } from '../routes'
import Fundraiser from '../ethereum/fundraiser'

class RequestRow extends Component {
    state = {
        loadingApprove: false,
        loadingFinalize: false,
        errorMessage: '',
        success: false,
        transactionHash: ''
    }

    onApprove = async () => {
        const fundraiser = Fundraiser(this.props.address)

        const accounts = await web3.eth.getAccounts()

        this.setState({ loadingApprove: true })

        await fundraiser.methods.approveRequest(this.props.id).send({
            from: accounts[0]
        })

        this.setState({ loadingApprove: false })
    }

    onFinalize = async () => {
        const fundraiser = Fundraiser(this.props.address)

        const accounts = await web3.eth.getAccounts()

        this.setState({ loadingFinalize: true })

        await fundraiser.methods.finalizeRequest(this.props.id).send({
            from: accounts[0]
        })

        this.setState({ loadingFinalize: false })
    }

    render() {
        //Destructuring for cleaner syntax
        const { Row, Cell } = Table
        const { id, request, contributorsCount } = this.props

        //A flag to determine if a spending request can be finalized (total / 2)
        const canFinalize = request.numOfYesVotes > contributorsCount / 2

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

                <Cell>{request.numOfYesVotes} of {Math.ceil(contributorsCount / 2)}</Cell>

                <Cell>
                    {request.complete ? 'Completed' : (
                        <Button 
                            color="green" 
                            basic onClick={this.onApprove}
                            loading={this.state.loadingApprove}>
                                Approve
                        </Button>
                    )}
                </Cell>

                <Cell>
                    {request.complete ? 'Completed' : (
                        canFinalize ? 
                            <Button 
                                color="teal" 
                                basic onClick={this.onFinalize}
                                loading={this.state.loadingFinalize}>
                                    Finalize
                            </Button> : 
                                'Votes Required'
                    )}
                </Cell>

            </Row>
        )
    }
}

export default RequestRow