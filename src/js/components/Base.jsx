import React, { Component, PropTypes } from 'react'

export default class Base extends Component {
    static propTypes = {
        requiredProps: PropTypes.string.isRequired,
        defaultProps: PropTypes.string
    };
    static defaultProps = {
        defaultProps: 'default props'
    };
    render () {
        return (
            <div>
                <div>
                    <label>
                        Required Props:
                    </label>
                    <span>{ this.props.requiredProps }</span>
                </div>
                <div>
                    <label>
                        Default Props:
                    </label>
                    <span>{ this.props.defaultProps }</span>
                </div>
            </div>
        )
    }
}
