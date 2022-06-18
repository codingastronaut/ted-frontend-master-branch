import React ,{useEffect , useState} from "react";
import UniversityInner from '../../components/UniversityInner/UniversityInner';
import Layout, { VARIANTS } from "src/components/layout";
import styled from "styled-components";
import Typography from "../../components/Typography/Typography";
import Box from "../../components/Box/Box";
import Categories from "src/components/atoms/icons/Categories";
import { mediaQuery } from "src/utils/styles";
import Faqlists from '../../components/UniversityInner/Faqlist';
import { PaystackButton,usePaystackPayment  } from 'react-paystack'





function PayStack() {
  const publicKey = "pk_test_40455e4226a146af03b76d0ae977e1e694759da0"
  const amount = 100
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  }





  return (
    <Layout variant={VARIANTS.TENLAYOUT}>

<div className="App">
      <div className="container">
        <div className="item">
          <img />
          <div className="item-details">
            <p>Dancing Shoes</p>
            <p>{amount}</p>
          </div>
        </div>
        <div className="checkout-form">
          <form>
            <label>Name</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
            <label>Email</label>
            <input
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Phone</label>
            <input
              type="text"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </form>
          <PaystackButton {...componentProps} />
        </div>
      </div>
    </div>

    </Layout>
  );
}
export default PayStack;
