import React from "react";
import Sdata  from "./Sdata";
import Card from "./Card";
import Footer from "./Footer";

const Service = () => {
    return (
        <>
            <div className="my-4">
                <h1 className="text-center"> Наши сервисы </h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">

                            {
                                Sdata.map((val, ind) => {
                                    return <Card
                                        key={ind}
                                        imgsrc={val.imgsrc}
                                        title={val.title}
                                        p={val.p}
                                        bottom={val.bottom}
                                    />
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Service;