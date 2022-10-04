
import { DummyApi } from './api/dataDummy';


const data =[{"name":"test1"},{"name":"test2"}];

export default function Services({ user }) {
  console.log("service-ruu orj irsen data",DummyApi)
  return (
    <div style={{ maxWidth: '420px', margin: '96px auto' }}>
      <ul>
      {data.map(function(d, idx){
         return (<li key={idx}>{d.name}
         </li>)
       })}
    </ul>
       <DummyApi />
    </div>
  )
}
