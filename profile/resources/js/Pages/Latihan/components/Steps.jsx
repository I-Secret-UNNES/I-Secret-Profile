import React from "react";
import { Fragment } from "react";

const Steps = ({number_1}) => {
    return (
        <Fragment>
            <section className="flex justify-center">
                <ul className="steps steps-vertical">
                    <li className="text-black font-bold step step-primary">
                        {number_1}
                    </li>
                    <li className="text-black font-bold step ">
                        Join I-Secret
                    </li>
                    <li className="text-black font-bold step">Confirmation</li>
                    <li className="text-black font-bold step">
                        Congratulations{" "}
                    </li>
                </ul>
            </section>
        </Fragment>
    );
};

export default Steps;
