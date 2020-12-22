import React from 'react';
import {Button, Card, Col, Row} from 'antd';
import logo from "../logo.svg";

export class Homepage extends React.Component {
    render() {
        return (
            <>
                <div className="App">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div className="site-card-wrapper">
                        <Row gutter={16}>
                            <Col span={8}>
                                <Card title="Test" bordered={false}>
                                    <a href="/my-app/first">Homepage</a>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="Card title" bordered={false}>
                                    <a href="/my-app/Brian">Card content</a>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="Card title" bordered={false}>
                                    Card content
                                </Card>
                            </Col>
                        </Row>
                    </div>
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <Card title="Card title" bordered={false} style={{ width: 300 }}>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                        <p>
                            Edit <code>src/App.js</code> and save to reload.
                        </p>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn React
                        </a>
                    </header>
                </div>
            </>
        );
    }
}