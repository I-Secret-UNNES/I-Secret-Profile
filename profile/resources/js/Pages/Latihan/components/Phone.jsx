import React from "react";
import { Fragment } from "react";

const Phone = () => {
    return (
        <Fragment>
            <section className="flex justify-evenly">
                <div className="  flex justify-end items-center ">
                    <div>
                        <div>
                            <h1 className="font-bold text-6xl text-black animate-pulse">
                                Hello, Ahmad
                            </h1>
                        </div>
                        <div>
                            <h1 className=" font-bold text-3xl text-blue-500 ">
                                Lets Start Our Journey
                            </h1>
                        </div>
                    </div>
                </div>
                <div className=" flex justify-center">
                    <div className="mockup-phone">
                        <div className="camera"></div>
                        <div className="display">
                            <div className="artboard artboard-demo phone-1">
                                <h1>Hy, Ahmad...welcome to</h1>
                                <h1 className="font-bold text-red-700">
                                    <span className="text-blue-700">I-Se</span>
                                    cret
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Phone;
