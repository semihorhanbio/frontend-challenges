import { useState } from "react";
import SubscribeButton from "./SubscribeButton";

function NewsletterSignup() {
    const [email, setEmail] = useState("");
    const [isValid, setIsValid] = useState(false);
  
    const handleInputChange = (e) => {
      const inputValue = e.target.value;
      setEmail(inputValue);
      setIsValid(e.target.checkValidity());
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Proceed with button logic when the form is submitted
      if (isValid) {
        console.log("Input is valid. Proceed with button logic.");
      }
    };

  return (
    <div className="flex justify-center h-screen">
        <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-[852px] mt-8 mb-7 max-md:max-w-full">
        <h1 className="text-gray-900 text-center text-4xl font-bold max-w-[589px] self-center max-md:max-w-full">
            Level Up Your Frontend Skills
        </h1>
        <div className="text-gray-700 text-center text-2xl self-stretch mt-5 max-md:max-w-full">
            Sign up for our free newsletter to receive weekly coding challenges that will help you improve your frontend development skills.
        </div>
        <div className="justify-center flex gap-5 mt-7">
            <input 
                className="text-slate-300 text-left text-2xl max-w-[589px] border bg-slate-50 grow justify-center pl-16 pr-16 py-3 rounded-lg border-solid border-slate-300 items-start max-md:max-w-full max-md:px-5" 
                type="email" 
                id="email-input" 
                aria-label="Email address" 
                placeholder="Enter your email address"
                value={email}
                onChange={handleInputChange}
                required
            />
            <SubscribeButton isValid={isValid}/>
        </div>
        <div className="flex gap-3 mt-4 items-start max-md:max-w-full max-md:flex-wrap">
            <input
                type="checkbox"
                className="border border-gray-900 flex w-[21px] shrink-0 h-5 flex-col rounded-full border-solid"
                aria-label="Newsletter Subscription Checkbox"
                name="newsletter"
                id="newsletter"
                required
            />
            <label className="text-gray-900 text-sm self-stretch grow shrink basis-auto max-md:max-w-full" htmlFor="newsletter">
                By checking this box, you agree to receive our weekly newsletter containing coding challenges, tips, and other related content. You may unsubscribe from the newsletter at any time
            </label>
        </div>
        </form>
    </div>
  );
}

export default NewsletterSignup;