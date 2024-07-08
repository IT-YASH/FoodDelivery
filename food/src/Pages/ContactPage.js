import React from 'react'

const ContactPage = () => {
    return (
        <>
            <div class="mt-5"></div>
            <section class="breadcrumb breadcrumb_bg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="breadcrumb_iner text-center">
                                <div class="breadcrumb_iner_item">
                                    <h2>Contact Us</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="contact-section section_padding">
                <div class="container">
                    <div class="d-none d-sm-block mb-5 pb-4">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40643.96299019024!2d2.5736186567904795!3d50.45511222572908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dd3d6e6af62f19%3A0x103a493e962dc7b2!2s62620%20Barlin%2C%20France!5e0!3m2!1sen!2sin!4v1689229716064!5m2!1sen!2sin" className='col-12' style={{ border: "0" , height:"450px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <h2 class="contact-title">Get in Touch</h2>
                        </div>
                        <div class="col-lg-8">
                            <form class="form-contact contact_form" action="contact_process.php" method="post" id="contactForm"
                                novalidate="novalidate">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="form-group">

                                            <textarea class="form-control w-100" name="message" id="message" cols="30" rows="9"
                                                onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'"
                                                placeholder='Enter Message'></textarea>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input class="form-control" name="name" id="name" type="text" onfocus="this.placeholder = ''"
                                                onblur="this.placeholder = 'Enter your name'" placeholder='Enter your name' />
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <input class="form-control" name="email" id="email" type="email" onfocus="this.placeholder = ''"
                                                onblur="this.placeholder = 'Enter email address'" placeholder='Enter email address' />
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <input class="form-control" name="subject" id="subject" type="text" onfocus="this.placeholder = ''"
                                                onblur="this.placeholder = 'Enter Subject'" placeholder='Enter Subject' />
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group mt-3">
                                    <button type="submit" class="button button-contactForm btn_4">Send Message</button>
                                </div>
                            </form>
                        </div>
                        <div class="col-lg-4">
                            <div class="media contact-info">
                                <span class="contact-info__icon"><i class="ti-home"></i></span>
                                <div class="media-body">
                                    <h3>Buttonwood, California.</h3>
                                    <p>Rosemead, CA 91770</p>
                                </div>
                            </div>
                            <div class="media contact-info">
                                <span class="contact-info__icon"><i class="ti-tablet"></i></span>
                                <div class="media-body">
                                    <h3>00 (440) 9865 562</h3>
                                    <p>Mon to Fri 9am to 6pm</p>
                                </div>
                            </div>
                            <div class="media contact-info">
                                <span class="contact-info__icon"><i class="ti-email"></i></span>
                                <div class="media-body">
                                    <h3>support@colorlib.com</h3>
                                    <p>Send us your query anytime!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default ContactPage;