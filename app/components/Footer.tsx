import Link from "next/link";

const Footer = () => {
  const links = [
    {
      title: "ABOUT",
      links: [
        "How Airbnb works",
        "Newsroom",
        "Investors",
        "Airbnbn Plus",
        "Airbnb Luxe",
      ],
    },
    {
      title: "COMMUNITY",
      links: [
        "Accessbility",
        "This is not a real site",
        "Its a pretty awesome clone",
        "Referrals accepted",
        "Papafam",
      ],
    },
    {
      title: "HOST",
      links: [
        "Accessbility",
        "This is not a real site",
        "Its a pretty awesome clone",
        "Referrals accepted",
        "Papafam",
      ],
    },
    {
      title: "SUPPORT",
      links: [
        "Accessbility",
        "This is not a real site",
        "Its a pretty awesome clone",
        "Referrals accepted",
        "Papafam",
      ],
    },
  ];
  return (
    <footer className="bg-gray-100">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 py-14  text-gray-600">
          {links.map((link) => (
            <div key={link.title} className="space-y-4 text-xs text-gray-800">
              <h5 className="font-bold">{link.title}</h5>
              {link.links.map((item) => (
                <Link href={item} key={item} className="block ">
                  {item}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
