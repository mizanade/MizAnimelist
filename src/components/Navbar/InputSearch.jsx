"use client";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    event.preventDefault();
    const keyword = searchRef.current.value.trim();
    if (keyword === "") {
      return;
    }
    router.push(`/search/${keyword}`);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch(event);
    }
  };

  return (
    <div className="relative">
      <input
        placeholder="cari anime..."
        className="w-full p-2 rounded"
        ref={searchRef}
        onKeyDown={handleKeyDown}
      />
      <button
        className="absolute top-2 end-2"
        type="button"
        onClick={handleSearch}
      >
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
