import SportCard from "./SportCard";

const SportCardList = () => {
  return (
    <div className="space-y-6 py-6 xs:columns-1 sm:gap-9 md:columns-3">
      <SportCard
        title="Futsal"
        imageSrc="/images/futsal.png"
        alt="futsal-photo"
      />
      <SportCard
        title="Basket"
        imageSrc="/images/basket.png"
        alt="basket-photo"
      />
      <SportCard
        title="Voli"
        imageSrc="/images/volley.png"
        alt="volley-photo"
      />
    </div>
  );
};

export default SportCardList;
