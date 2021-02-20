import './Portfolio.css';

function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <div className="portfolio__site">
                <h3 className="portfolio__name-site">Статичный сайт</h3>
                <a className="portfolio__link-site" href="https://github.com/ialse/how-to-learn" target="_blank"></a>
            </div>
            <div className="portfolio__line"></div>
            <div className="portfolio__site">
                <h3 className="portfolio__name-site">Адаптивный сайт</h3>
                <a className="portfolio__link-site" href="https://github.com/ialse/russian-travel" target="_blank"></a>
            </div>
            <div className="portfolio__line"></div>
            <div className="portfolio__site">
                <h3 className="portfolio__name-site">Одностраничное приложение</h3>
                <a className="portfolio__link-site" href="https://github.com/ialse/react-mesto-auth" target="_blank"></a>
            </div>
        </section >
    );
}

export default Portfolio;