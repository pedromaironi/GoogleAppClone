function Avatar({ url }) {
  return (
    <img
      loading="lazy"
      src={url}
      className="h-10 rounded-full cursor-pointer
       transition duration-150 transform hover:scale-110 ml-auto"
      alt="profile pic"
    />
  );
}

export default Avatar;
