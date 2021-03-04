import React from 'react';

import {
    Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, Row, Col
} from 'reactstrap';

const FunctionalComponentDemo = function () {
    return (
        <Container className="main">
            <Row>
                <Col xs='12'>
                <h1>Functional Component</h1>
                <p>Functional components are the primary tool in React to build a small, modular piece of your page.</p>
                <dl>
                    <dt>Can use State</dt>
                    <dd>With the 'useState' hook, functional components can now both render a display to the page and update the information to be shown.</dd>
                    <dt>No 'this' keyword</dt>
                    <dd>Older class components us 'this', functioanl components have no 'this' object.</dd>
                    <dt>Can use effects</dt>
                    <dd>With the 'useEffect' hook, functional components can perform side effect with any props or state changes</dd>
                    <dt>return()</dt>
                    <dd>Must return a single element, but this element may havae nested elements inside</dd>
                </dl>
                <h1>Functional Syntax vers Arrow Function</h1>
                </Col>
            </Row>
            <hr />
            <h1>Challenge</h1>
            <Row>
                <Col md='6'>
                    <HelloWorldFatArrow className='logo' />
                </Col>
                <Col md='6'>
                    <HelloWorld />
                </Col>
            </Row>
        </Container>
    );
};

export default FunctionalComponentDemo;

// Make the variable with an arrow function
/*
const FunctionalComponentDemo = () => {
    return (
        <div className="main">
            <div calssName="mainDiv">
                <div>
                    Hello React
                </div>
                <div>
                    How are you today?
                </div>
            </div>
        </div>
    );
};
*/

// REGULAR FUNCTION
const HelloWorld = function () {
    return (
        <div>
            <Card>
                <img width="100%" height="280px" src="https://i.ytimg.com/vi/BwAakF_VUV8/maxresdefault.jpg" alt="Card cap" />
                <CardBody>
                    <CardTitle>Regular Ole Function</CardTitle>
                    <CardSubtitle>A JS Library</CardSubtitle>
                    <CardText><pre>const HelloWorld = function () </pre></CardText>
                    <Button>Go somewhere, yo</Button>
                </CardBody>
            </Card>
        </div>
    )
};

// FAT ARROW FUNCTIONAL COMPONENT - 3 FEWER LINES. COMMON IN REACT...
const HelloWorldFatArrow = () =>
<div>
<Card>
    <img width="100%" height="280px" src="https://i.ytimg.com/vi/_pfXEv9cFGE/maxresdefault.jpg" alt="Card cap" />
    <CardBody>
        <CardTitle>Regular Ole Function</CardTitle>
        <CardSubtitle>A JS Library</CardSubtitle>
        <CardText><pre>const HelloWorld = () => </pre></CardText>
        <Button>Go somewhere man</Button>
    </CardBody>
</Card>
</div>