import { tabs } from '../const/const';

const Filter = (): JSX.Element => (
  <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {tabs.map((tab) => (
          <li key={tab} className="locations__item">
            <a className="locations__item-link tabs__item" href="#">
              <span>{tab}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  </div>
);

export default Filter;
