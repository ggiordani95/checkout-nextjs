import BackgroundTheme from "@/components/BackgroundTheme";
import Checkout from "@/components/Checkout";

export default function Home() {
  return (
    <main className="flex bg-white min-h-screen">
      <BackgroundTheme/>
      <Checkout/>
    </main>
  );
}
