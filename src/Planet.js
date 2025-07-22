const Planet = (props) => {
    return (
        <div>
            {!props.isGasPlanet && <h2>{props.name}</h2>}
        </div>
    )
}

export default Planet;