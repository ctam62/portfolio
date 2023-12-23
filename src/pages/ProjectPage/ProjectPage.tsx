import './ProjectPage.scss';
import { useParams } from 'react-router';
import { default as data } from '../../data/projects.json';


export const ProjectPage = () => {
    const { title } = useParams();
    const project = data.filter(item => item.title.toLowerCase() === title)[0];

    return (
        <main className="project">
            <section className="project__content">
                <article className="project__description">
                    <h2 className="project__title">{project.title}</h2>
                    <p className="project__summary">{project.description}</p>

                    <div className="project__details">
                        <span className="project__subheading">Client: </span>
                        <p className="project__text">{project.client}</p>
                        <span className="project__subheading">Website: </span>
                        <p className="project__text">{project.url}</p>
                        <span className="project__subheading">Date: </span>
                        <p className="project__text">{project.date}</p>
                        <span className="project__subheading">Brief: </span>
                        <p className="project__text">{project.brief}</p>
                        <span className="project__subheading">Concept: </span>
                        <p className="project__text">{project.concept}</p>
                        <span className="project__subheading">Deliverables: </span>
                        <p className="project__text">{project.deliverables}</p>
                        <span className="project__subheading">Demographic: </span>
                        <p className="project__text">{project.demographic}</p>
                    </div>

                </article>
            </section>
            <nav className="project__nav">

            </nav>
        </main>
    )
};
