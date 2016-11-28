import React, { Component } from 'react'
import {
    Button,
    Grid,
    Row,
    Col,
    Thumbnail,
    Media
} from 'react-bootstrap'
export default class extends Component {
    render () {
        return (
        <div>
            <Grid>
              <Row>
              <Col xs={6} md={4}>
                  <br/><br/><br/>
                  <br/><br/><br/>
                <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
                  <h3>Thumbnail label</h3>
                  <p>Description</p>
                  <p>
                    <Button bsStyle="primary">Button</Button>&nbsp;
                    <Button bsStyle="default">Button</Button>
                  </p>
                </Thumbnail>
              </Col>
              </Row>
            </Grid>
            <Grid>
                <Media>
                  <Media.Left>
                    <img width={64} height={64} src="/assets/thumbnail.png" alt="Image"/>
                  </Media.Left>
                  <Media.Body>
                    <Media.Heading>Media Heading</Media.Heading>
                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                  </Media.Body>
                </Media>
            </Grid>
        </div>
        )
    }
}

// icon , name
// chart, with total score
// setting, style
