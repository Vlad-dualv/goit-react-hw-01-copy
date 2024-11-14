import css from './FriendListItem.module.css';
import clsx from 'clsx';

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  const statusClass = clsx(css.stat, isOnline ? css.online : css.offline);
  return (
    <div className={css.friendItem}>
      <img className={css.icon} src={avatar} alt="Avatar" width="48" />
      <p className={css.text}>{name}</p>
      <p className={statusClass}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
}
