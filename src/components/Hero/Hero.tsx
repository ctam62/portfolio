import './Hero.scss';


export const Hero = () => {
    return (
        <section className="hero" id="hero">
            <div className="hero__content">
                <article className="hero__content-col hero__content-col--img"></article>
                <article className="hero__content-col hero__content-col--mid">
                    <span className="hero__circle"></span>
                    <span className="hero__line"></span>
                </article>
                <article className="hero__content-col">
                    <h1 className="hero__heading">Clara Tam</h1>
                    <p className="hero__text">
                        A software engineer passionate in creating meaningful
                        user-friendly applications balancing aesthetics and functionality.
                    </p>
                    <button className="hero__button">VIEW PROJECTS</button>
                </article>
            </div>
        </section>
    )
};
