import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Router, Route, Link, browserHistory } from 'react-router'

//import style from './Base.styl';
import classNames from 'classnames';

import * as BaseActions from '../actions/base';

class Master extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Hello World
        <Link to={`/test`}>not found</Link>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(BaseActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Master);
