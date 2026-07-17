'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useRef, useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import StaggerContainer from '@/components/StaggerContainer';
import StaggerItem from '@/components/StaggerItem';

const BTS_VIDEO = '/DASA BTS.mp4';
const BTS_POSTER = '/DASA%20PICTURES/IMG_0718.jpg';

const sessionMoments = [
  {
    title: 'The First Room',
    body: 'Preneurin began with one live session in April. The starting point was simple: gather fashion designers in a room honest enough to talk about the business problems that usually stay hidden.',
    image: '/DASA%20PICTURES/IMG_0745.jpg',
  },
  {
    title: 'What Designers Brought',
    body: 'The conversations centered on pricing, production pressure, client boundaries, and the operational decisions that affect whether a studio grows well or keeps running on stress.',
    image: '/DASA%20PICTURES/IMG_0766.jpg',
  },
  {
    title: 'What Comes Next',
    body: 'That first session is now the proof point. Preneurin is using what it learned there to shape future sessions, supporting resources, and early collaboration opportunities.',
    image: '/DASA%20PICTURES/IMG_0826.jpg',
  },
];

const sessionGallery = [
  {
    src: '/DASA%20PICTURES/IMG_0718.jpg',
    alt: 'Designers seated during the Preneurin April session',
    className: 'lg:col-span-2',
  },
  {
    src: '/DASA%20PICTURES/IMG_0739.jpg',
    alt: 'A candid moment from the Preneurin first session',
    className: 'lg:col-span-1',
  },
  {
    src: '/DASA%20PICTURES/IMG_0794.jpg',
    alt: 'Participants listening during the Preneurin session',
    className: 'lg:col-span-1',
  },
  {
    src: '/DASA%20PICTURES/IMG_0797.jpg',
    alt: 'Another view of the Preneurin April gathering',
    className: 'lg:col-span-1',
  },
  {
    src: '/DASA%20PICTURES/IMG_0856.jpg',
    alt: 'A detailed scene from the first Preneurin session',
    className: 'lg:col-span-2',
  },
];

const proofPoints = [
  'The photos on this page are from the real April session.',
  'The BTS video on this page was captured during that same day.',
  'The format is still early, but the direction is clear and founder-led.',
  'Future growth is being built carefully instead of being overstated.',
];

function SessionBTSVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = async () => {
    if (!videoRef.current) {
      return;
    }

    if (videoRef.current.paused) {
      await videoRef.current.play();
      setIsPlaying(true);
      return;
    }

    videoRef.current.pause();
    setIsPlaying(false);
  };

  return (
    <div className="video-container w-full">
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl md:aspect-[16/10]">
        <video
          ref={videoRef}
          src={BTS_VIDEO}
          playsInline
          preload="none"
          poster={BTS_POSTER}
          controls={isPlaying}
          className="h-full w-full object-cover object-center rounded-3xl"
          onClick={togglePlay}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
        />
        <motion.button
          type="button"
          initial={{ opacity: 1 }}
          animate={{ opacity: isPlaying ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors hover:bg-black/35"
          style={{ pointerEvents: isPlaying ? 'none' : 'auto' }}
          aria-label="Play behind the scenes video"
        >
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-accent shadow-2xl md:h-28 md:w-28">
            <Play className="h-10 w-10 text-[#0A0A0A] md:h-12 md:w-12" />
          </div>
        </motion.button>
      </div>
    </div>
  );
}

export default function FirstSessionPage() {
  return (
    <div className="min-h-screen text-[var(--foreground)] font-sans">
      <Breadcrumb />

      <section className="pb-24 px-6 pt-24">
        <div className="max-w-5xl mx-auto text-center">
          <StaggerContainer>
            <StaggerItem>
              <h1 className="font-serif font-luxury text-5xl md:text-7xl lg:text-8xl leading-tight mb-8">
                Our First Session
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="text-gray-500 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Preneurin is still early. What we can show honestly is where it started: one live session in April and the practical conversations that came out of it.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <StaggerContainer>
            <StaggerItem>
              <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 md:p-10">
                <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-accent">Real Proof</p>
                    <h2 className="mt-4 font-serif text-4xl md:text-5xl">One session. Real conversations. A clear next step.</h2>
                    <p className="mt-6 text-lg leading-relaxed text-gray-500 dark:text-gray-300">
                      Preneurin was founded by Damilola Obiesan, Creative Director of Dassah Oikos, to create a more honest support system for fashion designers navigating business growth. The first live session became the foundation for everything now being built.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {proofPoints.map((point) => (
                      <div
                        key={point}
                        className="rounded-2xl border border-[var(--border)] bg-[var(--background)] px-5 py-4 text-gray-500 dark:text-gray-300"
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer>
            <StaggerItem>
              <div className="mb-12 text-center">
                <p className="text-sm uppercase tracking-[0.2em] text-accent">Behind The Scenes</p>
                <h2 className="mt-4 font-serif font-luxury text-4xl md:text-5xl">What the April session actually felt like</h2>
                <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-gray-500 dark:text-gray-300">
                  This BTS video adds movement and atmosphere to the real story of Preneurin&apos;s first room, showing the energy behind the conversations, focus, and founder-led direction.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <StaggerContainer>
            <StaggerItem>
              <SessionBTSVideo />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {sessionMoments.map((moment, index) => (
              <StaggerContainer key={moment.title} delay={index * 0.15}>
                <StaggerItem>
                  <div className="bg-[var(--card)] border border-[var(--border)] rounded-3xl overflow-hidden">
                    <div className="h-[350px] overflow-hidden">
                      <Image
                        src={moment.image}
                        alt={moment.title}
                        width={1200}
                        height={1400}
                        sizes="(min-width: 1024px) 33vw, 100vw"
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="font-serif text-2xl mb-4">{moment.title}</h3>
                      <p className="text-gray-500 dark:text-gray-300 leading-relaxed">{moment.body}</p>
                    </div>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer>
            <StaggerItem>
              <div className="mb-12 text-center">
                <p className="text-sm uppercase tracking-[0.2em] text-accent">Session Gallery</p>
                <h2 className="mt-4 font-serif font-luxury text-4xl md:text-5xl">More from the April room</h2>
                <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-gray-500 dark:text-gray-300">
                  These additional images capture the atmosphere, attention, and real founder conversations that defined Preneurin&apos;s first session.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sessionGallery.map((image, index) => (
              <StaggerContainer key={image.src} delay={index * 0.1}>
                <StaggerItem>
                  <div className={`overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)] ${image.className}`}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={1600}
                      height={1200}
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="h-[260px] w-full object-cover object-top md:h-[320px]"
                    />
                  </div>
                </StaggerItem>
              </StaggerContainer>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
