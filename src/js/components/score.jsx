import React, { Component } from 'react'
import {
    Grid,
    FormGroup,
    ControlLabel,
    FormControl
} from 'react-bootstrap'
require('./../../css/page/score.styl')
export default class extends Component {
    render () {
        return (
        <div>
            <Grid>
                <br/>
                <br/>
                <br/>
                <br/>
                <form role="form" onSubmit={this.onFormSubmit}>
                    <h1>轉換級分</h1>
                    <FormGroup controlId="formControlsSelect">
                      <ControlLabel>選擇年份 choose year</ControlLabel>
                      <FormControl componentClass="select" placeholder="select">
                        <option value="select">96</option>
                        <option value="other">97</option>
                        <option value="other">98</option>
                      </FormControl>
                    </FormGroup>
                    <button type="submit" className="btn btn-primary">轉換並儲存</button>
                    <br/>
                    <br/>
                    <FormGroup controlId="formControlsInput">
                      <ControlLabel>國文 Chinese</ControlLabel>
                      <FormControl type="text" placeholder="原始分數">
                      </FormControl>
                    </FormGroup>
                    <FormGroup controlId="formControlsInput">
                      <ControlLabel>英文 English</ControlLabel>
                      <FormControl type="text" placeholder="原始分數">
                      </FormControl>
                    </FormGroup>
                    <FormGroup controlId="formControlsInput">
                      <ControlLabel>數學 Math</ControlLabel>
                      <FormControl type="text" placeholder="原始分數">
                      </FormControl>
                    </FormGroup>
                    <FormGroup controlId="formControlsInput">
                      <ControlLabel>社會 Society</ControlLabel>
                      <FormControl type="text" placeholder="原始分數">
                      </FormControl>
                    </FormGroup>
                    <FormGroup controlId="formControlsInput">
                      <ControlLabel>自然 Science</ControlLabel>
                      <FormControl type="text" placeholder="原始分數">
                      </FormControl>
                    </FormGroup>
                    <FormGroup controlId="formControlsInput">
                      <ControlLabel>轉換結果</ControlLabel>
                      <FormControl type="text" placeholder="原始分數" disabled>
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
