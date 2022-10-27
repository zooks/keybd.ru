import React from 'react'
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface DocsHeaderProps {
    title: string,
    lead: any,
}

export function DocsHeader({title, lead}: DocsHeaderProps) {
    return (
        <div className="bs-docs-header">
            <Container>
                <Row>
                    <Col md="12">
                        <h1>{title}</h1>
                        <p className="lead">{lead}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}