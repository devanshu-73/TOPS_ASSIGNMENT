/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function Room() {
    return (
        <div>
            {/* Page Header Start */}
            <div className="container-fluid page-header mb-5 p-0" style={{ backgroundImage: 'url(img/carousel-1.jpg)' }}>
                <div className="container-fluid page-header-inner py-5">
                    <div className="container text-center pb-5">
                        <h1 className="display-3 text-white mb-3 animated slideInDown">Rooms</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center text-uppercase">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                <li className="breadcrumb-item text-white active" aria-current="page">Rooms</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            {/* Page Header End */}
            {/* Booking Start */}
            <div className="container-fluid booking pb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container">
                    <div className="bg-white shadow" style={{ padding: 35 }}>
                        <div className="row g-2">
                            <div className="col-md-10">
                                <div className="row g-2">
                                    <div className="col-md-3">
                                        <div className="date" id="date1" data-target-input="nearest">
                                            <input type="text" className="form-control datetimepicker-input" placeholder="Check in" data-target="#date1" data-toggle="datetimepicker" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="date" id="date2" data-target-input="nearest">
                                            <input type="text" className="form-control datetimepicker-input" placeholder="Check out" data-target="#date2" data-toggle="datetimepicker" />
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <select className="form-select">
                                            <option selected>Adult</option>
                                            <option value={1}>Adult 1</option>
                                            <option value={2}>Adult 2</option>
                                            <option value={3}>Adult 3</option>
                                        </select>
                                    </div>
                                    <div className="col-md-3">
                                        <select className="form-select">
                                            <option selected>Child</option>
                                            <option value={1}>Child 1</option>
                                            <option value={2}>Child 2</option>
                                            <option value={3}>Child 3</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <button className="btn btn-primary w-100">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Booking End */}
            {/* Room Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title text-center text-primary text-uppercase">Our Rooms</h6>
                        <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase">Rooms</span></h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="room-item shadow rounded overflow-hidden">
                                <div className="position-relative">
                                    <img className="img-fluid" src="img/room-1.jpg" alt />
                                    <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">$100/Night</small>
                                </div>
                                <div className="p-4 mt-2">
                                    <div className="d-flex justify-content-between mb-3">
                                        <h5 className="mb-0">Junior Suite</h5>
                                        <div className="ps-2">
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                        </div>
                                    </div>
                                    <div className="d-flex mb-3">
                                        <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2" />3 Bed</small>
                                        <small className="border-end me-3 pe-3"><i className="fa fa-bath text-primary me-2" />2 Bath</small>
                                        <small><i className="fa fa-wifi text-primary me-2" />Wifi</small>
                                    </div>
                                    <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                    <div className="d-flex justify-content-between">
                                        <a className="btn btn-sm btn-primary rounded py-2 px-4" href>View Detail</a>
                                        <a className="btn btn-sm btn-dark rounded py-2 px-4" href>Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="room-item shadow rounded overflow-hidden">
                                <div className="position-relative">
                                    <img className="img-fluid" src="img/room-2.jpg" alt />
                                    <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">$100/Night</small>
                                </div>
                                <div className="p-4 mt-2">
                                    <div className="d-flex justify-content-between mb-3">
                                        <h5 className="mb-0">Executive Suite</h5>
                                        <div className="ps-2">
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                        </div>
                                    </div>
                                    <div className="d-flex mb-3">
                                        <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2" />3 Bed</small>
                                        <small className="border-end me-3 pe-3"><i className="fa fa-bath text-primary me-2" />2 Bath</small>
                                        <small><i className="fa fa-wifi text-primary me-2" />Wifi</small>
                                    </div>
                                    <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                    <div className="d-flex justify-content-between">
                                        <a className="btn btn-sm btn-primary rounded py-2 px-4" href>View Detail</a>
                                        <a className="btn btn-sm btn-dark rounded py-2 px-4" href>Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                            <div className="room-item shadow rounded overflow-hidden">
                                <div className="position-relative">
                                    <img className="img-fluid" src="img/room-3.jpg" alt />
                                    <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">$100/Night</small>
                                </div>
                                <div className="p-4 mt-2">
                                    <div className="d-flex justify-content-between mb-3">
                                        <h5 className="mb-0">Super Deluxe</h5>
                                        <div className="ps-2">
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                        </div>
                                    </div>
                                    <div className="d-flex mb-3">
                                        <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2" />3 Bed</small>
                                        <small className="border-end me-3 pe-3"><i className="fa fa-bath text-primary me-2" />2 Bath</small>
                                        <small><i className="fa fa-wifi text-primary me-2" />Wifi</small>
                                    </div>
                                    <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                    <div className="d-flex justify-content-between">
                                        <a className="btn btn-sm btn-primary rounded py-2 px-4" href>View Detail</a>
                                        <a className="btn btn-sm btn-dark rounded py-2 px-4" href>Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                            <div className="room-item shadow rounded overflow-hidden">
                                <div className="position-relative">
                                    <img className="img-fluid" src="img/room-3.jpg" alt />
                                    <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">$100/Night</small>
                                </div>
                                <div className="p-4 mt-2">
                                    <div className="d-flex justify-content-between mb-3">
                                        <h5 className="mb-0">Super Deluxe</h5>
                                        <div className="ps-2">
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                        </div>
                                    </div>
                                    <div className="d-flex mb-3">
                                        <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2" />3 Bed</small>
                                        <small className="border-end me-3 pe-3"><i className="fa fa-bath text-primary me-2" />2 Bath</small>
                                        <small><i className="fa fa-wifi text-primary me-2" />Wifi</small>
                                    </div>
                                    <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                    <div className="d-flex justify-content-between">
                                        <a className="btn btn-sm btn-primary rounded py-2 px-4" href>View Detail</a>
                                        <a className="btn btn-sm btn-dark rounded py-2 px-4" href>Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="room-item shadow rounded overflow-hidden">
                                <div className="position-relative">
                                    <img className="img-fluid" src="img/room-1.jpg" alt />
                                    <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">$100/Night</small>
                                </div>
                                <div className="p-4 mt-2">
                                    <div className="d-flex justify-content-between mb-3">
                                        <h5 className="mb-0">Junior Suite</h5>
                                        <div className="ps-2">
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                        </div>
                                    </div>
                                    <div className="d-flex mb-3">
                                        <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2" />3 Bed</small>
                                        <small className="border-end me-3 pe-3"><i className="fa fa-bath text-primary me-2" />2 Bath</small>
                                        <small><i className="fa fa-wifi text-primary me-2" />Wifi</small>
                                    </div>
                                    <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                    <div className="d-flex justify-content-between">
                                        <a className="btn btn-sm btn-primary rounded py-2 px-4" href>View Detail</a>
                                        <a className="btn btn-sm btn-dark rounded py-2 px-4" href>Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="room-item shadow rounded overflow-hidden">
                                <div className="position-relative">
                                    <img className="img-fluid" src="img/room-2.jpg" alt />
                                    <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">$100/Night</small>
                                </div>
                                <div className="p-4 mt-2">
                                    <div className="d-flex justify-content-between mb-3">
                                        <h5 className="mb-0">Executive Suite</h5>
                                        <div className="ps-2">
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                            <small className="fa fa-star text-primary" />
                                        </div>
                                    </div>
                                    <div className="d-flex mb-3">
                                        <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2" />3 Bed</small>
                                        <small className="border-end me-3 pe-3"><i className="fa fa-bath text-primary me-2" />2 Bath</small>
                                        <small><i className="fa fa-wifi text-primary me-2" />Wifi</small>
                                    </div>
                                    <p className="text-body mb-3">Erat ipsum justo amet duo et elitr dolor, est do duo eos lorem sed diam stet diam sed stet lorem.</p>
                                    <div className="d-flex justify-content-between">
                                        <a className="btn btn-sm btn-primary rounded py-2 px-4" href>View Detail</a>
                                        <a className="btn btn-sm btn-dark rounded py-2 px-4" href>Book Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Room-End */}
        </div>

    )
}
