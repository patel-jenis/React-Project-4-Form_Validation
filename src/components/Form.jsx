import { useState } from "react"
import Review from "./Review"

const Form = () => {
    const [input, setInput] = useState({
        name: "", email: "", rating: "", profileURL: "", gender: "", review: ""
    })
    const [error, setError] = useState({})
    const [reviewData, setReviewData] = useState([
        {
            id: Date.now(), name: "Jenis Patel", email: "jenispatel2409@gmail.com", rating: "5", profileURL: "https://cdn-icons-png.flaticon.com/512/219/219970.png", gender: "male", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ipsa cumque reiciendis sed!"
        }
    ])


    const handleInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })

        setError({ ...error, [e.target.name]: false })
    }

    console.log(input);
    const handleSubmit = (e) => {
        e.preventDefault();

        let errorObj = {}
        const emailRgx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        const urlRgx = /^(https?:\/\/)([\w\-]+(\.[\w\-]+)+)(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/

        if (input.name.trim() === "") {
            errorObj.name = true
        }
        if (!emailRgx.test(input.email)) {
            errorObj.email = true
        }
        if (!urlRgx.test(input.profileURL.trim())) {
            errorObj.profileURL = true
        }
        if (input.gender.trim() === "") {
            errorObj.gender = true
        }
        if (input.rating.trim() === "") {
            errorObj.rating = true
        }
        if (input.review.trim().length < 20) {
            errorObj.review = true
        }

        setError(errorObj)

        if (Object.keys(errorObj).length === 0) {
            setReviewData([...reviewData, {id:Date.now(), ...input}])

            setInput({
                name: "", email: "", rating: "",
                profileURL: "", gender: "", review: ""
            })
        }
    }

    return (
        <>
            <section className="form px-sm-0 px-3">
                <div className="container">
                    <div className="hading text-center mb-4">
                        <h3>Write Review</h3>
                    </div>
                    <form action="" noValidate onSubmit={handleSubmit}>
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-8 col-md-10">
                                <div className="form-element border rounded-3 p-sm-5 p-4">
                                    <div className="mb-4">
                                        <label htmlFor="name" className="mb-2">Name :</label>
                                        <input type="text" id="name" className={`form-control ${error.name ? "border-danger" : ""}`} onChange={handleInput} name="name" value={input.name} placeholder="Enter Your Name" />
                                        <p className="m-0 text-danger">{error.name ? "Please Enter Valid Name" : ""}</p>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="email" className="mb-2">Email :</label>
                                        <input type="email" id="email" className={`form-control ${error.email ? "border-danger" : ""}`} onChange={handleInput} name="email" value={input.email} placeholder="Enter Your Email" />
                                        <p className="m-0 text-danger">{error.email ? "Invalid Email" : ""}</p>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="profileURL" className="mb-2">Profile URL :</label>
                                        <input type="url" id="profileURL" className={`form-control ${error.profileURL ? "border-danger" : ""}`} onChange={handleInput} name="profileURL" value={input.profileURL} placeholder="Enter Your Profile Image URL" />
                                        <p className="m-0 text-danger">{error.profileURL ? "Invalid Profile URL" : ""}</p>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="male" className="">Gender :</label>
                                        <div className="d-flex align-items-center gap-2 mt-1">
                                            <div>
                                                <input type="radio" id="male" name="gender" value="male" checked={input.gender === "male"} onChange={handleInput} />
                                                <label htmlFor="male" className="ms-2">Male</label>
                                            </div>
                                            <div>
                                                <input type="radio" id="female" name="gender" value="female" checked={input.gender === "female"} onChange={handleInput} />
                                                <label htmlFor="female" className="ms-2">Female</label>
                                            </div>
                                        </div>
                                        <p className="m-0 text-danger">{error.gender ? "Please Select Gender" : ""}</p>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="rating" className="mb-2">Rating :</label>
                                        <select name="rating" id="rating" className={`form-select ${error.rating ? "border-danger" : ""}`} onChange={handleInput} value={input.rating}>
                                            <option value="">Please Select Rating</option>
                                            <option value="5" className="text-warning">★★★★★</option>
                                            <option value="4" className="text-warning">★★★★☆</option>
                                            <option value="3" className="text-warning">★★★☆☆</option>
                                            <option value="2" className="text-warning">★★☆☆☆</option>
                                            <option value="1" className="text-warning">★☆☆☆☆</option>
                                        </select>
                                        <p className="m-0 text-danger">{error.rating ? "Please Select Option" : ""}</p>
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="review" className="mb-2">Comments :</label>
                                        <div className="form-floating">
                                            <textarea name="review" id="review" value={input.review} className={`form-control ${error.review ? "border-danger" : ""}`} onChange={handleInput} placeholder="Write your review"></textarea>
                                            <label htmlFor="review">Review</label>
                                        </div>
                                        <p className="m-0 text-danger">{error.review ? "Review must be 20 Character long" : ""}</p>
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
            <Review data={reviewData} />
        </>
    )
}

export default Form