"use client";

import React, { useState } from "react";
import GameCard from "../common/GameCard";
import PlayGameModal from "../common/PlayGameModal";

interface Game {
  id: string;
  title: string;
  thumbnail: string;
  creator: string;
  avatar: string;
  gameLink: string;
  views: number;
  likes: number;
}

const games: Game[] = [
  {
    id: "1",
    title: "Game 1",
    thumbnail:
      "https://imgs.search.brave.com/a69LC-NJ4m580Mt0rhCDfYSItwkfk5KLQFl7dlhwUAA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzQyLzU2LzA1/LzM2MF9GXzc0MjU2/MDU0OF9OSVc0cm5n/ZDFHZE9iVjB5bE43/SXR6aklNMm5USUky/US5qcGc",
    creator: "Creator 1",
    avatar: "",
    gameLink:
      "https://play.aicade.in/play/fa64270e-a063-43b2-b201-b5ac37d6ce9f",
    views: 102,
    likes: 102,
  },
  {
    id: "2",
    title: "Game 2",
    thumbnail:
      "https://imgs.search.brave.com/ZdeA-3rdPXek-IBrXDxZPzrWxqg0htprV03v50hkoek/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9yZXRyby04LWJp/dC1zdXBlci1tYXJp/by1jb25zb2xlLWdh/bWUtYmFja2dyb3Vu/ZC1oaWdoLXJlc29s/dXRpb24td2FsbHBh/cGVyLXZpbnRhZ2Ut/Z2FtaW5nLWZhbnNf/ODIwMDc0LTI1Mi5q/cGc_c2l6ZT02MjYm/ZXh0PWpwZw",
    creator: "Creator 1",
    avatar: "",
    gameLink:
      "https://play.aicade.in/play/fa64270e-a063-43b2-b201-b5ac37d6ce9f",
    views: 102,
    likes: 102,
  },
  {
    id: "3",
    title: "Game 3",
    thumbnail:
      "https://imgs.search.brave.com/EU2gQfxPwlRiZDDnCXoUymETvrrtpH3vEwJjW7NT93U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by92aW50YWdlLWdh/bWVib3lfOTMyNTE0/LTE2NjA1LmpwZz9z/aXplPTYyNiZleHQ9/anBn",
    creator: "Creator 1",
    avatar: "",
    gameLink:
      "https://play.aicade.in/play/fa64270e-a063-43b2-b201-b5ac37d6ce9f",
    views: 102,
    likes: 102,
  },
  {
    id: "4",
    title: "Game 4",
    thumbnail:
      "https://imgs.search.brave.com/vRR4OtzkRXRJ-Ews7PG7Q3SyrXqQtIzRutphkTE9d98/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9waXhlbC1hcnQt/b2xkLXZpZGVvLWdh/bWUtY29uc29sZS1j/aXR5c2NhcGUtYmFj/a2dyb3VuZC1yZXRy/by1zdHlsZS04LWJp/dC1nYW1lLWFpXzk4/NTEyNC0xOTA0Lmpw/Zz9zaXplPTYyNiZl/eHQ9anBn",
    creator: "Creator 1",
    avatar: "",
    gameLink:
      "https://play.aicade.in/play/fa64270e-a063-43b2-b201-b5ac37d6ce9f",
    views: 102,
    likes: 102,
  },
  {
    id: "5",
    title: "Game 1",
    thumbnail:
      "https://imgs.search.brave.com/MPleW1-7eXLQsAD844bQaXxejSsV-vVn5okqxWvxNgg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU3/NzM5MzkxL3Bob3Rv/L3ZpbnRhZ2UtcGFj/bWFuLXZpZGVvLWdh/bWUuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPTktRmN3MDJo/ZjRhc2F4NnVpQUtv/Ri1wNnJRVlRON2lm/cEZ1dm5yeHlTMVk9",
    creator: "Creator 1",
    avatar: "",
    gameLink:
      "https://play.aicade.in/play/fa64270e-a063-43b2-b201-b5ac37d6ce9f",
    views: 102,
    likes: 102,
  },
  {
    id: "6",
    title: "Game 2",
    thumbnail:
      "https://imgs.search.brave.com/12Hi6pL91Oo565uf1bDrB1Iq6-1apPR5RZ4Bm6dCghY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/MTE1MTI1NzgwNDct/ZGZiMzY3MDQ2NDIw/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRCOGZI/SmxkSEp2SlRJd1oy/RnRaWHhsYm53d2ZI/d3dmSHg4TUE9PQ",
    creator: "Creator 1",
    avatar: "",
    gameLink:
      "https://play.aicade.in/play/fa64270e-a063-43b2-b201-b5ac37d6ce9f",
    views: 102,
    likes: 102,
  },
  {
    id: "7",
    title: "Game 3",
    thumbnail:
      "https://imgs.search.brave.com/vey9_D-erGSzXKoQ5W3uefAX1hLyWP_yBgl9i0y9nCE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3Lzc2LzI0LzY5/LzM2MF9GXzc3NjI0/NjkyMV91RFI0VGRV/c0pUVVU4cXdoZHNN/RFI0aVd1RmpmWEdm/Zi5qcGc",
    creator: "Creator 1",
    avatar: "",
    gameLink:
      "https://play.aicade.in/play/fa64270e-a063-43b2-b201-b5ac37d6ce9f",
    views: 102,
    likes: 102,
  },
  {
    id: "8",
    title: "Game 4",
    thumbnail:
      "https://imgs.search.brave.com/9aJjuI81ipU-a1HQUKGhE7qwCmuwIXVsiuMEiP16_eM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzQ0LzQyLzI3/LzM2MF9GXzc0NDQy/Mjc1NV9DZ0RtaHQ3/dTYzYzFsWk40czBS/d05zbmFqTzBSdlRM/UC5qcGc",
    creator: "Creator 1",
    avatar: "",
    gameLink:
      "https://play.aicade.in/play/fa64270e-a063-43b2-b201-b5ac37d6ce9f",
    views: 102,
    likes: 102,
  },
];

const GameView = () => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  return (
    <div className="max-w-[1330px] h-fit m-auto">
      {
        <PlayGameModal
          selectedGame={selectedGame}
          setSelectedGame={setSelectedGame}
        />
      }
      <div className="md:px-4 mt-4">
        <div className="grid grid-col-1 md:grid-cols-2 gap-4 mb-4">
          <GameCard
            game={games[0]}
            setSelectedGame={setSelectedGame}
            isSmall={false}
          />
          <GameCard
            game={games[1]}
            setSelectedGame={setSelectedGame}
            isSmall={false}
          />
        </div>
        <div className="grid grid-col-1 md:grid-cols-3 gap-4">
          {games.slice(2).map((game, index) => (
            <GameCard
              game={game}
              setSelectedGame={setSelectedGame}
              key={index}
              isSmall={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameView;
