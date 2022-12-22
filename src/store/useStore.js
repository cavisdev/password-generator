import create from "zustand";
import { data } from "../components/data";

const useStore = create((set, get) => ({
    lowercase: true,
    uppercase: true,
    numbers: true,
    symbols: true,
    length: 12,
    passwords: [],
    setSelection: (name) =>
        set((state) => ({ [name]: !state[name] })),
    addLength: () => {
        if (get().length < 25)
        set((state) => ({ length: state.length + 1 }))
    },
    subLength: () => {
        if (get().length > 1)
        set((state) => ({ length: state.length - 1 }))
    },
    generatePasswords: () => {
        const tempChars = []
        const tempAllPasswords = []

        if (get().lowercase) tempChars.push(...data.lowercase)
        if (get().uppercase) tempChars.push(...data.uppercase)
        if (get().numbers) tempChars.push(...data.numbers)
        if (get().symbols) tempChars.push(...data.symbols)

        
        if (tempChars.length === 0) return (window.alert("No values selected"))

        //Generate Passwords
        for (let i = 0; i < 4; i++) {
            let tempPassword = ""
            for (let j = 0; j < get().length; j++) {
                tempPassword += shuffleArray(tempChars)[Math.floor(Math.random() * tempChars.length)]
            }
            tempAllPasswords.push(tempPassword)
        }

        set({ passwords: tempAllPasswords })
    },
}))

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array
  }


export {useStore}