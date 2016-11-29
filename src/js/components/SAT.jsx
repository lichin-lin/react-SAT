import React, { Component, PropTypes } from 'react'
import reactDOM from 'react-dom'
import {
    Grid,
    FormGroup,
    ControlLabel,
    FormControl
} from 'react-bootstrap'
require('./../../css/page/score.styl')
export default class extends Component {
    static propTypes = {
        getScoreData: PropTypes.func.isRequired,
        getYearData: PropTypes.func.isRequired,
        updateUserScore: PropTypes.func.isRequired,
        userData: PropTypes.object.isRequired
    };
    static defaultProps = {
    };
    constructor (props) {
        super(props)
        this.state = {
            message: '',
            selectedYear: 96,
            scoreResult: '',
            OriChinese: 0,
            OriEnglish: 0,
            OriMath: 0,
            OriSociety: 0,
            OriScience: 0
        }
        this.printResult = this.printResult.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.handleSelectChange = this.handleSelectChange.bind(this)
        this.setScoreToInputBox = this.setScoreToInputBox.bind(this)
    }
    onFormSubmit (event) {
        event.preventDefault()
        var mappingTable = ['chniese', 'english', 'math', 'science', 'social']
        var mappingValue = [15, 15, 15, 15, 15]
        var OriYear = 'SAT' + (1911 + parseInt(this.state.selectedYear))
        var OriData = {
            Chinese: parseInt(reactDOM.findDOMNode(this.refs.Chinese).value),
            English: parseInt(reactDOM.findDOMNode(this.refs.English).value),
            Math: parseInt(reactDOM.findDOMNode(this.refs.Math).value),
            Society: parseInt(reactDOM.findDOMNode(this.refs.Society).value),
            Science: parseInt(reactDOM.findDOMNode(this.refs.Science).value)
        }
        this.props.updateUserScore('init', OriYear, OriData)

        // trans to score.
        var calcData = OriData
        let mIndex = 0
        for (var key in OriData) {
            // skip loop if the property is from prototype
            if (!OriData.hasOwnProperty(key)) continue
            // get Original score, then do transfer.
            var score = OriData[key]
            var compareList = this.props.userData[mappingTable[mIndex]]

            if (score === 0) {
                mappingValue[mIndex] = 0
            } else {
                for (let k = 0; k <= 15; k++) {
                    if (score < compareList[k]) {
                        mappingValue[mIndex] = k
                        break
                    }
                }
            }
            mIndex += 1
        }
        // update Object then ready to send back;
        mIndex = 0
        for (var calckey in calcData) {
            if (!calcData.hasOwnProperty(calckey)) continue
            calcData[calckey] = mappingValue[mIndex]
            mIndex += 1
        }
        // print in result input box
        // write back to user`s databse
        this.printResult(mappingValue)
        this.props.updateUserScore('score', OriYear, calcData)
    }

    printResult (mappingValue) {
        var newScoreResult = ''
        for (let i = 0; i < 5; i++) {
            newScoreResult += mappingValue[i]
            if (i < 4) newScoreResult += ' / '
        }
        this.setState({scoreResult: newScoreResult})
    }

    handleSelectChange (event) {
        this.setState({selectedYear: event.target.value})
        this.props.getYearData(this.state.selectedYear)
        var yearIndex = 'SAT' + (1911 + this.state.selectedYear)
        this.props.getScoreData(yearIndex)
        this.setScoreToInputBox()
    }

    setScoreToInputBox () {
        var q = this.props.userData.StudentScore
        reactDOM.findDOMNode(this.refs.Science).value = q.science
    }

    componentDidMount () {
    }

    componentWillMount () {
        console.log('---- here ----')
    }
    render () {
        return (
        <div>
            <Grid>
                <form role="form" onSubmit={this.onFormSubmit}>
                    <h1>轉換級分 年份:{this.state.selectedYear}</h1>
                    <FormGroup controlId="formControlsSelect">
                      <ControlLabel>選擇年份 choose year</ControlLabel>
                      <FormControl componentClass="select" placeholder="select" onChange={this.handleSelectChange}>
                        <option value="96">96</option>
                        <option value="97">97</option>
                        <option value="98">98</option>
                      </FormControl>
                    </FormGroup>
                    <FormGroup controlId="formControlsInput">
                      <ControlLabel>國文 Chinese</ControlLabel>
                      <FormControl type="number" placeholder="原始分數" defaultValue="0" ref="Chinese">
                      </FormControl>
                    </FormGroup>
                    <FormGroup controlId="formControlsInput">
                      <ControlLabel>英文 English</ControlLabel>
                      <FormControl type="number" placeholder="原始分數" defaultValue="0" ref="English">
                      </FormControl>
                    </FormGroup>
                    <FormGroup controlId="formControlsInput">
                      <ControlLabel>數學 Math</ControlLabel>
                      <FormControl type="number" placeholder="原始分數" defaultValue="0" ref="Math">
                      </FormControl>
                    </FormGroup>
                    <FormGroup controlId="formControlsInput">
                      <ControlLabel>社會 Society</ControlLabel>
                      <FormControl type="number" placeholder="原始分數" defaultValue="0" ref="Society">
                      </FormControl>
                    </FormGroup>
                    <FormGroup controlId="formControlsInput">
                      <ControlLabel>自然 Science</ControlLabel>
                      <FormControl type="number" placeholder="原始分數" defaultValue="0" ref="Science">
                      </FormControl>
                    </FormGroup>
                    <FormGroup controlId="formControlsInput">
                      <ControlLabel>轉換結果</ControlLabel>
                      <FormControl type="text" placeholder="原始分數" value={this.state.scoreResult} disabled>
                      </FormControl>
                    </FormGroup>
                    <button type="submit" className="btn btn-primary">轉換並儲存</button>
                </form>
            </Grid>
        </div>
        )
    }
}

// icon , name
// chart, with total score
// setting, style
