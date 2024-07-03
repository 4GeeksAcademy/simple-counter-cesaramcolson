import React from "react";
import PropTypes from 'prop-types';

export function Home(props) {
    return (
        <div className="seconds-counter">
            <div className="icon"><i className="fa-regular fa-clock"></i></div>
            <div className="digit">{props.sixthDigit % 10}</div>
            <div className="digit">{props.fifthDigit % 10}</div>
            <div className="digit">{props.fourthDigit % 10}</div>
            <div className="digit">{props.thirdDigit % 10}</div>
            <div className="digit">{props.secondDigit % 10}</div>
            <div className="digit">{props.firstDigit % 10}</div>
        </div>
    );
};

Home.propTypes = {
    sixthDigit: PropTypes.number,
    fifthDigit: PropTypes.number,
    fourthDigit: PropTypes.number,
    thirdDigit: PropTypes.number,
    secondDigit: PropTypes.number,
    firstDigit: PropTypes.number
};