import React, {useState} from 'react';



const useDarkMode = (intialValue) => {
	const [darkValue, setDarkValue] = useState(intialValue);
    return [darkValue,setDarkValue];
}
export default useDarkMode;