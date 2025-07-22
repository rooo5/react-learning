const GetDetails = (props) => {
    return (
        <div>
            <h1>Movie Name</h1>
            <p>{props.name}</p>
            <div>
                <h2>Rating</h2>
                <p>{props.rating}</p>
            </div>
        </div>
    )
}

export default GetDetails;