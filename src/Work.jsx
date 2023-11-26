import PropTypes from 'prop-types';
import Classes from './_Work.module.scss';

const Work = ({ title, designer, thumbnail, link }) => {
  const handleClick = () => {
    window.location.href = link;
  };

  return (
    <div className={`${Classes.work}`} onClick={handleClick}>
      <div className={`${Classes.thumbnailContainer}`}>
        <img className={`${Classes.thumbnail}`} src={`${thumbnail}`}></img>
      </div>
      <div className={`${Classes.text}`}>
        <div className={`${Classes.padding}`}></div>
        <h2 className={`${Classes.title}`}>{title}</h2>
        <h3 className={`${Classes.designer}`}>{designer}</h3>
      </div>
    </div>
  );
};

Work.propTypes = {
  title: PropTypes.string,
  designer: PropTypes.string,
  thumbnail: PropTypes.string,
  link: PropTypes.string,
};

export default Work;
