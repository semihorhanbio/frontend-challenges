import React, { useState } from 'react';
function SubscribeButton({isValid}) {
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleClick = () => {
      setIsSubscribed(true);
    }
    return (
        <div>
            <button>
                className="text-white text-center text-2xl font-medium whitespace-nowrap justify-center items-stretch bg-gray-900 px-8 py-3 rounded-lg max-md:px-5" 
                onClick={handleClick}
                disabled={!isValid}
                    Subscribe
            </button>
        {isSubscribed && <div>Thank you for subscribing!</div>}
        </div>
  );
}

export default SubscribeButton;