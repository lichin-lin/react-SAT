import React, { Component, PropTypes } from 'react'
import _ from 'lodash'
// import { mergeSort } from 'js-sorting'
import {
    Line
} from 'react-chartjs-2'
import {
    Grid,
    Row,
    Col
} from 'react-bootstrap'
import CSSModules from 'react-css-modules'
export default CSSModules(class extends Component {
    static propTypes = {
        FBLogin: PropTypes.func.isRequired,
        getYearData: PropTypes.func.isRequired,
        // updateUserAvg: PropTypes.func.isRequired,
        getUserTotalYearData: PropTypes.func.isRequired,
        userData: PropTypes.object.isRequired,
        currentUser: PropTypes.object.isRequired
    };
    constructor (props) {
        super(props)
        this.state = {
            counter: 0,
            fakeNum: 50,
            avg: 0,
            height: 400,
            width: 400,
            totalChartData: {
                labels: ['96', '97', '98', '99', '100', '101', '102', '103', '104', '105'],
                datasets: [
                    {
                        borderWidth: 2,
                        backgroundColor: 'rgba(164,211,250,0.25)',
                        borderColor: 'rgba(164,211,250,1)',
                        pointColor: 'rgba(164,211,250,1)',
                        pointStrokeColor: '#fff',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(220,220,220,1)',
                        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

                    }
                ]
            },
            singleChartData: {
                labels: ['96', '97', '98', '99', '100', '101', '102', '103', '104', '105'],
                datasets: [
                    {
                        label: 'Chinese',
                        borderWidth: 2,
                        backgroundColor: 'rgba(255,90,100,0.05)',
                        borderColor: 'rgba(255,90,100,1)',
                        pointColor: 'rgba(255,90,100,1)',
                        pointStrokeColor: '#fff',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(220,220,220,1)',
                        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                    },
                    {
                        label: 'English',
                        borderWidth: 2,
                        backgroundColor: 'rgba(46,135,170,0.05)',
                        borderColor: 'rgba(46,135,170,1)',
                        pointColor: 'rgba(46,135,170,1)',
                        pointStrokeColor: '#fff',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(220,220,220,1)',
                        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                    },
                    {
                        label: 'Math',
                        borderWidth: 2,
                        backgroundColor: 'rgba(245,210,95,0.05)',
                        borderColor: 'rgba(245,210,95,1)',
                        pointColor: 'rgba(245,210,95,1)',
                        pointStrokeColor: '#fff',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(220,220,220,1)',
                        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                    },
                    {
                        label: 'Society',
                        borderWidth: 2,
                        backgroundColor: 'rgba(105,150,90,0.05)',
                        borderColor: 'rgba(105,150,90,1)',
                        pointColor: 'rgba(105,150,90,1)',
                        pointStrokeColor: '#fff',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(220,220,220,1)',
                        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                    },
                    {
                        label: 'Science',
                        borderWidth: 2,
                        backgroundColor: 'rgba(80,80,80,0.05)',
                        borderColor: 'rgba(80,80,80,1)',
                        pointColor: 'rgba(80,80,80,1)',
                        pointStrokeColor: '#fff',
                        pointHighlightFill: '#fff',
                        pointHighlightStroke: 'rgba(220,220,220,1)',
                        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                    }
                ]
            },
            chartOptions: {
                title: {
                    display: false,
                    text: 'SAT score every year / 年份對照'
                },
                legend: {
                    display: false
                }
                // responsive: true,
                // maintainAspectRatio: true,
                // bezierCurveTension: 0.25,
                // scaleOverride: true,
                // // scaleSteps: 5,
                // // scaleStepWidth: 15,
                // scaleStartValue: 0,
                // legendTemplate: '<ul class=\'<%=name.toLowerCase()%>-legend\'><% for (var i=0; i<datasets.length; i++){%><li><span style=\'background-color:<%=datasets[i].strokeColor%>\'><%if(datasets[i].label){%><%=datasets[i].label%><%}%>級分</span></li><%}%></ul>'
            },
            singleChartOptions: {
                legend: {
                    position: 'bottom',
                    labels: {
                        boxWidth: 12
                    }
                }
                // responsive: true,
                // maintainAspectRatio: true,
                // bezierCurveTension: 0.25,
                // scaleOverride: true,
                // scaleSteps: 15,
                // scaleStepWidth: 1,
                // scaleStartValue: 0,
                // legendTemplate: '<ul class=\'<%=name.toLowerCase()%>-legend\'><% for (var i=0; i<datasets.length; i++){%><li><span style=\'background-color:<%=datasets[i].strokeColor%>\'><%if(datasets[i].label){%><%=datasets[i].label%><%}%>級分</span></li><%}%></ul>'
            }
        }
        this.changedata = this.changedata.bind(this)
        this.updateUserAvg = this.updateUserAvg.bind(this)
        this.getUserTotalYearData = this.getUserTotalYearData.bind(this)
        this.updateChartSize = this.updateChartSize.bind(this)
    }

    changedata () {
        let totalDataArray = new Array(10)
        let singleDataArray = new Array(5)
        // init single data
        for (let i = 0; i < 5; i++) {
            singleDataArray[i] = new Array(10)
            for (let j = 0; j < 10; j++) {
                singleDataArray[i][j] = 0
            }
        }
        // init avg params
        var avgCounter = 0
        var avgNum = 0
        // init total data
        for (let i = 0; i < 10; i++) {
            totalDataArray[i] = 0
        }
        var chartDataObj = this.props.userData.TotalScore.score
        for (var key in chartDataObj) {
            var yearTotalScore = 0
            // SAT2007 -> 2007 -> 0
            var mappingIndex = parseInt(key.slice(3)) - 2007
            let subjectCount = 0
            for (var subject in chartDataObj[key]) {
                // console.log('index: ', mappingIndex, ', sub: ', subjectCount, 'score: ', chartDataObj[key][subject])
                yearTotalScore += chartDataObj[key][subject]
                singleDataArray[subjectCount][mappingIndex] = chartDataObj[key][subject]
                subjectCount += 1
            }
            totalDataArray[mappingIndex] = yearTotalScore
            if (yearTotalScore > 0) {
                avgCounter += 1
                avgNum += yearTotalScore
            }
        }
        this.props.updateUserAvg(avgNum / avgCounter)
        this.setState({avg: (avgNum / avgCounter).toFixed(2)})

        // put total data back to state.
        let newArray = _.extend({}, this.state.totalChartData)
        newArray.datasets[0].data = totalDataArray
        this.setState({totalChartData: newArray})

        // put single data back to state.
        for (let i = 0; i < 5; i++) {
            let newArray = _.extend({}, this.state.singleChartData)
            newArray.datasets[i].data = singleDataArray[i]
            this.setState({singleChartData: newArray})
        }
        this.setState({counter: this.state.counter + 1})
    }
    updateChartSize () {
        var w = window
        var d = document
        var documentElement = d.documentElement
        var body = d.getElementsByTagName('body')[0]
        var width = w.innerWidth || documentElement.clientWidth || body.clientWidth
        width *= 0.9
        var height = width * 3 / 4
        // console.log('resize', width, height)
        this.setState({width: width, height: height})
        // console.log('yo', this.state.width, this.state.height)
    }
    getUserTotalYearData () {
        this.props.getUserTotalYearData()
    }
    updateUserAvg () {
        this.props.updateUserAvg()
    }
    componentWillMount () {
        this.props.getUserTotalYearData()
        // var tmp = mergeSort([5, 3, 2, 4, 1, 7, 4, 10])
        // var l = tmp.length
        // var input = 7
        // var result = l
        // for (var i = 0; i < l; i++) {
        //     if (input < tmp[i]) {
        //         result = i
        //         break
        //     }
        // }
    }
    componentDidMount () {
        window.addEventListener('resize', this.updateChartSize)
    }
    render () {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col xs={12} md={12}>
                            <h1>你好,{this.props.currentUser.AuthData.user.displayName}</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12}>
                            <button className="sat_btn" onClick={this.getUserTotalYearData}>取得級分資料</button>
                            <button className="sat_btn" onClick={this.changedata}>更新級分圖表</button>
                        </Col>
                    </Row>
                    <Row key={this.state.counter} className="chart_card_contain">
                        <Col xs={12} md={12} className="chart_card">
                            <h2>總覽</h2>
                            <Line data={this.state.totalChartData} options={this.state.chartOptions} redraw={true} width={this.state.width} height={this.state.height}/>
                        </Col>
                        <Col xs={12} md={12} className="chart_card">
                            <h2>單科</h2>
                            <Line data={this.state.singleChartData} options={this.state.singleChartOptions} redraw={true} width={this.state.width} height={this.state.height}/>
                        </Col>
                        <Col xs={12} md={12} className="chart_card">
                            <h2>平均</h2>
                            <div className="chart_titleText">{this.state.avg}</div>
                        </Col>
                        <Col xs={12} md={12} className="chart_card">
                            <h2>排名</h2>
                            <div className="chart_contentText">功能尚未推出，請耐心等待</div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}, require('./chart.styl'))

// icon , name
// chart, with total score
// setting, style
