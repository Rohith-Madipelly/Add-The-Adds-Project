import React, { useEffect, useState } from 'react'
import { OpenScroll } from '../../../utils/OpenScroller'
import Faq from "react-faq-component";
import { FAQuestionsAPI } from '../../../utils/APIcall';
import { useSelector } from 'react-redux';



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
            console.log("Data ", APIData)
        } catch (e) {
            console.log(e)
        } finally {

        }
    }


    const data = {
        title: "",
        rows: APIData,
    };



    useEffect(() => {
        OpenScroll()
        APICaller()
    }, [])

    return (
        <div className='new_Page_GroundImage'>
            <div className='h-[70px]'>
            </div>
            <div className='w-[100vw] h-[100vh] max-h-auto'>
                <div className='my-5 font-bold text-xl text-center'>Frequently Asked Questions (FAQ)</div>
                <div className=' mx-10 px-10'>

                    {APIData.length === 0 ? <div> No FAQ's available
                    </div> : <Faq
                        data={data}
                        styles={styles}
                        config={config}
                    />}


                </div>


            </div>
        </div>
    )
}

export default FAQ

