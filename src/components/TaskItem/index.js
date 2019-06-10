import React from 'react';
import { Row, Col, Button, Icon }from 'antd';

export default class TaskItem extends React.Component {

    render() {
        return (
            <div>
                <Row type="flex" justify="space-between">
                    <Col>
                        <h3>{this.props.title}</h3>
                    </Col>
                    <Col>
                        <Button type="primary">
                            Mark Complete
                        </Button>
                        <Button type="danger">
                            <Icon type="delete" />
                            Delete
                        </Button>
                    </Col>
                </Row>
            </div>

        );
    }
}
