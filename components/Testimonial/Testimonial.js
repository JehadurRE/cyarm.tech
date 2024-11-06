import React from 'react';
import tImg1 from '/public/images/avatar/avatar_4.webp';
import tImg2 from '/public/images/avatar/avatar_6.webp';
import tImg3 from '/public/images/avatar/avatar_5.webp';
import tImg4 from '/public/images/avatar/avatar_7.webp';
import Bg from '/public/images/shapes/bg_pattern_2.svg';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const ResponsiveMasonry = dynamic(() => import("react-responsive-masonry").then(mod => mod.ResponsiveMasonry), { ssr: false });
const Masonry = dynamic(() => import("react-responsive-masonry").then(mod => mod.Masonry), { ssr: false });

const testimonials = [
    {
        id: '01',
        tImg: tImg1,
        Title: 'Amazing services',
        Des: "As a startup, we needed a technology partner who could help us bring our vision to life. Itsafe exceeded our expectations with their innovative solutions and proactive approach. They guided us through every step of the process, our journey together.",
        Name: 'Roman Dymtro',
        sub: 'Director of Marketing',
    },
    {
        id: '02',
        tImg: tImg2,
        Title: 'We Are Satisfied',
        Des: "We've been partnering with CyArm for several years, and they have consistently delivered exceptional results. From custom software development to cloud services integration, their solutions have helped us stay ahead of the competition and adapt to evolving market demands.",
        Name: 'Michel Johnson',
        sub: 'Tech Startup Founder',
    },
    {
        id: '03',
        tImg: tImg3,
        Title: 'Fast Respond',
        Des: "Working with CyArm was a seamless experience from start to finish. Their team took the time to understand our business goals and challenges, and they delivered a solution that addressed our needs perfectly.",
        Name: 'Bohdan Maksym',
        sub: 'Nonprofit Director',
    },
    {
        id: '04',
        tImg: tImg4,
        Title: 'Amazing services',
        Des: "The team at CyArm surpassed our expectations. Their meticulous project management and technical prowess were exceptional. They closely collaborated with us, ensuring a that not only met but exceeded our needs.",
        Name: 'Anatoliy Vasyl',
        sub: 'Director of Marketing',
    }
];

const Testimonial = () => {
    return (
        <section className="review_section section_space bg-light" style={{ backgroundImage: `url(${Bg})` }}>
            <div className="container">
                <div className="heading_block text-center">
                    <div className="heading_focus_text">
                        <span className="badge bg-secondary text-white">Client</span>
                        Testimonial 🙂
                    </div>
                    <h2 className="heading_text mb-0">What clients say</h2>
                </div>

                <div className="row">
                    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 1, 991: 2 }}>
                        <Masonry columnsCount={2} gutter="30px">
                            {testimonials.map((testimonial, tsm) => (
                                <div className="review_block pb-0" key={tsm}>
                                    <h3 className="review_title">“{testimonial.Title}”</h3>
                                    <p className="review_commtent">{testimonial.Des}</p>
                                    <div className="review_admin">
                                        <div className="review_admin_image">
                                            <Image src={testimonial.tImg} alt={testimonial.Name} width={50} height={50} />
                                        </div>
                                        <div className="review_admin_info">
                                            <h4 className="review_admin_name">{testimonial.Name}</h4>
                                            <span className="review_admin_designation">{testimonial.sub}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Masonry>
                    </ResponsiveMasonry>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;
