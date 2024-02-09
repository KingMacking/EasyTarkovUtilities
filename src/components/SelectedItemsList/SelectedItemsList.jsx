import { faPlus, faMinus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const SelectedItemsList = ({items, setItems}) => {
    const deleteItem = (idToDelete) => {
        setItems(prevItems => prevItems.filter(item => item.id !== idToDelete));
    }

    const increaseQuantity = (idToUpdate) => {
        const updatedItems = items.map(item =>
            item.id === idToUpdate ? { ...item, quantity: item.quantity + 1 } : item
        );
        setItems(updatedItems);
    }

    const decreaseQuantity = (idToUpdate) => {
        const updatedItems = items.map(item =>
            item.id === idToUpdate && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
        );
        setItems(updatedItems);
    }
    return (
        <ul className="flex flex-wrap items-start justify-around h-full px-3 bg-[#101010] w-full py-2 rounded-md">
            {items.map((item, index) => (
                <li className='flex my-2 relative rounded-md items-center justify-center border basis-[18%] md:basis-[23%] aspect-square border-primary cursor-pointer' key={index}>
                    <span className="text-[10px] drop-shadow-sm text-white max-w-[60%] absolute top-1 left-2">{item.shortname}</span>
                    <button className="text-[10px] bg-primary text-white h-5 w-5 rounded-full flex justify-center items-center absolute top-1 right-2" onClick={() => deleteItem(item.id)}><FontAwesomeIcon icon={faXmark} /></button>
                    <img className='object-contain w-full h-full' src={`/icons/${item.img}`} alt={item.name} title={item.name} />
                    <div className="absolute flex items-center justify-center gap-1 text-white -translate-x-1/2 bottom-1 left-1/2">
                        <button className='flex text-[10px] items-center justify-center w-5 h-5 rounded-full bg-primary' onClick={() => decreaseQuantity(item.id)}><FontAwesomeIcon icon={faMinus} /></button>
                        <span className=''>{item.quantity}</span>
                        <button className='flex text-[10px] items-center justify-center w-5 h-5 rounded-full bg-primary' onClick={() => increaseQuantity(item.id)}><FontAwesomeIcon icon={faPlus} /></button>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default SelectedItemsList