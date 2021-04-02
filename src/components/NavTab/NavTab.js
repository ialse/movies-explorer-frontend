import './NavTab.css';
import { Link, animateScroll as scroll, scroller } from 'react-scroll';

function NavTab() {
  return (
    <a
      onClick={() =>
        scroller.scrollTo('about-project', {
          duration: 500,
          smooth: 'easeInQuad',
        })
      }
      className="nav-link"
    >
      <button className="nav-link__button">Узнать больше</button>
    </a>
  );
}

export default NavTab;
