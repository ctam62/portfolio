import './ProjectPage.scss';
import axios from 'axios';
import { useParams } from 'react-router';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import github from '../../assets/icons/github.svg';


interface props {
    open: boolean;
    setOpen: Function;
}

export const ProjectPage = ({ open, setOpen }: props) => {
    const apiUrl = import.meta.env.VITE_APP_API_URL;

    const [projects, setProjects] = useState([] as any[]);
    const [project, setProject] = useState({} as any);

    const { title } = useParams();
    const parsedTitle = title?.replace(/[-]/g, " ");

    useEffect(() => {
        const getAllProjects = async () => {
            try {
                const { data } = await axios.get(`${apiUrl}/api/projects`);
                setProjects(data);
            } catch (error) {
                console.error(error);
            }
        };

        const getProject = async () => {

            try {
                const { data } = await axios.get(`${apiUrl}/api/projects/${parsedTitle}`);
                setProject(data);
            } catch (error) {
                console.error(error);
            }
        }

        getAllProjects();
        if (title !== undefined) {
            getProject();
        }
    }, [title]);

    let responsiveImg = "";
    let filename = "";
    if (project.images !== undefined) {
        responsiveImg = project.images?.includes(`${title?.toLowerCase()}-responsive.jpg`);
        filename = `${apiUrl}/images/${project.images[0]}`;

        if (responsiveImg) {
            const targetIndex = project.images.indexOf(`${title?.toLowerCase()}-responsive.jpg`);
            filename = `${apiUrl}/images/${project.images[targetIndex]}`;
        }
    }

    const [disablePrev, setDisablePrev] = useState(false);
    const [disableNext, setDisableNext] = useState(false);

    const navigate = useNavigate();
    const currentIndex = project.id;
    const prevIndex = currentIndex - 1;
    const nextIndex = currentIndex + 1;


    useEffect(() => {
        if (projects?.length < nextIndex) {
            setDisableNext(true);
        } else if (prevIndex === 0) {
            setDisablePrev(true);
        } else {
            setDisablePrev(false);
            setDisableNext(false);
        }
    }, [prevIndex, nextIndex]);

    const handlePrevProject = () => {
        const prevProjectTitle = projects.find(project => project.id === prevIndex).title;
        navigate(`/project/${prevProjectTitle}`);
    };

    const handleNextProject = () => {
        const nextProjectTitle = projects.find(project => project.id === nextIndex).title;
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
                    <LazyLoadComponent>
                        <div
                            className="project__imgs"
                            style={{ background: `center/cover no-repeat url(${filename})` }}
                        >
                        </div>
                    </LazyLoadComponent>
                </div>
                <div className="project__content-col project__content-col--second">
                    <article className="project__description">
                        <h2 className="project__title">{project.title}</h2>
                        <p className="project__summary">{project.description}</p>

                        <div className="project__details">
                            <p className={`project__text ${!project.client ? "hide" : ""}`}>
                                <span className="project__subheading">Client: </span>
                                {project.client}
                            </p>
                            <p className="project__text">
                                <span className="project__subheading">Date: </span>
                                {project.date}
                            </p>
                            <p className="project__text ">
                                <span className="project__subheading">Brief: </span>
                                {project.brief}
                            </p>
                            <p className="project__text">
                                <span className="project__subheading">Concept: </span>
                                {project.concept}
                            </p>
                            <p className="project__text">
                                <span className="project__subheading">Deliverables: </span>
                                {project.deliverables}
                            </p>
                            <p className="project__text">
                                <span className="project__subheading">Demographic: </span>
                                {project.demographic}
                            </p>

                            <p className="project__text">
                                <span className="project__subheading">Tech Stack: </span>
                                {project.tech?.join(", ")}
                            </p>

                            <p className={`project__text ${!project?.url ? "hide" : ""}`}>
                                <span className="project__subheading">Website: </span>
                                <Link to={project.url} target="_blank">
                                    {project.url?.replace(/(https:\/\/)|(http:\/\/)/g, "")}
                                </Link>
                            </p>
                            <div className={`project__text ${!project.github ? "hide" : ""}`}>
                                <Link to={project.github} target="_blank">
                                    <img className="project__icons" src={github} alt="github" />
                                    <div className="project__icons-shadow"></div>
                                </Link>
                            </div>
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
