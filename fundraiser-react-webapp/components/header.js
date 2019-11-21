import React from 'react'
import { Menu } from 'semantic-ui-react'

export default () => {
    return (
        <Menu style={{ marginTop: '10px' }}>
            <Menu.Item>
                <img style={{ marginRight: '10px' }} src='/static/eth.png' alt='Logo'/>
                Ethereum Kickstarter</Menu.Item>
        
            <Menu.Menu position="right">
                <Menu.Item>Active Fundraisers</Menu.Item>

                <Menu.Item>+ Create Fundraiser</Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}