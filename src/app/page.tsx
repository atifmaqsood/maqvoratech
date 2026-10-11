import { Logo } from "@/components/brand/logo";

export default function Home() {
  return (
    <section className="container-x grid min-h-[80dvh] place-items-center">
      <h1 className="sr-only">Maqvoratech</h1>
      <Logo markClassName="size-12" />
    </section>
  );
}
