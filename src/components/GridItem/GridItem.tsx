import './GridItem.scss';
import view from '../../assets/icons/view.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


interface props {
    title: string;
    img: string;
}

export const GridItem = ({ title, img }: props) => {

    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            <div
                className={`grid-item__container`}
                onMouseOver={() => setVisible(true)}
                onMouseLeave={() => setVisible(false)}
                onClick={() => navigate(`/project/${title.toLowerCase()}`)}
            >
                <div className="grid-item__overlay">
                    <img
                        className={`grid-item__overlay-img ${visible ? "" : "hide"}`}
                        src={view}
                        alt="view icon"
                    />
                </div>
                <article
                    className="grid-item"
                    style={{ background: `center/cover no-repeat url(${img})` }}
                >
                </article>
            </div>

        </>
    )
};

