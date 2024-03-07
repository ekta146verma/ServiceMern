export const Home = ()=>{
    return (
        <>
            <main>
                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-content">
                            <p>We are the World's best software developer</p>
                            <h1>Welcome to Jessica's Service Website</h1>
                            <p>Are you ready to take your business to next level with cutting-edge IT solution? Look no further! At Jessica the software devloper we specialize in providing innovative IT services and Solution tailored to meet your unique needs</p>
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
                                src="/images/home.png"
                                alt="hommie"
                                width="400"
                                height="500"
                            />
                        </div>
                    </div>
                </section>
            </main>

            <section className="section-analytics">
                <div className="container grid grid-four-cols">
                    <div className="div1">
                        <h2>50+</h2>
                        <p>Registered Companies</p>
                    </div>
                    <div className="div1">
                        <h2>10 Lakh+</h2>
                        <p>Happy Clients</p>
                    </div>
                    <div className="div1">
                        <h2>50000+</h2>
                        <p>Well known Developers</p>
                    </div>
                    <div className="div1">
                        <h2>24/7</h2>
                        <p>Service</p>
                    </div>
                </div>
            </section>

            <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-image">
                            <img
                                src="/images/design.png"
                                alt="hommie"
                                width="400"
                                height="500"
                            />
                        </div>
                        <div className="hero-content">
                            <p>We are here to help you</p>
                            <h1>Get started today</h1>
                            <p>Ready to take the first step towards a more efficient and secure IT infrasructure? Contact us today for a free consultation and lets discuss how Jessica the developer can help your business thrive in the digital era.</p>
                            <div className="btn btn-group">
                                <a href="/contact">
                                    <button className="btn">connect now</button>
                                </a>
                                <a href="/service">
                                    <button className="btn secondary-btn">Learn more</button>
                                </a>
                            </div>
                        </div>
                        
                    </div>
            </section>
        </>
    )
}