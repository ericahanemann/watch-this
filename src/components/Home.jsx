import MediaList from "./MediaList";

function Home() {
  return (
    <div className="relative h-full overflow-x-hidden flex flex-col">
      <div className="absolute inset-y-0 right-0 w-4/5 -z-10 bg-home-poster bg-center bg-cover"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-primary -z-10"></div>

      <div className="mb-4 h-full flex flex-col justify-between bg-gradient-to-r from-primary from-30% via-transparent to-trasparent">
        <div className="flex flex-col h-full gap-2 w-2/5 ml-24 mt-20 justify-start">
          <h3 className="text-4xl font-bold tracking-tighter">
            Homem-Aranha: Sem Volta para Casa
          </h3>
          <p>
            Em Homem-Aranha: Sem Volta para Casa, Peter Parker (Tom Holland)
            precisará lidar com as consequências da sua identidade como o herói
            mais querido do mundo após ter sido revelada pela reportagem do
            Clarim Diário, com uma gravação feita por Mysterio (Jake Gyllenhaal)
            no filme anterior.
          </p>
        </div>

        <MediaList />
      </div>
    </div>
  );
}

export default Home;
