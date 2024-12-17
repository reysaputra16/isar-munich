import Image from "next/image";

const SportCard = ({ title, imageSrc, alt }) => {
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex flex-col justify-start items-center gap-3 cursor-pointer">
          <h3 className="font-satoshi font-semibold text-white text-2xl mb-10">
            {title}
          </h3>
          <Image src={imageSrc} alt={alt} width={300} height={300} />
        </div>
      </div>
    </div>
  );
};

export default SportCard;
