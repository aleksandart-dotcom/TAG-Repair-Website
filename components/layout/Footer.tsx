import { contactDetails, navLinks } from "@/data/site-content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0d10]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3 md:px-10">
        <div>
          <h3 className="text-lg font-semibold">TAG Repair Center</h3>
          <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-300">
            Truck and trailer repair support built for real-world trucking demands.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-zinc-300">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-zinc-300">
            <li>
              Phone:{" "}
              <a href={contactDetails.phoneHref} className="hover:text-white">
                {contactDetails.phone}
              </a>
            </li>
            <li>Email: {contactDetails.email}</li>
            <li>Address: {contactDetails.address}</li>
            <li>
              Hours:
              <ul className="mt-2 space-y-1 text-zinc-400">
                {contactDetails.hours.map((slot) => (
                  <li key={slot}>{slot}</li>
                ))}
              </ul>
            </li>
          </ul>
          <div className="mt-4 flex gap-4 text-sm text-zinc-300">
            <a href="#" className="hover:text-white">
              Facebook
            </a>
            <a href="#" className="hover:text-white">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
