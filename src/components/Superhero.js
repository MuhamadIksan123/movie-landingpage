import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import antman from '../assets/images/superhero/antman.jpg';
import avenger from '../assets/images/superhero/avenger.jpg';
import batman from '../assets/images/superhero/batman.jpg';
import robinhood from '../assets/images/superhero/robinhood.jpg';
import spiderman from '../assets/images/superhero/spiderman-cover.jpg';
import superman from '../assets/images/superhero/superman.jpg';

const Superhero = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">Superhero Movies</h1>
        <br />
        <Row>
          <Col md={4} id='superhero'>
            <Card className="imageMovie">
              <Image src={antman} alt="Card image" className="Image" />
              <div className="bg-dark">
                <div className="text-white p-2 m-1">
                  <Card.Title className="text-center">ANT MAN</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="imageMovie">
              <Image src={avenger} alt="Card image" className="Image" />
              <div className="bg-dark">
                <div className="text-white p-2 m-1">
                  <Card.Title className="text-center">AVENGER</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="imageMovie">
              <Image src={batman} alt="Card image" className="Image" />
              <div className="bg-dark">
                <div className="text-white p-2 m-1">
                  <Card.Title className="text-center">THE BATMAN</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="imageMovie">
              <Image src={robinhood} alt="Image Dune" className="Image" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">ROBIN HOOD</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="imageMovie">
              <Image src={spiderman} alt="Image Dune" className="Image" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">SPIDERMAN</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="imageMovie">
              <Image src={superman} alt="Image Dune" className="Image" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">SUPERMAN HERO</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Superhero;
