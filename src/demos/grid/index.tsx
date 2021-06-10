import React from 'react';
import { Grid } from '../../components';
import './index.scss';

const { Col, Row } = Grid;

const GridDemo = () => {
    return (
        <div className="grid-demo">
            <Row gutter={16}>
                <Col span={4}>
                    <div className="item">
                    AAA
                    </div>
                </Col>
                <Col span={8}>
                    <div className="item">
                    BBB
                    </div>
                </Col>
                <Col span={12}>
                    <div className="item">
                    CCC
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default GridDemo;