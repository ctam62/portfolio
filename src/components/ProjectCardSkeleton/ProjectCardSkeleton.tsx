import "./ProjectCardSkeleton.scss";
import view from "../../assets/icons/view.svg";
import { useState } from "react";
import Skeleton from "react-loading-skeleton";

interface props {
    cards: number;
}

export const ProjectCardSkeleton = ({ cards }: props) => {
    const [visible, setVisible] = useState(false);

    return Array(cards)
        .fill(0)
        .map((_, i) => (
            <div
                key={i}
                className="card-skeleton"
                onMouseOver={() => setVisible(true)}
                onMouseLeave={() => setVisible(false)}
            >
                <div className="grid-item__overlay">
                    <img
                        className={`grid-item__overlay-img ${visible ? "" : "hide"}`}
                        src={view}
                        alt="view icon"
                    />
                    <Skeleton height={10} />
                </div>
                <article className="grid-item">
                    <Skeleton width="85%" circle={true} />
                </article>
            </div>
        ));
};
