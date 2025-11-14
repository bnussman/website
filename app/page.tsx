import Link from "next/link";
import { Akamai } from "./Akamai";
import { Item } from "./Item";
import { LinkItem } from "./LinkItem";
import { Linode } from "./Linode";

export default function Home() {
  return (
    <main className="p-8 flex justify-center md:pt-8 lg:pt-16">
      <div className="flex flex-col gap-12 w-full sm:w-3/4 md:w-3/4 lg:w-1/2 xl:1/3 2xl:max-w-[650px]">
        <section className="flex flex-col gap-4">
          <h1 className="tracking-tighter font-bold text-5xl">Banks Nussman</h1>
          <div className="flex flex-row gap-4 md:gap-8">
            <LinkItem label="Github" href="https://github.com/bnussman" />
            <LinkItem
              label="LinkedIn"
              href="https://linkedin.com/in/banks-nussman-097a73193/"
            />
            <LinkItem label="Email" href="mailto:banks@nussman.us" />
          </div>
        </section>
        <section className="flex flex-col gap-4">
          <h2 className="tracking-tighter font-bold text-2xl">Experience</h2>
          <Item
            link="https://akamai.com"
            title="Akamai"
            icon={<Akamai />}
            description={
              <p>
                Linode was aquired by Akamai. I'm continuing development on our
                dashboard while also maturing Linode's frontend architecture to
                scale to large enterprise customers. View my open source work at
                Akamai{" "}
                <Link
                  target="_blank"
                  href="https://github.com/linode/manager/pulls?q=is%3Apr+author%3Abnussman-akamai"
                  className="underline"
                >
                  here
                </Link>
                .
              </p>
            }
          />
          <Item
            title="Linode"
            link="https://linode.com"
            icon={<Linode />}
            description={
              <p>
                Modernized, built, maintained, and improved Linode's user-facing
                dashboard and TypeScript packages. View open source work at
                Linode{" "}
                <Link
                  target="_blank"
                  href="https://github.com/linode/manager/pulls?q=is%3Apr+author%3Abnussman+"
                  className="underline"
                >
                  here
                </Link>
                .
              </p>
            }
          />
        </section>
        <section className="flex flex-col gap-4">
          <h2 className="tracking-tighter font-bold text-2xl">Projects</h2>
          <Item
            title="Beep"
            link="https://ridebeep.app"
            icon={<p>🚕</p>}
            description={
              <>
                <p>
                  A rideshare app for college students. View the source code{" "}
                  <Link
                    className="underline"
                    href="https://github.com/bnussman/beep"
                    target="_blank"
                  >
                    here
                  </Link>
                  .
                </p>
                <p>25k+ signups and 600k+ rides</p>
              </>
            }
          />
        </section>
        <section className="flex flex-col gap-4">
          <h2 className="tracking-tighter font-bold text-2xl">Selfhosted</h2>
          <Item
            title="Photon"
            link="https://github.com/komoot/photon"
            description={
              <>
                <p>
                  I'm selfhosting{" "}
                  <Link
                    className="underline"
                    target="_blank"
                    href="https://github.com/komoot/photon"
                  >
                    photon
                  </Link>{" "}
                  in my homelab. Feel free to use it:{" "}
                  <Link
                    className="underline"
                    href="https://photon.nussman.us"
                    target="_blank"
                  >
                    https://photon.nussman.us/api
                  </Link>
                </p>
                <p>It only has data for the United States.</p>
              </>
            }
          />
          <Item
            title="OSRM"
            link="https://github.com/Project-OSRM/osrm-backend"
            description={
              <>
                <p>
                  I'm also selfhosting{" "}
                  <Link
                    className="underline"
                    target="_blank"
                    href="https://github.com/Project-OSRM/osrm-backend"
                  >
                    osrm-backend
                  </Link>{" "}
                  in my homelab. Feel free to use it:{" "}
                  <Link
                    className="underline"
                    target="_blank"
                    href="https://osrm.ridebeep.app"
                  >
                    https://osrm.ridebeep.app
                  </Link>
                </p>
                <p>It only has data for the United States.</p>
              </>
            }
          />
        </section>
      </div>
    </main>
  );
}
