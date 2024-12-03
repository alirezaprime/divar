import { useCallback, useState } from "react";
import CheckOtpForm from "../components/templates/CheckOtpForm";
import SendOtpForm from "../components/templates/SendOtpForm";

function AuthPage() {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [code, setCode] = useState("");
  return (
    <div>
      {step === 1 && (
        <SendOtpForm
          setStep={setStep}
          mobile={mobile}
          setMobile={setMobile}
          setCode={setCode}
        />
      )}
      {step === 2 && (
        <CheckOtpForm
          setStep={setStep}
          setMobile={setMobile}
          setCode={setCode}
        />
      )}
    </div>
  );
}

export default AuthPage;
