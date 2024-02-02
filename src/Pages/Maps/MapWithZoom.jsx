import { faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const MapWithZoom = ({ name, label}) => {
    const Controls = ({ zoomIn, zoomOut, resetTransform }) => (
        <div className="absolute z-10 flex gap-2 -translate-x-1/2 left-1/2 top-2">
            <button className="flex items-center justify-center w-24 px-2 py-3 text-2xl bg-white rounded-md" onClick={() => zoomIn()}><FontAwesomeIcon icon={faPlus} /></button>
            <button className="flex items-center justify-center w-24 px-2 py-3 text-2xl bg-white rounded-md" onClick={() => zoomOut()}><FontAwesomeIcon icon={faMinus} /></button>
            <button className="flex items-center justify-center w-24 px-2 py-3 text-2xl bg-white rounded-md font-primary" onClick={() => resetTransform()}><FontAwesomeIcon icon={faXmark} /></button>
        </div>
    );
    
    return (
        <main className="w-4/5 h-full">
            <TransformWrapper>
                {(utils) => (
                    <>
                        <Controls {...utils} />
                        <TransformComponent>
                            <img className="w-full" src={`/${name}.webp`} alt={`Map of ${label}`} />
                        </TransformComponent>
                    </>
                )}
            </TransformWrapper>
        </main>
    )
}

export default MapWithZoom