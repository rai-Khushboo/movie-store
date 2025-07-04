import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movies/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import Footer from "./Footer";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    console.log("hello");

    const moviesCollection = collection(db, "movies"); 

    onSnapshot(moviesCollection, (snapshot) => {
      snapshot.docs.forEach((doc) => { 
        console.log(doc.data());
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );
    });

  }, [userName]);

  return (
    <Container>
      <div id="home">
        <ImgSlider />
      </div>
      <div id="viewers">
        <Viewers />
      </div>
      <div id="recommends">
        <Recommends />
      </div>
      <div id="new-disney">
        <NewDisney />
      </div>
      <div id="originals">
        <Originals />
      </div>
      <div id="trending">
        <Trending />
      </div>
      <div id="watchlist" style={{ minHeight: '200px', padding: '40px 0', color: '#fff', textAlign: 'center' }}>
        <h2>Watchlist (Coming Soon)</h2>
      </div>
      <Footer />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;