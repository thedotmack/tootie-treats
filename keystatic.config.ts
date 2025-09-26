import { config, fields, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  singletons: {
    hero: singleton({
      label: 'Hero Section',
      path: 'content/singletons/hero',
      schema: {
        tagline: fields.text({
          label: 'Tagline',
          defaultValue: "Sacramento's Creative Playground • Cake Classes • Custom Cakes • Book Now"
        }),
        title: fields.text({
          label: 'Title',
          defaultValue: 'Never Decorated a Cake Before? Perfect.'
        }),
        subtitle: fields.text({
          label: 'Subtitle',
          multiline: true,
          defaultValue: "Sacramento's Most Fun Creative Experience Where Everyone Leaves Feeling Like a Cake Artist"
        }),
        description: fields.text({
          label: 'Description',
          defaultValue: 'No Experience Needed • All Supplies Included • You\'ll Surprise Yourself'
        }),
        primaryButtonText: fields.text({
          label: 'Primary Button Text',
          defaultValue: 'Book Your Class - $95'
        }),
        primaryButtonLink: fields.text({
          label: 'Primary Button Link',
          defaultValue: '#classes'
        }),
        secondaryButtonText: fields.text({
          label: 'Secondary Button Text',
          defaultValue: 'Request a Private Party'
        }),
        secondaryButtonLink: fields.text({
          label: 'Secondary Button Link',
          defaultValue: '#private-events'
        }),
        badge1: fields.text({
          label: 'Badge 1',
          defaultValue: 'As Seen on Good Day Sacramento'
        }),
        badge2: fields.text({
          label: 'Badge 2',
          defaultValue: 'Join 7,900+ Happy Creators'
        }),
      },
    }),
    highlights: singleton({
      label: 'Highlights Section',
      path: 'content/singletons/highlights',
      schema: {
        title: fields.text({
          label: 'Title',
          defaultValue: 'Two Hours of Pure Creative Joy (And Yes, You Can Do This)'
        }),
        subtitle: fields.text({
          label: 'Subtitle',
          defaultValue: 'Remember making mud pies as a kid? This is like that, but prettier and edible.'
        }),
        description1: fields.text({
          label: 'Description Paragraph 1',
          multiline: true,
          defaultValue: "At Tootie Treats, we believe everyone has an inner cake artist waiting to play. Whether you've never held a piping bag or you burn toast, our founder Alexa's teaching style encourages you to use your imagination and color outside the lines. No perfection required. Just fun."
        }),
        description2: fields.text({
          label: 'Description Paragraph 2',
          multiline: true,
          defaultValue: "Founded by Alexa Melhado (who started her baking journey at age 4 with grandma and a box of Jiffy corn muffins), Tootie Treats has become Sacramento's favorite place to discover you're way more creative than you thought."
        }),
        highlights: fields.array(
          fields.object({
            title: fields.text({ label: 'Title' }),
            description: fields.text({ label: 'Description' }),
          }),
          {
            label: 'Highlight Cards',
            itemLabel: props => props.fields.title.value || 'New Highlight'
          }
        ),
      },
    }),
    contact: singleton({
      label: 'Contact Section',
      path: 'content/singletons/contact',
      schema: {
        title: fields.text({
          label: 'Title',
          defaultValue: 'Your Cake Adventure Starts Here'
        }),
        subtitle: fields.text({
          label: 'Subtitle',
          defaultValue: 'Three Ways to Join the Fun:'
        }),
        instagram: fields.text({
          label: 'Instagram Handle',
          defaultValue: '@tootietreats'
        }),
        email: fields.text({
          label: 'Email',
          defaultValue: 'Via Instagram DM or Linktree'
        }),
        phone: fields.text({
          label: 'Phone',
          defaultValue: 'Via Instagram DM'
        }),
        mainLocation: fields.text({
          label: 'Main Location',
          multiline: true,
          defaultValue: 'Sierra 2 Center - 2791 24th Street, Sacramento\nMost regular classes held here in the Learney Room'
        }),
        popupLocation: fields.text({
          label: 'Pop-up Location Info',
          multiline: true,
          defaultValue: 'Various Sacramento venues - Check Instagram for special event locations'
        }),
        studioArea: fields.text({
          label: 'Studio Area',
          defaultValue: 'Curtis Park area, Sacramento 95818'
        }),
        linktreeUrl: fields.text({
          label: 'Linktree URL',
          defaultValue: 'https://linktr.ee/tootietreats'
        }),
        instagramUrl: fields.text({
          label: 'Instagram URL',
          defaultValue: 'https://instagram.com/tootietreats'
        }),
        privateEventFormUrl: fields.text({
          label: 'Private Event Form URL',
          defaultValue: 'https://www.jotform.com/form/243365823386161'
        }),
      },
    }),
    faq: singleton({
      label: 'FAQ Section',
      path: 'content/singletons/faq',
      schema: {
        title: fields.text({
          label: 'Section Title',
          defaultValue: 'Questions? We\'ve Got Answers (And They\'re All Good News)'
        }),
        faqs: fields.array(
          fields.object({
            question: fields.text({ label: 'Question' }),
            answer: fields.text({
              label: 'Answer',
              multiline: true
            }),
          }),
          {
            label: 'FAQ Items',
            itemLabel: props => props.fields.question.value || 'New Question'
          }
        ),
      },
    }),
    testimonials: singleton({
      label: 'Testimonials Section',
      path: 'content/singletons/testimonials',
      schema: {
        title: fields.text({
          label: 'Section Title',
          defaultValue: 'Don\'t Take Our Word For It'
        }),
        subtitle: fields.text({
          label: 'Subtitle',
          defaultValue: '(Actually, Do. These People Had the Best Time)'
        }),
        testimonials: fields.array(
          fields.object({
            text: fields.text({
              label: 'Testimonial Text',
              multiline: true
            }),
            author: fields.text({ label: 'Author Name' }),
            highlight: fields.text({
              label: 'Highlight/Role',
              defaultValue: 'First-timer'
            }),
          }),
          {
            label: 'Testimonials',
            itemLabel: props => props.fields.author.value || 'New Testimonial'
          }
        ),
      },
    }),
    classes: singleton({
      label: 'Classes Section',
      path: 'content/singletons/classes',
      schema: {
        title: fields.text({
          label: 'Section Title',
          defaultValue: 'Pick Your Adventure (Seriously, They\'re All Fun)'
        }),
        subtitle: fields.text({
          label: 'Subtitle',
          defaultValue: 'Everything\'s Included. Just Show Up Ready to Play.'
        }),
        publicClassesUrl: fields.text({
          label: 'Public Classes Booking URL',
          defaultValue: 'https://linktr.ee/tootietreats'
        }),
        privateEventsUrl: fields.text({
          label: 'Private Events Booking URL',
          defaultValue: '#private-events'
        }),
      },
    }),
  },
});