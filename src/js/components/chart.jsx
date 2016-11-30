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
        FBLogin: PropTypes.func.isRequired,
        getYearData: PropTypes.func.isRequired,
        getUserTotalYearData: PropTypes.func.isRequired,
        userData: PropTypes.object.isRequired,
        currentUser: PropTypes.object.isRequired
    };
    constructor (props) {
        super(props)
        this.state = {
            totalChartData: {
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
            singleChartData: {
                labels: ['96', '97', '98', '99', '100', '101', '102', '103', '104', '105'],
                datasets: [
                    {
                        label: 'Chinese',
                        fillColor: 'rgba(255,90,100,0.05)',
                        strokeColor: 'rgba(255,90,100,1)',
                        pointColor: 'rgba(255,90,100,1)',
                        pointStrokeColor: '#fff',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(220,220,220,1)',
                        data: [4, 10, 10, 10, 7, 10, 10, 9, 6, 12]
                    },
                    {
                        fillColor: 'rgba(46,135,170,0.05)',
                        strokeColor: 'rgba(46,135,170,1)',
                        pointColor: 'rgba(46,135,170,1)',
                        pointStrokeColor: '#fff',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(220,220,220,1)',
                        data: [10, 4, 10, 10, 10, 8, 10, 12, 10, 8]
                    },
                    {
                        fillColor: 'rgba(245,210,95,0.05)',
                        strokeColor: 'rgba(245,210,95,1)',
                        pointColor: 'rgba(245,210,95,1)',
                        pointStrokeColor: '#fff',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(220,220,220,1)',
                        data: [5, 1, 6, 6, 10, 10, 10, 12, 10, 4]
                    },
                    {
                        fillColor: 'rgba(105,150,90,0.05)',
                        strokeColor: 'rgba(105,150,90,1)',
                        pointColor: 'rgba(105,150,90,1)',
                        pointStrokeColor: '#fff',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(220,220,220,1)',
                        data: [10, 4, 6, 10, 10, 12, 10, 12, 10, 2]
                    },
                    {
                        fillColor: 'rgba(80,80,80,0.05)',
                        strokeColor: 'rgba(80,80,80,1)',
                        pointColor: 'rgba(80,80,80,1)',
                        pointStrokeColor: '#fff',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(220,220,220,1)',
                        data: [10, 4, 6, 10, 10, 12, 10, 12, 10, 12]
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
            },
            singleChartOptions: {
                responsive: true,
                maintainAspectRatio: true,
                bezierCurveTension: 0.25,
                scaleOverride: true,
                scaleSteps: 15,
                scaleStepWidth: 1,
                scaleStartValue: 0,
                legendTemplate: '<ul class=\'<%=name.toLowerCase()%>-legend\'><% for (var i=0; i<datasets.length; i++){%><li><span style=\'background-color:<%=datasets[i].strokeColor%>\'><%if(datasets[i].label){%><%=datasets[i].label%><%}%>級分</span></li><%}%></ul>'
            }
        }
        // this.printResult = this.printResult.bind(this)
        this.FBLogin = this.FBLogin.bind(this)
        this.isUserLogin = this.isUserLogin.bind(this)
        this.changedata = this.changedata.bind(this)
        this.getUserTotalYearData = this.getUserTotalYearData.bind(this)
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
        var newArray = _.extend({}, this.state.totalChartData)
        newArray.datasets[0].data = randomArray
        this.setState({datasets: newArray})
    }

    isUserLogin () {
        this.props.isUserLogin()
    }

    FBLogin () {
        this.props.FBLogin()
    }
    getUserTotalYearData () {
        this.props.getUserTotalYearData()
    }
    componentWillMount () {
        this.props.isUserLogin()
        console.log('init,  ', this.props.currentUser.isLogin)
    }
    render () {
        // if (this.props.currentUser.isLogin === 0) {
        //     return (
        //         <Grid>
        //             <Row>
        //                 <Col><h1>Not login yet, please login</h1></Col>
        //             </Row>
        //             <Row>
        //                 <Col><button onClick={this.FBLogin}>login</button></Col>
        //             </Row>
        //         </Grid>
        //     )
        // }
        return (
        <div>
            <Grid>
                <Row>
                    <Col>
                        {/* <h1>{this.props.currentUser.AuthData.user.displayName}</h1> */}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button onClick={this.getUserTotalYearData}>取得歷年資料</button>
                        <button onClick={this.changedata}>更新歷年資料</button>
                    </Col>
                </Row>
              <Row>
              <Col xs={12} md={12}>
                  <h2>總覽</h2>
                  <Line data={this.state.totalChartData} options={this.state.chartOptions} redraw={true} width="600" height="250"/>
              </Col>
              <Col xs={12} md={12}>
                  <h2>單科</h2>
                  <Line data={this.state.singleChartData} options={this.state.singleChartOptions} redraw={true} width="600" height="250"/>
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
