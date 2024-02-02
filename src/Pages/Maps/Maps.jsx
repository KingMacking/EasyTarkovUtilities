import MAP_INFO from '../../data/maps.json'
import ListItem from '../../components/ListItem/ListItem'
import { useParams } from 'react-router-dom';
import MapWithZoom from './MapWithZoom';

const Maps = () => {
    let {map} = useParams();
    console.log(map);
    return (
        <section className='flex items-center justify-center w-full h-full bg-black'>
            {
                map ? (
                    <MapWithZoom label={MAP_INFO.filter(data => data.name === map)[0].label} name={MAP_INFO.filter(data => data.name === map)[0].name}/>
                ) : (
                    <ul className='flex flex-wrap items-center justify-center gap-4 md:max-w-5xl lg:max-w-7xl'>
                        {
                            MAP_INFO.map(data => (
                                <ListItem imgAlt={`Representative image of ${data.name}`} imgSrc={`/${data.name}-banner.webp`} name={data.label} linkTo={data.name} />
                            ))
                        }
                    </ul>
                )
            }
        </section>
    )
}

export default Maps