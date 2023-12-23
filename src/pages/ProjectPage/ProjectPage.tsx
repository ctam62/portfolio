import './ProjectPage.scss';
import { useState } from 'react';
import { useParams } from 'react-router';
import data from '../../data/projects.json';


export const ProjectPage = () => {

    const [visible, setVisible] = useState(false);

    const { title } = useParams();
    const project = data.filter(item => item.title.toLowerCase() === title)[0];
    const filename = title?.toLowerCase().replace(/\s/g, "");

    return (
        <main className="project">
            <section className="project__content">
                <div className="project__content-col">
                    <div
                        className="project__imgs"
                        style={{ background: `center/cover no-repeat url(/src/assets/images/${filename}.jpg)` }}
                    >
                    </div>
                </div>
                <div className="project__content-col">
                    <article className="project__description">
                        <h2 className="project__title">{project.title}</h2>
                        <p className="project__summary">{project.description}</p>

                        <div className="project__details">
                            <p className={`project__text ${project.client === "" ? "hide" : ""}`}>
                                <span className="project__subheading">Client: </span>
                                {project.client}
                            </p>

                            <p className={`project__text ${project.url === "" ? "hide" : ""}`}>
                                <span className="project__subheading">Website: </span>
                                {project.url}
                            </p>

                            <p className={`project__text ${project.date === "" ? "hide" : ""}`}>
                                <span className="project__subheading">Date: </span>
                                {project.date}
                            </p>

                            <p className={`project__text ${project.brief === "" ? "hide" : ""}`}>
                                <span className="project__subheading">Brief: </span>
                                {project.brief}
                            </p>

                            <p className={`project__text ${project.concept === "" ? "hide" : ""}`}>
                                <span className="project__subheading">Concept: </span>
                                {project.concept}
                            </p>

                            <p className={`project__text ${project.deliverables === "" ? "hide" : ""}`}>
                                <span className="project__subheading">Deliverables: </span>
                                {project.deliverables}
                            </p>

                            <p className={`project__text ${project.demographic === "" ? "hide" : ""}`}>
                                <span className="project__subheading">Demographic: </span>
                                {project.demographic}
                            </p>
                        </div>
                    </article>
                </div>
            </section>
            <nav className="project__nav">
                <ul className="project__nav-list">
                    <li className="project__nav-list-item">PREVIOUS PROJECT</li>
                    <li className="project__nav-list-item">NEXT PROJECT</li>
                </ul>
            </nav>
        </main>
    )
};
