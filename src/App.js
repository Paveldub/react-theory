import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Counter from './counter/counter'

class App extends Component {

	constructor(props) {
		super(props) 

		this.state = {
			cars: [
				{name: 'Ford', year: 2018},
				{name: 'Audi', year: 2016},
				{name: 'Mazda', year: 2010}
			],
			pageTitle: 'This is react component',
			showCars: false
		}
	}

  toggleCarsHandler = () => {
	  this.setState({
		showCars: !this.state.showCars
	  })
  }

  onChangeName = (name, index) => {
	  const car = this.state.cars[index];
	  car.name = name;

	  const cars = [...this.state.cars];
	  cars[index] = car;

	  this.setState({
		  cars
	  })
  }

  deleteHandler(index) {
	const cars = [...this.state.cars];
	cars.splice(index, 1);

	this.setState({
		cars
	})
  }

  componentDidMount() {
	  console.log('App componentDidMount')
  }

  render() {
	console.log('App render')
    return (
      <div style={{textAlign: 'center'}}>
		<h2>{this.state.pageTitle}</h2>

		<Counter />

		<hr />

		<button onClick={this.toggleCarsHandler}>Toggle cars</button>

		{	this.state.showCars ?
				this.state.cars.map((car, index)  => {
					return(
						<ErrorBoundary key={index}>
							<Car
								name={car.name} 
								year={car.year} 
								index={index}
								onChangeName = {event => this.onChangeName(event.target.value, index)}
								onDelete = {this.deleteHandler.bind(this, index)}
							/>
						</ErrorBoundary>
					)	
				})
			:
			null
		}
      </div>
    );
  }
}

export default App;
