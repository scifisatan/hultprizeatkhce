type Link = {
  href: string;
  text: string;
};

const FooterSection = ({ title, links }: { title: string; links: Link[] }) => (
  <div>
    <h3 className="font-semibold mb-4">{title}</h3>
    <ul className="space-y-2">
    {links.map((link: Link, index: number) => (
      <li key={index}>
        <a href={link.href} className="text-muted-foreground hover:text-primary">
        {link.text}
        </a>
      </li>
    ))}
    </ul>
  </div>
);

const Footer = () => (
  <footer className="py-8 border-t">
    <div className="max-w-5xl mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8">
        <FooterSection
          title="Quick Links"
          links={[
            { href: "/about", text: "About" },
            { href: "/archive", text: "Archive" },
            { href: "https://hultprizefoundation.notion.site/2025-Competitors-Guidebook-1115dd17a06b80c7a3c8ca764b59164b", text: "Resources" },
          ]}
        />
        <FooterSection
          title="Connect"
          links={[
            { href: "#", text: "Facebook" },
            { href: "#", text: "Instagram" },
            { href: "#", text: "LinkedIn" },
          ]}
        />
        <FooterSection
          title="Partners"
          links={[
            { href: "https://www.hultprize.org/", text: "Hult Prize Foundation" },
            { href: "https://www.khwopa.edu.np", text: "Khwopa College" },
          ]}
        />
        <FooterSection
          title="Legal"
          links={[
            { href: "#", text: "Terms & Conditions" },
            { href: "#", text: "Code of Conduct" },
          ]}
        />
      </div>
      <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
        <p>© 2024 Hult Prize at Khwopa College of Engineering. All rights reserved.</p>
      </div>
    </div>
  </footer>
);


export default Footer;