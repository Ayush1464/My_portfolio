import React from 'react'

const Home = () => {


  const handleResume=()=>{
    const resumeUrl='./ayush.pdf'
    const anchor = document.createElement('a');
    anchor.href = resumeUrl;
    anchor.download = 'ayush.pdf';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

  }

  return (
    <div className='home'>
        <div className='innerhome'>
        <h1>hii ,</h1>
        <h1>I am Ayush <span>mahapatra</span></h1>
        <h1>Full stack <span>developer</span></h1>

        <br />
        
        <button onClick={handleResume}>Download resume</button>
        </div>
    </div>
  )
}

export default Home