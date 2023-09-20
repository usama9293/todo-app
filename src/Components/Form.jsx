import React, { useState } from 'react'

function Form() {
    const [title, settitle] = useState("")
    const [desc, setdesc] = useState("")
    const [main, setmain] = useState([])
    const submitHandle = (e) => {
        e.preventDefault()
        setdesc("")
        settitle("")
        setmain([...main, { title, desc }])

    }
    const deleteHandler = (i) => {

        let copytask = [...main]
        copytask.splice(i, 1)
        setmain(copytask)
    }
    let data = <h1>not availabe</h1>
    if (main.length > 0) {
        data = main.map((t, i) => {
            return (
                <li key={i} className='flex items-center justify-between'>
                    <div className='flex justify-between mb-5 w-2/3'>
                        <h4 className='font-bold text-xl'>{t.title}</h4>
                        <h5 className='font-medium text-lg'>{t.desc}</h5>
                    </div>
                    <button
                        onClick={() => {

                            deleteHandler(i)

                        }}
                        className='bg-red-400 font-bold text-white px-4 py-2 rounded'>Delete</button>
                </li>
            )
        })
    }
    return (
        <>
            <form onSubmit={submitHandle}>
                <input
                    className="border-4 text-2xl border-zinc-700 py-2 px-4 m-4"
                    placeholder="Enter Task here"
                    value={title}
                    onChange={(e) => settitle(e.target.value)}

                />
                <input
                    className="border-4 text-2xl border-zinc-700 py-2 px-4 m-4"
                    placeholder="Enter Description here"
                    value={desc}
                    onChange={(e) => setdesc(e.target.value)}

                />
                <button className="px-4 py-3 text-2xl m-5 bg-gray-300  text-zinc-700 rounded font-bold">Add Task</button>
            </form>
            <hr />
            <div className='bg-slate-400 p-4' >
                <ul>

                    {data}
                </ul>



            </div>

        </>
    )
}

export default Form