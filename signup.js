import Firstname from "../components/signup/firstname";
import Gender from "../components/signup/Gender";
import Lastname from "../components/signup/Lastname";
import Username from "../components/signup/Username";

export default function signup() {
    const firstNameFoward = () => {
        const firstName = document.querySelector(".firstName")
        firstName.classList.toggle("-translate-x-full")
    }
    const lastNameFoward = () => {
        const firstName = document.querySelector(".lastName")
        firstName.classList.toggle("-translate-x-full")
    }
    const lastNameBackward = () => {
        const firstName = document.querySelector(".firstName")
        firstName.classList.toggle("-translate-x-full")
    }
    const userNameFoward = () => {
        const firstName = document.querySelector(".userName")
        firstName.classList.toggle("-translate-x-full")
    }
    const userNameBackward = () => {
        const firstName = document.querySelector(".lastName")
        firstName.classList.toggle("-translate-x-full")
    }
    const genderFoward = () => {
        const firstName = document.querySelector(".gender")
        firstName.classList.toggle("-translate-x-full")
    }
    const genderBackward = () => {
        const firstName = document.querySelector(".userName")
        firstName.classList.toggle("-translate-x-full")
    }
  return (
    <div>
        <div className="absolute inset-0 bg-red-500 z-40 firstName transform transition duration-200 ease-in-out">
            <Firstname />
            <button className="bg-white p-4 text-black w-auto" onClick={firstNameFoward}>Foward</button>
        </div>
        <div className="absolute inset-0 bg-orange-500 z-30 lastName transform transition duration-200 ease-in-out">
            <Lastname />
            <button className="bg-white p-4 text-black w-auto" onClick={lastNameFoward}>Foward</button>
            <button className="bg-white p-4 text-black w-auto" onClick={lastNameBackward}>Backward</button>
        </div>
        <div className="absolute inset-0 bg-yellow-500 z-20 userName transform transition duration-200 ease-in-out">
            <Username />
            <button className="bg-white p-4 text-black w-auto" onClick={userNameFoward}>Foward</button>
            <button className="bg-white p-4 text-black w-auto" onClick={userNameBackward}>Backward</button>
        </div>
        <div className="absolute inset-0 bg-green-500 z-10 gender transform transition duration-200 ease-in-out">
            <Gender />
            <button className="bg-white p-4 text-black w-auto" onClick={genderFoward}>Foward</button>
            <button className="bg-white p-4 text-black w-auto" onClick={genderBackward}>Backward</button>
        </div>
    </div>
  )
}
