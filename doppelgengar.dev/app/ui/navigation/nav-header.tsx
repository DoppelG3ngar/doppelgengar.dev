import NavLinks from './nav-link';

export default function NavHeader() {
  return (
    <nav className="md:pl-5 md:pt-5 ">
      <h1 className="text-3xl text-white md:text-5xl">Kyle Moreira</h1>
      <p className="text-sm text-white md:text-lg">Developer</p>
      <div className="pt-10">
        <NavLinks />
      </div>
    </nav>
  );
}
