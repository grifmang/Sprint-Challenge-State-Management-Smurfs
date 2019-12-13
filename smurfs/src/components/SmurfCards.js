import React from "react";
import { Card, CardHeader, CardBody,
    CardTitle } from 'reactstrap';

const SmurfCards = (props) => {

    return (
        <Card className="smurf-card">
            <CardHeader>{props.name}</CardHeader>
            <CardBody>
            <CardTitle>{props.age}</CardTitle>
            <CardTitle>{props.height}</CardTitle>
            </CardBody>
        </Card>
    )
}

export default SmurfCards;