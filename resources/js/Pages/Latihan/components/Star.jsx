import React from "react";
import { Fragment } from "react";

const Star = () => {
    return (
        <Fragment>
             <section className="flex justify-center">
                <div className="rating " >
                    <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400 "
                    />
                    <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400 "
                        
                    />
                    <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400 "
                    />
                    <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400 "
                    />
                    <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400 "
                    />
                </div>
            </section>

        </Fragment>
    )
}

export default Star