
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Music, ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const MusicPage = () => {
  useEffect(() => {
    // Ensure scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Apply animation class to elements when they enter viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  const musicPlatforms = [
    {
      name: "Spotify",
      url: "https://open.spotify.com/artist/1uvj6MGuYwR4dZj0CXpkp2",
      className: "bg-[#1DB954] hover:bg-[#1DB954]/90",
      logo: "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png",
    },
    {
      name: "Apple Music",
      url: "https://music.apple.com/us/artist/studio-mitesh/1668500299",
      className: "bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600",
      logo: "https://www.apple.com/v/apple-music/s/images/overview/apple_music_logo__co6igjq2cq2a_large.png",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@StudioMitesh",
      className: "bg-[#FF0000] hover:bg-[#FF0000]/90",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png",
    },
    {
      name: "SoundCloud",
      url: "https://soundcloud.com/studio-mitesh",
      className: "bg-[#FF7700] hover:bg-[#FF7700]/90",
      logo: "https://developers.soundcloud.com/assets/logo_white-af5006050dd9cba09b0c48be04feac57.png",
    },
  ];

  const featuredTracks = [
    {
      title: "Track 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://placehold.co/800x800?text=Track+1",
      embed: "https://open.spotify.com/embed/track/4cOdK2wGLETKBW3PvgPWqT",
    },
    {
      title: "Track 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://placehold.co/800x800?text=Track+2",
      embed: "https://open.spotify.com/embed/track/4cOdK2wGLETKBW3PvgPWqT",
    },
    {
      title: "Track 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://placehold.co/800x800?text=Track+3",
      embed: "https://open.spotify.com/embed/track/4cOdK2wGLETKBW3PvgPWqT",
    },
  ];
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="flex min-h-[70vh] items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] pt-16">
        <div className="section-container flex flex-col items-center justify-center text-center text-white">
          <Link to="/" className="mb-8 flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Portfolio</span>
          </Link>
          
          <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 animate-pulse">
            <Music className="h-12 w-12" />
          </div>
          
          <h1 className="animate-fade-in text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            StudioMitesh
          </h1>
          
          <p className="animate-fade-in mt-6 max-w-2xl text-lg text-white/70">
            Music Production • Composition • Sound Design
          </p>
          
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {musicPlatforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center justify-center gap-3 rounded-xl p-4 text-white transition-all hover:scale-105 ${platform.className}`}
              >
                <div className="h-8 w-full overflow-hidden">
                  <img src={platform.logo} alt={platform.name} className="h-full w-auto object-contain" />
                </div>
                <span className="text-sm font-medium">{platform.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Music Section */}
      <section className="bg-[#f5f5f7] py-16 md:py-24">
        <div className="section-container">
          <h2 className="section-title animate-on-scroll">Featured Tracks</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {featuredTracks.map((track, index) => (
              <div
                key={track.title}
                className="animate-on-scroll overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-lg"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={track.image}
                    alt={track.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{track.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{track.description}</p>
                  <div className="relative h-0 overflow-hidden pb-[60%] rounded-lg">
                    <iframe
                      src={track.embed}
                      width="100%"
                      height="152"
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      className="absolute top-0 left-0 h-full w-full rounded-lg"
                      title={track.title}
                    ></iframe>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Spotify Playlist Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="section-container">
          <h2 className="section-title animate-on-scroll">Latest Releases</h2>
          <div className="mx-auto max-w-3xl">
            <div className="aspect-[3/2] w-full overflow-hidden rounded-2xl shadow-lg animate-on-scroll">
              <iframe
                src="https://open.spotify.com/embed/artist/1uvj6MGuYwR4dZj0CXpkp2?utm_source=generator&theme=0"
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                style={{ minHeight: '500px' }}
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Music Section */}
      <section className="bg-[#f5f5f7] py-16 md:py-24">
        <div className="section-container">
          <h2 className="section-title animate-on-scroll">About My Music</h2>
          <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-md animate-on-scroll">
            <p className="mb-4 text-lg">
              Music has always been a passion of mine. As StudioMitesh, I create original compositions across various genres, experimenting with sound design and production techniques.
            </p>
            <p className="mb-4 text-lg">
              My approach blends traditional musical elements with modern production methods, creating unique soundscapes that tell a story through audio.
            </p>
            <p className="text-lg">
              I'm always open to collaborations and new musical projects. If you're interested in working together or have any questions about my music, feel free to reach out!
            </p>
          </div>
        </div>
      </section>
      
      {/* YouTube Embed Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="section-container">
          <h2 className="section-title animate-on-scroll">Latest Videos</h2>
          <div className="mx-auto max-w-3xl">
            <div className="aspect-video w-full overflow-hidden rounded-2xl shadow-lg animate-on-scroll">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/videoseries?list=UU1uvj6MGuYwR4dZj0CXpkp2"
                title="YouTube playlist"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] py-16 md:py-24 text-white">
        <div className="section-container">
          <h2 className="section-title animate-on-scroll text-white">Connect With Me</h2>
          <div className="mx-auto max-w-2xl text-center animate-on-scroll">
            <p className="mb-8 text-lg text-white/70">
              Interested in collaborating or have questions about my music? I'd love to hear from you!
            </p>
            <a
              href="mailto:studiomitesh@example.com"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 text-lg font-medium text-white shadow-lg transition-all hover:from-purple-600 hover:to-pink-600"
            >
              <span>Contact for Music Inquiries</span>
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default MusicPage;
