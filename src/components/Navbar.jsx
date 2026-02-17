const Navbar = () => {
    return (
        <header className="py-4 fs-6 bg-white">
            <div className="container">
                <div className="d-flex align-items-center justify-content-lg-between justify-content-center">
                    <ul className="list-unstyled m-0 d-lg-flex d-none align-items-center gap-4">
                        <li>Shop</li>
                        <li>Catalog</li>
                        <li>Demos</li>
                        <li>More</li>
                    </ul>
                    <div className="header-logo">
                        <img src="/images/logo.webp" className="img-fluid" alt="logo" />
                    </div>
                    <ul className="list-unstyled m-0 d-lg-flex d-none align-items-center gap-4">
                        <li>
                            <ul className="list-unstyled m-0 d-flex align-items-center gap-3">
                                <li>English</li>
                                <li>USD</li>
                            </ul>
                        </li>
                        <li>
                            <ul className="list-unstyled m-0 d-flex align-items-center gap-3 fs-4">
                                <li><i className="ri-search-line" /></li>
                                <li><i className="ri-user-line" /></li>
                                <li><i className="ri-heart-3-line" /></li>
                                <li><i className="ri-shopping-cart-line"></i></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Navbar