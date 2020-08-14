import React, { useState, useEffect } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import database from "./firebase";

const TinderCards = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const unsubscribe = database
      .collection("Animals")
      .onSnapshot((snapshot) => {
        setPeople(snapshot.docs.map((doc) => doc.data()));
      });

    return () => {
      // this is the clean up...
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <div className="tinderCards_cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
