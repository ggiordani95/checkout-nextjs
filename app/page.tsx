import Checkout from "@/components/Checkout/Checkout";
import LeftSideCheckout from "@/components/LeftSideCheckout";

export default function Home() {
  return (
    <main className="flex bg-white min-h-screen flex-col sm:flex-row">
      <LeftSideCheckout />
      <Checkout />
    </main>
  );
}
