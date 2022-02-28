const User = (user) => {
  return (
    <>
      <img href={user.image} alt={user.name} />
      <h2>{user.name}</h2>
    </>
  );
};

export default User;
