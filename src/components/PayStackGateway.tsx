import { PaystackButton } from "react-paystack";
import { useSelector } from "react-redux";
import { AppState } from "../reducers/rootReducer";

type IPaystackProps = {
    amount: number
}

const PaystackGateway = ({ amount }: IPaystackProps) => {
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
    publicKey: "pk_test_5c662581199ab2042651f0cb6f6b56f1c3805822",
  };

  const handlePaystackSuccessAction = (reference: string) => {
    // Implementation for whatever you want to do with reference and after success call.
    return reference;
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
