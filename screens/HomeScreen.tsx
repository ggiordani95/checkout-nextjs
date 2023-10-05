import Checkout from "@/components/Checkout/Checkout";
import LeftSideCheckout from "@/components/LeftSideCheckout";
import { StepsProvider } from "@/context/useContextInputs";

function HomeScreen() {
  return (
    <section className="flex bg-white min-h-screen flex-col sm:flex-row ">
      <StepsProvider>
        <LeftSideCheckout />
        <Checkout />
      </StepsProvider>
    </section>
  );
}

export default HomeScreen;
