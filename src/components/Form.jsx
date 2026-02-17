import { useState } from "react"

const Form = () => {
    const [input, setInput] = useState({
        name: "", email: "",
    })
    const [error, setError] = useState({}) 

    const handleInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })

        setError({...error, [e.target.name]: false})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let errorObj = {}
        const emailRgx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

        if (input.name.trim() === "") {
            errorObj.name = true
        }
        if (!emailRgx.test(input.email)) {
            errorObj.email = true
        }

        setError(errorObj)
    }

    return (
        <section className="form">
            <div className="container">
                <div className="hading text-center mb-5">
                    <h3>Write Review</h3>
                </div>
                <form action="" noValidate onSubmit={handleSubmit}>
                    <div className="row justify-content-center">
                        <div className="col-6">
                            <div className="border p-5">
                                <div className="mb-3">
                                    <label htmlFor="name" className="mb-2">Name :</label>
                                    <input type="text" id="name" className={`form-control ${error.name ? "border-danger" : ""}`} onChange={handleInput} name="name" value={input.name} />
                                    <p className="m-0 text-danger">{error.name ? "Please Enter Valid Name" : ""}</p>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="mb-2">Email :</label>
                                    <input type="email" id="email" className={`form-control ${error.email ? "border-danger" : ""}`} onChange={handleInput} name="email" value={input.email} />
                                    <p className="m-0 text-danger">{error.email ? "Invalid Email" : ""}</p>
                                </div>
                                <div className="text-center">
                                    <button className="btn btn-dark">Add Review</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Form