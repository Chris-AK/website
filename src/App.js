import {Container, Row, Col} from 'react-bootstrap'

let name = "x"
const quotes = ["Do not go where the path may lead, go instead where there is no path and leave a trail",
                "Never let the fear of striking out keep you from playing the game",
                "Success usually comes to those who are too busy to be looking for it",
                "Succesful people do what unseccesful people dont do",
                "Focus on circle of influence over your circle of concern",
                "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
                "You need not to be great to start but you need to start to be great",
                "An unexamined life is not worth living.",
                "Who dares, wins",
                "There is no finish line"]
function App() {
  return (
    <div className="App" onLoad = {name = quotes[Math.floor(Math.random() * quotes.length)]}>
      <Container fluid>
        <h2>{name}</h2>
        <Row>
          <Col>
            <a href="https://chrisak.medium.com/" target="_blank" rel="noopener noreferrer">Thinking</a>
          </Col>
          <Col>
            <a href="https://github.com/Chris-AK/" target="_blank" rel="noopener noreferrer">Building</a> 
          </Col>
          <Col>
            <a href="https://opensea.io/collection/snappoetry/" target="_blank" rel="noopener noreferrer">Creating</a> 
          </Col> 
          <Col>
            <a href="https://us.movember.com/" target="_blank" rel="noopener noreferrer">Supporting</a> 
          </Col>  
        </Row>
      </Container>
    </div>
  );
}

export default App;
/*

dockerize
publish to server
get on github
style with bootstrap
add contact link
add about page route
style with advanced
*/