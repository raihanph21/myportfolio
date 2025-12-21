import imageJumbotron from "../assets/RMI_0895.JPG";

function Jumbotron() {
  return (
    <div className="flex m-auto mt-20 w-6xl">
      <img src={imageJumbotron} alt="gambar profil" className="size-56 object-cover rounded-full" />
      <div className="flex flex-col self-center ps-5">
        <h1 className="text-4xl font-bold">Muhammad Raihan</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, ipsum minus iusto dolore officia facilis repellat, alias unde magnam vero aperiam laudantium, sequi eius porro.</p>
      </div>
    </div>
  );
}

export default Jumbotron;
