import React from 'react';

import classes from './Modal.module.css';
import Backdrop from './../Backdrop/Backdrop';

const modal = props =>{
    return (
    <React.Fragment>
        <Backdrop
            show={props.showProperty}
            clicked={props.modalClosed}>
        </Backdrop>
        <div
            className={classes.Modal}
            style={{
                transform: props.showProperty ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.showProperty ? '1' : '0'
            }}>
            {props.children}
        </div>
    </React.Fragment>
)};

const propsChanged = (prevProps, nextProps) => prevProps.showProperty === nextProps.showProperty && prevProps.children === nextProps.children;

export default React.memo(modal, propsChanged);
