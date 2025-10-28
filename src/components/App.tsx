import { useState } from "react";
import css from "./App.module.css";
import CafeInfo from "./CafeInfo";
import VoteOptions from "./VoteOptions";
import type { Votes, VoteType } from "../types/votes.ts";
import VoteStats from "./VoteStats";
import Notification from "./Notification";

function App() {
  // 🔹 Початковий стан голосів
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // 🔹 Функція для додавання голосу
  const handleVote = (type: VoteType) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [type]: prevVotes[type] + 1, // динамічно оновлюємо поле good/neutral/bad
    }));
  };

  // 🔹 Функція для скидання всіх голосів
  const resetVotes = () => {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  };
  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate =
    totalVotes > 0 ? Math.round((votes.good / totalVotes) * 100) : 0;

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={totalVotes > 0}
      />
      {totalVotes > 0 && (
        <VoteStats
          votes={votes}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      )}
      {totalVotes === 0 && <Notification />}
    </div>
  );
}

export default App;
