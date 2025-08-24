import SportCard from "./SportCard";
import { sportsCardContent } from "@constants";

const SportCardList = () => {
  return (
    <div className="space-y-6 py-6 xs:columns-1 sm:gap-9 xl:columns-3">
      {sportsCardContent.map((sport, index) => (
        <SportCard key={index} {...sport} />
      ))}
    </div>
  );
};

export default SportCardList;
