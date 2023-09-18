import Checkout from "@/components/Checkout";
import BackgroundTheme from "@/components/BackgroundTheme";

export default function Home() {
  return (
    <main className="flex bg-white min-h-screen flex-row">
      <BackgroundTheme/>
      <Checkout/>
    </main>
  );
}
