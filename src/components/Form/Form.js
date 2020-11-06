import React from 'react';

import useFormField from '../../utils/useFormField';

const tipsSize = [5, 10, 15, 20];
const tax = 8;

function Form({setBillAmount}) {

    const [amount, handleAmountChange] = useFormField(null);
    const [tip, handleTipChange] = useFormField(5);

    const handleOnSubmit = (e) => {
        e.preventDefault();
    }

    const handleOnClick = () => {
        if (amount) {
            const tipValue = tip * amount / 100;
            const netBill = amount + tipValue;
            setBillAmount((netBill + (netBill * tax / 100)).toFixed(2));
        }
    }

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
        <form onSubmit={handleOnSubmit}>
            <input
                type="number"
                name="amount"
                placeholder="Kwota netto do zapłaty"
                onChange={handleAmountChange}
            />
            <select
                value={tip}
                name="tip"
                onChange={handleTipChange}
            >
                {options}
            </select>
            <button
                type="submit"
                onClick={handleOnClick}
            >
                Przelicz
            </button>
        </form>
    );

}

export default Form;
