import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface Feature {
    title: string,
    iconName: string,
    desc: string
}

interface FeatureListProps {
    list: Array<Feature>
}

export function Features ({list}: FeatureListProps) {
    return (
        <div className="features bg-light p-4 mb-5">
            <div className="text-md-center">
                <span className="sr-only">Особенности кодировщика</span>
                <Row>
                    {list.map((item: Feature, index) =>
                        <Col key={index} xs={12} md={4} className="d-flex align-items-center d-md-block">
                            <div className="text-center pe-4 pe-md-0">
                                <i className={'features-icon features-icon-' + item.iconName}></i>
                                <span>{item.title}</span>
                            </div>
                            <p>{item.desc}</p>
                        </Col>
                    ) }
                </Row>
            </div>
        </div>
    )
}

