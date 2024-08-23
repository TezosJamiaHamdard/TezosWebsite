import React from 'react'
import './PageFour.css'
import bg from '../../assets/contact4.jpg'

function Pagefour({contactRef}) {
    return (
        <div ref={contactRef} className='four'  style={{backgroundImage: `url(${bg})`}}>
            {/* <h1></h1> */}
            <div className="form-container" name="contactform">
                <form className="form">
                    <div className="form-group">
                        <label htmlFor="email">Want to Join Us?</label>
                        <input type="text" id="email" name="email" required="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="textarea">
                            Describe Yourself and How Can You Contribute?
                        </label>
                        <textarea
                            name="textarea"
                            id="textarea"
                            rows={10}
                            cols={50}
                            required=""
                            defaultValue={"          "}
                        />
                    </div>
                    <button className="form-submit-btn" type="submit">
                        Submit
                    </button>
                </form>
            </div>

        </div>
    )
}

export default Pagefour
