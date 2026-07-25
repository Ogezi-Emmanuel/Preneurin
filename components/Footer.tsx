import Link from 'next/link';

const CONTACT_EMAIL = 'secretariat@preneurin.org';

const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Programs', href: '/programs' },
  { name: 'Initiatives', href: '/initiatives' },
  { name: 'First Session', href: '/success-stories' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="px-6 pb-10 pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="premium-panel rounded-[2rem] px-8 py-10 md:px-12">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <img src="/Preneurin Logo.jpeg" alt="Preneurin Logo" className="mb-5 h-14 w-auto rounded-full premium-outline" />
              <p className="max-w-sm text-sm leading-relaxed text-gray-600">
                A founder-led growth platform for fashion designers, built from one real session and shaped with practical clarity.
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-5 inline-flex rounded-full border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-accent hover:text-accent"
              >
                {CONTACT_EMAIL}
              </a>
            </div>

            <div>
              <h4 className="mb-4 text-lg font-medium">Quick Links</h4>
              <div className="grid grid-cols-2 gap-3">
                {navigationLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    className="text-sm text-gray-600 transition-colors hover:text-accent"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-lg font-medium">Studio Contact</h4>
              <p className="text-sm text-gray-600">Lagos, Nigeria</p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                For sessions, partnerships, and general enquiries, route everything through the main inbox so future updates stay centralized.
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-5 inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#5a2833]"
              >
                Contact Via Email
              </a>
            </div>
          </div>

          <div className="mt-10 border-t border-[var(--border)] pt-6 text-center">
            <a
              href="https://emmanuelogezi.cv"
              target="_blank"
              rel="noreferrer"
              className="text-sm tracking-wide text-accent transition-colors hover:text-[var(--foreground)]"
            >
              Engineered by Emmanuel Ogezi
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
