import React, {Component} from 'react';

const tipsSize = [5, 10, 15, 20];
const tax = 8;

class Form extends Component {

    state = {
        amount: null,
        tip: 5
    }

    handleOnSubmit(e) {
        e.preventDefault();
    }

    handleOnChange = (e) => {
        const key = e.target.name;
        const value = parseFloat(e.target.value);
        this.setState({
            [key]: value
        });
    }

    handleOnClick = () => {
        const amount = this.state.amount;
        if (amount) {
            const tip = this.state.tip * amount / 100;
            const netBill = amount + tip;
            this.props.setBillAmount((netBill + (netBill * tax / 100)).toFixed(2));
        }
    }

    render() {
        const options = tipsSize.map((element, index) => {
            return (
                <option
                    key={`${element}_${index}`}
                    value={element}
                >
                    {element}%
                </option>
            )
        });
        return (
            <form onSubmit={this.handleOnSubmit}>
                <input
                    type="number"
                    name="amount"
                    placeholder="Kwota netto do zapłaty"
                    onChange={this.handleOnChange}
                />
                <select
                    value={this.state.tip}
                    name="tip"
                    onChange={this.handleOnChange}
                >
                    {options}
                </select>
                <button
                    type="submit"
                    onClick={this.handleOnClick}
                >
                    Przelicz
                </button>
            </form>
        );
    }

}

export default Form;
