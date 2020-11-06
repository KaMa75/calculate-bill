import React from 'react';

function Sum({sum, setBillAmount}) {
    const handleOnClick = () => {setBillAmount(null)};
    return (
        <div>
            <h1>Twój rachunek: {sum}PLN</h1>
            <button
                onClick={handleOnClick}
            >
                Reset
            </button>
        </div>
    );
}

export default Sum;
