export const About = ()=>{
    return (
        <>
            <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-content">
                            <p>Welcome, Jessica the Developer</p>
                            <h1>Why choose us?</h1>
                            <p><b>Expertise:</b> Our team consists of experienced IT Professional who are passionate about staying up-to-date with the latest industry trends.</p>
                            <br/>
                            <p><b>Customization:</b> We understand that every business is unique that's why we create solutions that are tailored to your specific needs and goals.</p>
                            <br/>
                            <p><b>Affordability:</b> We offer Competative pricing without compromising on the quality of our services.</p>
                            <br/>
                            <p><b>Reliability:</b> Count on us to be there when you need us. We are committed to ensuring your IT environment is reliable and available 24/7.</p>
                            <br/>
                            <div className="btn btn-group">
                                <a href="/contact">
                                    <button className="btn">connect now</button>
                                </a>
                                <a href="/service">
                                    <button className="btn secondary-btn">Learn more</button>
                                </a>
                            </div>
                        </div>
                        <div className="hero-image">
                            <img
                                src="/images/about.png"
                                alt="hommie"
                                width="400"
                                height="500"
                            />
                        </div>
                    </div>
                </section>
        </>
    )
}