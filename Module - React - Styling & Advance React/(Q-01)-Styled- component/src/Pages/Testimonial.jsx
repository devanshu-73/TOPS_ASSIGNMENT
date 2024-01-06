/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

export default function Testimonial() {
    return (
        <div>
            {/* Page Header Start */}
            <div className="container-fluid page-header mb-5 p-0" style={{ backgroundImage: 'url(img/carousel-1.jpg)' }}>
                <div className="container-fluid page-header-inner py-5">
                    <div className="container text-center pb-5">
                        <h1 className="display-3 text-white mb-3 animated slideInDown">Testimonial</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center text-uppercase">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">Pages</a></li>
                                <li className="breadcrumb-item text-white active" aria-current="page">Testimonial</li>
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

            {/* Testimonial Start */}
            <div className="container-xxl testimonial mt-5 py-5 bg-dark wow zoomIn" data-wow-delay="0.1s" style={{ marginBottom: 90 }}>
                <div className="container">
                    <div className="owl-carousel testimonial-carousel py-5">
                        <div className="testimonial-item position-relative bg-white rounded overflow-hidden">
                            <p>Tempor stet labore dlor clita stet diam aet ipum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos</p>
                            <div className="d-flex align-items-center">
                                <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-1.jpg" style={{ width: 45, height: 45 }} />
                                <div className="ps-3">
                                    <h6 className="fw-bold mb-1">Client Name</h6>
                                    <small>Profession</small>
                                </div>
                            </div>
                            <i className="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1" />
                        </div>
                        <div className="testimonial-item position-relative bg-white rounded overflow-hidden">
                            <p>Tempor stet labore dolor clita stet diam amet ipum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos</p>
                            <div className="d-flex align-items-center">
                                <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-2.jpg" style={{ width: 45, height: 45 }} />
                                <div className="ps-3">
                                    <h6 className="fw-bold mb-1">Client Name</h6>
                                    <small>Profession</small>
                                </div>
                            </div>
                            <i className="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1" />
                        </div>
                        <div className="testimonial-item position-relative bg-white rounded overflow-hidden">
                            <p>Tempor stet labore dolor clita tet iam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos</p>
                            <div className="d-flex align-items-center">
                                <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-3.jpg" style={{ width: 45, height: 45 }} />
                                <div className="ps-3">
                                    <h6 className="fw-bold mb-1">Client Name</h6>
                                    <small>Profession</small>
                                </div>
                            </div>
                            <i className="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1" />
                        </div>
                    </div>

                </div>
            </div>
            {/* Testimonial-End */}

        </div>

    )
}

