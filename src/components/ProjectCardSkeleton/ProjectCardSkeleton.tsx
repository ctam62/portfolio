import "./ProjectCardSkeleton.scss";

interface props {
    cards: number;
}

export const ProjectCardSkeleton = ({ cards }: props) => {
    return Array(cards)
        .fill(0)
        .map((_, i) => (
            <div key={i} className="skeleton-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="skeleton-card__overlay">
                    <div className="skeleton-card__view-icon"></div>
                </div>
                <div className="skeleton-card__image">
                    <div className="skeleton-card__image-placeholder"></div>
                </div>
            </div>
        ));
};
