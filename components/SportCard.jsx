"use client";
import { RefreshCcw } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const SportCard = ({ title, imageSrc, alt }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="card-container" onClick={() => setIsFlipped(!isFlipped)}>
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
          <h2>Back Side</h2>
          <p>Content goes here</p>
          <RefreshCcw className="text-white absolute bottom-3" />
        </div>
      </div>
    </div>
  );
};

export default SportCard;
