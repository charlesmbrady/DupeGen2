import React, { useEffect, useState } from "react";
import './style.css';
import {
  Container,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Table
} from 'reactstrap';
import Nav from '../../components/Nav/Nav';
import utils from '../../utils/API';
import ObjectDropdown from '../../components/dropdown/Dropdown';

function Home() {
  const [toggle, setToggle] = useState(false);

  const toggler = () => {
    setToggle(!toggle);
  }
  //possible objects
  const [objects, setObjects] = useState(["account", "contact", "lead"]);
  const [scenarioObject, setScenarioObject] = useState('');
  const [originalMatchFields, setOriginalMatchFields] = useState([]);
  const [matchFieldsOptions, setMatchFieldsOptions] = useState([]);
  const [currentMatches, setCurrentMatches] = useState([{ name: "unique", recordCount: 0, fields: [] }, { name: "unknown", recordCount: 0, fields: [] }]);
  const [currentMatchFields, setCurrentMatchFields] = useState([]);
  const [totalRecordCount, setTotalRecordCount] = useState(0);

  const scenario = {
    objectType: scenarioObject,
    totalRecordCount: totalRecordCount,
    matches: currentMatches
  };

  const addField = (value) => {
    const tempMatchFields = currentMatchFields;
    tempMatchFields.push(value);
    setCurrentMatchFields(tempMatchFields);
    //also need to remove the field from matchFieldOptions so it can't be added again
    let tempMatchFieldsOptions = matchFieldsOptions.filter(fieldOption => {
      if (fieldOption !== value) {
        return true;
      }
    });
    setMatchFieldsOptions(tempMatchFieldsOptions);
  }
  // pushMatchField = () => {

  // };
  const newMatchScenario = () => {
    let tempCurrentMatches = currentMatches;
    tempCurrentMatches.shift();
    tempCurrentMatches.pop();
    let matchFields = [];
    let matchFieldNames = [];

    currentMatchFields.forEach(matchField => {
      matchFields.push({ name: matchField })
      matchFieldNames.push(matchField);
    });
    let matchName = matchFieldNames.join(", ");
    let theMatch = {
      name: matchName,
      recordCount: 0,
      fields: matchFields
    }
    tempCurrentMatches.unshift({ name: "unique", recordCount: 0, fields: [] });
    tempCurrentMatches.push(theMatch);
    tempCurrentMatches.push({ name: "unknown", recordCount: 0, fields:[] });

    setCurrentMatches(tempCurrentMatches);
    setMatchFieldsOptions(originalMatchFields);
    setCurrentMatchFields([]);
  }

  const handleInput = (event) => {
    let value = Math.floor(event.target.value);
    if (value < 0) {
      value = 0;
    }
    let tempCurrentMatches = currentMatches;
    let recordCount = 0;

    tempCurrentMatches.forEach(match => {
      if (match.name === event.target.name) {
        if (match.name === "unique" || match.name === "unknown") {
          match.recordCount = value;
          
        } else {
          match.recordCount = value * 2;
        }
      }
      recordCount += match.recordCount;
    });
    setCurrentMatches(tempCurrentMatches);
    setTotalRecordCount(recordCount);
  }

  //when the component mounts.....
  useEffect(() => {
    console.log("hello Home page");
  }, []);


  return (
    <div>
      {/* TODO: make 'about' in the navbar open a modal */}
      <Nav />
      <Container className="main">

        <Row>
          {/* column for creating the match steps */}
          <Col>
            <Row>
              <Col>
                <div>
                  <h3>
                    Select Object:
                    </h3>
                </div>
                <ObjectDropdown objects={objects} setOriginalMatchFields={setOriginalMatchFields} scenarioObject={scenarioObject} setScenarioObject={setScenarioObject} setCurrentMatchFields={setCurrentMatchFields} setMatchFieldsOptions={setMatchFieldsOptions} />
              </Col>
            </Row>
            <hr></hr>
            <Row>
              <Col>
                <h5>Match fields</h5>
                {/* map the selected match fields here */}
                {
                  currentMatchFields.map(selectedField => (
                    <h6>{selectedField}</h6>
                  ))
                }
                {/* match fields dropdown where onclick adds that 
                value to currentMatchFields aray and pops it 
                from matchFields options*/}
                <Dropdown className="myDropdown" isOpen={toggle} toggle={toggler}>
                  <DropdownToggle caret>

                    Add Field...
                  </DropdownToggle>
                  <DropdownMenu>
                    {
                      matchFieldsOptions.map(field => (
                        <DropdownItem
                          onClick={() => addField(field)}
                        >
                          {field}
                        </DropdownItem>
                      ))
                    }
                  </DropdownMenu>
                </Dropdown>


                <br></br>
                <button onClick={newMatchScenario}>Save Match</button>
              </Col>
            </Row>
            <Row>
              <Col>

              </Col>
            </Row>
          </Col>

        </Row>

        <hr></hr>
        {/* row for final counts and all  */}
        {
          scenarioObject === '' ? (
            "Select an Object to Generate Records for"
          ) : (
              <div>
                <Table striped>
                  <thead>
                    <tr>
                      <th>Match Name</th>
                      <th>Dupe Pair Count</th>
                      <th>Record Count</th>
                    </tr>
                  </thead>
                  <tbody>

                    {
                      currentMatches.map(matchScenario => (
                        (matchScenario.name === "unique" || matchScenario.name === "unknown") ? (
                          <tr>
                            <td>{matchScenario.name}</td>
                            <td></td>
                            <td><input name={matchScenario.name} type="number" onChange={(event) => handleInput(event)}></input></td>
                          </tr>
                        ) :
                          (
                            <tr>
                              <td>{matchScenario.name}</td>
                              <td><input name={matchScenario.name} type="number" onChange={(event) => handleInput(event)}></input></td>
                              <td>{matchScenario.recordCount}</td>
                              {console.log(matchScenario.recordCount)}
                            </tr>
                          )
                      ))
                    }

                  </tbody>
                </Table>
                <p>Total Record Count: {scenario.totalRecordCount}</p>
                {totalRecordCount !== 0 ? (<button onClick={() => utils.newScenario(scenario)}>Download .csv</button>) : ("") }
                
              </div>
            )
        }


      </Container>
    </div>
  );

}

export default Home;
