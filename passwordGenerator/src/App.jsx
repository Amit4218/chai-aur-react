import React, { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const passwordRef = useRef(null);

  const generateSecurePassword = useCallback(() => {
    let generatedPassword = "";
    let characterString =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) characterString += "0123456789";
    if (character) characterString += "~!@#$%^&*()";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * characterString.length + 1);
      generatedPassword += characterString.charAt(char);
    }

    setPassword(generatedPassword);
  }, [length, number, character, setPassword]);

  useEffect(() => {
    generateSecurePassword();
  }, [length, number, character, generateSecurePassword]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();

    // passwordRef.current?.setSelectionRange(0,30);

    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="h-screen bg-zinc-800 text-white p-5">
        <div className="flex justify-center items-center">
          <div className="border border-x-zinc-500 rounded-md h-60 w-[50rem] m-10">
            <h1 className="text-xl font-bold text-center  my-4">
              Password Generator
            </h1>
            <div className="flex p-3 gap-3">
              <input
                type="text"
                className="w-[92%] bg-zinc-500 py-2 px-3 rounded outline-none"
                readOnly
                value={password}
                ref={passwordRef}
              />
              <button
                className="item-center bg-blue-600 font-bold text-xl px-2 rounded cursor-pointer"
                onClick={copyPassword}
              >
                copy
              </button>
            </div>
            <div className="flex p-3 gap-4 ">
              <div className="flex gap-2">
                <label htmlFor="counter" className="bg-gray-400 px-3 rounded">
                  Len: {length}
                </label>
                <input
                  type="range"
                  id="counter"
                  className="cursor-pointer"
                  min={6}
                  max={50}
                  value={length}
                  onChange={(e) => {
                    setLength(e.target.value);
                  }}
                />
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    id="number"
                    value={number}
                    onChange={() => {
                      setNumber((prev) => !prev);
                    }}
                  />
                  <label htmlFor="number" className="font-bold">
                    Include Number
                  </label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    id="character"
                    value={character}
                    onChange={() => {
                      setCharacter((prev) => !prev);
                    }}
                  />
                  <label htmlFor="character" className="font-bold">
                    Include special character
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
