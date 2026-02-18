const Review = ({ data }) => {
    console.log(data);
    const getRating = (rating) => {
        switch (Number(rating)) {
            case 1:
                return (
                    <>
                        <i className="ri-star-s-fill" />
                        <i className="ri-star-s-line" />
                        <i className="ri-star-s-line" />
                        <i className="ri-star-s-line" />
                        <i className="ri-star-s-line" />
                    </>
                )
            case 2:
                return (
                    <>
                        <i className="ri-star-s-fill" />
                        <i className="ri-star-s-fill" />
                        <i className="ri-star-s-line" />
                        <i className="ri-star-s-line" />
                        <i className="ri-star-s-line" />
                    </>
                );
            case 3:
                return (
                    <>
                        <i className="ri-star-s-fill" />
                        <i className="ri-star-s-fill" />
                        <i className="ri-star-s-fill" />
                        <i className="ri-star-s-line" />
                        <i className="ri-star-s-line" />
                    </>
                );
            case 4:
                return (
                    <>
                        <i className="ri-star-s-fill" />
                        <i className="ri-star-s-fill" />
                        <i className="ri-star-s-fill" />
                        <i className="ri-star-s-fill" />
                        <i className="ri-star-s-line" />
                    </>
                );
            case 5:
                return (
                    <>
                        <i className="ri-star-s-fill" />
                        <i className="ri-star-s-fill" />
                        <i className="ri-star-s-fill" />
                        <i className="ri-star-s-fill" />
                        <i className="ri-star-s-fill" />
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <section className="my-5 px-sm-0 px-3">
            <div className="container">
                <div className="hading text-center mb-5">
                    <h3>Customer Reviews</h3>
                </div>
                <div className="row gy-4">
                    {
                        data.map((review) => {
                            return <div key={review.id} className="col-lg-4 col-md-6">
                                <div className="review-box border rounded-2 p-4">
                                    <div className="profile-img">
                                        <img src={review.profileURL} alt="profile" className="img-fluid" />
                                    </div>
                                    <div className="mt-4">
                                        <p className="review-text">{review.review}</p>
                                        <p className="m-0 star">
                                            {getRating(review.rating)}
                                        </p>
                                        <h5 className="sub-heading">{review.name}</h5>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Review