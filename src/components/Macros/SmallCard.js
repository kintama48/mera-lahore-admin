import React from "react";

const SmallCard = ({
  title,
  subheading,
  content,
  Icon = null,
  onClick = null,
  bg = "bg-white",
  image = null,
}) => {
  return (
    <div
      className="rounded-md cursor-pointer shadow-lg bg-white h-30"
      onClick={onClick}
    >
      <div className="flex justify-between p-3">
        <div className="flex flex-col">
          <p className="text-gray-600">{subheading}</p>
          <span className="text-black">{content}</span>
        </div>
        {image && (
          <img src={image} className="w-[50px] h-[50px] rounded-[100%]" />
        )}
        <span className="w-[50px] h-[50px]">{Icon && Icon}</span>
      </div>
    </div>
  );
};

export default SmallCard;
