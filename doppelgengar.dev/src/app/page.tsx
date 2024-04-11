import Image from "next/image";
import { NavHeader } from "@/ui/nav/navHeader";

export default function Home() {
  return (
    <main className="h-screen p-4">
      <div className="h-full border grid grid-rows-8 grid-cols-4 gap-6 grid-flow-col">
        <section
          id="header"
          className="flex justify-center pt-20 col-span-1 row-span-8"
        >
          <div>
            <Image
              src="/logo.svg"
              alt="Logo"
              width={100}
              height={24}
              priority
            />
            <div className="pl-4 pt-6">
              <NavHeader isActive={true} href="/home">
                home
              </NavHeader>
              <NavHeader isActive={false} href="/home">
                work
              </NavHeader>
              <NavHeader isActive={false} href="/home">
                contact
              </NavHeader>
              <NavHeader isActive={false} href="/home">
                blog
              </NavHeader>
            </div>

            {/* <ul className="pl-2">
              <li className="pt-8 text-white">
                <span className="text-highlight">#</span>home
              </li>
              <li className="pt-2 text-shade">
                <span className="text-highlight">#</span>work
              </li>
              <li className="pt-2 text-shade">
                <span className="text-highlight">#</span>contact
              </li>
              <li className="pt-2 text-shade">
                <span className="text-highlight">#</span>blog
              </li>
            </ul> */}
          </div>
        </section>

        <section id="content" className="relative col-span-3 row-span-8">
          <div className="absolute right-0 bottom-0 w-1/3 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            mattis metus nec lacus ornare, vel maximus enim lobortis. Maecenas
            fermentum venenatis magna a tristique. Mauris cursus, urna ac
            pretium aliquam, sem dui dictum nibh, eu suscipit nisl ligula ut
            lorem. Fusce enim est, maximus vitae ultricies in, consectetur a
            turpis. Praesent venenatis ipsum eget magna mattis vestibulum.
            Maecenas sit amet posuere massa. Mauris vitae posuere orci, at
            bibendum quam. Suspendisse varius vel quam in laoreet. Aliquam nec
            viverra tortor. Proin pellentesque elit ac malesuada dapibus. Morbi
            diam nibh, semper et pharetra id, faucibus a felis. Donec eu
            ullamcorper purus. Nulla tortor massa, euismod venenatis nisi quis,
            elementum cursus neque. Etiam ac sem at quam molestie tempus. Etiam
            et laoreet justo. Pellentesque porttitor, augue vitae feugiat
            cursus, orci metus condimentum lacus, nec aliquet nibh nunc at quam.
            Ut et arcu vitae urna dapibus rhoncus. Praesent et justo auctor,
            suscipit quam quis, porttitor augue.
          </div>
        </section>
      </div>
    </main>
  );
}
