import React from 'react';
import withClass from '../hoc/withClass';
import PropTypes from 'prop-types';
import './car.scss';

class Car extends React.Component {

  constructor(props) {
    super(props)

    this.inputRef = React.createRef()
  }

  componentDidMount() {
    if (this.props.index === 1) {
      this.inputRef.current.focus()
    }
  }

  render() {
    const inputClasses = ['input'];

    if (this.props.name !== '') {
      inputClasses.push('green')
    } else {
      inputClasses.push('red')
    }
  
    return (
        <React.Fragment>
            <h3>Сar name: {this.props.name}</h3>
            <p>Year: <strong>{this.props.year}</strong></p>
            <input 
              ref={this.inputRef}
              type="text"
              onChange={this.props.onChangeName}
              value={this.props.name}
              className={inputClasses.join(' ')}
            />
            <button onClick={this.props.onDelete}>Remove</button>
        </React.Fragment>
    )
  }
}

Car.propTypes = {
  name: PropTypes.string,
  year: PropTypes.number,
  onChangeName: PropTypes.func,
  onDelete: PropTypes.func
}

export default withClass(Car, 'car');