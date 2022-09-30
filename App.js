import React, {useState} from 'react';
import './Index.css'

export default function App() {
  const [activeSlide, setActiveSlide] = useState(0)

  const data = [
    {indicator: 'bar', title: 'putin', desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore iusto ab fugiat suscipit aliquam dolorem assumenda voluptates dolores earum, maxime dolorum recusandae tenetur id quis dolore obcaecati explicabo neque quas.'},
    {indicator: 'bar', title: 'hitler', desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore iusto ab fugiat suscipit aliquam dolorem assumenda voluptates dolores earum, maxime dolorum recusandae tenetur id quis dolore obcaecati explicabo neque quas.'},
    {indicator: 'bar', title: 'pm modi', desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore iusto ab fugiat suscipit aliquam dolorem assumenda voluptates dolores earum, maxime dolorum recusandae tenetur id quis dolore obcaecati explicabo neque quas.'},
    {indicator: 'bar', title: 'peter obi', desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore iusto ab fugiat suscipit aliquam dolorem assumenda voluptates dolores earum, maxime dolorum recusandae tenetur id quis dolore obcaecati explicabo neque quas.'},
    {indicator: 'bar', title: 'ishrat zaid', desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore iusto ab fugiat suscipit aliquam dolorem assumenda voluptates dolores earum, maxime dolorum recusandae tenetur id quis dolore obcaecati explicabo neque quas.'},
  ]

  const forward = (index) =>{
    setActiveSlide(index + 1)
    
  }
  const backward = (index) =>{
    setActiveSlide(index - 1)
    
  }
  const resetSlide = () =>{
      setActiveSlide(0)
  }

  return (
    <div className='container'>
      
      <div className="row mt-4">
        <div className={` col-11 col-md-5 mx-auto  p-0`}>
          {data.map(({title, desc}, index)=>{
            return (
              <div key={index} >
                <div style={{transition: 'all .4s ease-in-out'}} className={`${activeSlide === index ?  'd-block' : 'd-none'}`}>

                <div className="d-flex justify-content-around my-3">
                  <button className="btn btn-outline-warning text-capitalize"  onClick={resetSlide}>Restart</button>
                  <button disabled={activeSlide === 0 && "true"} className="btn btn-outline-danger text-capitalize" onClick={()=> backward(index)}>previous</button>
                  <button disabled={activeSlide === 4 &&"true"} className="btn btn-outline-success text-capitalize" onClick={()=> forward(index)}>next</button>
                </div>
                <h5 className="text-center text-capitalize _card-title my-0 pt-4 pb-2">{title}</h5>
                <p className="text-center _card-desc pt-3 pb-5 px-3">{desc}</p>
                </div>
              </div>
            )
          })}

        </div>
      </div>
      <div className="row">
        <div className="col-11 col-md-5 mx-auto">
          <div className="d-flex justify-content-end">
          {data.map((props,index)=>{
            return (
              <div key={index} className={index === activeSlide ? ' _active-slide d-noe bar mx-1' : 'bar mx-2 d-block'}>
                {index === activeSlide && activeSlide +1}
              </div>
            )
          })}
          </div>
        </div>
      </div>
    </div>
  )
}
