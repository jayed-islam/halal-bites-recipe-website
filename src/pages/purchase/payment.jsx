import { Helmet } from "react-helmet-async";
import { PaymentView } from "../../sections/purchase/view";

const PaymentPage = () => {
  return (
    <>
      <Helmet>
        <title>Payment: HalalBites</title>
      </Helmet>
      <PaymentView />
    </>
  );
};

export default PaymentPage;
