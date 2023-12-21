import './GridItem.scss';


export const GridItem = ({ title }: { title: string }) => {
    return (
        <article className="grid-item">
            <h3 className="grid-item__title">{title}</h3>
        </article>
    )
};
