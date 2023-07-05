const Header = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-col">
        <div className="tracking-wider text-center">
          <span className="text-lg md:text-xl font-extrabold">Hi 🧞‍♀️</span>
          <span className="text-lg md:text-xl"> I’m Software Developer</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-10 text-center">
          M. Haikal Rahmadi
        </h1>
        <button className="text-sm px-6 py-2 text-white rounded-full bg-gradient-to-tr from-violet-300 to-pink-400">
          Read More
        </button>
      </div>
    </>
  );
};

export default Header;
