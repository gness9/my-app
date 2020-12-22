import React from 'react';
import {Button, Card, Col, Row, List, Typography, Divider} from 'antd';
//import { Image } from 'antd';
import logo from "../logo.svg";
import "../CSS/BillandHelen.css"

export class Brian extends React.Component {
    render() {
        const data = [
            'What is Patrick Mahomes jersey number?(15)',
            'What Chapter in Luke is the quote “Glory to God in the highest, and on earth peace, good will toward men.”?(2)',
            'What page in the American Heritage Dictionary of the English Language is the word Amalgamate found?(56)',
        ];
        return (
            <>
                <div className="App">
                    <img src={logo} className="App-logo" alt="logo" />
                    <header>
                        Who would open the lock of Christmas must answer me these questions three, ere the opened box he see.
                    </header>
                    <Row gutter={15}>
                        <Col span={3}>
                            <img src="../Images/2spades.png" alt="Girl in a jacket" width="500" height="600" />
                        </Col>
                        <Col span={3}>
                            <Card title="Card title" bordered={false}>
                                <a href="/Brian">Card content</a>
                            </Card>
                        </Col>
                        <Col span={3}>
                            <Card title="Card title" bordered={false}>
                                Card content
                            </Card>
                        </Col>
                        <Col span={3}>
                            <Card title="Test" bordered={false}>
                                <a href="/first">Homepage</a>
                            </Card>
                        </Col>
                        <Col span={3}>
                            <Card title="Test" bordered={false}>
                                <a href="/first">Homepage</a>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}