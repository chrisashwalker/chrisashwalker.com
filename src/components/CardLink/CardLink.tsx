import "./CardLink.css";

import { Card, Col } from "react-bootstrap";

const CardLink = (props: {img: string, url: string, text: string}) => {

    return (
        <Col className="mt-4">
            <Card bg="dark" text="light" className="cw-card-link m-auto">
                <Card.Img variant="top" src={props.img} alt={props.text} />
                <Card.Body>
                    <Card.Text className="text-center">
                        <Card.Link className="stretched-link text-light" href={props.url}>
                            {props.text}
                        </Card.Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )

}

export default CardLink;