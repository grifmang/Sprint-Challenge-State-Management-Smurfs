import React from "react";
import { Card, Button, CardHeader, CardBody,
    CardTitle, CardText } from 'reactstrap';

const SmurfCards = (props) => {

    return (
        <div>
        <Card>
            <CardHeader>{props.name}</CardHeader>
            <CardBody>
            <CardTitle>{props.age}</CardTitle>
            <CardTitle>{props.height}</CardTitle>
            </CardBody>
        </Card>
      </div>
    )
}

export default SmurfCards;