import React, { useEffect, useState } from 'react'
import { OpenScroll } from '../../../utils/OpenScroller'
import Faq from "react-faq-component";
import { FAQuestionsAPI } from '../../../utils/APIcall';
import { useSelector } from 'react-redux';



// const data = {
//     title: "",
//     rows: [
//         {
//             title: "How to play?",
//             content: `Download the app and participate in the quiz by paying the minimum registration fee.`,
//         },
//         {
//             title: "How to Register ?",
//             content:
//                 <ol class="text-sm" style={{ paddingLeft: '60px' }}>
//                     <li>Download the EzeWin application from the application store. Please note, the application download is free of cost, however data charges may apply. For further details on data charges, please contact your service provider.                    </li>

//                     <li>Enter your mobile number. (Please note that we will be able to get in touch with you only if the mobile number you have shared is registered with the service provider in India)
//                     </li>
//                     <li> Select your age from the drop down. (will be verified on KYC verification) for participation in the Show who have completed 18 years.
//                     </li>
//                     <li>Choose your gender.
//                     </li>
//                     <li>Select your education.- Optional
//                     </li>
//                     <li>Select your occupation.- Optional
//                     </li>
//                     <li>Please select your area of residence as per the options provided (you should have documented proof for your address)</li>
//                     <li>Please select your e-mail ID.</li>
//                     <li>Once you have submitted all details, you will get see a confirmation screen confirming the registration. </li>
//                 </ol>,
//         },
//         {
//             title: "When can I Register?",
//             content: `User can register on the ezewin  app/website by paying the registration fees until 1 hour before the quiz time slot.`,
//         },
//         {
//             title: "How many times can I register for a quiz?",
//             content: `One user one registration allowed and one user one win only allowed , multiple winning on the same quiz will not be allowed and user will be disqualified and not allowed to participate in any future quiz.`,
//         },
//         {
//             title: "How and Where will I know the results ?",
//             content: `Once the weekly quiz completes the results will be out in the winners deck section of app.`,
//         },
//         {
//             title: "How do I claim the winning amount?",
//             content: `All winners will be contacted by the EzeWin team and the invitation of cheque presentation date will be communicated, as per KYC policy of the company the cheques will be credited within 23 days post completion of winner KYC`,
//         },
//         {
//             title: "what if I registered and did not play the quiz?",
//             content: `EzeWin is not responsible if the user does not participitate on the particular registered quiz `,
//         },

//     ],
// };

const styles = {
    // bgColor: 'white',
    bgColor: 'rgba(255, 255, 255, 0)',
    // bgColor: '#efedee',
    // bgColor:trasparent
    // background-color: #efedee,
    titleTextColor: "black",
    rowTitleColor: "black",
    // rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
    animate: true,
    // arrowIcon: "V",
    tabFocus: true
};




function FAQ() {
    const [APIData, setAPIData] = useState([])

    const token = useSelector((state) => state.token);

    const APICaller = async () => {

        try {
            const res = await FAQuestionsAPI(token)
            setAPIData(res.data)
            console.log(APIData)
        } catch (e) {
            console.log(e)

        } finally {

        }
    }


    const data = {
        title: "",
        rows:APIData,
    };
    


    useEffect(() => {
        OpenScroll()
        APICaller()
    }, [])

    return (
        <div>
            <div className='h-[70px]'>
            </div>
            <div className='w-[100vw] h-[100vh] max-h-auto'>
                <div className='my-5 font-bold text-xl text-center'>Frequently Asked Questions (FAQ)</div>
                <div className=' mx-10 px-10'>


                    <Faq
                        data={data}
                        styles={styles}
                        config={config}
                    />

                </div>


            </div>
        </div>
    )
}

export default FAQ