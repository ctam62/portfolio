import './Grid.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { GridItem } from '../GridItem/GridItem';


export const Grid = () => {
    const apiUrl = import.meta.env.VITE_APP_API_URL;
    const [projects, setProjects] = useState([] as any[]);

    useEffect(() => {
        const getAllProjects = async () => {
            try {
                const { data } = await axios.get(`${apiUrl}/api/projects`);
                setProjects(data);
            } catch (error) {
                console.error(error);
            }
        };
        getAllProjects();
    }, []);

    return (
        <div className="grid">
            {!!projects.length && projects.map(project =>
                <GridItem
                    key={project.id}
                    title={project.title}
                    img={`${apiUrl}/images/${project.images[0]}`}
                />
            )}
        </div>
    )
};
