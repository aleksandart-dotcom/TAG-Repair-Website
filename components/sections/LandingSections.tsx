"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import {
  assets,
  googleReviewsUrl,
  processSteps,
  services,
  showcaseBlocks,
  testimonials,
  trustStats,
  whyTagPoints,
} from "@/data/site-content";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

export function HeroSection() {
  return (
    <section className="relative flex min-h-[92svh] items-end overflow-hidden px-4 pb-14 pt-24 sm:min-h-screen sm:px-6 sm:pb-20 sm:pt-32 md:px-10 md:pb-24">
      <div className="absolute inset-0">
        {assets.heroVideo ? (
          // Replace with your final hero video path in data/site-content.ts.
          <video className="h-full w-full object-cover" autoPlay loop muted playsInline src={assets.heroVideo} />
        ) : (
          // Replace with a real hero workshop/truck bay image.
          <Image src={assets.heroImage} alt="Truck repair bay activity" fill priority className="object-cover" />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_70%,rgba(138,44,44,0.35),transparent_40%),radial-gradient(circle_at_80%_15%,rgba(255,255,255,0.12),transparent_40%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </div>

      <motion.div className="relative mx-auto w-full max-w-6xl" variants={stagger} initial="hidden" animate="show">
        <motion.p
          variants={fadeUp}
          className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-300 sm:mb-5 sm:text-xs sm:tracking-[0.26em]"
        >
          TAG REPAIR CENTER
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="max-w-5xl text-[2.35rem] font-semibold leading-[0.96] tracking-tight sm:text-6xl md:text-8xl"
        >
          KEEP YOUR TRUCKS MOVING.
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-[15px] leading-7 text-zinc-200 sm:mt-7 sm:text-base sm:leading-8 md:text-xl">
          Truck and trailer repair that helps drivers, owner-operators, and fleets get back on the road with
          confidence.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
          <Button href="#contact" className="w-full sm:min-w-36 sm:w-auto">
            Book Service
          </Button>
          <Button href="#contact" variant="secondary" className="w-full sm:w-auto">
            Call Now
          </Button>
        </motion.div>
        <motion.p variants={fadeUp} className="mt-7 max-w-3xl text-sm leading-6 text-zinc-300 sm:mt-9 sm:leading-7 md:text-base">
          Trusted by fleets, owner-operators, and hardworking drivers who can&apos;t afford downtime.
        </motion.p>
      </motion.div>
    </section>
  );
}

export function WhyTagSection() {
  return (
    <Section
      id="why-tag"
      label="WHY TAG"
      title="Serious repair support for serious equipment."
      intro="When a truck is down, time matters. TAG Repair Center focuses on dependable repair work, clear communication, and fast turnaround so you can keep your operation moving."
    >
      <motion.div
        className="grid gap-5 md:grid-cols-2 md:gap-6"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {whyTagPoints.map((point) => (
          <motion.article
            key={point.title}
            variants={fadeUp}
            className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5 sm:p-6 md:p-7"
          >
            <h3 className="text-lg font-semibold sm:text-xl">{point.title}</h3>
            <p className="mt-2.5 text-[15px] leading-7 text-zinc-300 sm:mt-3 sm:text-base">{point.copy}</p>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}

export function ServicesSection() {
  return (
    <Section
      id="services"
      label="SERVICES"
      title="Repair services that keep trucks and trailers road-ready."
      intro="From diagnostics to brake work, TAG Repair Center handles essential repair and maintenance services that help reduce downtime and keep equipment in working condition."
    >
      <motion.div
        className="grid gap-4 md:grid-cols-2"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {services.map((service) => (
          <motion.article
            key={service.title}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#13171d] p-5 transition duration-500 hover:border-white/25 hover:bg-[#171d24] sm:p-6 md:p-7"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[rgba(138,44,44,0.15)] opacity-0 transition duration-500 group-hover:opacity-100" />
            <p className="relative text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500 sm:text-xs">Service</p>
            <h3 className="relative mt-2.5 text-lg font-semibold tracking-tight sm:mt-3 sm:text-xl md:text-2xl">{service.title}</h3>
            <p className="relative mt-3 text-[15px] leading-7 text-zinc-300 sm:mt-4 sm:text-base">{service.copy}</p>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}

export function ShowcaseSection() {
  return (
    <Section id="showcase" label="INSIDE THE SHOP" title="Repair work you can see. Confidence you can feel.">
      <div className="grid gap-8 sm:gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
        <div className="lg:sticky lg:top-32 lg:h-fit">
          <AnimatedReveal>
            <Image
              src={assets.trailerService}
              alt="Trailer service in workshop"
              width={1200}
              height={800}
              className="h-56 w-full rounded-3xl object-cover shadow-2xl shadow-black/50 sm:h-[18rem] md:h-[22rem]"
            />
          </AnimatedReveal>
          <p className="mt-4 text-sm text-zinc-400">
            Optional looping workshop video can replace this visual later.
          </p>
        </div>

        <div className="space-y-5 sm:space-y-7 md:space-y-8">
          {showcaseBlocks.map((block, idx) => (
            <motion.article
              key={block.title}
              className="grid gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:gap-5 sm:p-5 md:grid-cols-[1.1fr_1fr] md:p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: idx * 0.08 }}
            >
              <div>
                <h3 className="text-xl font-semibold leading-tight tracking-tight sm:text-2xl">{block.title}</h3>
                <p className="mt-2.5 text-[15px] leading-7 text-zinc-300 sm:mt-3 sm:text-base">{block.copy}</p>
              </div>
              <motion.img
                src={block.image}
                alt={block.title}
                className="h-40 w-full rounded-xl object-cover sm:h-44 md:h-48"
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.3 }}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function DowntimeSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-[4.5rem] sm:px-6 sm:py-24 md:px-10 md:py-32">
      <div className="rounded-3xl border border-[var(--accent)]/40 bg-gradient-to-r from-[#170f10] via-[#11151c] to-[#11151c] p-6 sm:p-8 md:p-14">
        <AnimatedReveal>
          <h2 className="max-w-4xl text-[1.75rem] font-semibold leading-[1.08] tracking-tight sm:text-3xl md:text-6xl">
            DOWNTIME COSTS MORE THAN REPAIR.
          </h2>
          <p className="mt-5 max-w-3xl text-[15px] leading-7 text-zinc-200 sm:mt-7 sm:text-base sm:leading-8">
            Every hour off the road affects schedules, revenue, and momentum. That is why reliable repair service
            matters. TAG Repair Center helps reduce delays with focused service, dependable work, and a process built
            around getting equipment moving again.
          </p>
          <ul className="mt-6 space-y-2 text-[15px] text-zinc-200 sm:mt-7 sm:space-y-2.5 sm:text-base">
            <li>- Lost time adds up fast.</li>
            <li>- Delayed loads create bigger problems.</li>
            <li>- Reliable repair support makes a real difference.</li>
          </ul>
          <Button href="#contact" className="mt-8 w-full sm:mt-9 sm:w-auto">
            Talk to the Team
          </Button>
        </AnimatedReveal>
      </div>
    </section>
  );
}

export function TrustSection() {
  return (
    <Section
      id="trust"
      label="TRUST & PROOF"
      title="Trusted by the people who know what downtime really means."
    >
      <div className="grid gap-4 md:grid-cols-4 md:gap-5">
        {trustStats.map((stat, idx) => (
          <AnimatedReveal
            key={stat}
            delay={idx * 0.06}
            className="rounded-2xl border border-white/10 bg-[#13171d] p-4 text-base font-medium sm:p-5 md:text-lg"
          >
            {stat}
          </AnimatedReveal>
        ))}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3 md:gap-5">
        {testimonials.map((item, idx) => (
          <AnimatedReveal
            key={item.author}
            delay={idx * 0.08}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6"
          >
            <p className="text-[15px] leading-7 text-zinc-100 sm:text-base">&ldquo;{item.quote}&rdquo;</p>
            <p className="mt-4 text-sm text-zinc-400">- {item.author}</p>
          </AnimatedReveal>
        ))}
      </div>

      <AnimatedReveal className="mt-8">
        <a
          href={googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold transition hover:border-white/40 hover:bg-white/10"
        >
          See Google Reviews
        </a>
      </AnimatedReveal>
    </Section>
  );
}

export function ProcessSection() {
  return (
    <Section
      id="process"
      label="PROCESS"
      title="A simple process built around getting you back on the road."
    >
      <div className="grid gap-4 md:grid-cols-2 md:gap-5">
        {processSteps.map((step, idx) => (
          <AnimatedReveal
            key={step.title}
            delay={idx * 0.08}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-6 md:p-7"
          >
            <p className="text-xs uppercase tracking-[0.14em] text-zinc-400 sm:text-sm">Step {idx + 1}</p>
            <h3 className="mt-2 text-xl font-semibold sm:text-2xl">{step.title}</h3>
            <p className="mt-2.5 text-[15px] leading-7 text-zinc-300 sm:mt-3 sm:text-base">{step.copy}</p>
          </AnimatedReveal>
        ))}
      </div>
    </Section>
  );
}

export function FinalCtaSection() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-4 py-[4.5rem] sm:px-6 sm:py-20 md:px-10 md:py-32">
      <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 text-center sm:p-8 md:p-14">
        <AnimatedReveal>
          <h2 className="text-[1.75rem] font-semibold leading-tight tracking-tight sm:text-3xl md:text-5xl">
            Get back on the road with confidence.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-zinc-300 sm:mt-6 sm:text-base sm:leading-8">
            When repair matters, trust the team that understands the pressure behind every mile.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
            <Button href="#contact" className="w-full sm:w-auto">
              Schedule Service
            </Button>
            <Button href="#contact" variant="secondary" className="w-full sm:w-auto">
              Contact TAG Repair Center
            </Button>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
