import React from 'react';

import classes from './OrderSummary.module.css';
import Button from '../../UI/Button/Button';

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
            <p><strong>Total Price: {props.totalPrice.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button
                buttonType="Danger"
                clicked={props.purchaseCancelled}>
                CANCEL
            </Button>
            <Button
                buttonType="Success"
                clicked={props.purchaseContinued}>
                CONTINUE
            </Button>
        </React.Fragment>
    );
};

export default orderSummary;