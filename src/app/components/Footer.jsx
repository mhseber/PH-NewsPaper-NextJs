import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#1E293B] border-t">
      {/* Animated background gradient */}
      <div className="absolute inset-0  from-red-100 via-transparent to-red-100 animate-gradient" />

      <div className="relative container mx-auto px-4 py-10">
        {/* Top section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + Name */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-xl animate-pulse">
              PH
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">PH Newspaper</h2>
              <p className="text-sm text-slate-500">
                Trusted News, Every Moment
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-300">
            <Link href="/" className="hover:text-red-600 transition">
              Home
            </Link>
            <Link href="/news" className="hover:text-red-600 transition">
              News
            </Link>
            <Link href="/saradesh" className="hover:text-red-600 transition">
              Sara Desh
            </Link>
            <Link href="/politics" className="hover:text-red-600 transition">
              Politics
            </Link>
            <Link href="/sports" className="hover:text-red-600 transition">
              Sports
            </Link>
            <Link href="/business" className="hover:text-red-600 transition">
              Business
            </Link>
            <Link href="/technology" className="hover:text-red-600 transition">
              Technology
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-slate-300/60" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} PH Newspaper. All rights reserved.</p>

          <p className="animate-fade text-slate-300">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
