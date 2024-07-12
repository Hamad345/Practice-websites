import React from "react";
import { useState } from "react";

export default function Calculator() {
  const [value, setValue] = useState("");
  return (
    <>
      <div className="flex justify-center ">
        <div className="flex bg-white w-1/5 h-2/5s justify-center border-2  mt-4  rounded-2xl">
          <div className="">
            <input
              type="text"
              className="w-80 h-20 bg-black text-white border mt-2 rounded-xl text-3xl"
              placeholder="0"
              value={value}
            />
            <div className="flex flex-col gap-y-1  mt-2">
              <div className="flex  ">
                <input
                  type="button"
                  value="AC"
                  className="bg-blue-500 w-20 border rounded-xl h-14 hover:bg-slate-50"
                  onClick={(e) => setValue(" ")}
                />
                <input
                  type="button"
                  value="DE"
                  className="bg-blue-500 w-20 border rounded-xl h-14 hover:bg-slate-50"
                  onClick={(e) => setValue(value.slice(0, -1))}
                />
                <input
                  type="button"
                  value="."
                  className="bg-blue-500 w-20 border rounded-xl h-14 hover:bg-slate-50"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  type="button"
                  value="/"
                  className="bg-blue-500 w-20 border rounded-xl h-14 hover:bg-slate-50"
                  onClick={(e) => setValue(value + e.target.value)}
                />
              </div>
              <div className="flex  ">
                <input
                  type="button"
                  value="7"
                  className="bg-blue-500 w-20 border rounded-xl h-14 hover:bg-slate-50"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  type="button"
                  value="8"
                  className="bg-blue-500 w-20 border rounded-xl h-14 hover:bg-slate-50"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  type="button"
                  value="9"
                  className="bg-blue-500 w-20 border rounded-xl h-14 hover:bg-slate-50"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  type="button"
                  value="*"
                  className="bg-blue-500 w-20 border rounded-xl h-14 hover:bg-slate-50"
                  onClick={(e) => setValue(value + e.target.value)}
                />
              </div>
              <div className="flex  ">
                <input
                  type="button"
                  value="4"
                  className="bg-blue-500 w-20 border rounded-xl h-14 hover:bg-slate-50"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  type="button"
                  value="5"
                  className="bg-blue-500 w-20 border rounded-xl h-14 hover:bg-slate-50"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  type="button"
                  value="6"
                  className="bg-blue-500 w-20 border rounded-xl h-14 hover:bg-slate-50"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  type="button"
                  value="+"
                  className="bg-blue-500 w-20 border rounded-xl h-14 hover:bg-slate-50"
                  onClick={(e) => setValue(value + e.target.value)}
                />
              </div>
              <div className="flex  ">
                <input
                  type="button"
                  value="1"
                  className="bg-blue-500 w-20 border rounded-xl h-14 hover:bg-slate-50"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  type="button"
                  value="2"
                  className="bg-blue-500 w-20 border rounded-xl h-14 hover:bg-slate-50"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  type="button"
                  value="3"
                  className="bg-blue-500 w-20 border rounded-xl h-14 hover:bg-slate-50"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  type="button"
                  value="-"
                  className="bg-blue-500 w-20 border rounded-xl h-14 hover:bg-slate-50"
                  onClick={(e) => setValue(value + e.target.value)}
                />
              </div>
              <div className="flex gap-x-2 ">
                <input
                  type="button"
                  value="00"
                  className="bg-blue-500 w-20 border rounded-xl h-14 hover:bg-slate-50"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  type="button"
                  value="0"
                  className="bg-blue-500 w-20 border rounded-xl h-14 hover:bg-slate-50"
                  onClick={(e) => setValue(value + e.target.value)}
                />
                <input
                  type="button"
                  value="="
                  className="bg-blue-500 w-36 border rounded-xl h-14 hover:bg-slate-50"
                  onClick={(e) => setValue(eval(value))}
                />
              </div>
              {/* main */}
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
}
