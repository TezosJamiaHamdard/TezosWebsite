import React from 'react'
import './Page-2.css'
import { useEffect } from 'react'


const PageSec = () => {
    const imageUrl = "https://cdn.mos.cms.futurecdn.net/KerS8YfraFj9SUL5j7AaEQ-1200-80.jpg"
    // const imageUrl2 = "https://cdn.mos.cms.futurecdn.net/KerS8YfraFj9SUL5j7AaEQ-1200-80.jpg"
    useEffect(() => {
        const panels = document.querySelectorAll(".panel");

        panels.forEach((panels) => {
            panels.addEventListener("click", () => {
                removeActiceClasses();
                panels.classList.add("active");
            });

        });

        function removeActiceClasses() {
            panels.forEach((panels) => {
                panels.classList.remove("active");

            });

        }
    })
    return (
        <div className="PageSecond">
            <div className="container">
                <div
                    className="panel active"
                    style={{
                        backgroundImage:
                            `url(${imageUrl})`
                    }}
                >
                    <h3>Event</h3>
                </div>
                <div
                    className="panel"
                    style={{
                        backgroundImage:
                            `url(${imageUrl})`
                    }}
                >
                    <h3>event</h3>
                </div>
                <div
                    className="panel"
                    style={{
                        backgroundImage:
                            `url(${imageUrl})`
                    }}
                >
                    
                </div>
                <div
                    className="panel"
                    style={{
                        backgroundImage:
                            `url(${imageUrl})`
                    }}
                >
                    <h3>Enemies</h3>
                </div>
                <div
                    className="panel"
                    style={{
                        backgroundImage:
                            `url(${imageUrl})`
                    }}
                >
                    <h3>Items and Abilities</h3>
                </div>
            </div>

        </div>
    )
}

export default PageSec