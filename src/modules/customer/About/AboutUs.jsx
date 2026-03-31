import Breadcrumbs from "../../../widgets/Breadcrumbs";

const teamData = [
    {
        id: 1,
        name: "Grace Wright",
        role: "Founder, CEO",
        image: "https://placehold.co/300x300",
        socials: { facebook: "#", twitter: "#", skype: "#" }
    },
    {
        id: 2,
        name: "Taylor Jackson",
        role: "Financial Director",
        image: "https://placehold.co/300x300",
        socials: { facebook: "#", twitter: "#", skype: "#" }
    },
    {
        id: 3,
        name: "Quinton Cross",
        role: "Marketing Director",
        image: "https://placehold.co/300x300",
        socials: { facebook: "#", twitter: "#", skype: "#" }
    },
    {
        id: 4,
        name: "Liana Mullen",
        role: "Lead Designer",
        image: "https://placehold.co/300x300",
        socials: { facebook: "#", twitter: "#", skype: "#" }
    }
];

const AboutUs = () => {
    return (
        <>

            <Breadcrumbs title="Cart" paths={[{ name: "About Us" }]} />
            {/* Start About Area */}
            <section className="about-us section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="content-left">
                                <img src="https://placehold.co/540x420" alt="About Us" />
                                <a
                                    href="https://www.youtube.com/watch?v=r44RKWyfcFw"
                                    className="glightbox video"
                                >
                                    <i className="lni lni-play"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="content-right">
                                <h2>ShopGrids - Your Trusted & Reliable Partner.</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id purus at risus
                                    pellentesque faucibus a quis eros. In eu fermentum leo. Integer ut eros lacus.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor incididunt
                                    ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Start Team Area */}
            <section className="team section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title">
                                <h2 className="wow fadeInUp" data-wow-delay=".4s">Our Core Team</h2>
                                <p className="wow fadeInUp" data-wow-delay=".6s">
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {teamData.map((member) => (
                            <div className="col-lg-3 col-md-6 col-12" key={member.id}>
                                <div className="single-team">
                                    <div className="image">
                                        <img src={member.image} alt={member.name} />
                                    </div>
                                    <div className="content">
                                        <div className="info">
                                            <h3>{member.name}</h3>
                                            <h5>{member.role}</h5>
                                            <ul className="social">
                                                <li>
                                                    <a href={member.socials.facebook}><i className="lni lni-facebook-filled"></i></a>
                                                </li>
                                                <li>
                                                    <a href={member.socials.twitter}><i className="lni lni-twitter-original"></i></a>
                                                </li>
                                                <li>
                                                    <a href={member.socials.skype}><i className="lni lni-skype"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUs;