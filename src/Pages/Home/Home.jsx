import { Link } from "react-router-dom"
import ListItem from '../../components/ListItem/ListItem'

const Home = () => {
    return (
        <main className="flex flex-col items-center justify-center w-full min-h-screen bg-black ">
            <h1 className="mb-6 text-6xl font-bold font-primary text-primary">Easy Tarkov Utilities</h1>
            <ul className="flex flex-wrap items-center justify-center gap-4 md:max-w-5xl lg:max-w-7xl">
                <ListItem imgAlt={"Map of tarkov"} imgSrc={"/tarkov-map.webp"} name={"Maps"} linkTo={"maps"}/>
                <ListItem imgAlt={"Map of tarkov"} imgSrc={"/wip.svg"} name={"Items Shopping List (WIP)"} linkTo={"shoppinglist"}/>
            </ul>
        </main>
    )
}

export default Home