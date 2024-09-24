import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ProjectsSection from './Componenti/ProjectSection/ProjectSection';
import  AboutSection from './Componenti/AboutSection/AboutSection';
import Menu from './Componenti/Menu/Menu';


function App() {
  
const [data, setData] = useState(0);

const childToParent = (childdata) => {
  setData(childdata);
}

return (
<Container className="d-flex flex-column min-vh-100">
  <Row>
    <Col className="d-flex justify-content-center align-items-start justify-content-center align-items-center">
    <Menu  childToParent={childToParent}/>
    </Col>
    </Row>
    { data == 0 ? (
       <AboutSection></AboutSection>
         ) : 
        (
          <Container className="text-center">
           <ProjectsSection/>
          </Container>
        )
      }
    </Container>
  );
}

export default App;



