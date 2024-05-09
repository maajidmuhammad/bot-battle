import React from "react";
import BotCard from "./BotCard"

function BotCollection({bots, addToArmy, removeFromArmy}) {
  console.log(bots)
  return (
    <div>
      <div className="bot_container">
      {bots && bots.map(bot => (
         <BotCard key={bot.id} bot={bot} addToArmy={addToArmy} removeFromArmy={removeFromArmy} />
        ))}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;