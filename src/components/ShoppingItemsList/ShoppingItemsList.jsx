
const ShoppingItemsList = ({imageObjects}) => {

    return (
        <ul className="flex flex-wrap items-center justify-around">
            {imageObjects.map((imageObject, index) => (
                <li className='flex mb-2 relative rounded-md items-center justify-center border basis-[18%] md:basis-1/4 aspect-square border-primary' key={index}>
                    <span className="absolute top-0 text-[10px] drop-shadow-sm text-white left-1">{imageObject.shortname}</span>
                    <img className='object-contain w-full h-full' src={`/icons/${imageObject.img}`} alt={imageObject.name} title={imageObject.name} />
                </li>
            ))}
        </ul>
    )
}

export default ShoppingItemsList