import React from "react";

// Import department icons
import depIco1 from "../../../assets/images/dep-ico1.png";
import depIco2 from "../../../assets/images/dep-ico2.png";
import depIco3 from "../../../assets/images/dep-ico3.png";
import depIco4 from "../../../assets/images/dep-ico4.png";
import depIco5 from "../../../assets/images/dep-ico5.png";

const departmentList = [
    { icon: depIco1, name: "Food" },
    { icon: depIco2, name: "Seafood" },
    { icon: depIco3, name: "Baked Goods" },
    { icon: depIco4, name: "Dairy" },
    { icon: depIco5, name: "Fresh Products" },
    { icon: depIco1, name: "Food" },
    { icon: depIco2, name: "Seafood" },
    { icon: depIco3, name: "Baked Goods" },
    { icon: depIco4, name: "Dairy" },
    { icon: depIco5, name: "Fresh Products" },
];

const Departments = () => {
    return (
        <div className="row mb-3">
            <div className="col-md-12 head_style">
                <h2>Departments</h2>
            </div>
            <div className="col-md-12">
                <div className="dep-store">
                    {departmentList.map((dep, index) => (
                        <div className="dep-item" key={index}>
                            <img className="dep-ico" src={dep.icon} alt={dep.name} />
                            <span>{dep.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Departments;
