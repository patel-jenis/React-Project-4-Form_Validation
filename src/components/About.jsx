const About = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="row align-items-center gy-4 px-sm-0 px-3">
                    <div className="col-lg-6">
                        <div>
                            <img src="/images/girl.webp" className="img-fluid" alt="girl-img" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="px-xl-5 px-lg-4 px-0">
                            <div className="heading">
                                <h3 className="mb-3">About Us</h3>
                                <p className="mb-4">
                                    Since 2013, Journal has been the best selling and most loved OpenCart theme on the market. Now at version 3, it brings many new and revolutionary features such as an advanced page builder with 30+ multi-purpose modules that can be added on any page in any grid layout configuration, as well as the best possible customizable options for any area of your store.
                                </p>
                                <div>
                                    <a href="#" className="read-btn d-inline-block">Read More <i className="ri-arrow-right-line ms-1" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About