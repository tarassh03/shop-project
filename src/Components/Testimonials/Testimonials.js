import React,{useState} from 'react'

const Testimonials = () => {

    const [count,setCount] = useState(0);
    const [color,setColor] =useState('green');

    const toggleColor = () => {
        setColor((value) => (
            value === 'red' ? 'green' : 'red'
        ))
    }


    return (
        <>
        <div>
            <p>Color: {color}</p>
            <button onClick={() => toggleColor()}>Change Color</button>
        </div>
            <button onClick={() => setCount(count-1)} >-</button>
            <input value={count} type='text' readOnly />
            <button onClick={() => setCount(count+1)}>+</button>

        </>
    )
}

export default Testimonials