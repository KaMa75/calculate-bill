import {useState} from 'react';

function useFormField(initValue) {
    const [value, setValue] = useState(initValue);

    const handleChange = (e) => {
        setValue(parseFloat(e.target.value));
    }

    return [value, handleChange];
}

export default useFormField;
