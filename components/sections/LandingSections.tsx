"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import {
  assets,
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
      staggerChildren: 0.08,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden px-6 pb-16 pt-32 md:px-10">
      <div className="absolute inset-0">
        {assets.heroVideo ? (
          // Replace with your final hero video path in data/site-content.ts.
          <video className="h-full w-full object-cover" autoPlay loop muted playsInline src={assets.heroVideo} />
        ) : (
          // Replace with a real hero workshop/truck bay image.
          <Image src={assets.heroImage} alt="Truck repair bay activity" fill priority className="object-cover" />
        )}
        <div className="absolute inset-0 bg-black/65" />
      </div>

      <motion.div
        className="relative mx-auto w-full max-w-6xl"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={fadeUp}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-200"
        >
          TAG REPAIR CENTER
        </motion.p>
        <motion.h1 variants={fadeUp} className="max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">
          KEEP YOUR TRUCKS MOVING.
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-zinc-200">
          Truck and trailer repair that helps drivers, owner-operators, and fleets get back on the road with
          confidence.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
          <Button href="#contact">Book Service</Button>
          <Button href="#contact" variant="secondary">
            Call Now
          </Button>
        </motion.div>
        <motion.p variants={fadeUp} className="mt-8 max-w-3xl text-sm text-zinc-300">
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
        className="grid gap-6 md:grid-cols-2"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {whyTagPoints.map((point) => (
          <motion.article
            key={point.title}
            variants={fadeUp}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          >
            <h3 className="text-xl font-semibold">{point.title}</h3>
            <p className="mt-3 text-zinc-300">{point.copy}</p>
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
            className="group rounded-2xl border border-white/10 bg-[#13171d] p-6 transition duration-300 hover:border-[var(--accent)] hover:bg-[#171d24]"
          >
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="mt-3 text-zinc-300">{service.copy}</p>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}

export function ShowcaseSection() {
  return (
    <Section id="showcase" label="INSIDE THE SHOP" title="Repair work you can see. Confidence you can feel.">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <AnimatedReveal>
            <Image
              src={assets.trailerService}
              alt="Trailer service in workshop"
              width={1200}
              height={800}
              className="h-[22rem] w-full rounded-3xl object-cover shadow-2xl shadow-black/50"
            />
          </AnimatedReveal>
          <p className="mt-4 text-sm text-zinc-400">
            Optional looping workshop video can replace this visual later.
          </p>
        </div>

        <div className="space-y-8">
          {showcaseBlocks.map((block, idx) => (
            <motion.article
              key={block.title}
              className="grid gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-5 md:grid-cols-[1.1fr_1fr]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
            >
              <div>
                <h3 className="text-2xl font-semibold">{block.title}</h3>
                <p className="mt-3 text-zinc-300">{block.copy}</p>
              </div>
              <motion.img
                src={block.image}
                alt={block.title}
                className="h-44 w-full rounded-xl object-cover"
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
    <section className="mx-auto w-full max-w-6xl px-6 py-24 md:px-10">
      <div className="rounded-3xl border border-[var(--accent)]/40 bg-gradient-to-r from-[#170f10] via-[#11151c] to-[#11151c] p-8 md:p-12">
        <AnimatedReveal>
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">DOWNTIME COSTS MORE THAN REPAIR.</h2>
          <p className="mt-6 max-w-3xl text-zinc-200">
            Every hour off the road affects schedules, revenue, and momentum. That is why reliable repair service
            matters. TAG Repair Center helps reduce delays with focused service, dependable work, and a process built
            around getting equipment moving again.
          </p>
          <ul className="mt-6 space-y-2 text-zinc-200">
            <li>- Lost time adds up fast.</li>
            <li>- Delayed loads create bigger problems.</li>
            <li>- Reliable repair support makes a real difference.</li>
          </ul>
          <Button href="#contact" className="mt-8">
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
      <div className="grid gap-5 md:grid-cols-4">
        {trustStats.map((stat, idx) => (
          <AnimatedReveal
            key={stat}
            delay={idx * 0.06}
            className="rounded-2xl border border-white/10 bg-[#13171d] p-5 text-lg font-medium"
          >
            {stat}
          </AnimatedReveal>
        ))}
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {testimonials.map((item, idx) => (
          <AnimatedReveal key={item.author} delay={idx * 0.08} className="rounded-2xl border border-white/10 p-6">
            <p className="text-zinc-100">&ldquo;{item.quote}&rdquo;</p>
            <p className="mt-4 text-sm text-zinc-400">- {item.author}</p>
          </AnimatedReveal>
        ))}
      </div>
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
      <div className="grid gap-4 md:grid-cols-2">
        {processSteps.map((step, idx) => (
          <AnimatedReveal key={step.title} delay={idx * 0.08} className="rounded-2xl border border-white/10 p-6">
            <p className="text-sm uppercase tracking-[0.15em] text-zinc-400">Step {idx + 1}</p>
            <h3 className="mt-2 text-2xl font-semibold">{step.title}</h3>
            <p className="mt-3 text-zinc-300">{step.copy}</p>
          </AnimatedReveal>
        ))}
      </div>
    </Section>
  );
}

export function FinalCtaSection() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10 md:py-28">
      <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 text-center md:p-12">
        <AnimatedReveal>
          <h2 className="text-3xl font-semibold md:text-5xl">Get back on the road with confidence.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-zinc-300">
            When repair matters, trust the team that understands the pressure behind every mile.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="#contact">Schedule Service</Button>
            <Button href="#contact" variant="secondary">
              Contact TAG Repair Center
            </Button>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
