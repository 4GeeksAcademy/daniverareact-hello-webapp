import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardContacts({name, email, phone, address}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>{name}</Card.Text>
        <Card.Text>{email}</Card.Text>
        <Card.Text>{phone}</Card.Text>
        <Card.Text>{address}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}


export default CardContacts