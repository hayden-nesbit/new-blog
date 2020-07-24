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
  NavbarText
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter, faGoodreads } from '@fortawesome/free-brands-svg-icons'

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="faded" light expand="md">
        <NavbarBrand href="/">HN</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Resume</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Elsewhere
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <NavLink href="https://www.linkedin.com/in/hayden-nesbit-b54a7485/" target="_blank"><FontAwesomeIcon size="lg" style={{color: "#0077B5"}} icon={faLinkedin} /> LinkedIn</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href="https://github.com/hayden-nesbit" target="_blank"><FontAwesomeIcon size="lg" style={{color: "#000000"}} icon={faGithub} /> GitHub</NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                <NavLink href="https://www.goodreads.com/user/show/91652574-hayden-nesbit" target="_blank"><FontAwesomeIcon size="lg" style={{color: "#E8DCC9"}} icon={faGoodreads} /> Goodreads</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href="https://twitter.com/HaydenNesbit" target="_blank"><FontAwesomeIcon size="lg" style={{color: "#1991DA"}} icon={faTwitter} /> Twitter</NavLink> 
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;