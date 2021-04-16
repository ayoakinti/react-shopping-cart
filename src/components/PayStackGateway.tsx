import { PaystackButton } from "react-paystack";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
// import { emptyCart } from "../actions/cart";
import { AuthState } from "../reducers/modules/authReducer";
import { AppState } from "../reducers/rootReducer";
require("dotenv").config();

type IPaystackProps = {
  amount: number;
};

const PaystackGateway = ({ amount }: IPaystackProps) => {
  // const dispatch = useDispatch();

  const history = useHistory();

  type IPayStackConfig = {
    reference: string;
    email: string;
    amount: number;
    publicKey: string;
  };

  const { user, token } = useSelector<AppState, AuthState>(
    (state) => state.auth
  );

  const config: IPayStackConfig = {
    // reference: new Date().getTime(),
    reference: `${Math.floor(Math.random() * 1000000000 + 1)}`,
    email: user?.email as string,
    amount: amount * 100,
    // Use your paystack key here
    publicKey: process.env.REACT_APP_PAYSTACK_KEY as string,
  };

  const promptUserToLogin = () => {
    history.push('/login');
  }

  const handlePaystackSuccessAction = (reference: string) => {
    // Implementation for whatever you want to do with reference and after success call.
    // dispatch(emptyCart())
    console.log("success");
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    // window.location.reload();
    console.log("closed");
  };

  const componentProps = {
    ...config,
    text: "Proceed to checkout",
    onSuccess: (reference: string) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  return (
    <div className="">
      {token ? (
        <PaystackButton className="btn btn-primary w-100" {...componentProps} />
      ) : (
        <button className="btn btn-primary w-100" onClick={promptUserToLogin}>Proceed to checkout</button>
      )}
    </div>
  );
};

export default PaystackGateway;
