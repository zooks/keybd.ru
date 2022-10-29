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
                <h4 className="sr-only">Особенности кодировщика</h4>
                <Row>
                    {list.map((item: Feature, index) => 
                        <Col key={index} xs={12} sm={4} className='d-flex align-items-center d-md-block'>
                            <div className="text-center pe-3">
                                <i className={'features-icon features-icon-' + item.iconName}></i>
                                <h5>{item.title}</h5>
                            </div>
                            <p>{item.desc}</p>
                        </Col>
                    ) }
                </Row>
            </div>
        </div>
    )
}

