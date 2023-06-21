export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <span className={`status ${isOnline ? 'is-online' : ''}`}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </>
  );
}
