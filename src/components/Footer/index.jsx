import './style.css';

const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/Govepitr"
        target="_blank" rel="noreferrer"
      >
        <img
          src={`${process.env.PUBLIC_URL}/Github.png`}
          alt="GitHub-icon"
        />
      </a>
      <a href="https://www.linkedin.com/in/dan-arbelo/"
        target="_blank" rel="noreferrer"
      >
        <img
          src={`${process.env.PUBLIC_URL}/Linkedin.png`}
          alt="Linkedin-icon"
        />
      </a>
      <a href="https://www.youtube.com/channel/UCvzMRtgn4J34Zfk70fJGZww"
        target="_blank" rel="noreferrer"
      >
        <img
          src={`${process.env.PUBLIC_URL}/Youtube.png`}
          alt="YouTube-icon"
        />
      </a>
      <a href="https://steamcommunity.com/id/Govepitr"
        target="_blank" rel="noreferrer"
      >
        <img
          src={`${process.env.PUBLIC_URL}/Steam.png`}
          alt="Steam-icon"
        />
      </a>
    </footer>
  )
};

export default Footer
