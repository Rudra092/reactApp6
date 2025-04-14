import logo from "../assets/logo-2.png";
export default function AppFooter(){
    return(
        <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

          {/* Logo + Social */}
          <div className="md:col-span-2">
            <img src={logo} alt="Logo" className="h-16 mb-4" />
            <p className="mb-4 text-xl">Building elegant web solutions for modern businesses.</p>
          </div>

          {/* Column 1 */}
          <div>
            <h4 className="text-white text-xl font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-xl">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Press</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-white text-xl font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-xl">
              <li><a href="#" className="hover:text-white">Docs</a></li>
              <li><a href="#" className="hover:text-white">Guides</a></li>
              <li><a href="#" className="hover:text-white">API Reference</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-white text-xl font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-xl">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-sm text-center">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
    )
}