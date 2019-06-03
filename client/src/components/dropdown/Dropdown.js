import React, { useState } from "react";
import './style.css';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

function ObjectDropdown(props) {
  const [toggle, setToggle] = useState(false);

  const toggler = () => {
    setToggle(!toggle);
  }

  const selectObject = (object) => {
    props.setScenarioObject(object);
    if (object === "account") {
      props.setMatchFieldsOptions(["accountName", "phone", "city", "street"]);
      props.setOriginalMatchFields(["accountName", "phone", "city", "street"]);
    }
    if (object === "contact") {
      props.setMatchFieldsOptions(["accountName", "phone", "city", "street", "firstName", "lastName", "email"]);
      props.setOriginalMatchFields(["accountName", "phone", "city", "street", "firstName", "lastName", "email"]);
    }
    if (object === "lead") {
      props.setMatchFieldsOptions(["accountName", "phone", "city", "street", "firstName", "lastName", "email"]);
      props.setOriginalMatchFields(["accountName", "phone", "city", "street", "firstName", "lastName", "email"]);
    }
  }

  return (
    <Dropdown className="myDropdown" isOpen={toggle} toggle={toggler}>
      <DropdownToggle caret>
        {
          props.scenarioObject !== '' ? (
            props.scenarioObject.toUpperCase()
          ) :
          "Select Object..."
        }
        
        </DropdownToggle>
      <DropdownMenu>
        {
          props.objects.map(object => (
            <DropdownItem onClick={() => selectObject(object)}>
              {object}
            </DropdownItem>
          ))
        }
      </DropdownMenu>
    </Dropdown>

  )
}

export default ObjectDropdown;
