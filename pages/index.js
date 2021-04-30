import styles from "../styles/Home.module.scss";

export default function Home() {
  let boxes = [];
  let gridSize = 100;
  for (let i = 1; i <= gridSize; i++) {
    boxes.push(<div key={i} id={i} className={styles.box}></div>);
  }
  const bombBoxes = Array(gridSize - 80).fill("bomb");
  const emptyBoxes = Array(gridSize - 20).fill("valid");

  return (
    <div className={styles.container}>
      <div className={styles.grid}>{boxes.map((box) => box)}</div>
    </div>
  );
}
