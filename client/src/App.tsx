import { images } from "./lib/images";

function App() {
  return (
    <>
      <h1 className=" text-5xl text-center font-bold mt-20">Pokeffective</h1>
      <div className="flex overflow-x-auto gap-x-5 mt-20 p-5 sm:justify-center">
        {images.map((image, index) => (
          <img
            src={image}
            alt="pokemontype"
            key={index}
            width={100}
            height={100}
          />
        ))}
      </div>
    </>
  );
}

export default App;
