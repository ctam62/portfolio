import './Grid.scss';
import { GridItem } from '../GridItem/GridItem';


export const Grid = () => {
    return (
        <div className="grid">
            <GridItem title="SavoryScale" />
            <GridItem title="YouWatch" />
            <GridItem title="iSpine" />
            <GridItem title="Gif Reveal Rumble" />
        </div>
    )
};
