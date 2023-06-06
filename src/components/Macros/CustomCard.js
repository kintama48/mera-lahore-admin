import React from 'react'

const CustomCard = ({ title, image, variant, subheading, content, Icon = null, onClick=null, bg="bg-white" }) => {
    const colorScheme = variant === 'white' ? `text-gray-700 ${bg}` : ''
    return (
        <div
            className={`flex flex-col p-3 text-left ${colorScheme} gap-4 h-[300px] w-full rounded-md shadow-lg cursor-pointer ${bg}`}
            onClick={onClick}
        >
            <div className="flex text-left gap-2 mt-5 ml-5 text-lg justify-between">
                <h1>{title}</h1>
                <span>{Icon && Icon}</span>
            </div>
            {content && <span className="text-black ml-5">{content}</span>}
            {image && (
                <img src={image} className="w-[50px] h-[50px] rounded-[100%]" />
            )}
        </div>
    )
}

export default CustomCard
