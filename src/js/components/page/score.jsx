import React, { Component } from 'react'
import {
    Grid,
    FormGroup,
    ControlLabel,
    FormControl
} from 'react-bootstrap'
export default class extends Component {
    render () {
        return (
        <div>
            <Grid>
                <br/>
                <br/>
                <br/>
                <br/>
                <form>
                    <FormGroup controlId="formControlsSelect">
                      <ControlLabel>Select</ControlLabel>
                      <FormControl componentClass="select" placeholder="select">
                        <option value="select">96</option>
                        <option value="other">97</option>
                        <option value="other">98</option>
                      </FormControl>
                    </FormGroup>
                </form>
            </Grid>
        </div>
        )
    }
}

// icon , name
// chart, with total score
// setting, style
