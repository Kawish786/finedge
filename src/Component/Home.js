import React from 'react'

function Home(props) {
  return (
    <div className=''style={{padding:"5px",backgroundColor:props.mode==='dark'?'black':'salmon'}}>
        <h3 class="display-3 pt-8 bg-light" style={{color:"grey",margin:"50px",padding:"12px"}}>FinEdge Revolutionizes Cross-Border Payments, <br/><span class="fw-lighter"> Breaking Boundaries for Seamless Global Transactions</span></h3>
        <p class="mb-6" style={{margin:"50px"}}>FinEdge, a pioneering fintech startup, is spearheading a transformative movement in the world of cross-border payments. Their mission is to eradicate the limitations imposed by geographic boundaries, enabling individuals and businesses to effortlessly conduct transactions on a global scale. With their cutting-edge technology and innovative solutions, FinEdge is redefining the future of international payments, paving the way for a borderless financial landscape.</p>
    </div>
  )
}

export default Home