import { useState } from "react";
import { MdDelete } from "react-icons/md";

function Tester() {
    const [LinkList, setLinkList] = useState([{ service: "" }]);

    const handleServiceChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...LinkList];
        list[index][name] = value;
        setLinkList(list);
    };

    const handleServiceRemove = (index) => {
        const list = [...LinkList];
        list.splice(index, 1);
        setLinkList(list);
    };

    const handleServiceAdd = () => {
        setLinkList([...LinkList, { service: "" }]);
    };

    return (
        <form className="App" autoComplete="off">
            <div className="form-field mt-9">
                <div className="flex justify-around">

                    <div><label htmlFor="service">Service(s)</label></div>
                    <div> <button
                        type="button"
                        onClick={handleServiceAdd}
                        className="bg-pink-600"
                    >
                        <span>Add a Service</span>
                    </button></div>
                </div>


                {LinkList.map((singleService, index) => (
                    <div key={index} className="services flex justify-center w-[25%]">
                        <div className="first-division">
                            <input
                                name="service"
                                type="text"
                                id="service"
                                value={singleService.service}
                                onChange={(e) => handleServiceChange(e, index)}
                                required
                            />
                            {/* {LinkList.length - 1 === index && LinkList.length < 4 && (
                                <button
                                    type="button"
                                    onClick={handleServiceAdd}
                                    className="add-btn"
                                >
                                    <span>Add a Service</span>
                                </button>
                            )} */}
                        </div>

                        <div className="second-division">
                            {LinkList.length !== 1 && (
                                <button
                                    type="button"
                                    onClick={() => handleServiceRemove(index)}
                                    className=""
                                >
                                    <span className="h-100"><MdDelete /></span>
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div className="output">
                <h2>Output</h2>
                {LinkList &&
                    LinkList.map((singleService, index) => (
                        <ul key={index}>
                            {singleService.service && <li>{singleService.service}</li>}
                        </ul>
                    ))}
            </div>
        </form>
    );
}

export default Tester;