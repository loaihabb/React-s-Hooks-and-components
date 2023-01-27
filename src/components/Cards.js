
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from "react-bootstrap"
const Cards = ({ title, description, img, clickMe, children }) => {
  const handleClick = () => {
    clickMe(title)
  }
  return (
    <div className='column'>
    <Col  className='my-1 '>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} width="25%" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Button onClick={handleClick} variant="primary">Go somewhere</Button>
          {children}
        </Card.Body>
      </Card>
    </Col>
    </div>
    
  )
}

export default Cards
