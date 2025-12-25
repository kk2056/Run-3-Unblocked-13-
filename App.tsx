
import React, { useState, useMemo } from 'react';
import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { Game } from './types';

// --- DATA: Central Game Registry ---
const GAMES: Game[] = [
  {
    id: 'run-3',
    name: 'Run 3 Unblocked',
    url: 'https://unblocked-games.s3.amazonaws.com/run-3.html',
    description: 'The legendary space runner. Navigate tunnels in deep space.',
    thumbnail: 'https://picsum.photos/seed/run3/400/300',
    category: 'Action'
  },
  {
    id: 'run-2',
    name: 'Run 2 Classic',
    url: 'https://unblocked-games.s3.amazonaws.com/run-2.html',
    description: 'The prequel to the hit series. Classic jumping mechanics.',
    thumbnail: 'https://picsum.photos/seed/run2/400/300',
    category: 'Retro'
  },
  {
    id: 'tunnel-rush',
    name: 'Tunnel Rush',
    url: 'https://unblocked-games.s3.amazonaws.com/tunnel-rush.html',
    description: 'Fast-paced evasion in a neon tunnel.',
    thumbnail: 'https://picsum.photos/seed/tunnel/400/300',
    category: 'Skill'
  },
  {
    id: 'slope',
    name: 'Slope Unblocked',
    url: 'https://unblocked-games.s3.amazonaws.com/slope.html',
    description: 'Infinite downhill speed challenges.',
    thumbnail: 'https://picsum.photos/seed/slope/400/300',
    category: 'Speed'
  }
];

// --- COMPONENT: AdBanner (Placeholder for Safety) ---
const AdBanner: React.FC = () => (
  <div className="w-full bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-4 mb-6 flex items-center justify-center min-h-[100px]">
    <span className="text-gray-500 font-bold uppercase tracking-widest text-sm">Advertisement Space (Safe Mode)</span>
  </div>
);

// --- COMPONENT: Header ---
const Header: React.FC = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800 px-4 py-3 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <Link to="/" className="text-2xl font-black tracking-tighter text-blue-500 hover:text-blue-400 transition">
        RUN 3 <span className="text-white">2025</span>
      </Link>
      
      <nav className="flex items-center gap-6 font-bold text-sm uppercase">
        <Link to="/" className="hover:text-blue-500 transition">Home</Link>
        <button className="hover:text-blue-500 transition opacity-50 cursor-not-allowed">Popular</button>
        <button className="hover:text-blue-500 transition opacity-50 cursor-not-allowed">New</button>
      </nav>

      <div className="relative flex items-center w-full sm:w-64">
        <input 
          type="text" 
          placeholder="SEARCH GAMES..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-gray-800 border border-gray-700 px-4 py-2 rounded-full text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          className="absolute right-3 text-xs font-bold text-gray-400 hover:text-white"
          onClick={() => alert(`Searching for: ${search}`)}
        >
          GO
        </button>
      </div>
    </header>
  );
};

// --- COMPONENT: Home Page ---
const Home: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-8">
      <section className="mb-12">
        <h1 className="text-4xl sm:text-6xl font-black mb-4 uppercase tracking-tighter leading-none">
          Unblocked Games <br />
          <span className="text-blue-600">Chromebook 2025</span>
        </h1>
        <p className="text-gray-400 max-w-2xl text-lg">
          The best collection of space runners and arcade classics. No downloads, no blocked filters, just high-performance gaming.
        </p>
      </section>

      <AdBanner />

      <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
        <span className="w-2 h-6 bg-blue-600 rounded-full"></span>
        FEATURED GAMES
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {GAMES.map((game) => (
          <Link 
            key={game.id} 
            to={`/game/${game.id}`}
            className="group relative bg-gray-800 rounded-xl overflow-hidden hover:ring-4 hover:ring-blue-600/50 transition-all transform hover:-translate-y-1"
          >
            <img src={game.thumbnail} alt={game.name} className="w-full aspect-[4/3] object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 p-4">
              <span className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded font-black mb-1 inline-block uppercase">{game.category}</span>
              <h3 className="text-xl font-black uppercase text-white leading-tight">{game.name}</h3>
            </div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-white text-black px-6 py-2 rounded-full font-black text-sm shadow-xl">PLAY NOW</div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-16 bg-gray-900 border border-gray-800 rounded-2xl p-8 sm:p-12">
        <h3 className="text-3xl font-black mb-6 uppercase">Why Play Run 3 Unblocked Here?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold text-blue-500 mb-2 underline">CHROMEBOOK READY</h4>
            <p className="text-sm text-gray-400">Optimized for low-spec hardware. We use lightweight containers to ensure 60FPS on any school laptop.</p>
          </div>
          <div>
            <h4 className="font-bold text-blue-500 mb-2 underline">ALWAYS ONLINE</h4>
            <p className="text-sm text-gray-400">Our mirrors are updated weekly to stay ahead of network restrictions. Play Run 3 anywhere.</p>
          </div>
          <div>
            <h4 className="font-bold text-blue-500 mb-2 underline">ZERO DOWNLOADS</h4>
            <p className="text-sm text-gray-400">Pure web-based experience. No flash, no plugins, just modern HTML5 and S3 buckets.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- COMPONENT: Game Player ---
const GamePlayer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const game = useMemo(() => GAMES.find(g => g.id === id), [id]);

  if (!game) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
        <h2 className="text-4xl font-black text-red-500 mb-4">GAME NOT FOUND</h2>
        <Link to="/" className="text-blue-500 underline font-bold">RETURN TO BASE</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-black p-2 sm:p-4 flex items-center justify-between border-b border-gray-800">
        <button 
          onClick={() => navigate('/')}
          className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-sm font-bold rounded flex items-center gap-2"
        >
          [ BACK ]
        </button>
        <h1 className="text-lg font-black uppercase text-blue-500 tracking-wider">NOW PLAYING: {game.name}</h1>
        <div className="hidden sm:block text-xs text-gray-500">2025 UNBLOCKED EDITION</div>
      </div>
      
      <div className="flex-grow bg-black flex items-center justify-center relative group">
        <iframe 
          src={game.url} 
          title={game.name}
          allowFullScreen
          loading="lazy"
        />
      </div>

      <div className="bg-gray-900 p-6 sm:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="flex-grow">
              <h2 className="text-2xl font-black mb-2 uppercase">{game.name} - Game Info</h2>
              <p className="text-gray-400 mb-4">{game.description}</p>
              <div className="flex gap-2">
                <span className="bg-gray-800 px-3 py-1 rounded-full text-xs font-bold uppercase">{game.category}</span>
                <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold uppercase border border-green-600/30">Verified 2025</span>
              </div>
            </div>
            <div className="w-full sm:w-auto flex flex-col gap-2">
              <button className="w-full px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-lg transition shadow-lg shadow-blue-600/20">FULLSCREEN</button>
              <button className="w-full px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-black rounded-lg transition" onClick={() => window.location.reload()}>RELOAD GAME</button>
            </div>
          </div>

          {/* Strategy Text Section */}
          <div className="strategy mt-8 text-gray-300 p-4 bg-gray-800 rounded-lg">
            Lost in deep space tunnels, Run 3 Unblocked 2025 is a unique twist on the endless runner genre. You aren't just running; you are manipulating gravity. By moving to the walls, the entire tunnel rotates, turning walls into floors. This mechanic adds deep strategy as you navigate between gaps and crumbling tiles to explore the galaxy.
            <br /><br />
            Character Choice: Don't stick with the default Runner forever. As you progress, you unlock aliens with unique abilities. The Skater is fast for speedruns, while the Student can defy gravity. Some levels are impossible without specific characters. If you are stuck, try swapping your alien or changing the gravity plane. This game is massive enough to keep you entertained for a whole semester.
          </div>

          {/* Internal Links Directory */}
          <div className="other-games mt-8 bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-600 pb-2">More Unblocked Games 2025</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none">
                  <li className="mb-2"><a href="https://snakegame.cfd" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Snake Game Unblocked 2025</a></li>
                  <li className="mb-2"><a href="https://playzero2025.sbs" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Zero Lag Games Unblocked 2025</a></li>
                  <li className="mb-2"><a href="https://freegames2025.sbs" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Free Games Unblocked 2025</a></li>
                  <li className="mb-2"><a href="https://nodownload2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play No Download Games Unblocked 2025</a></li>
                  <li className="mb-2"><a href="https://unblocked2025.cfd" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Unblocked Games 2025 (Main)</a></li>
                  <li className="mb-2"><a href="https://unblocked2025.sbs" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Best Unblocked Games 2025</a></li>
                  <li className="mb-2"><a href="https://promax.it.com" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play ProMax Games Unblocked 2025</a></li>
                  <li className="mb-2"><a href="https://retrobowl2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Retro Bowl Unblocked 2025</a></li>
                  <li className="mb-2"><a href="https://1v1lol2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play 1v1.LOL Unblocked 2025</a></li>
                  <li className="mb-2"><a href="https://drift2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Drift Hunters Unblocked 2025</a></li>
                  <li className="mb-2"><a href="https://slope2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Slope Game Unblocked 2025</a></li>
                  <li className="mb-2"><a href="https://gd2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Geometry Dash Unblocked 2025</a></li>
                  <li className="mb-2"><a href="https://motox3m2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Moto X3M Unblocked 2025</a></li>
                  <li className="mb-2"><a href="https://surfers2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Subway Surfers Unblocked 2025</a></li>
                  <li className="mb-2"><a href="https://run32025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Run 3 Unblocked 2025</a></li>
                  <li className="mb-2"><a href="https://fireboy2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Fireboy & Watergirl Unblocked 2025</a></li>
                  <li className="mb-2"><a href="https://paperio2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Paper.io Unblocked 2025</a></li>
                  <li className="mb-2"><a href="https://driftbest2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Drift Hunters MAX Unblocked 2025</a></li>
                  <li className="mb-2"><a href="https://gd-full2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Geometry Dash Full Unblocked 2025</a></li>
                  <li className="mb-2"><a href="https://subway2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Subway Surfers World Unblocked 2025</a></li>
              </ul>
          </div>
        </div>
      </div>
      
      <div className="p-8">
        <AdBanner />
      </div>
    </div>
  );
};

// --- MAIN APP COMPONENT ---
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white selection:bg-blue-500 selection:text-white">
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Home />
          </>
        } />
        <Route path="/game/:id" element={<GamePlayer />} />
        <Route path="*" element={<Home />} />
      </Routes>
      
      <footer className="border-t border-gray-900 py-12 px-8 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="text-2xl font-black mb-2 text-blue-500 uppercase">Run 3 Unblocked</h2>
            <p className="text-sm text-gray-500">© 2025 Chromebook Optimized Edition. No Rights Reserved.</p>
          </div>
          <div className="flex gap-8 text-xs font-bold text-gray-400 uppercase">
            <a href="#" className="hover:text-blue-500">Terms</a>
            <a href="#" className="hover:text-blue-500">Privacy</a>
            <a href="#" className="hover:text-blue-500">Contact</a>
            <a href="#" className="hover:text-blue-500 underline">Support Our Site</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
