import css from './Profile.module.css';
import { FiAtSign } from 'react-icons/fi';

export default function Profile({
  profile: { name, tag, location, image, stats },
}) {
  return (
    <div className={css.container}>
      <div>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.text}>
          <FiAtSign />
          {tag}
        </p>
        <p className={css.text}>{location}</p>
      </div>

      <ul className={css.statsList}>
        <li className={css.statsItem}>
          <span>Followers</span>
          <span className={css.stats}>{stats.followers}</span>
        </li>
        <li className={css.statsItem}>
          <span>Views</span>
          <span className={css.stats}>{stats.views}</span>
        </li>
        <li className={css.statsItem}>
          <span>Likes</span>
          <span className={css.stats}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
