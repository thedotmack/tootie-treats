import { Camera, Link as LinkIcon, Newspaper, Share2 } from 'lucide-react'

export function SocialMedia() {
  return (
    <section id="social" className="border-b-4 border-border bg-secondary-background px-4 py-20 sm:px-6">
      <div className="mx-auto w-container max-w-full">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl">Stay connected with Tootie Treats</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-foreground/80 sm:text-lg">
            Follow @tootietreats for custom cake drops, class announcements, and behind-the-scenes looks from Alexa’s Sacramento
            decorating studio.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-base border-4 border-border bg-background p-6 text-left shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none">
            <div className="mb-4 flex items-center gap-3 text-sm text-foreground/70">
              <span className="flex size-12 items-center justify-center rounded-base border-2 border-border bg-main text-main-foreground shadow-shadow">
                📸
              </span>
              <div>
                <h3 className="font-heading text-lg text-foreground">Instagram</h3>
                <p>@tootietreats · Sacramento cakes & classes</p>
              </div>
            </div>
            <p className="text-sm text-foreground/75">
              “Sacramento Cakes + Classes · As seen on Good Day Sacramento! Check link for upcoming classes.” — Instagram bio
              snippet pulled directly from the public profile.
            </p>
            <a
              href="https://www.instagram.com/tootietreats"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-base border-2 border-border bg-secondary-background px-4 py-2 text-sm font-semibold text-foreground shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:bg-main hover:text-main-foreground hover:shadow-none"
            >
              Follow on Instagram <Share2 className="h-4 w-4" />
            </a>
          </article>
          <article className="rounded-base border-4 border-border bg-background p-6 text-left shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none">
            <div className="mb-4 flex items-center gap-3 text-sm text-foreground/70">
              <span className="flex size-12 items-center justify-center rounded-base border-2 border-border bg-main text-main-foreground shadow-shadow">
                <LinkIcon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-heading text-lg text-foreground">Linktree hub</h3>
                <p>Class calendar · gift certificates · supply lists</p>
              </div>
            </div>
            <p className="text-sm text-foreground/75">
              Find every booking link—from Sierra 2 Center tickets and private lesson forms to Alexa’s supply lists and the Good
              Day Sacramento feature.
            </p>
            <a
              href="https://linktr.ee/tootietreats"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-base border-2 border-border bg-secondary-background px-4 py-2 text-sm font-semibold text-foreground shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:bg-main hover:text-main-foreground hover:shadow-none"
            >
              Open Linktree <Share2 className="h-4 w-4" />
            </a>
          </article>
          <article className="rounded-base border-4 border-border bg-background p-6 text-left shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none">
            <div className="mb-4 flex items-center gap-3 text-sm text-foreground/70">
              <span className="flex size-12 items-center justify-center rounded-base border-2 border-border bg-main text-main-foreground shadow-shadow">
                <Newspaper className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-heading text-lg text-foreground">Good Day Sacramento</h3>
                <p>Watch Alexa’s live cake class segment</p>
              </div>
            </div>
            <p className="text-sm text-foreground/75">
              The morning show joined a Tootie Treats decorating session to pipe vintage borders and lattice pie tops—catch the
              same techniques in upcoming workshops.
            </p>
            <a
              href="https://www.cbsnews.com/gooddaysacramento/video/get-creative-with-cake-molly-joins-a-custom-decorating-class-in-folsom/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-base border-2 border-border bg-secondary-background px-4 py-2 text-sm font-semibold text-foreground shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:bg-main hover:text-main-foreground hover:shadow-none"
            >
              Watch the segment <Camera className="h-4 w-4" />
            </a>
          </article>
        </div>

        <div className="mt-12 rounded-base border-4 border-border bg-background p-8 text-center shadow-shadow">
          <div className="mb-6 flex justify-center">
            <div className="flex -space-x-3">
              <span className="flex size-14 items-center justify-center rounded-full border-2 border-border bg-main text-main-foreground shadow-shadow">
                <Camera className="h-6 w-6" />
              </span>
              <span className="flex size-14 items-center justify-center rounded-full border-2 border-border bg-secondary-background text-foreground shadow-shadow">
                <Share2 className="h-6 w-6" />
              </span>
            </div>
          </div>
          <h3 className="font-heading text-2xl text-foreground">Share your sweet moment</h3>
          <p className="mx-auto mt-4 max-w-xl text-sm text-foreground/75">
            Tag @tootietreats when you pick up your custom cake or finish a class project. Alexa regularly reposts Sacramento
            celebrations and student success stories.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="https://linktr.ee/tootietreats"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-base border-2 border-border bg-main px-6 py-3 font-semibold text-main-foreground shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none"
            >
              Explore all links
            </a>
            <a
              href="#classes"
              className="inline-flex items-center gap-2 rounded-base border-2 border-border bg-secondary-background px-6 py-3 font-semibold text-foreground shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:bg-main hover:text-main-foreground hover:shadow-none"
            >
              View class schedule
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}