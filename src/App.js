import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/style.css';
import { Container, Navbar, Row, Carousel, Form, Button, Card, Col } from 'react-bootstrap';

function App() {
  return (
    <div className='container'>
      <Row>
        <Col xs={10}>
          <Card style={{ height: '70vh' }}>
            <Card.Body className='cardBodyMain'>
              <h3>Pilihan Terbaik Ada Disini !</h3>
              <h6>Dapatkan diskon sampai 70% untuk 100 pembeli pertama !</h6>
            </Card.Body>
          </Card>
          <Row style={{ textAlign: 'center', marginTop: '5vh' }}>
            <Col>
              <a href=''>
                <img src={'https://cdn-icons-png.flaticon.com/512/1055/1055666.png'} className='img-fluid' style={{ width: '15vh' }} />
                <h6 className='text-black text-decoration-none'>About</h6>
              </a>
            </Col>
            <Col>
              <a href=''>
                <img src={'https://cdn-icons-png.flaticon.com/512/2680/2680900.png'} className='img-fluid' style={{ width: '15vh' }} />
                <h6 className='text-black '>Article</h6>
              </a>
            </Col>
            <Col>
              <a href=''>
                <img src={'https://cdn-icons-png.flaticon.com/512/543/543135.png'} className='img-fluid' style={{ width: '15vh' }} />
                <h6 className='text-black '>Price</h6>
              </a>
            </Col>
            <Col>
              <a href=''>
                <img src={'https://cdn-icons-png.flaticon.com/512/6556/6556471.png'} className='img-fluid' style={{ width: '15vh' }} />
                <h6 className='text-black '>Destination</h6>
              </a>
            </Col>
            <Col>
              <a href=''>
                <img src={'https://cdn-icons-png.flaticon.com/512/2343/2343694.png'} className='img-fluid' style={{ width: '15vh' }} />
                <h6 className='text-black '>Contact Us</h6>
              </a>
            </Col>
          </Row>
        </Col>
        <Col xs={2}>
          <Card className='cardLogin'>
            <Card.Body className='cardBodyLogin'>
              <Form className='formLogin'>
                <div className='form-header'>
                  <h3>Moistore.com</h3>
                </div>
                <div className='form-body'>
                  <div className='form-group mt-4'>
                    <input type='text' className='form-control' name='username' placeholder='Username' />
                  </div>
                  <div className='form-group mt-4'>
                    <input type='password' className='form-control' name='password' placeholder='Password' />
                  </div>
                </div>
                <div className='form-footer'>
                  <button type='submit' className='btn btn-info text-white text-left mt-4'><b>LOGIN</b></button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>


    </div>
  );
}

export default App;
