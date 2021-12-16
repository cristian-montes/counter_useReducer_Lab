import { useEffect, useReducer, useState } from 'react'

const pinkRGB = `rgb(236, 72, 153)`

const initialValue ={
  count: 0,
  color: 'rgb(210, 210, 456)'
}


function countReducer(stateCounts, action){
  switch (action.type){
    case 'increment':{
      return {
        count: stateCounts.count + 1,
        color: action.color
      };
    }
    case 'decrement':{
      return {count: stateCounts.count - 1, color: action.color};
    }
    case 'reset':{
      return {count: 0, color: action.color};
    }

    default: {
      throw Error(`Unknown action: ${action.type}`)
    }
  }
}

export default function Counter() {

  const [ itemsCount, dispatch ] = useReducer(countReducer, initialValue)

 
  const increment = () => {
    dispatch({
      type: 'increment',
      color: 'rgb(52, 211, 153)'
    })
   
  }

  const decrement = () => {
    dispatch({
      type: 'decrement',
      color: 'rgb(239, 68, 68)'
    })
  }

  const reset = () => {
    dispatch({
      type: 'reset',
      color: 'rgb(236, 72, 153)'
    })
  }

  return (
    <main className="bg-black bg-opacity-90 min-h-screen flex flex-col items-center justify-center text-4xl text-pink-500">
      <h1 className="mb-5" style={{ color: itemsCount.color}}>
        {itemsCount.count}
      </h1>
      <div className="flex w-1/2 justify-around">
        <button
          className="text-green-400 border-2 border-green-400 p-3"
          type="button"
          onClick={increment}
          aria-label="increment"
        >
          Increment
        </button>
        <button
          className="text-red-500 border-2 border-red-500 p-2"
          type="button"
          onClick={decrement}
          aria-label="decrement"
        >
          Decrement
        </button>
        <button
          className="text-pink-500 border-2 border-pink-500 p-2"
          type="button"
          aria-label="reset"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </main>
  )
}
