import './ProjectPage.scss';
import { useParams } from 'react-router';
import { Link, useNavigate } from 'react-router-dom';
import data from '../../data/projects.json';
import { useEffect, useState } from 'react';


interface props {
    open: boolean;
    setOpen: Function;
}

export const ProjectPage = ({ open, setOpen }: props) => {
    const { title } = useParams();
    const project = data.filter(item => item.title.toLowerCase() === title?.replace(/[-]/g, " "))[0];
    const responsiveImg = project.images.includes(`${title?.toLowerCase()}-responsive.jpg`);
    let filename = project.images[0];

    if (responsiveImg) {
        const targetIndex = project.images.indexOf(`${title?.toLowerCase()}-responsive.jpg`);
        filename = project.images[targetIndex];
    }

    const [disablePrev, setDisablePrev] = useState(false);
    const [disableNext, setDisableNext] = useState(false);

    const navigate = useNavigate();
    const currentIndex = data.indexOf(project);
    const prevIndex = currentIndex - 1;
    const nextIndex = currentIndex + 1;

    useEffect(() => {
        if (data.length - 1 < nextIndex) {
            setDisableNext(true);
        } else if (prevIndex < 0) {
            setDisablePrev(true);
        } else {
            setDisablePrev(false);
            setDisableNext(false);
        }
    }, [prevIndex, nextIndex]);

    const handlePrevProject = () => {
        const prevProjectTitle = data[prevIndex].title.toLowerCase();
        navigate(`/project/${prevProjectTitle}`);
    };

    const handleNextProject = () => {
        const nextProjectTitle = data[nextIndex].title.toLowerCase();
        navigate(`/project/${nextProjectTitle}`);
    };

    const handleNavClose = () => {
        if (open === true) {
            setOpen(false);
        }
    };

    return (
        <main className="project" onClick={handleNavClose}>
            <section className="project__content">
                <div className="project__content-col project__content-col--first">
                    <div
                        className="project__imgs"
                        style={{ background: `center/cover no-repeat url(/src/assets/images/${filename})` }}
                    >
                    </div>
                </div>
                <div className="project__content-col project__content-col--second">
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
                                <Link to={project.url} target="_blank">{project.url.replace(/(https:\/\/)|(http:\/\/)/g, "")}</Link>
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
                    <li
                        className={`project__nav-list-item ${disablePrev ? "hidden" : ""}`}
                        onClick={handlePrevProject}>
                        PREVIOUS PROJECT
                    </li>
                    <li
                        className={`project__nav-list-item ${disableNext ? "hidden" : ""}`}
                        onClick={handleNextProject}>
                        NEXT PROJECT
                    </li>
                </ul>
            </nav>
        </main>
    )
};
