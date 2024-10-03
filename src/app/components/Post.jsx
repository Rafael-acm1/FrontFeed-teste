const Post = ({ title, link, description, imageFile }) => {
  const imageUrl =
    link ||
    (imageFile
      ? `http://localhost:1337/${imageFile}`
      : "https://via.placeholder.com/300");

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg mx-auto mb-8">
      <img className="w-full object-cover h-60" src={imageUrl} alt={title} />
      <div className="px-4 py-4">
        <div className="font-bold text-xl mb-2 text-blue-800">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default Post;
