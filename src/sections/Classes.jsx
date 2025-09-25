import { Calendar, Clock, Users, Star } from 'lucide-react';

const classTypes = [
  {
    name: 'Viral Buttercream Basics',
    duration: '2 hours',
    price: '$65',
    maxStudents: '8 students',
    details: 'Master the TikTok-famous techniques: rosettes, ombre, and textured finishes.',
    trending: true
  },
  {
    name: 'Instagram Cake Artistry',
    duration: '3 hours',
    price: '$85',
    maxStudents: '6 students',
    details: 'Create picture-perfect drip cakes, galaxy designs, and modern geometric patterns.',
    trending: false
  },
  {
    name: 'Beginner Cake Decorating',
    duration: '2.5 hours',
    price: '$75',
    maxStudents: '10 students',
    details: 'Perfect for first-timers! Learn basic piping, smooth buttercream, and simple flowers.',
    trending: false
  },
  {
    name: 'Advanced Sculpted Cakes',
    duration: '4 hours',
    price: '$120',
    maxStudents: '4 students',
    details: 'Create 3D masterpieces and character cakes that break the internet!',
    trending: true
  }
];

const techniques = [
  {
    category: 'Trending TikTok Techniques',
    items: ['Viral rosette swirls', 'Ombre buttercream', 'Mirror glaze', 'Textured scraping']
  },
  {
    category: 'Instagram-Worthy Designs',
    items: ['Galaxy cakes', 'Geometric patterns', 'Drip effects', 'Marble textures']
  },
  {
    category: 'Classic Foundations',
    items: ['Smooth buttercream', 'Basic piping', 'Color mixing', 'Cake assembly']
  }
];

export function Classes() {
  return (
    <section id="classes" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="flex-1 space-y-6">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl text-white sm:text-4xl">Class Schedule & Pricing</h2>
              <p className="mt-4 text-base text-white/70 sm:text-lg">
                Choose from our trending cake decorating classes! Each session includes materials, tools, and your finished cake to take home.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {classTypes.map((classItem) => (
                <div key={classItem.name} className="rounded-3xl border border-white/5 bg-white/5 p-6 relative">
                  {classItem.trending && (
                    <div className="absolute -top-2 -right-2 rounded-full bg-gradient-to-r from-blush to-lavender-400 px-3 py-1 text-xs font-bold text-night">
                      🔥 TRENDING
                    </div>
                  )}
                  <div className="flex items-center justify-between text-white mb-3">
                    <h3 className="font-display text-xl">{classItem.name}</h3>
                    <span className="rounded-full bg-lavender-500/15 px-3 py-1 text-sm text-lavender-200">{classItem.price}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs text-white/60 mb-3">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {classItem.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {classItem.maxStudents}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      5.0 rating
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-white/70">{classItem.details}</p>
                  <button className="mt-4 w-full rounded-full bg-gradient-to-r from-lavender-500/20 to-blush/20 border border-lavender-400/30 px-4 py-2 text-sm font-semibold text-lavender-200 transition hover:bg-gradient-to-r hover:from-lavender-500/30 hover:to-blush/30">
                    Reserve Your Spot
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 space-y-6">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl text-white sm:text-4xl">What You'll Learn</h2>
              <p className="mt-4 text-base text-white/70 sm:text-lg">
                Master the hottest techniques straight from our viral TikTok videos. Each class is designed to make you social media ready!
              </p>
            </div>
            <div className="space-y-4">
              {techniques.map(({ category, items }) => (
                <div key={category} className="rounded-3xl border border-white/5 bg-white/5 p-6">
                  <h3 className="font-display text-xl text-white mb-4">{category}</h3>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-white/70">
                        <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blush to-lavender-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}