import React, { Component, PropTypes } from 'react'
import _ from 'lodash'
import {
    Line
} from 'react-chartjs'
import {
    // Button,
    Grid,
    Row,
    Col
} from 'react-bootstrap'
export default class extends Component {
    static propTypes = {
        getYearData: PropTypes.func.isRequired,
        getUserTotalYearData: PropTypes.func.isRequired,
        userData: PropTypes.object.isRequired
    };
    constructor (props) {
        super(props)
        this.state = {
            chartData: {
                labels: ['96', '97', '98', '99', '100', '101', '102', '103', '104', '105'],
                datasets: [
                    {
                        label: 'SAT score every year / 年份對照',
                        fillColor: 'rgba(164,211,250,0.25)',
                        strokeColor: 'rgba(164,211,250,1)',
                        pointColor: 'rgba(164,211,250,1)',
                        pointStrokeColor: '#fff',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(220,220,220,1)',
                        data: [65, 59, 70, 60, 0, 50, 55, 65, 67, 71]
                    }
                ]
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: true,
                bezierCurveTension: 0.25,
                scaleOverride: true,
                scaleSteps: 5,
                scaleStepWidth: 15,
                scaleStartValue: 0,
                legendTemplate: '<ul class=\'<%=name.toLowerCase()%>-legend\'><% for (var i=0; i<datasets.length; i++){%><li><span style=\'background-color:<%=datasets[i].strokeColor%>\'><%if(datasets[i].label){%><%=datasets[i].label%><%}%>級分</span></li><%}%></ul>'
            }
        }
        // this.printResult = this.printResult.bind(this)
        this.changedata = this.changedata.bind(this)
    }

    changedata () {
        let randomArray = new Array(10)
        for (let i = 0; i < 10; i++) {
            randomArray[i] = 0
        }
        var chartDataObj = this.props.userData.TotalScore.score
        for (var key in chartDataObj) {
            var yearTotalScore = 0
            for (var subject in chartDataObj[key]) {
                yearTotalScore += chartDataObj[key][subject]
            }
            var mappingIndex = key.slice(3)
            randomArray[parseInt(mappingIndex) - 2007] = yearTotalScore
        }
        var newArray = _.extend({}, this.state.chartData)
        newArray.datasets[0].data = randomArray
        this.setState({datasets: newArray})
    }
    componentWillMount () {
        this.props.getUserTotalYearData()
    }
    render () {
        return (
        <div>
            <Grid>
              <Row>
              <Col xs={12} md={12}>
                  <Line data={this.state.chartData} options={this.state.chartOptions} redraw={true} width="600" height="250"/>
                  <button onClick={this.changedata}></button>
              </Col>
              </Row>
            </Grid>
        </div>
        )
    }
}

// icon , name
// chart, with total score
// setting, style
