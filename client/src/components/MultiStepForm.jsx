import React from "react";
import { useStep } from "react-hooks-helper";

import Account from "./Account";
import Address from './Address'
import Job from './Job'
import Name from './Name'

const steps = [
  { id: "account" },
  { id: "name" },
  { id: "job" },
  { id: "address" },
];

const MultiStepForm = () => {
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  const props = { navigation };

  switch (id) {
    case "account":
      return <Account {...props} />;
    case "name":
      return <Name {...props} />;
    case "job":
      return <Job {...props} />;
    case "address":
      return <Address {...props} />;
    default:
      return null;
  }
};

export default MultiStepForm;
