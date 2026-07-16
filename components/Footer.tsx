import Link from 'next/link';

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
    <footer className="border-t border-[var(--border)] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img src="/Preneurin Logo.jpeg" alt="Preneurin Logo" className="h-12 w-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              A founder-led growth platform for fashion designers, built from one real session and growing with practical clarity.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {navigationLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="text-gray-500 dark:text-gray-400 hover:text-accent transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Contact Info</h4>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">Email: secretariat@preneurin.org</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Lagos, Nigeria 🇳🇬</p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[var(--border)] text-center">
          <a
            href="https://emmanuelogezi.cv"
            target="_blank"
            rel="noreferrer"
            className="text-accent text-sm tracking-wide transition-colors hover:text-[var(--foreground)]"
          >
            Engineered by Emmanuel Ogezi
          </a>
        </div>
      </div>
    </footer>
  );
}
