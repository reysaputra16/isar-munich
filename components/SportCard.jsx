"use client";
import { RefreshCcw } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const SportCard = ({ title, imageSrc, alt, backTitle, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`card-container ${isFlipped ? "flipped" : ""}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`card ${
          isFlipped ? "flipped" : ""
        } bg-lightBlue rounded-lg cursor-pointer`}
      >
        <div className="card-front p-6">
          <h3 className="font-satoshi font-semibold text-white text-2xl mb-10">
            {title}
          </h3>
          <Image src={imageSrc} alt={alt} width={300} height={300} />
          <RefreshCcw className="text-white absolute bottom-3" />
        </div>
        <div className="card-back p-6">
          <h2>{backTitle}</h2>
          <p>{backContent}</p>
          <RefreshCcw className="text-white absolute bottom-3" />
        </div>
      </div>
      {/* <div className="flex flex-1 justify-center items-center flex-col gap-3 p-6">
        <h3 className="font-satoshi font-semibold text-white text-2xl mb-10">
          {title}
        </h3>
        <Image src={imageSrc} alt={alt} width={300} height={300} />
        <RefreshCcw className="text-white absolute bottom-3" />
      </div>
      <div className="flex flex-1 justify-center items-center flex-col gap-3 p-6">
        <h3 className="font-satoshi font-semibold text-white text-2xl mb-10">
          Back Side
        </h3>
        <RefreshCcw className="text-white absolute bottom-3" />
      </div> */}
    </div>
  );
};

export default SportCard;
