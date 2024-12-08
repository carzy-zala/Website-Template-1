const Home = () => {
  return (
    <>
      <section>
        <div className="flex p-10 justify-around">
          <div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/frontend-developer-7464456-6109659.png?f=webp"
              alt="image"
              width="400"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-6xl">Lorem Ipsum</h1>
            <h1 className="my-2 text-4xl">Lorem Ipsum</h1>
            <div>
              <button className="my-4 bg-red-500 text-white px-6 text-2xl rounded-md py-2">
                Get Now
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-col items-center justify-center m-10">
            <div>
              <img
                src="https://www.textanywhere.com/wp-content/uploads/images/textanywhere/website/developer-zone-banner.svg"
                alt="img-img-dev"
                width="400"
              />
            </div>
            <h1 className="text-5xl text-center">Lorem Ipsum</h1>
            <div>
              <button className="my-4 bg-red-500 text-white px-6 text-2xl rounded-md py-2">
                Explore more
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
