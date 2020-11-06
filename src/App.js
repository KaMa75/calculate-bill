import React, {useState} from 'react';

import Sum from './components/Sum/Sum';
import Form from './components/Form/Form';

import './App.css';

function App () {
  const [billAmount, setBillAmount] = useState(null);

  return (
    <div className="form-container">
      <h3>Formularz funkcyjny</h3>
      {billAmount
        ? <Sum
            sum={billAmount}
            setBillAmount={setBillAmount}
        />
        : <Form
            setBillAmount={setBillAmount}
        />}
    </div>
  );

}

export default App;
