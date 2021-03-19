import { Link, useHistory } from 'react-router-dom';

import './NotFoundPage.css';

function NotFoundPage() {
  const history = useHistory();

  function handleClick() {
    history.goBack();
  }

  return (
    <section className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__subtitle">Страница не найдена</p>
      <button className="not-found__back" onClick={handleClick}>
        Назад
      </button>
    </section>
  );
}

export default NotFoundPage;
