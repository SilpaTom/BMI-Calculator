import { useRef, useState } from 'react'
import './App.css'
import { TextField , Button} from '@mui/material'

function App() {
  const [height,setHeight] = useState(0)
  const[weight,setWeight]=useState(0)

  const[result,setResult]= useState('--')
  const[isHeight,setIsHeight]=useState(true)
  const[isWeight,setIsWeight]=useState(true)
  const colorRef=useRef()
  //validate the input

  const validate=(e)=>{
    const value=e.target.value 
    const name=e.target.name
   
  if(!!value.match(/^[0-9.]*$/))
    {
        if(name=='height'){
          setHeight(value)
          setIsHeight(true)
        }

        else{
          setWeight(value)
          setIsWeight(true)
      }
  }
else{
      if(name=='height'){
        setHeight(value)
        setIsHeight(false)
      }

      else{
        setWeight(value)
        setIsWeight(false)
    }

  }

 }

 const calculate=()=>{
   const heightinMeter= height/100
   const bmi= ( weight/(heightinMeter*heightinMeter)).toFixed(2)
  setResult(bmi)
  if( bmi <18.5)
    
    {
    colorRef.current.classList.remove("bg-secondary","bg-success","bg-warning","bg-danger","bg-info")
    colorRef.current.classList.add("bg-info")

  }

  else if(18.5<bmi  && bmi<25){

       colorRef.current.classList.remove("bg-secondary","bg-success","bg-warning","bg-danger","bg-info")
       colorRef.current.classList.add("bg-success")
  }
 
 else if(25<bmi && bmi<30){

  colorRef.current.classList.remove("bg-secondary","bg-success","bg-warning","bg-danger","bg-info")
  colorRef.current.classList.add("bg-warning")
}
else if (bmi>30){

  colorRef.current.classList.remove("bg-secondary","bg-success","bg-warning","bg-danger","bg-info")
  colorRef.current.classList.add("bg-danger")

}

else{
  setResult("--")
}
 }


 const reset=()=>{
  setHeight(0)
  setIsHeight(true)
  setIsWeight(true)
  setWeight(0)
  setResult('--')
  colorRef.current.classList.remove("bg-secondary","bg-success","bg-warning","bg-danger","bg-info")
   colorRef.current.classList.add("bg-secondary")
 }



  return (
    <>
   <div className="row w-100">
    <div className="col-md-1"></div>
   <div className="col-md-10">  
    <div className='mt-5 ms-2 d-flex align-items-center justify-content-center' style={{ width:"100%"}}>
      <div className='bg-light p-5 rounded' style={{width:"600 px"}}>
      <div className='row w-100'>
          <div className="row">
          <h1 className='text-center text-primary' > BMI CALCULATOR</h1> </div>        
          <h5 className='text-center mb-4'>Body Mass Index Calculator</h5> 
          
      </div>

      <div className="row">
        <div className="col-md-6 p-3 d-flex align-items-center justify-content-center">
            <img src="https://us.123rf.com/450wm/rastudio/rastudio1803/rastudio180301470/98024894-overweight-caucasian-white-man-holding-hot-dog-and-soda-in-hands-while-measuring-his-weight-on-the.jpg?ver=6" alt="Image" className='w-100' style={{height:'300px'}}/> 
        </div> 
        <div className="col-md-6 d-flex align-items-center justify-content-center">
           <form className='border border-info p-4 w-100' >
              <div >              
                <TextField id="filled-basic" value={height || ""} name='height' label="Height(cm)" variant="filled" className=' fs-5 w-100' onChange={(e)=>{validate(e)}} />
                {!isHeight &&  <p className='text-danger'>Please enter valid Height</p>}
                
              </div>
              <div>
                 <TextField id="filled-basic"  value={weight || ""} name='weight' label="Weight(kg)" variant="filled" className='mt-1 fs-5 w-100' onChange={(e)=>{validate(e)}}/>
                 {!isWeight && <p className='text-danger'>Please enter valid weight</p>}
                
              </div> 
              <div className='d-flex align-items-center justify-content-center '>
                  <Button variant="contained" className='mt-3 fs-5 me-1' onClick={calculate} disabled={isHeight && isWeight ?false:true}>Calculate</Button>
                  <Button variant="contained" className='mt-3 fs-5' onClick={reset}>Reset</Button>
                                   
              </div>
              
            </form> 
        </div>
      </div>

      


      <div className='row mt-5  ms-1 w-100 '>
         <div className='col-md-4 pt-2 border bg-primary d-flex align-items-center justify-content-center'> 
          <h3 className='fs-5 fw-bolder'>Your BMI:</h3>
         </div>

         <div className='col-md-8 pt-2 border bg-secondary  d-flex align-items-center justify-content-center' ref={colorRef} >
          <p className=' fs-5 fw-bolder'>{result} </p>            
         </div>
      </div>

      <div className="row w-100 mt-4 border border-dark ms-1">
        <div className="col-md-3  bg-info  ">
          <div >
            <h6 className='text-center'> Underweight</h6> 
            <h6 className='text-center'> &lt; 18.5 </h6>
          </div>
        </div>
        <div className="col-md-3 bg-success ">
        <div >
            <h6 className='text-center'> Normal weight</h6> 
            <h6 className='text-center'> 18.5 - 25 </h6>
          </div>
        </div>
        <div className="col-md-3 bg-warning ">
        <div >
            <h6 className='text-center'> Over weight</h6> 
            <h6 className='text-center'> 25 - 30 </h6>
          </div>
        </div>
        <div className="col-md-3 bg-danger  ">
        <div>
            <h6 className='text-center'> Obese</h6> 
            <h6 className='text-center'> &gt;30  </h6>
          </div>
        </div>
      </div>
    </div>
    </div>
   </div>
   <div className="col-md-1"></div>
   </div>

  

      
    </>
  )
}

export default App
