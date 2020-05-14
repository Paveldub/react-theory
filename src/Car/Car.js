import React from 'react';
import withClass from '../hoc/withClass'
import './car.scss';

class Car extends React.Component {

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

export default withClass(Car, 'car');