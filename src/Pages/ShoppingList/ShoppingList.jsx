
import { useState } from 'react';
import ITEMS_IMAGES from '../../data/imageList.json'
import ITEMS_IMAGES_INFO from '../../data/items.json'
import ShoppingItemsList from '../../components/ShoppingItemsList/ShoppingItemsList';

const ShoppingList = () => {
    const ITEMS_PER_PAGE = 20
    const [currentPage, setCurrentPage] = useState(1)
    const [searchQuery, setSearchQuery] = useState('');

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, ITEMS_IMAGES.length);

    const filteredItems = ITEMS_IMAGES.filter(imageName => {
        const id = imageName.split('.')[0]; // Remove file extension to get the ID
        const Name = ITEMS_IMAGES_INFO[`${id} Name`];
        return Name?.toLowerCase().includes(searchQuery);
    });

    const currentPageItems = filteredItems.slice(startIndex, endIndex);
    
    const imageObjects = currentPageItems.map(imageName => {
        const id = imageName.split('.')[0]

        return {
            name: ITEMS_IMAGES_INFO[`${id} Name`],
            shortname: ITEMS_IMAGES_INFO[`${id} ShortName`],
            description: ITEMS_IMAGES_INFO[`${id} Description`],
            img: imageName
        }
    })

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        setCurrentPage(1); // Reset to first page when search query changes
    };

    return (
        <section className='flex flex-wrap items-center justify-center w-full min-h-screen bg-black md:flex-nowrap'>
            <div className='flex flex-col items-center justify-center md:basis-1/2'>
                <input className='bg-[#101010] mb-4 px-4 py-2 border border-primary rounded-md w-4/5' type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Search..." />
                <ShoppingItemsList imageObjects={imageObjects}/>
                <div className='flex gap-3 mt-4'>
                    <button className='px-4 py-2 text-white rounded-md min-w-24 bg-primary' onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                    <button className='px-4 py-2 text-white rounded-md min-w-24 bg-primary' onClick={() => handlePageChange(currentPage + 1)} disabled={endIndex >= ITEMS_IMAGES.length}>Next</button>
                </div>
            </div>
            <div className='flex flex-col md:basis-1/2'>
                <ul>
                    <li>asdasd</li>
                </ul>
            </div>
        </section>
    )
}

export default ShoppingList