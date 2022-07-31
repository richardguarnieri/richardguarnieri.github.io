const Footer = () => {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 to-slate-700">
        {/* Footer Container */}
        <div className="container mx-auto flex justify-center items-center px-5 py-3">
          {/* Footer Name */}
          <p className="font-extralight text-white text-center">Copyright © {new Date().getFullYear()} - Richard Guarnieri</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
