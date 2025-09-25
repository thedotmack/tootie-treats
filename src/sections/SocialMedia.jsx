import { Camera, Link as LinkIcon, Newspaper, Share2 } from 'lucide-react';

export function SocialMedia() {
  return (
    <section id="social" className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-br from-night/50 to-lavender-900/20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl text-white sm:text-4xl">Stay connected with Tootie Treats</h2>
          <p className="mt-4 text-base text-white/70 sm:text-lg max-w-2xl mx-auto">
            Follow @tootietreats for custom cake drops, class announcements, and behind-the-scenes looks from Alexa’s Sacramento decorating studio.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left">
            <div className="mb-4 flex items-center gap-3 text-sm text-white/60">
              <span className="text-2xl">📸</span>
              <div>
                <h3 className="text-lg font-semibold text-white">Instagram</h3>
                <p>@tootietreats · Sacramento cakes & classes</p>
              </div>
            </div>
            <p className="text-sm text-white/70">
              “Sacramento Cakes + Classes · As seen on Good Day Sacramento! 📺 Check link for upcoming classes.” — Instagram bio snippet captured from the public profile.
            </p>
            <a
              href="https://www.instagram.com/tootietreats"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-lavender-200 hover:text-lavender-100"
            >
              Follow on Instagram <Share2 className="h-4 w-4" />
            </a>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left">
            <div className="mb-4 flex items-center gap-3 text-sm text-white/60">
              <LinkIcon className="h-5 w-5 text-lavender-200" />
              <div>
                <h3 className="text-lg font-semibold text-white">Linktree hub</h3>
                <p>Class calendar · gift certificates · supply lists</p>
              </div>
            </div>
            <p className="text-sm text-white/70">
              Find every booking link—from Sierra 2 Center tickets and private lesson forms to Alexa’s supply lists and the Good Day Sacramento segment.
            </p>
            <a
              href="https://linktr.ee/tootietreats"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-lavender-200 hover:text-lavender-100"
            >
              Open Linktree <Share2 className="h-4 w-4" />
            </a>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left">
            <div className="mb-4 flex items-center gap-3 text-sm text-white/60">
              <Newspaper className="h-5 w-5 text-lavender-200" />
              <div>
                <h3 className="text-lg font-semibold text-white">Good Day Sacramento</h3>
                <p>Watch Alexa’s live cake class segment</p>
              </div>
            </div>
            <p className="text-sm text-white/70">
              The morning show joined a Tootie Treats decorating session to pipe vintage borders and lattice pie tops—see the same techniques in upcoming workshops.
            </p>
            <a
              href="https://www.cbsnews.com/gooddaysacramento/video/get-creative-with-cake-molly-joins-a-custom-decorating-class-in-folsom/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-lavender-200 hover:text-lavender-100"
            >
              Watch the segment <Camera className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 to-white/10 p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex -space-x-2">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-lavender-500 to-blush flex items-center justify-center">
                <Camera className="h-6 w-6 text-night" />
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blush to-sky flex items-center justify-center">
                <Share2 className="h-6 w-6 text-night" />
              </div>
            </div>
          </div>
          <h3 className="text-xl font-display text-white mb-4">Share your sweet moment</h3>
          <p className="text-white/70 mb-6 max-w-xl mx-auto">
            Tag @tootietreats when you pick up your custom cake or finish a class project. Alexa regularly reposts Sacramento celebrations and student success stories.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://linktr.ee/tootietreats"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-lavender-500 to-lavender-600 text-night font-semibold hover:shadow-lg transition-all"
            >
              Explore all links
            </a>
            <a
              href="#classes"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-lavender-400 text-lavender-200 font-semibold hover:bg-lavender-400/10 transition-all"
            >
              View class schedule
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}