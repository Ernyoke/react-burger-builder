import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
                salad: 1,
                bacon: 1,
                cheese: 2,
                meat: 2
            }
        }
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <Burger ingredients={this.state.ingredients}></Burger>
                </div>
                <div>
                    Build Controls
                </div>
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;