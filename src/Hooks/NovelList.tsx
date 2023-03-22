import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import NewNovelForm from "./NewNovelForm";

const NovelList = () => {
  const [novels, setNovels] = useState([
    { title: "wings of fire", id: 1 },
    { title: "fear not be strong", id: 2 },
    { title: "believe in yourself", id: 3 },
  ]);

  const [ age, setAge ] = useState(20);

  const newId: any = uuidv4();

  const addNovel = (title: any) => {
    setNovels([...novels, { title, id: newId }]);
  };

  useEffect(() => {
    console.log("useEffect hook", novels);
  }, [novels])

  useEffect(() => {
    console.log("useEffect hook", age);
  }, [age])

  return (
    <div>
      <ul>
        {novels.map((novel) => {
          return <li key={novel.id}>{novel.title}</li>;
        })}
      </ul>
      <NewNovelForm novel={addNovel} />
      <button onClick={() => setAge(age+1)}>Add 1 to age: {age}</button>
    </div>
  );
};

export default NovelList;
