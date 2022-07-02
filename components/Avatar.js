function Avatar({ url, className }) {
  return (
    <img
      loading="lazy"
      src={url}
      alt="profile-pic"
      className={`h-10 transition duration-150 transform rounded-full cursor-pointer hover:scale-110 ${className}`}
    />
  );
}

export default Avatar;
