import './About.scss';


export const About = () => {
    return (
        <section className="about" id="about">
            <article className="about__content">
                <span className="about__line--primary"></span>
                <span className="about__circle--primary"></span>

                <h2 className="about__heading">About Me</h2>

                <div className="about__text-block">
                    <p className="about__text">
                        Hello, my name is Clara. I enjoy problem-solving and leveraging technology to build innovative web solutions.
                    </p>
                    <p className="about__text">
                        My expertise spans media art design and web development, with a strong foundation in biomedical engineering, machine learning, and natural language processing. My diverse skill set allows me to excel in team collaboration, where I contribute not only technical proficiency but also the ability to articulate complex concepts to non-technical stakeholders.
                    </p>
                    <p className="about__text">
                        Currently, I've been working with technologies such as TypeScript, Vercel, Netlify, Django, and AWS.
                    </p>
                </div>

                <span className="about__circle--primary"></span>
                <span className="about__line--primary"></span>
            </article>
        </section>
    )
};
