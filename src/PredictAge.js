import { useEffect, useState } from "react";

const PredictAge = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState({});
    let URL = `https://api.agify.io/?name=${name}`

    const handleClick = () => {
        if (name.trim() === '') return;
        fetch(URL)
            .then((res) => res.json()
                .then((data) => {
                    setAge(data)
                }))
        clearInput();
    }

    useEffect(() => {
        handleClick();
    }, [])

    const clearInput = () => {
        setName('');
    }

    const handleChange = (evt) => {
        setName(evt.target.value)
    }

    return (
        <div>
            <button onClick={handleClick}>Predict Age</button>
            <input
                type="string"
                onChange={handleChange}
                placeholder="Enter the name"
                value={name} />
            {age && <div>
                <p>Predicted Age: {age?.age}</p>
                <p>Name: {age?.name}</p>
                <p>Count {age?.count}</p>
            </div>}
        </div>
    );
}

export default PredictAge