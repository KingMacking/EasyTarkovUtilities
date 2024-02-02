import { Link } from "react-router-dom"

const ListItem = ({imgSrc, imgAlt, name, linkTo}) => {
    return (
        <li className="overflow-hidden border rounded-md border-primary w-72">
            <Link to={linkTo} params>
                <img className="object-cover object-center w-full h-44" src={imgSrc} alt={imgAlt} />
                <h3 className='px-4 py-2 text-white uppercase bg-primary font-primary'>{name}</h3>
            </Link>
        </li>
    )
}

export default ListItem