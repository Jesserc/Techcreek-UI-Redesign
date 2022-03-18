import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/learn.scss";

/* const api_key= 'c4084f4ff50cb99442df8d12e1551bdc'
// const baseURL="https://api.themoviedb.org/3"
const baseURL="https://api.themoviedb.org/3/movie/popular?api_key=c4084f4ff50cb99442df8d12e1551bdc&language=en-US&page=1"
 */

const LearnPage = () => {
  /* creating state hook for the page and setting default value to null */
  const [videoPost, setvideoPost] = useState(null);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    /* making get request to api using axios */
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=c4084f4ff50cb99442df8d12e1551bdc&language=en-US&page=10",
      )
      .then((res) => {
        setvideoPost(res.data.results);
        console.log(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div
      className="learn--layout"
      style={
        {
          /*  height: '100vh !important' */
        }
      }>
      <div className="header--wrapper">
        <div className="learn--headers">
          <h1>
            <span style={{ color: "#122646"}}>
              Learn
            </span>
            with Us,
          </h1>
        </div>

        <div className="learn--texts">
          <p>
            “Learning is not attained by chance, it must be sought for with
            ardor and attended to with diligence.” At Tech Creek, we prioritize quality education, connection and self-awareness.
          </p>
          <p>
            We offer awesome tutorial videos and courses to get you into your
            tech journey, with fun filled and interactive sessions
          </p>
          <div className="color-div"></div>
        </div>
      </div>

      <div className="box-one">{/* box shape styling */}</div>

      <div className="box-one">{/* box shape styling */}</div>

      <div className="box-two">{/* box shape styling */}</div>

      <div className="container">
        {Loading && <p>Loading Tutorial Videos, Please Wait...</p>}
        {videoPost &&
          videoPost.map((video) => {
            return (
              <div className="video--section">
                <div className="video--container">
                  <div className="image--section">
                    <img
                      src={`https://image.tmdb.org/t/p/w200${video.poster_path}`}
                      alt=""
                    />
                  </div>

                  <div className="text--section">
                    <div className="title">
                      <h4>
                        {" "}
                        <span>{video.title}</span>{" "}
                      </h4>
                    </div>

                    <div className="description">
                      <p> {video.overview} </p>

                      <h6> {video.release_date} </h6>
                    </div>
                    <button>View This Course</button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default LearnPage;
