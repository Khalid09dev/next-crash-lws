"use client";
export default function Button() {
    console.log('button component rendered! ^^');
    return (
        <div>
            <button className="mt-3 bg-green-400 rounded-md text-white px-3 py-1.5" onClick={() => console.log('i have clicked!')}>Click here</button>
        </div>
    )
}