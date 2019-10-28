import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  FormGroup,
  Input
} from 'reactstrap';


const AppNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar" fixed="top" color="white" light expand="md">
        <NavbarBrand className="brand" href="/">Steam Capitalism</NavbarBrand>

        <Collapse isOpen={isOpen} navbar>
          <Nav className="searchfilter">
            <Form>
              <FormGroup className="searchFormGroup">
                <Input placeholder="Search" />
              </FormGroup>
            </Form>
          </Nav>
          <Nav className="algorithmfilter" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Algorithm
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Review
                </DropdownItem>
                <DropdownItem>
                  Weighted
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default AppNavbar;