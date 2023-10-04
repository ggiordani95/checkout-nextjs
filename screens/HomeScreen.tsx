import Checkout from "@/components/Checkout/Checkout";
import LeftSideCheckout from "@/components/LeftSideCheckout";

function HomeScreen() {
  return (
    <section className="flex bg-white min-h-screen flex-col sm:flex-row ">
      <LeftSideCheckout />
      <Checkout />
    </section>
  );
}

export default HomeScreen;
