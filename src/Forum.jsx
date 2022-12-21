import React , {useEffect,useState} from 'react'

const Forum = () => {
  const [color,setcolor]=useState('navy')
  React.useEffect(()=>{
    document.body.style.backgroundColor = color;
    document.body.style.color=color;
  },[color])
  return (
    <div>
    <button>color</button>
    </div>
  )
}

export default Forum
