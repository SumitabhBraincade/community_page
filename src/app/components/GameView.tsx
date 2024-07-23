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
  views: number;
  likes: number;
}

interface SelectedGame {
  id: string;
}

const games: Game[] = [
  {
    id: "1",
    title: "Game 1",
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/11a7/b64e/ae08d5955122f601d7e51efac6ec3b0b?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GI1l1Cvy54xu1Zf~jlqR8iki969dhjsLKhVHM-U~Ebq3uZ0EZBLUcBhLryeUtaOP6Xkx7msUQZj6o04O-5yrc0AlFX8Xl8eOMoXUaTRTaiEUWtE8VKra8IloOoPlmEn7eWbRVgbIgPzmR2SSw6uBDzpApNp9AQL0ieeRFO5NRSb-N-~jkgcRCHiuyLHrBN4fXCHwyhtZc493et6PW0lT8Oqu37CuSsiMNVXewsQ0RIlJR5jOCYfavz2r-HnfDdnq3XeP1yssmAUrCE8M86YmNvq~7NLP8iZAyFzLe4jPEZC3rlPywl58kBXnV7lzC4CnPNGLJNQaWVNftFi4deCvvw__",
    creator: "Creator 1",
    avatar: "",
    views: 102,
    likes: 102,
  },
  {
    id: "2",
    title: "Game 2",
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/11a7/b64e/ae08d5955122f601d7e51efac6ec3b0b?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GI1l1Cvy54xu1Zf~jlqR8iki969dhjsLKhVHM-U~Ebq3uZ0EZBLUcBhLryeUtaOP6Xkx7msUQZj6o04O-5yrc0AlFX8Xl8eOMoXUaTRTaiEUWtE8VKra8IloOoPlmEn7eWbRVgbIgPzmR2SSw6uBDzpApNp9AQL0ieeRFO5NRSb-N-~jkgcRCHiuyLHrBN4fXCHwyhtZc493et6PW0lT8Oqu37CuSsiMNVXewsQ0RIlJR5jOCYfavz2r-HnfDdnq3XeP1yssmAUrCE8M86YmNvq~7NLP8iZAyFzLe4jPEZC3rlPywl58kBXnV7lzC4CnPNGLJNQaWVNftFi4deCvvw__",
    creator: "Creator 1",
    avatar: "",
    views: 102,
    likes: 102,
  },
  {
    id: "3",
    title: "Game 3",
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/11a7/b64e/ae08d5955122f601d7e51efac6ec3b0b?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GI1l1Cvy54xu1Zf~jlqR8iki969dhjsLKhVHM-U~Ebq3uZ0EZBLUcBhLryeUtaOP6Xkx7msUQZj6o04O-5yrc0AlFX8Xl8eOMoXUaTRTaiEUWtE8VKra8IloOoPlmEn7eWbRVgbIgPzmR2SSw6uBDzpApNp9AQL0ieeRFO5NRSb-N-~jkgcRCHiuyLHrBN4fXCHwyhtZc493et6PW0lT8Oqu37CuSsiMNVXewsQ0RIlJR5jOCYfavz2r-HnfDdnq3XeP1yssmAUrCE8M86YmNvq~7NLP8iZAyFzLe4jPEZC3rlPywl58kBXnV7lzC4CnPNGLJNQaWVNftFi4deCvvw__",
    creator: "Creator 1",
    avatar: "",
    views: 102,
    likes: 102,
  },
  {
    id: "4",
    title: "Game 4",
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/11a7/b64e/ae08d5955122f601d7e51efac6ec3b0b?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GI1l1Cvy54xu1Zf~jlqR8iki969dhjsLKhVHM-U~Ebq3uZ0EZBLUcBhLryeUtaOP6Xkx7msUQZj6o04O-5yrc0AlFX8Xl8eOMoXUaTRTaiEUWtE8VKra8IloOoPlmEn7eWbRVgbIgPzmR2SSw6uBDzpApNp9AQL0ieeRFO5NRSb-N-~jkgcRCHiuyLHrBN4fXCHwyhtZc493et6PW0lT8Oqu37CuSsiMNVXewsQ0RIlJR5jOCYfavz2r-HnfDdnq3XeP1yssmAUrCE8M86YmNvq~7NLP8iZAyFzLe4jPEZC3rlPywl58kBXnV7lzC4CnPNGLJNQaWVNftFi4deCvvw__",
    creator: "Creator 1",
    avatar: "",
    views: 102,
    likes: 102,
  },
  {
    id: "5",
    title: "Game 1",
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/11a7/b64e/ae08d5955122f601d7e51efac6ec3b0b?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GI1l1Cvy54xu1Zf~jlqR8iki969dhjsLKhVHM-U~Ebq3uZ0EZBLUcBhLryeUtaOP6Xkx7msUQZj6o04O-5yrc0AlFX8Xl8eOMoXUaTRTaiEUWtE8VKra8IloOoPlmEn7eWbRVgbIgPzmR2SSw6uBDzpApNp9AQL0ieeRFO5NRSb-N-~jkgcRCHiuyLHrBN4fXCHwyhtZc493et6PW0lT8Oqu37CuSsiMNVXewsQ0RIlJR5jOCYfavz2r-HnfDdnq3XeP1yssmAUrCE8M86YmNvq~7NLP8iZAyFzLe4jPEZC3rlPywl58kBXnV7lzC4CnPNGLJNQaWVNftFi4deCvvw__",
    creator: "Creator 1",
    avatar: "",
    views: 102,
    likes: 102,
  },
  {
    id: "6",
    title: "Game 2",
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/11a7/b64e/ae08d5955122f601d7e51efac6ec3b0b?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GI1l1Cvy54xu1Zf~jlqR8iki969dhjsLKhVHM-U~Ebq3uZ0EZBLUcBhLryeUtaOP6Xkx7msUQZj6o04O-5yrc0AlFX8Xl8eOMoXUaTRTaiEUWtE8VKra8IloOoPlmEn7eWbRVgbIgPzmR2SSw6uBDzpApNp9AQL0ieeRFO5NRSb-N-~jkgcRCHiuyLHrBN4fXCHwyhtZc493et6PW0lT8Oqu37CuSsiMNVXewsQ0RIlJR5jOCYfavz2r-HnfDdnq3XeP1yssmAUrCE8M86YmNvq~7NLP8iZAyFzLe4jPEZC3rlPywl58kBXnV7lzC4CnPNGLJNQaWVNftFi4deCvvw__",
    creator: "Creator 1",
    avatar: "",
    views: 102,
    likes: 102,
  },
  {
    id: "7",
    title: "Game 3",
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/11a7/b64e/ae08d5955122f601d7e51efac6ec3b0b?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GI1l1Cvy54xu1Zf~jlqR8iki969dhjsLKhVHM-U~Ebq3uZ0EZBLUcBhLryeUtaOP6Xkx7msUQZj6o04O-5yrc0AlFX8Xl8eOMoXUaTRTaiEUWtE8VKra8IloOoPlmEn7eWbRVgbIgPzmR2SSw6uBDzpApNp9AQL0ieeRFO5NRSb-N-~jkgcRCHiuyLHrBN4fXCHwyhtZc493et6PW0lT8Oqu37CuSsiMNVXewsQ0RIlJR5jOCYfavz2r-HnfDdnq3XeP1yssmAUrCE8M86YmNvq~7NLP8iZAyFzLe4jPEZC3rlPywl58kBXnV7lzC4CnPNGLJNQaWVNftFi4deCvvw__",
    creator: "Creator 1",
    avatar: "",
    views: 102,
    likes: 102,
  },
  {
    id: "8",
    title: "Game 4",
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/11a7/b64e/ae08d5955122f601d7e51efac6ec3b0b?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GI1l1Cvy54xu1Zf~jlqR8iki969dhjsLKhVHM-U~Ebq3uZ0EZBLUcBhLryeUtaOP6Xkx7msUQZj6o04O-5yrc0AlFX8Xl8eOMoXUaTRTaiEUWtE8VKra8IloOoPlmEn7eWbRVgbIgPzmR2SSw6uBDzpApNp9AQL0ieeRFO5NRSb-N-~jkgcRCHiuyLHrBN4fXCHwyhtZc493et6PW0lT8Oqu37CuSsiMNVXewsQ0RIlJR5jOCYfavz2r-HnfDdnq3XeP1yssmAUrCE8M86YmNvq~7NLP8iZAyFzLe4jPEZC3rlPywl58kBXnV7lzC4CnPNGLJNQaWVNftFi4deCvvw__",
    creator: "Creator 1",
    avatar: "",
    views: 102,
    likes: 102,
  },
];

const GameView = () => {
  const [selectedGame, setSelectedGame] = useState<string>("");

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
          <GameCard game={games[0]} setSelectedGame={setSelectedGame} />
          <GameCard game={games[1]} setSelectedGame={setSelectedGame} />
        </div>
        <div className="grid grid-col-1 md:grid-cols-3 gap-4">
          {games.slice(2).map((game, index) => (
            <GameCard game={game} setSelectedGame={setSelectedGame} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameView;
