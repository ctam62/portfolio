import "./Grid.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { ProjectCardSkeleton } from "../ProjectCardSkeleton/ProjectCardSkeleton";

export const Grid = () => {
    const apiUrl = import.meta.env.VITE_APP_API_URL;

    const [isLoading, setIsLoading] = useState(true);
    const [projects, setProjects] = useState([] as any[]);

    useEffect(() => {
        const getAllProjects = async () => {
            try {
                const { data } = await axios.get(`${apiUrl}/api/projects`);
                setProjects(data);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        getAllProjects();
    }, []);

    return (
        <div className="grid">
            {isLoading && <ProjectCardSkeleton cards={4} />}
            {!!projects.length &&
                projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        img={`${apiUrl}/images/${project.images[0]}`}
                    />
                ))}
        </div>
    );
};
