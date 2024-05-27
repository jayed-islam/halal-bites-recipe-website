import { Helmet } from "react-helmet-async";
import { PaymentView } from "../../sections/purchase/view";
import { useParams } from "react-router-dom";

const PaymentPage = () => {
  const params = useParams();
  const { id } = params;
  return (
    <>
      <Helmet>
        <title>Payment: HalalBites</title>
      </Helmet>
      <PaymentView props={id} />
    </>
  );
};

export default PaymentPage;
