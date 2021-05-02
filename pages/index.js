import styles from "../styles/Home.module.scss";
import useState from "react";
import Grid from "../components/Grid";

export default function Home() {
  // const [numBoxes, setNumBoxes] = useState(100);
  // const [numBombs, setNumBombs] = useState(20);

  // let numValids = numBoxes - numBombs;
  // let boxArr = [];

  // const bombArr = Array(numBombs).fill("bomb");
  // const validArr = Array(numValids).fill("valid");
  // validArr.push(...bombArr);
  // const shuffledArr = validArr.sort(() => Math.random() - 0.5);
  // shuffledArr.map((box, i) => {
  //   boxArr.push(<div key={i} id={i} className={styles[box]}></div>);
  // });
  return (
    <div className={styles.container}>
      <Grid></Grid>
      {/* <div className={styles.grid}>{boxArr.map((box) => box)}</div> */}
    </div>
  );
}
