import styled from "styled-components";

const NewsItemBlock = styled.div`
  /* display: flex; */
  position: relative;
  width: 300px;
  height: 200px;
  :not(:nth-child(3n + 1)) {
    margin-left: 30px;
  }

  .thumbnail {
    img {
      display: block;
      width: 300px;
      height: 200px;
      object-fit: cover;
    }
  }
  .contents {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    h3 {
      font-size: 1.8rem;
      margin: 0;
      color: white;
    }
    p {
      text-align: center;
      margin: 0;
      margin-top: 0.5rem;
    }
  }
`;
const NewsItem = ({ article }) => {
  const { title, location, url, urlToImage } = article;
  return (
    <NewsItemBlock>
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h3>{title}</h3>
        <p>{location}</p>
      </div>
    </NewsItemBlock>
  );
};

export default NewsItem;
