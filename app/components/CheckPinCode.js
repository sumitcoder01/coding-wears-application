"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import { pincodes } from "@/lib/pincodes/pincodes";
import {setIsServiceable} from "@/app/redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
export default function CheckPinCode() {
    const isServiceable = useSelector((data) => data.cartData.isServiceable)
    const dispatch = useDispatch();
    const [pincode, setPincode] = useState('');
    const checkServiceability = () => {
        const parsedPincode = parseInt(pincode);
        if (pincodes.includes(parsedPincode)) {
            dispatch(setIsServiceable(true));
            toast.success('Congratulations! Your pin code is serviceable');
        } else {
            dispatch(setIsServiceable(false));
            toast.error('Sorry! Your pin code is not serviceable');
        }
    }

    return (
        <>
            <div className="flex items-center justify-between mt-4 mb-2">
                <input
                    className="text-md w-1/2 text-pink-500 border-b-2 border-pink-500 py-2 px-2 focus:outline-none"
                    type="text"
                    name="pincode"
                    id="pincode"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    placeholder="Enter your pincode"
                />
                <div className="text-center">
                    <button
                        className="flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded"
                        onClick={checkServiceability}
                    >
                        Check
                    </button>
                </div>
            </div>
            <div className="mt-3 text-center text-sm">
                {isServiceable === true && (
                    <p className="text-pink-500">Congratulations! Your pin code is serviceable.</p>
                )}
                {isServiceable === false && (
                    <p className="text-red-500">Sorry! Your pin code is not serviceable.</p>
                )}
            </div>
        </>
    );
}
