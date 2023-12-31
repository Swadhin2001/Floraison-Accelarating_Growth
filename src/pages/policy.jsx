import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import React from 'react'
import Head from 'next/head'
import {motion} from 'framer-motion'

function privacy_policy() {
  return (
    <>
    <Head>
      <title>Privacy Policy - Floraison</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navbar/>
      <motion.div initial = {{opacity: 0, y: -20}} whileInView={{opacity: 1, y : 0}} 
    transition={{ duration: 1}}>
            <div className="d-flex justify-content-center">
                <div className="container-1140 my-5 privacy-pol-padding hidden-up-down
                ">
                    <h2 className="pb-4 privacy-pol-h2">Privacy Policy - updated August 2020</h2>
                    <div>
                        <p className="pb-2 privacy-pol-p">Thank you for visiting our web site. At Floraison India Strategic Consulting Pvt Ltd, we are committed to protecting your privacy as a visitor to this Website and as our client. To our visitors and to our clients, we offer this pledge:</p>
                        <h4 className="pb-2 privacy-pol-h4">Collection of Information</h4>
                        <p className="pb-2 privacy-pol-p">We collect personally identifiable information, like names, postal addresses, email addresses, etc., when voluntarily submitted by our visitors. The information you provide is used to fulfill you specific request. This information is only used to fulfill your specific request, unless you give us permission to use it in another manner, for example to add you to one of our mailing lists.</p>
                        <h4 className="pb-2 privacy-pol-h4">What we do with the information we gather</h4>
                        <ul className="pb-2 ms-5 privacy-pol-p">
                            <li>We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:</li>
                            <li>Internal record keeping.</li>
                            <li>We may use the information to improve our services.</li>
                            <li>We may periodically send promotional email about new services, special offers or other information which we think you may find interesting using the email address which you have provided.</li>
                            <li>From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail.</li>
                            <li>We may use the information to customize the website according to your interests.</li>
                            <li>We will never sell your information.</li>
                        </ul>
                        <h4 className="pb-2 privacy-pol-h4">Cookie/Tracking Technology</h4>
                        <p className="pb-2 privacy-pol-p">The Site may use cookie and tracking technology depending on the features offered. Cookie and tracking technology are useful for gathering information such as browser type and operating system, tracking the number of visitors to the Site, and understanding how visitors use the Site. Cookies can also help customize the Site for visitors. Personal information cannot be collected via cookies and other tracking technology, however, if you previously provided personally identifiable information, cookies may be tied to such information. Aggregate cookie and tracking information may be shared with third parties.</p>
                        <h4 className="pb-2 privacy-pol-h4">Distribution of Information</h4>
                        <p className="pb-2 privacy-pol-p">We will not sell, disseminate, disclose, trade, transmit, transfer, share, lease or rent any personally identifiable information to any third party not specifically authorized by you to receive your information except as we have disclosed to you in this Privacy Policy.</p>
                        <h4 className="pb-2 privacy-pol-h4">Commitment to Data Security</h4>
                        <p className="pb-2 privacy-pol-p">Your personally identifiable information is kept secure. Only authorized employees, agents and contractors (who have agreed to keep information secure and confidential) have access to this information. All emails and newsletters from this site allow you to opt out of further mailings.</p>
                        <h4 className="pb-2 privacy-pol-h4">Third Party Links</h4>
                        <p className="pb-2 privacy-pol-p">This Website may contain links to third party Websites that are not controlled by us. These third party links are made available to you as a convenience and you agree to use these links at your own risk. Please be aware that we are not responsible for the content of third party Websites linked to this site nor are we responsible for the privacy policy or practices of third party Websites linked to our site. Our Privacy Policy only applies to information we collect from you while you are at and while you are actively in a session with our website (www.floraison.in). If you should link to a third party Website from our site, we strongly encourage you to review and become familiar with that Website’s privacy policy.</p>
                        <h4 className="pb-2 privacy-pol-h4">Privacy Contact Information</h4>
                        <p className="pb-2 privacy-pol-p">
                            If you have any questions, concerns, or comments about our privacy policy you may contact us using the information below:
                            <br/>
                            <br/>
                            By email :
                            <Link href="/" className="text-decoration-none"> Start@floraison.in</Link>
                            <br/>
                            <br/>
                            By Phone: +91 80 26538257 / 58 / 59
                            <br/>
                            <br/>
                            By using the site, you are accepting the practices described in this privacy policy. We reserve the right to change this Privacy Policy without providing you with advance notice of our intent to make the changes. Any changes, however, will be posted in this section of our website and the changes will only apply to activities and information on a going forward, not retroactive basis. You are encouraged to review the privacy policy whenever you visit the site to make sure that you understand how any personal information you provide will be used.
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
        <Footer policy_active="active-footer"/>
    </>
  )
}

export default privacy_policy
