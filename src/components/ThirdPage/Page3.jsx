import React from 'react'
import './Page3.css'

function Page3() {
  return (
    <div className="PageThird">
      <h1 className='founders'>Founding Members</h1>
      <div className="responsive-background"></div>

      {/* <img src="/team1.svg" alt='' classNameName='team' /> */}
      <div className="buttons">

        <div className="btn-conteiner">
          <a className="btn-content" href="/">
            <span className="btn-title">Tech Team</span>
          </a>
        </div>
        <div className="btn-conteiner">
          <a className="btn-content" href="/">
            <span className="btn-title">Photography Team</span>
          </a>
        </div>
        <div className="btn-conteiner">
          <a className="btn-content" href="/">
            <span className="btn-title">PR Team</span>
          </a>
        </div>
        <div className="btn-conteiner">
          <a className="btn-content" href="/">
            <span className="btn-title">Designing Team</span>
          </a>
        </div>
        <div className="btn-conteiner">
          <a className="btn-content" href="/">
            <span className="btn-title">Social Media Team</span>
          </a>
        </div>
        <div className="btn-conteiner">
          <a className="btn-content" href="/">
            <span className="btn-title">Content Team</span>
          </a>
        </div>
        <div className="btn-conteiner">
          <a className="btn-content" href="/">
            <span className="btn-title">Management Team</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Page3
