'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export function InstagramGallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  // Your Instagram images
  const instagramImages = [
    '23421068_176464539573959_1919026984541749248_n.jpg',
    '23421401_522148644802201_7703410194864144384_n.jpg',
    '23421571_143695566262766_2740509328954884096_n.jpg',
    '23498203_2046192428990843_6241359681848082432_n.jpg',
    '23507115_1905268179800790_3177769813237825536_n.jpg',
    '23594488_128735357812905_939221330870403072_n.jpg',
    '23668366_166505900754854_4053745805054443520_n.jpg',
    '24126997_175543646405920_6160386195265159168_n.jpg',
    '24175317_172402100016703_3704901079440293888_n.jpg',
    '24332359_163149614285805_1997413217185300480_n.jpg',
    '25005932_377180272752295_2985600276196491264_n.jpg',
    '25010028_1556556137713159_1011648992175456256_n.jpg',
    '25010205_2051552728188550_1250457450235035648_n.jpg',
    '25012670_1944957122211436_2367893879207755776_n.jpg',
    '25018877_815271958655034_4991286373488001024_n.jpg',
    '25036827_173414766603976_8416810967173693440_n.jpg',
    '26068362_139934036699110_3345003410108710912_n.jpg',
    '26156157_567918516890407_1998021951490097152_n.jpg',
    '26156996_564186403921065_4807655974460456960_n.jpg',
    '26180553_1988356574767326_7525060011450433536_n.jpg',
    '26225541_143654439678515_5617531448929026048_n.jpg',
    '26266424_1830707120295427_7494018109548789760_n.jpg',
    '26267475_2047093122188366_6963455971930669056_n.jpg',
    '26318171_563337924015111_2047290912911917056_n.jpg',
    '26385376_370038856801349_2320881248790118400_n.jpg',
    '26863475_1569135579838785_2094335536540942336_n.jpg',
  ]

  const handlePrevious = () => {
    if (selectedImage > 0) {
      setSelectedImage(selectedImage - 1)
    }
  }

  const handleNext = () => {
    if (selectedImage < instagramImages.length - 1) {
      setSelectedImage(selectedImage + 1)
    }
  }

  return (
    <section id="gallery" className="relative border-b-4 border-border bg-gradient-to-br from-accent-lavender/40 via-background to-accent-pink/40 px-4 py-20 sm:px-6">
      <div className="mx-auto w-container max-w-full">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl">
            Sweet Creations from Our Kitchen
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Follow us @tootietreats for daily cake inspiration
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {instagramImages.map((image, index) => (
            <div
              key={image}
              onClick={() => setSelectedImage(index)}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-base border-2 border-border bg-white shadow-shadow transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none"
            >
              <Image
                src={`/instagram-images/${image}`}
                alt={`Cake creation ${index + 1}`}
                fill
                className="object-cover transition-transform group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://www.instagram.com/tootietreats/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-base border-2 border-border bg-gradient-to-r from-accent-pink via-accent-coral to-main px-8 py-4 text-lg font-semibold text-foreground shadow-shadow transition-transform hover:-translate-x-1 hover:-translate-y-1 hover:shadow-none"
          >
            See More on Instagram
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation()
              setSelectedImage(null)
            }}
            className="absolute right-4 top-4 rounded-base bg-white/10 p-2 text-white backdrop-blur hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>

          {selectedImage > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                handlePrevious()
              }}
              className="absolute left-4 rounded-base bg-white/10 p-2 text-white backdrop-blur hover:bg-white/20"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          {selectedImage < instagramImages.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleNext()
              }}
              className="absolute right-4 rounded-base bg-white/10 p-2 text-white backdrop-blur hover:bg-white/20"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}

          <div className="relative max-h-[90vh] max-w-[90vw]">
            <Image
              src={`/instagram-images/${instagramImages[selectedImage]}`}
              alt={`Cake creation ${selectedImage + 1}`}
              width={800}
              height={800}
              className="h-auto w-auto max-h-[90vh] max-w-full rounded-base"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  )
}