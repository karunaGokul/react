import React, { useState } from "react";

const NewNovelForm = ({ novel }: any) => {
    const [ title, setTitle ] = useState('');
    const handleSubmit = (e: any) => {
        e.preventDefault();
        novel(title);
        setTitle('');
    }
  return (
    <form onSubmit={handleSubmit}>
      <label>Novel Name: </label>
      <input
        type="text"
        required
        value={title}
        onChange={(e) => { setTitle(e.target.value) }}
        className="mt-3 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
      />
      <button
        type="submit"
        className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Novel
      </button>
    </form>
  );
};

export default NewNovelForm;
