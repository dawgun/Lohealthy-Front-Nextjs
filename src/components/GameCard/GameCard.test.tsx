import { render, screen } from "@testing-library/react";
import GameCard from "./GameCard";

describe("Given the GameCard component", () => {
  describe("When it's instantiated", () => {
    const game = {
      title: "The Legend of Zelda",
      image: "/zelda.jpg",
      backupImage: "/backup-zelda.jpg",
      players: "One Player",
      genre: "RPG",
      release: "18/08/23",
      synopsis:
        "El primer juego de zelda donde aparece la princesa secuestrada y todos lo quieren matar.",
      id: "1",
      owner: "2",
    };

    test("Then should show an image with alternative text of game", () => {
      const alternativeText = `${game.title} game`;

      render(<GameCard game={game} />);

      const gameImage = screen.getByRole("img", { name: alternativeText });

      expect(gameImage).toBeInTheDocument();
    });

    test("Then should show the title 'The Legend of Zelda' in a heading", () => {
      render(<GameCard game={game} />);

      const gameTitle = screen.getByRole("heading", { name: game.title });

      expect(gameTitle).toBeInTheDocument();
    });

    test("Then should show the synopsys cutted", () => {
      const maxLettersSynopsis = 80;
      const synopsisRetailed = `${game.synopsis.slice(
        0,
        maxLettersSynopsis
      )}...`;

      render(<GameCard game={game} />);

      const gameSynopsis = screen.getByText(synopsisRetailed);

      expect(gameSynopsis).toBeInTheDocument();
    });
  });
});
