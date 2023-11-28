import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

// import 'bootstrap/dist/css/bootstrap.min.css'
import 'src/index.scss'
import UploadsCell from 'src/components/UploadsCell'

const HomePage = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Nav fill variant="tabs" defaultActiveKey="/home">
              <Nav.Item>
                <Nav.Link href="/home">Redwood Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/hello">App Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/about">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/uploads">Uploads</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
      <Link to={routes.about()}>About</Link>
      <UploadsCell />
      <button className="btn btn-primary">Primary button Vanilla</button>
      <Button variant="primary">Primary React</Button>
    </>
  )
}

export default HomePage
