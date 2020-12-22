import React from 'react';
import {Button, Card, Col, List, Row} from 'antd';
import logo from "../logo.svg";
import "../CSS/Homepage.css";
import spade2 from '../CSS/2spades.png';
import spade4 from '../Images/4spades.png';
import spade7 from '../Images/7spades.png';
import spade9 from '../Images/9spades.png';
import spadeK from '../Images/Kingspades.png';
import spadeQ from '../Images/Queenspades.png';
import EthanP from '../Images/EthanProblem.png';
import cityBurn from '../Images/CitytoBurn.gif';
import { Typography } from 'antd';

const { Title } = Typography;

export class Homepage extends React.Component {
    render() {
        const data = [
            'What is Patrick Mahomes jersey number?(15)',
            'What Chapter in Luke is the quote “Glory to God in the highest, and on earth peace, good will toward men.”?(2)',
            'What page in the American Heritage Dictionary of the English Language is the word Amalgamate found?(56)',
        ];
        function activateHome(){
            var toggleDisplay = document.getElementById('check');
            var toggleDisplayTwo = document.getElementById('checkBrian');
            var toggleDisplayThree = document.getElementById('checkEthan');
            toggleDisplay.style.display = "block";
            toggleDisplayTwo.style.display = "none";
            toggleDisplayThree.style.display = "none";
        }
        function activateBrian(){
            var toggleDisplay = document.getElementById('check');
            var toggleDisplayTwo = document.getElementById('checkBrian');
            var toggleDisplayThree = document.getElementById('checkEthan');
            toggleDisplay.style.display = "none";
            toggleDisplayTwo.style.display = "block";
            toggleDisplayThree.style.display = "none";
        }
        function activateEthan(){
            var toggleDisplay = document.getElementById('check');
            var toggleDisplayTwo = document.getElementById('checkBrian');
            var toggleDisplayThree = document.getElementById('checkEthan');
            toggleDisplay.style.display = "none";
            toggleDisplayTwo.style.display = "none";
            toggleDisplayThree.style.display = "block";
        }
        function checkAnswer(){
            var plzwork = document.getElementById('fname');
            var clues = document.getElementById('clueDog');
            var clueWrong = document.getElementById('clueWrong');
            if(plzwork.value === 'beets')
            {
                clues.style.display = "block";
                clueWrong.style.display = "none";
            }
            else
            {
                clueWrong.style.display = "block";
                clues.style.display = "none";
            }
        }
        return (
            <>
                <div className="App">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div className="site-card-wrapper">
                        <Row gutter={16}>
                            <Col span={8}>
                                <Card title="Test" bordered={false}>
                                    <Button onClick={activateHome}>Homepage</Button>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="Card title" bordered={false}>
                                    <Button onClick={activateBrian}>Homepage</Button>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="Card title" bordered={false}>
                                    <Button onClick={activateEthan}>Homepage</Button>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                    <div className="App" id="check">
                        <header>
                            <Title level={3}>Who would open the lock of Christmas must answer me these questions three, ere the opened box he see.</Title>
                        </header>
                        <List
                            size="large"
                            bordered
                            dataSource={data}
                            renderItem={item => <List.Item>{item}</List.Item>}
                        />
                    </div>
                <div className="App" id="checkBrian">
                    <header>
                        Clue 1
                    </header>
                    <Row gutter={16}>
                        <Col span={5}>
                            <img src={spade4} alt="Girl in a jacket" width="500" height="600" />
                        </Col>
                        <Col span={5}>
                            <img src={spadeQ} alt="Girl in a jacket" width="500" height="600" />
                        </Col>
                        <Col span={5}>
                            <img src={spade7} alt="Girl in a jacket" width="500" height="600" />
                        </Col>
                        <Col span={5}>
                            <img src={spade2} alt="Girl in a jacket" width="500" height="600" />
                        </Col>
                        <Col span={4}>
                            <img src={spadeK} alt="Girl in a jacket" width="500" height="600" />
                        </Col>
                    </Row><br/><br/>
                    <div id="clue2">
                        <label htmlFor="fname">Clue 2 Password: </label>
                        <input type="text" id="fname" name="fname" />
                        <Button onClick={checkAnswer}>Submit</Button>
                    </div>
                    <div id="clueDog">
                        <Title level={2}>For the other gift you might want to look, behind the bone of a certain cook</Title>
                    </div>
                    <div id="clueWrong">
                        <Title level={2}>Wrong Try Again</Title>
                    </div>
                </div>
                <div className="App" id="checkEthan">
                    <header>
                        Select the Correct One
                    </header>
                    <Row gutter={16}>
                        <Col span={8}>
                            <img src={EthanP} alt="Girl in a jacket" width="500" height="600" />
                        </Col>
                        <Col span={8}>
                            <img src={spade4} alt="Girl in a jacket" width="500" height="600" />
                        </Col>
                        <Col span={8}>
                            <img src={cityBurn} alt="Girl in a jacket" width="500" height="600" />
                        </Col>
                    </Row>
                    <header>
                        Solve the Problem
                    </header>
                    <img src={EthanP} alt="Girl in a jacket" width="500" height="600" />
                </div>
                </div>
            </>
        );
    }
}