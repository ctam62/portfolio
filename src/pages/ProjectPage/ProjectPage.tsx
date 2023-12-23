import './ProjectPage.scss';
import data from '../../data/projects.json';


export const ProjectPage = () => {
    return (
        <main className="project">
            <section className="project__content">
                <article className="project__description">
                    <h2 className="project__title">{data.title}</h2>
                    <p className="project__summary">{data.description}</p>

                    <div className="project__details">
                        <span className="project__subheading">Client: </span>
                        <p className="project__text">{data.client}</p>
                        <span className="project__subheading">Website: </span>
                        <p className="project__text">{data.url}</p>
                        <span className="project__subheading">Date: </span>
                        <p className="project__text">{data.date}</p>
                        <span className="project__subheading">Brief: </span>
                        <p className="project__text">{data.brief}</p>
                        <span className="project__subheading">Concept: </span>
                        <p className="project__text">{data.concept}</p>
                        <span className="project__subheading">Deliverables: </span>
                        <p className="project__text">{data.deliverables}</p>
                        <span className="project__subheading">Demographic: </span>
                        <p className="project__text">{data.demographic}</p>
                    </div>

                </article>
            </section>
            <nav className="project__nav">

            </nav>
        </main>
    )
};
