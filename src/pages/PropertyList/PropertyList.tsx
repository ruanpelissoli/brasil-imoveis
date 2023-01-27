import { Row, Col, Card, Button } from 'react-bootstrap';

import { Property } from '../../Types';

type PropertyListProps = {
  properties: Property[];
};

export default function PropertyList({ properties }: PropertyListProps) {
  return (
    <Row
      style={{
        marginTop: '30px',
      }}
    >
      {properties?.map((property) => (
        <Col
          xs={12}
          md={6}
          lg={4}
          key={property.id}
          style={{
            marginBottom: '10px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' src={property.mainImage} />
            <Card.Body>
              <Card.Title>{property.title}</Card.Title>
              <Card.Text>
                {property.description} - R${property.price}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
