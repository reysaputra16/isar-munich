"use client";

import { useState, useEffect } from "react";
import IdeaCard from "./IdeaCard";
import { ideasList } from "@constants";

const IdeaCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {ideasList.map((idea) => (
        <IdeaCard
          key={idea.id}
          title={idea.title}
          desc={idea.desc}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [ideas, setIdeas] = useState([]);

  const handleSearchChange = (e) => {};
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for an idea.."
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <IdeaCardList data={ideasList} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
