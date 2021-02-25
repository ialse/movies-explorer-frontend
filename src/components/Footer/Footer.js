import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <div className="footer__line"></div>
                <div className="footer__main">
                    <p className="footer__copyright">&copy; 2021</p>
                    <div className="footer__links">
                        <a className="footer__link" href="https://github.com/ialse/how-to-learn" target="_blank">Яндекс.Практикум</a>
                        <a className="footer__link footer__link_facebook" href="https://vk.com/id35075128" target="_blank">Facebook</a>
                        <a className="footer__link footer__link_github" href="https://github.com/ialse" target="_blank">Github</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;