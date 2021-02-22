import './Profile.css';

function Profile() {
    return (
        <section className="profile">
            <div className="profile__container">
                <h2 className="profile__title">Привет, Виталий!</h2>
                <form className="profile__form">
                    <label className="profile__field">
                        <span className="profile__name" >Имя</span>
                        <input className="profile__input" type="text" value="Виталий"></input>
                    </label>
                    <div className="profile__line"></div>
                    <label className="profile__field">
                        <span className="profile__name" >Почта</span>
                        <input className="profile__input" type="text" value="pochta@yandex.ru"></input>
                    </label>
                    <button className="profile__edit">Редактировать</button>

                </form>
                <button className="profile__out">Выйти из аккаунта</button>
            </div>
        </section >
    );
}

export default Profile;