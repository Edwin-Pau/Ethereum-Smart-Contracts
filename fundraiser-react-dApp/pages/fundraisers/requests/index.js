import React, { Component } from 'react'
import Layout from '../../../components/Layout'
import { Button, Table } from 'semantic-ui-react'
import { Link } from '../../../routes'
import Fundraiser from '../../../ethereum/fundraiser'
import RequestRow from '../../../components/RequestRow'

class FundraiserRequest extends Component {
    static async getInitialProps(props) {
        const { address } = props.query
        const fundraiser = Fundraiser(address)
        const requestCount = await fundraiser.methods.getRequestsCount().call()

        // Resolve an array of all the promises which give us an array of Requests
        const requests = await Promise.all(
            Array(parseInt(requestCount)).fill().map((element, i) => {
                return fundraiser.methods.requests(i).call()
            })
        )

        return { address, requests, requestCount }
    }

    // Helper method to iterate through every request and return a row for each one
    renderRow() {
        return this.props.requests.map((request, i) => {
            return (
                <RequestRow 
                    id={i}
                    key={i}
                    request={request}
                    address={this.props.address}
                />
            )
        })
    }

    render() {
        const { Header, Row, HeaderCell, Body } = Table;

        return (
            <Layout>
                <h3>Pending Requests</h3>
                
                <Link route={`/fundraisers/${this.props.address}/requests/new`}>
                    <a>
                        <Button primary>Add Request</Button>
                    </a>
                </Link>

                <Table>
                    <Header>
                        <Row>
                            <HeaderCell>Request ID</HeaderCell>
                            <HeaderCell>Description</HeaderCell>
                            <HeaderCell>Amount in Ether</HeaderCell>
                            <HeaderCell>Recipient Address</HeaderCell>
                            <HeaderCell>Approvals</HeaderCell>
                            <HeaderCell>Approve</HeaderCell>
                            <HeaderCell>Finalize</HeaderCell>
                        </Row>
                    </Header>
                    <Body>
                        {this.renderRow()}
                    </Body>
                </Table>
            </Layout>
        )
    }
}

export default FundraiserRequest;