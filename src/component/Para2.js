import {useState} from 'react'
//import Obj1 from "../component/Obj1"
//import Obj2 from "../component/Obj2.js"
//import Obj3 from "../component/Obj3.js"

function  Para2() {
   const obj1 = [{mobile:"oppo",color:"black",verson:"2018"},{mobile:"vivo",color:"blue",verson:"2018"},
                 {mobile:"realme",color:"green",verson:"2018"},
                 {mobile:"samsung",color:"white",verson:"2018"}]
    const obj2 = [{cover:"oppo",color:"black",verson:"2018"},{cover:"vivo",color:"blue",verson:"2018"},
                   {cover:"realme",color:"green",verson:"2018"},
                   {cover:"samsung",color:"white",verson:"2018"}]
  const obj3 = [{mobile:"oppo",color:"black",verson:"2018"},{mobile:"vivo",color:"blue",verson:"2018"},
                    {mobile:"realme",color:"green",verson:"2018"},
                     {mobile:"samsung",color:"white",verson:"2018"}] 
        const [data,setData]=useState("")
        
            console.log(data)             
            
      return (
        <div className="container">

          
        <div className="row">
                     <div className="col-md-6 id">
                        <div className="left">
                           <h4> employee information</h4><hr/> 
                           <ul className="styl">
                           <li>
                           <button onClick={()=>setData(obj1)}>mobile </button><br/>
                           <button onClick={()=>setData(obj2)}>cover</button><br/>
                           <button onClick={()=>setData(obj3)}>data</button>
                           </li>
                            </ul>
                           

                            
                        </div>
                     </div>
                <div className="col-md-6 id2">
                    <div className="right">
                       
                     </div>
                 </div>
          </div>
        
    </div>
      )
}
export default Para2