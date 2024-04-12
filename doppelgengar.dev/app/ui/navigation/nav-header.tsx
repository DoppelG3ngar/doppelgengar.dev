import NavLinks from './nav-link';

export default function NavHeader() {
  return (
    <nav className='md:pt-5 md:pl-5 '>
      <h1 className="text-3xl md:text-5xl text-white">Kyle Moreira</h1>
      <p className="text-sm md:text-lg text-white">Developer</p>
      <div className="pt-10">
        <NavLinks />
      </div>
    </nav>
  );
}
