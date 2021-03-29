import React, {Component} from 'react';

export default class ClassComponentProps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fruitBowl: ['grape', 'orange', 'pineapple'],
            newFruit: '',
        };

        // the comment below binds the addFruit method so that you can invoke and call upon it in the return. 

        // this.addFruit = this.addFruit.bind(this);
    }

    updateFruit = (e) => {
        this.setState(
            {newFruit: e.target.value}
        )
    }

    addFruit = (e) => {
        e.preventDefault();
        this.setState(
            {fruitBowl: [...this.state.fruitBowl, this.state.newFruit],
            newFruit: ''}
        )
    }

    // The method below needs to be bound to the constructor so that it can be invoked and called upon in the return

    // addFruit(e) {
    //     e.preventDefault();
    //     this.setState(
    //         {fruit: [...this.state.fruit, this.state.newFruit],
    //         newFruit: ''}
    //     )
    // }

    render() {
        return (
            <div className='main'>
                <div className='mainDiv'>
                    {/* {this.state.fruitBowl} */}
                    <form onSubmit={this.addFruit}>
                        <input onChange={((e) => this.updateFruit(e))} type='text' value={this.state.newFruit}/>
                        <button type='submit'>Add New Fruit!</button>
                    </form>
                    <FruitBowl fruits={this.state.fruitBowl} />
                </div>
            </div>
        )
    }
}

class FruitBowl extends Component {
    render() {
        return (
            <div>
                {this.props.fruits.map((fruit) => {
                    return <Fruit passingFruit={fruit} />
                })}
            </div>
        );
    }
}

const Fruit = (props) => {
    return (
        <div>
            <h3>{props.passingFruit}</h3>
        </div>
    )
}