import React from 'react';

const FAQ = () => {
    return (
        <div  className='px-10'>
            <div className="collapse collapse-plus bg-base-100 border border-base-300 my-5">
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title font-semibold">How does this posture corrector work?</div>
  <div className="collapse-content text-sm">A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.</div>
</div>
<div className="collapse collapse-plus bg-base-100 border border-base-300 my-5">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
  <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
</div>
<div className="collapse collapse-plus bg-base-100 border border-base-300 mb-10">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title font-semibold">How do I update my profile information?</div>
  <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
</div>

<div className=" w-40 mx-auto mb-5">
    <button className='btn btn-primary rounded-xl text-secondary'>See More FAQ’s</button>
</div>
        </div>
    );
};

export default FAQ;