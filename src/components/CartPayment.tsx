import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { SiMediamarkt } from "react-icons/si";
import FormattedPrice from "./FormattedPrice";
import { useAppSelector } from "@/redux/hooks";
import { IReduxProductData } from "@/types";
import { loadStripe } from "@stripe/stripe-js";

const CardPayment = () => {
    const { userInfo, productData } = useAppSelector(
        (state) => state.productReducer
    );

    const [totalAmount, setTotalAmount] = useState(0);

    const { data: session } = useSession();
    const stripePromise = loadStripe(`${process.env.STRIPE_PUBLISHABLE_KEY!}`);

    const handleCheckout = async () => {
        const stripe = await stripePromise;

        const response = await fetch("/api/checkout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                items: productData,
                email: session?.user?.email,
            }),
        });
        const checkoutSession = await response.json();

        // Redirecting user/customer to Stripe Checkout
        const result: any = await stripe?.redirectToCheckout({
            sessionId: checkoutSession.id,
        });
        if (result.error) {
            alert(result?.error.message);
        }
    };

    useEffect(() => {
        let amt = 0;
        productData.map((item: IReduxProductData) => {
            amt += item.price * item.quantity;
            return;
        });
        setTotalAmount(amt);
    }, [productData]);

    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-2">
                <span className="bg-green-600 rounded-full p-1 h-6 w-6 text-sm text-white flex items-center justify-center mt-1">
                    <SiMediamarkt />
                </span>
                <p className="text-sm">
                    Your order qualifies for FREE Shipping by Choosing this
                    option at checkout. See details....
                </p>
            </div>
            <p className="flex items-center justify-between px-2 font-semibold">
                Total:{" "}
                <span className="font-bold text-xl">
                    <FormattedPrice amount={totalAmount} />
                </span>
            </p>
            {userInfo ? (
                <div className="flex flex-col items-center">
                    <button
                        onClick={handleCheckout}
                        className="w-full h-10 text-sm font-semibold bg-amazon_blue text-white rounded-lg hover:bg-amazon_yellow hover:text-black duration-300"
                    >
                        Proceed to Buy
                    </button>
                </div>
            ) : (
                <div className="flex flex-col items-center">
                    <button className="w-full h-10 text-sm font-semibold bg-amazon_blue bg-opacity-50 text-white rounded-lg cursor-not-allowed">
                        Proceed to Buy
                    </button>
                    <p className="text-xs mt-1 text-red-500 font-semibold animate-bounce">
                        Please login to continue
                    </p>
                </div>
            )}
        </div>
    );
};

export default CardPayment;
