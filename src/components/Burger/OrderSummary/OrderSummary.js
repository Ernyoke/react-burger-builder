import React from 'react';

import classes from './OrderSummary.module.css';

const orderSummary = props => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(key =>
            <li key={key}>
                <span className={classes.ListElement}>{key}</span>: {props.ingredients[key]}
            </li>);
    return (
        <React.Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue to checkout</p>
        </React.Fragment>
    );
};

export default orderSummary;