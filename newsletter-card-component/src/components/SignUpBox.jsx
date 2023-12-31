import { useState } from "react";
function NewsletterSignup() {
    const [email, setEmail] = useState("");
    const [isChecked, setIsChecked] = useState(false);
  
    const handleInputChange = (e) => {
      const { value } = e.target;
      setEmail(value);
    };
  
    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (email && isChecked) {
        if (validateEmail(email)) {
          alert("Email is valid and checkbox is checked!");
        } else {
          alert("Email is invalid!");
        }
      }
    };
  
    const validateEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
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
            <button 
            className="text-white text-center text-2xl font-medium whitespace-nowrap justify-center items-stretch bg-gray-900 px-8 py-3 rounded-lg max-md:px-5 hover:bg-gray-700"
            type="submit">Subscribe</button>
        </div>
        <div className="flex gap-3 mt-4 items-start max-md:max-w-full max-md:flex-wrap">
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="border border-gray-900 flex w-[21px] shrink-0 h-5 rounded-full border-solid"
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