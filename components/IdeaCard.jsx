import Image from "next/image";

const IdeaCard = ({
  title,
  desc,
  handleTagClick,
  handleEdit,
  handleDelete,
}) => {
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image
            src={"/images/logo.svg"}
            alt="logo"
            width={30}
            height={30}
            className="object-contain"
          />
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {title}
            </h3>
          </div>
        </div>
        <div className="copy_btn" onClick={() => {}}>
          <Image
            src={"/icons/copy.svg"}
            alt="copy icon"
            width={12}
            height={12}
          />
        </div>
      </div>
      <p className="my-4 font-satoshi text-sm text-gray-700">{desc}</p>
    </div>
  );
};

export default IdeaCard;
