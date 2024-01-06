/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function Service() {
    return (
        <div>
            {/* Page Header Start */}
            <div className="container-fluid page-header mb-5 p-0" style={{ backgroundImage: 'url(img/carousel-1.jpg)' }}>
                <div className="container-fluid page-header-inner py-5">
                    <div className="container text-center pb-5">
                        <h1 className="display-3 text-white mb-3 animated slideInDown">Services</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center text-uppercase">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                <li className="breadcrumb-item text-white active" aria-current="page">Services</li>
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
            {/* Service Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title text-center text-primary text-uppercase">Our Services</h6>
                        <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase">Services</span></h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <a className="service-item rounded" href>
                                <div className="service-icon bg-transparent border rounded p-1">
                                    <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                        <i className="fa fa-hotel fa-2x text-primary" />
                                    </div>
                                </div>
                                <h5 className="mb-3">Rooms &amp; Appartment</h5>
                                <p className="text-body mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <a className="service-item rounded" href>
                                <div className="service-icon bg-transparent border rounded p-1">
                                    <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                        <i className="fa fa-utensils fa-2x text-primary" />
                                    </div>
                                </div>
                                <h5 className="mb-3">Food &amp; Restaurant</h5>
                                <p className="text-body mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <a className="service-item rounded" href>
                                <div className="service-icon bg-transparent border rounded p-1">
                                    <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                        <i className="fa fa-spa fa-2x text-primary" />
                                    </div>
                                </div>
                                <h5 className="mb-3">Spa &amp; Fitness</h5>
                                <p className="text-body mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                            <a className="service-item rounded" href>
                                <div className="service-icon bg-transparent border rounded p-1">
                                    <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                        <i className="fa fa-swimmer fa-2x text-primary" />
                                    </div>
                                </div>
                                <h5 className="mb-3">Sports &amp; Gaming</h5>
                                <p className="text-body mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <a className="service-item rounded" href>
                                <div className="service-icon bg-transparent border rounded p-1">
                                    <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                        <i className="fa fa-glass-cheers fa-2x text-primary" />
                                    </div>
                                </div>
                                <h5 className="mb-3">Event &amp; Party</h5>
                                <p className="text-body mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                            <a className="service-item rounded" href>
                                <div className="service-icon bg-transparent border rounded p-1">
                                    <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                                        <i className="fa fa-dumbbell fa-2x text-primary" />
                                    </div>
                                </div>
                                <h5 className="mb-3">GYM &amp; Yoga</h5>
                                <p className="text-body mb-0">Erat ipsum justo amt duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Service-End */}
            
        </div>

    )
}
