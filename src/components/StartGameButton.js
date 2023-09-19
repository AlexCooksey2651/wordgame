import React from "react";
import styles from "./StartGameButton.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const StartGameButton = ({ setGameStarted }) => {
  return (
    <Container fluid className={styles.startBtn_container}>
      <Row className="align-items-center">
        <Col>
          <Button onClick={() => setGameStarted(true)}>Start Game?</Button>
        </Col>
      </Row>
      <br />
      <br/>
      <Row>
        <Col>
          <h2>
            Instructions:
          </h2>
          <p className={styles.instructions}>
          You'll be filling in blanks to complete the sentence,
            with each blank corresponding to one letter.<br/>To guess letters, you'll need to convert your letter to a number
            using the provided equation.<br/>To solve the equation, you'll plug in the number of the alphabet
            that corresponds to the letter (e.g. A = 1, B = 2, etc.).<br/>Once you have that number, use it to solve the equation, then enter
            the solution in order to guess your original letter.<br/>For example, if you want to guess G, and the equation is y = 2x - 2,
            you would enter '12' (G is 7<sup>th</sup> letter of the alphabet, so x = 7).
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default StartGameButton;
