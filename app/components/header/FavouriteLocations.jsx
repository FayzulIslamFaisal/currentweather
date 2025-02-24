const FavouriteLocations = () => {
  return (
    <>
      <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
        <img src="./assets/heart.svg" alt="" />
        <span>Favourite Locations</span>
      </div>
    </>
  );
};

export default FavouriteLocations;
