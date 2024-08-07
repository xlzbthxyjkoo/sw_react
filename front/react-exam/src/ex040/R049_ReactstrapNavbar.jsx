import React, {useState} from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

function R049_ReactstrapNavbar() {
    const [Collapsed, setCollapsed] = useState(false);

    let toggle = () => {
        setCollapsed(!Collapsed);
    }

    return (
        <>
        <Navbar color="faded" light>
            <NavbarBrand href="/" className="mr-auto">Navbar</NavbarBrand>
            <NavbarToggler onClick={toggle} className="mr-2"></NavbarToggler>
            <Collapse isOpen={Collapsed} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink href="#">메인</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="http://example.com">사이트 방문</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        </>
    )
}

export default R049_ReactstrapNavbar;