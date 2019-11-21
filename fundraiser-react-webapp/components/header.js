import React from 'react'
import { Menu } from 'semantic-ui-react'

export default () => {
    return (
        <Menu>
            <Menu.Item>Fundraiser - Ethereum Kickstarter</Menu.Item>
        
            <Menu.Menu position="right">
                <Menu.Item>Active Fundraisers</Menu.Item>

                <Menu.Item>+ Create Fundraiser</Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}