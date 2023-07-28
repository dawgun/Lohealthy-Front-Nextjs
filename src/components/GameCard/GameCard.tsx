import { Game } from "@/types/gameTypes";
import Image from "next/image";
import styles from "./Gamecards.module.css";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps): JSX.Element => {
  const maxLettersSynopsis = 80;

  return (
    <li className={styles.game}>
      <Image
        width={90}
        height={160}
        src={game.backupImage}
        alt={`${game.title} game`}
        className={styles.game__image}
      />
      <div className={styles.game__info}>
        <h3 className={styles.game__title}>{game.title}</h3>
        <p className={styles.game__synopsis}>{`${game.synopsis.slice(
          0,
          maxLettersSynopsis
        )}...`}</p>
      </div>
    </li>
  );
};

export default GameCard;
