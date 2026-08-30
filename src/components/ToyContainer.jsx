import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDelete, onLike }) {
  return (
    <div id="toy-collection">
      {toys.map((toy) => (
        <ToyCard
          key={toy.id}
          toy={toy}
          onDelete={onDelete}
          onLike={onLike}
        />
      ))}
    </div>
  );
}

export default ToyContainer;