import './AboutMe.css';
import myfoto from '../../images/myfoto.jpg';

function AboutMe() {
    return (
        <section className="about-me">
            <div className="about-me__container">
                <h2 className="about-me__title">Студент</h2>
                <div className="about-me__line"></div>
                <div className="about-me__main">
                    <div className="about-me__textblock">
                        <h3 className="about-me__name">Алексей</h3>
                        <p className="about-me__specialty">Фронтенд-разработчик, 34 года</p>
                        <p className="about-me__details">Я родился и живу в Санкт-Петербурге, закончил ИТМО. Женат. Играю на гитаре, увлекаюсь спортом, настольными играми. Недавно начал кодить. С 2013 года работаю в ИТ-компании «Комита». После того, как прошёл курс по веб-разработке, ищу работу фронтенд-разработчиком.</p>
                        <div className="about-me__links">
                            <a className="about-me__link" href="https://vk.com/id35075128" target="_blank">Facebook</a>
                            <a className="about-me__link" href="https://github.com/ialse" target="_blank">Github</a>
                        </div>
                    </div>
                    <img className="about-me__fotoblock" alt="Фото" src={myfoto}></img>
                </div>
            </div>
        </section >
    );
}

export default AboutMe;