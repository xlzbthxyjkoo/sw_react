import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';

function R055_ReactstrapTab() {
    const [tabState, setTabState] = useState('React');

    let toggle = (tabNum) => {
        if(tabState != tabNum) {
            setTabState(tabNum);
        }
    }

    return (
        <>
        <Nav tabs>
            <NavItem>
                <NavLink onClick={() => {toggle('React')}}>First Tab</NavLink>
            </NavItem>
            <NavItem>
                <NavLink onClick={() => {toggle('Java')}}>Second Tab</NavLink>
            </NavItem>
            <TabContent activeTab={tabState}>
                <TabPane tabId="React"><h3>React</h3></TabPane>
                <TabPane tabId="Java"><h3>Java</h3></TabPane>
            </TabContent>
        </Nav>
        </>
    )
}
export default R055_ReactstrapTab;