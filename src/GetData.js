import { useState } from "react";
// import axios from "axios";

const GetData = () => {
    const [fact, setFact] = useState("");

    const handleClick = (evt) => {
        let selected = evt.target.innerText.toLowerCase();
        fetch(`https://excuser-three.vercel.app/v1/excuse/${selected}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setFact(data[0].excuse)
            })
    }

    // useEffect(() => {
    //     // handleAxios();
    //     handleClick();
    // }, [])

    // const handleAxios = () => {
    //     axios.get("https://excuser-three.vercel.app/v1/excuse").then((res) => {
    //         setFact(res.data[0].excuse)
    //     })
    // }

    return (
        <div className="getData">
            <button onClick={handleClick}>party</button>
            <button onClick={handleClick}>office</button>
            <button onClick={handleClick}>family</button>
            <br />
            {fact}
        </div>
    );
}

export default GetData;