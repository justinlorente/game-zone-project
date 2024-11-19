import TheWitcher3 from '../../images/The-witcher-3.jpg';
import Uncharted4 from '../../images/Uncharted-4.jpg';
import BestBuy from '../../images/Best-buy.jpg';
import CrytekWarface from '../../images/crytek-warface.jpg';
import NoImage from '../../images/no-image.svg';

const GetImage = (props) => {
  const id = props;
  let fn;

  const image = {
    1: function () {
      return TheWitcher3;
    },
    2: function () {
      return Uncharted4;
    },
    3: function () {
      return BestBuy;
    },
    4: function () {
      return CrytekWarface;
    },
    default: function () {
      return NoImage;
    },
  };

  if (image[id]) {
    fn = image[id];
  } else {
    fn = image['default'];
  }

  return fn();
};

export default GetImage;
