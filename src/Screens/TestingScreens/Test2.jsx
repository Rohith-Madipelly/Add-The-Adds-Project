import { useLocation } from "react-router-dom";

// NextPage component
function Test2() {
    const location = useLocation()
    // Access the props sent from the previous page
    const receivedData = location.state
    console.log(">>>>",receivedData)

    return (
        <div>
            <div className='h-[70px]'>
            </div>
            <div className='w-[100vw] h-[100vh] max-h-auto'>
                <div className='my-5 font-bold text-xl text-center'>Terms and Condition</div>
                <div className=' mx-10 px-10 '>
                    <h1>Received Data</h1>
                    <img src={receivedData.slideContent.imageUrl}/>
                    {/* <p>Name: {receivedData.name}</p> */}
                    {/* <p>Age: {receivedData.age}</p> */}
                </div>
            </div>
        </div>

    );
}

export default Test2;