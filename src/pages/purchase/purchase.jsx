import { Helmet } from "react-helmet-async";
import { PurchaseCoinView } from "../../sections/purchase/view";

const PurchaseCoinPage = () => {
  return (
    <>
      <Helmet>
        <title>Purchase Coin: HalalBites</title>
      </Helmet>
      <PurchaseCoinView />
    </>
  );
};

export default PurchaseCoinPage;
