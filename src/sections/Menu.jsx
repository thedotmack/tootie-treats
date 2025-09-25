const cakeSizes = [
  {
    name: '6" round',
    serves: 'Feeds 8–10',
    price: '$55',
    details: 'Perfect for intimate celebrations and smash cakes.'
  },
  {
    name: '8" round',
    serves: 'Feeds 12–16',
    price: '$75',
    details: 'Our most popular option for birthdays and showers.'
  },
  {
    name: '9×13" sheet',
    serves: 'Feeds 18–24',
    price: '$95',
    details: 'Ideal for office parties and open house events.'
  },
  {
    name: 'Two-tier 6"+8"',
    serves: 'Feeds 24–30',
    price: '$190',
    details: 'Statement-making tier perfect for milestone celebrations.'
  }
];

const flavors = [
  {
    category: 'Classic favorites',
    items: ['Vanilla bean', 'Chocolate fudge', 'Red velvet', 'Funfetti sprinkle']
  },
  {
    category: 'Seasonal delights',
    items: ['Lemon elderflower', 'Brown butter pecan', 'Strawberry shortcake', 'Chai spice']
  },
  {
    category: 'Fillings & add-ons',
    items: ['Vanilla buttercream', 'Chocolate ganache', 'Strawberry compote', 'Lemon curd', 'Cream cheese frosting']
  }
];

export function Menu() {
  return (
    <section id="menu" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="flex-1 space-y-6">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl text-white sm:text-4xl">Sizes & servings</h2>
              <p className="mt-4 text-base text-white/70 sm:text-lg">
                Choose the cake that fits your guest list. We’re happy to mix cupcake dozens or dessert tables alongside your centerpiece.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {cakeSizes.map((size) => (
                <div key={size.name} className="rounded-3xl border border-white/5 bg-white/5 p-6">
                  <div className="flex items-center justify-between text-white">
                    <h3 className="font-display text-xl">{size.name}</h3>
                    <span className="rounded-full bg-lavender-500/15 px-3 py-1 text-sm text-lavender-200">{size.price}</span>
                  </div>
                  <p className="mt-2 text-sm text-white/60">{size.serves}</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">{size.details}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 space-y-6">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl text-white sm:text-4xl">Flavor studio</h2>
              <p className="mt-4 text-base text-white/70 sm:text-lg">
                Pair any cake and filling. Looking for something wild? Tell us in the notes and we’ll send ideas from the test kitchen.
              </p>
            </div>
            <div className="space-y-4">
              {flavors.map((group) => (
                <div key={group.category} className="rounded-3xl border border-white/5 bg-gradient-to-br from-white/8 to-white/3 p-6">
                  <h3 className="font-display text-xl text-white">{group.category}</h3>
                  <ul className="mt-4 grid gap-2 text-sm text-white/70 sm:grid-cols-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-lavender-400" aria-hidden />
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
