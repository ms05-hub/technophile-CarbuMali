import { useState } from 'react';
import '/src/Globals.css';

function Filter() {
    const [showCard, setShowCard] = useState(false);
    const [selectedType, setSelectedType] = useState(null);
    const type = ['Essence', 'Gasoil'];

    const colors = [
        { name: 'vert', color: '#5CDA0E', selectedColor: '#45a100' },
        { name: 'orange', color: '#ECBD14', selectedColor: '#c29d00' },
        { name: 'rouge', color: '#F40E0E', selectedColor: '#b50000' },
        { name: 'gris', color: '#999393', selectedColor: '#5e5e5e' }
    ];

    const [selectedColors, setSelectedColors] = useState([]);

    const toggleColor = (name) => {
        if (selectedColors.includes(name)) {
            setSelectedColors(selectedColors.filter((c) => c !== name));
        } else {
            setSelectedColors([...selectedColors, name]);
        }
    };

    const [selectedDistances, setSelectedDistances] = useState([]);
    const distances = [500, 600, 700, 800];

    const toggleSelection = (distance) => {
        if (selectedDistances.includes(distance)) {
            setSelectedDistances(selectedDistances.filter(d => d !== distance));
        } else {
            setSelectedDistances([...selectedDistances, distance]);
        }
    };

    // ✅ Carte affichée conditionnellement
    const card = (
        <section className='flex items-center justify-center'>
            <div className='grid grid-flow-col grid-rows-2 w-[298px] h-[120px] bg-[#FED766] rounded-[20px] px-5 py-2 gap-x-5 gap-y-4'>

                {/* ✅ Disponibilité */}
                <div className='flex flex-col gap-y-2 row-span-1 col-span-1'>
                    <p className='text-xs'>Disponibilité</p>
                    <div className="flex gap-x-2">
                        {colors.map(({ name, color, selectedColor }) => {
                            const isSelected = selectedColors.includes(name);
                            const backgroundColor = isSelected ? selectedColor : color;

                            return (
                                <div
                                    key={name}
                                    onClick={() => toggleColor(name)}
                                    className="w-[30px] h-[30px] rounded-full cursor-pointer flex items-center justify-center transition-all duration-300"
                                    style={{ backgroundColor }}
                                >
                                    {isSelected && (
                                        <span className="text-white text-xs font-bold">✔</span>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* ✅ Types */}
                <div className='flex flex-col col-span-2 gap-y-2'>
                    <p className='text-xs'>Types</p>
                    <ul className="flex gap-x-2.5">
                        {type.map((type) => (
                            <li key={type}>
                                <div
                                    onClick={() => setSelectedType(type)}
                                    className={`flex items-center justify-center w-[50px] h-[14px] rounded-[15px] cursor-pointer 
                                        ${selectedType === type ? 'bg-[#2AB7CA]' : 'bg-[#F4F4F8]'}`}
                                >
                                    <p className="text-[10px] transition-colors duration-300">{type}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* ✅ Distances */}
                <div className='sm: flex flex-col gap-y-1.5 row-span-2 items-center'>
                    <p className='text-xs'>Distance(m)</p>
                    <ul className="sm: flex flex-col items-center gap-2">
                        {distances.map((distance) => (
                            <li key={distance}>
                                <div
                                    onClick={() => toggleSelection(distance)}
                                    className={`flex items-center justify-center w-[49px] h-[16px] rounded-[15px] cursor-pointer 
                                        ${selectedDistances.includes(distance) ? 'bg-[#2AB7CA]' : 'bg-[#F4F4F8]'}`}
                                >
                                    <p className="text-[10px] transition-colors duration-300">
                                        {distance}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );

    // ✅ Composant principal
    return (
        <div className="flex gap-x-2">
            {/* Bouton filtre */}
            <img
                src="/src/assets/filter.png"
                alt="Filter"
                className="w-[35px] h-[31px] cursor-pointer"
                onClick={() => setShowCard(!showCard)}
            />

            {/* Affichage de la carte */}
            {showCard && card}
        </div>
    );
}

export default Filter;
