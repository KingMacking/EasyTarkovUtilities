
const ShoppingItemsList = ({imageObjects, setItems, items}) => {
    const handleAddItemToList = (newItem) => {
        const index = items.findIndex(item => item.id === newItem.img.split('.')[0])
        if(index !== -1){
            const updatedItems = [...items]
            updatedItems[index].quantity += 1
            setItems(updatedItems)
        } else {
            setItems(prevItems => [...prevItems, {id: newItem.img.split('.')[0], quantity: 1, ...newItem}])
        }
    }
    return (
        <ul className="flex flex-wrap items-center justify-around w-full">
            {imageObjects.map((imageObject, index) => (
                <li onClick={() => handleAddItemToList(imageObject)} className='flex mb-2 relative rounded-md items-center justify-center border basis-[18%] md:basis-[23%] aspect-square border-primary cursor-pointer hover:scale-105 transition-all' key={index}>
                    <span className="absolute top-1 text-[10px] md:text-xs drop-shadow-sm text-white left-2">{imageObject.shortname}</span>
                    <img className='object-contain w-full h-full' src={`/icons/${imageObject.img}`} alt={imageObject.name} title={imageObject.name} />
                </li>
            ))}
        </ul>
    )
}

export default ShoppingItemsList