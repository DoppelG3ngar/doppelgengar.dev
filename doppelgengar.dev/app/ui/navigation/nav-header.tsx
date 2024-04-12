import NavLinks from './nav-link';

export default function NavHeader() {
  return (
    <nav>
      <h1 className="text-3xl text-white">Kyle Moreira</h1>
      <p className="text-sm text-white">Developer</p>
      <div className="pt-10">
        <NavLinks />
      </div>
    </nav>
  );
}
