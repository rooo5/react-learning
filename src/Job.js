function Job(props) {
    return (
        <div>
            <h4>Job Title</h4>
            <p>{props.position}</p>
            <h4>Company</h4>
            <p>{props.company}</p>
            <h4>Salary</h4>
            <p>{props.salary}</p>
        </div>
    )
}

export default Job;