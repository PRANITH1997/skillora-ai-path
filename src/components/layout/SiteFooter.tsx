const SiteFooter = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto py-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        <section>
          <h3 className="text-sm font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </section>
        <section>
          <h3 className="text-sm font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Help Center</a></li>
          </ul>
        </section>
        <section>
          <h3 className="text-sm font-semibold mb-3">Learn</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:underline">Courses</a></li>
            <li><a href="#" className="hover:underline">Live Classes</a></li>
            <li><a href="#" className="hover:underline">Certifications</a></li>
          </ul>
        </section>
        <section>
          <h3 className="text-sm font-semibold mb-3">Social</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#" className="hover:underline">LinkedIn</a></li>
            <li><a href="#" className="hover:underline">Twitter</a></li>
            <li><a href="#" className="hover:underline">YouTube</a></li>
          </ul>
        </section>
      </div>
      <div className="border-t">
        <div className="container mx-auto py-6 text-sm text-muted-foreground flex items-center justify-between">
          <p>© {new Date().getFullYear()} Skilora Research Labs</p>
          <p>Built with care • AI-powered learning</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
