import { Camera, Heart, Share2, TrendingUp } from 'lucide-react';

const socialStats = [
  { platform: 'TikTok', followers: '850K', icon: '📱', color: 'from-pink-500 to-purple-500' },
  { platform: 'Instagram', followers: '125K', icon: '📸', color: 'from-purple-500 to-pink-500' },
  { platform: 'YouTube', followers: '95K', icon: '📺', color: 'from-red-500 to-pink-500' }
];

const viralMoments = [
  {
    title: 'Rosette Swirl Tutorial',
    views: '2.3M',
    description: 'Our most viral TikTok! Learn this exact technique in our Buttercream Basics class.',
    image: '/before-after-transformation.png'
  },
  {
    title: 'Galaxy Cake Magic',
    views: '1.8M',
    description: 'Students recreate this stunning galaxy effect in our Instagram Artistry class.',
    image: '/sacramento-cakes-showcase.png'
  },
  {
    title: 'Behind the Scenes',
    views: '950K',
    description: 'See what a real class looks like with our students creating masterpieces.',
    image: '/social-media-setup.png'
  }
];

export function SocialMedia() {
  return (
    <section id="social" className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-br from-night/50 to-lavender-900/20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl text-white sm:text-4xl">Follow Our Viral Journey</h2>
          <p className="mt-4 text-base text-white/70 sm:text-lg max-w-2xl mx-auto">
            Join our social media community and watch your fellow students go viral! Tag us in your creations for a chance to be featured.
          </p>
        </div>

        {/* Social Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {socialStats.map((stat) => (
            <div key={stat.platform} className="text-center">
              <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center text-3xl mb-4 shadow-lg`}>
                {stat.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{stat.platform}</h3>
              <p className="text-3xl font-bold text-transparent bg-gradient-to-r from-lavender-400 to-blush bg-clip-text">
                {stat.followers}
              </p>
              <p className="text-sm text-white/60">followers</p>
            </div>
          ))}
        </div>

        {/* Viral Moments */}
        <div className="mb-12">
          <h3 className="text-2xl font-display text-white text-center mb-8">Our Viral Moments 🔥</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {viralMoments.map((moment) => (
              <div key={moment.title} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={moment.image} 
                    alt={moment.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-white">{moment.title}</h4>
                    <span className="bg-gradient-to-r from-blush to-lavender-400 text-night px-2 py-1 rounded-full text-sm font-bold">
                      {moment.views} views
                    </span>
                  </div>
                  <p className="text-sm text-white/70">{moment.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social CTA */}
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 to-white/10 p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex -space-x-2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-lavender-500 to-blush flex items-center justify-center">
                <Camera className="h-6 w-6 text-night" />
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blush to-sky flex items-center justify-center">
                <Share2 className="h-6 w-6 text-night" />
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-sky to-mint flex items-center justify-center">
                <Heart className="h-6 w-6 text-night" />
              </div>
            </div>
          </div>
          <h3 className="text-xl font-display text-white mb-4">Ready to go viral?</h3>
          <p className="text-white/70 mb-6 max-w-xl mx-auto">
            Join our classes and create content that gets hearts, shares, and saves! Follow us @tootietreatsclasses
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://www.tiktok.com/@tootietreatsclasses" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:shadow-lg transition-all"
            >
              📱 Follow on TikTok
            </a>
            <a 
              href="#book-class"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-lavender-400 text-lavender-200 font-semibold hover:bg-lavender-400/10 transition-all"
            >
              <TrendingUp className="h-4 w-4" />
              Book Your Viral Moment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}