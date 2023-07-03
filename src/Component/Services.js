import React from 'react'
import '../Component/Services.css'
import img1 from '../Image/logos.png'
import img2 from '../Image/images.jpg'
import img3 from '../Image/download2.jpg'


function Services() {
  return (
    
    <>
    <h1>Our Features & Services</h1>
    <h3>Seamlessly Expand Your Financial Reach with FinEdge</h3>
    <div id="carouselExampleCaptions" class="carousel slide ">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img1} class="d-block w-100" alt=''/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Individual Money Transfers</h5>
        <p>FinEdge provides a seamless and secure platform for individuals to transfer money across borders.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block w-100" alt=''/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Business Payments</h5>
        <p>At FinEdge, we understand the importance of streamlined financial transactions for businesses operating on a global scale.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={img3} class="d-block w-100" alt=''/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Real-Time Payment Tracking</h5>
        <p>Transparency and visibility are crucial when it comes to cross-border payments.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Services