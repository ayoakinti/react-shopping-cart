import { PaystackButton } from "react-paystack";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart } from "../actions/cart";
import { AppState } from "../reducers/rootReducer";
require("dotenv").config();

type IPaystackProps = {
    amount: number
}

const PaystackGateway = ({ amount }: IPaystackProps) => {

  const dispatch = useDispatch();

  type IPayStackConfig = {
    reference: string;
    email: string;
    amount: number;
    publicKey: string;
  };

  interface IAuth {
    user: IUser;
  }

  interface IUser {
    firstName: string;
    lastName: string;
    email: string;
  }

  const { user } = useSelector<AppState, IAuth>((state) => state.auth);

  const config: IPayStackConfig = {
    // reference: new Date().getTime(),
    reference: `${Math.floor((Math.random() * 1000000000) + 1)}`,
    email: user.email,
    amount: amount*100,
    // Use your paystack key here
    publicKey: process.env.REACT_APP_PAYSTACK_KEY as string,
  };

  const handlePaystackSuccessAction = (reference: string) => {
    // Implementation for whatever you want to do with reference and after success call.
    dispatch(emptyCart())
  };

  // you can call this function anything
  const handlePaystackCloseAction = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    // window.location.reload();
    console.log('closed')
  }

  const componentProps = {
      ...config,
      text: 'Make Payments',
      onSuccess: (reference: string) => handlePaystackSuccessAction(reference),
      onClose: handlePaystackCloseAction,
  };

  return (
    <div className="px-2">
      <PaystackButton className='auth-btn' {...componentProps} />
    </div>
  );
};

export default PaystackGateway;
