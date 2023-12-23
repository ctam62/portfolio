import './Grid.scss';
import savoryscale from '../../assets/images/savoryscale.jpg';
import youwatch from '../../assets/images/youwatch.jpg';
import ispine from '../../assets/images/ispine.jpg';
import gif from '../../assets/images/gifrevealrumble.jpg';
import { GridItem } from '../GridItem/GridItem';


export const Grid = () => {
    return (
        <div className="grid">
            <GridItem
                title="SavoryScale"
                img={savoryscale}
            />
            <GridItem
                title="YouWatch"
                img={youwatch}
            />
            <GridItem
                title="iSpine"
                img={ispine}
            />
            <GridItem
                title="GIF Reveal Rumble"
                img={gif}
            />
        </div>
    )
};
