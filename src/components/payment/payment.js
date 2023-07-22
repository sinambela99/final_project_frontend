import Image from "next/image"

const Payment = () => {
    return (
        <div className="flex justify-center items-center p-25 min-h-screen bg-gradient-to-r from-green-500 to-green-600">
            <form action="" className="p-20 w-700 bg-white text-gray-700 shadow-md">
                <div className=" flex">
                    <div className="col">
                        <h3 className="title text-20 text-gray-700 pb-5 uppercase">billing address</h3>
                        <div className="my-10">
                            <span className="mb-1 block">full name :</span>
                            <input className=" focus:border-black border-1 border-gray-300 px-3 py-15 text-base" type="text" placeholder="john deo"></input>
                        </div>
                        <div className="my-10">
                            <span className="mb-51 block">email :</span>
                            <input className=" focus:border-black border-1 border-gray-300 px-3 py-15 text-base" type="email" placeholder="example@example.com"></input>
                        </div>
                        <div className="my-10">
                            <span className="mb-51 block">address :</span>
                            <input className=" focus:border-black border-1 border-gray-300 px-3 py-15 text-base" type="text" placeholder="room - street - locality"></input>
                        </div>
                        <div className="my-10">
                            <span className="mb-51 block">city :</span>
                            <input className=" focus:border-black border-1 border-gray-300 px-3 py-15 text-base" type="text" placeholder="mumbai"></input>
                        </div>
                        <div>
                            <div>
                                <span className="mb-1 block">state :</span>
                                <input className=" focus:border-black border-1 border-gray-300 px-3 py-15 text-base" type="text" placeholder="india"></input>
                            </div>
                            <div className="my-10">
                                <span className="mb-1 block">zip code :</span>
                                <input className=" focus:border-black border-1 border-gray-300 px-3 py-15 text-base" type="text" placeholder="123 456"></input>
                            </div>
                        </div>
                    </div>
                    <div className="col ml-20 p-0">
                        <h3 className="title">Metode Pembayaran</h3>
                        <div className="my-10">
                            <span className="mb-1 block">cards accepted :</span>
                            <Image height={34} width={250} src="/assets/card_img.png" alt="Debit Card"></Image>
                        </div>
                        <div>
                            <span className="mb-1 block">name on card :</span>
                            <input className=" focus:border-black border-1 border-gray-300 px-3 py-15 text-base" type="text" placeholder="mr. john deo"></input>
                        </div>
                        <div className="my-10">
                            <span className="mb-1 block">credit card number :</span>
                            <input className=" focus:border-black border-1 border-gray-300 px-3 py-15 text-base" type="number" placeholder="1111-2222-3333-4444"></input>
                        </div>
                        <div>
                            <span className="mb-1 block">exp month :</span>
                            <input className=" focus:border-black border-1 border-gray-300 px-3 py-15 text-base" type="text" placeholder="january"></input>
                        </div >
                        <div className="mt-5">
                            <span className="mb-1 block">exp year :</span>
                            <input className=" focus:border-black border-1 border-gray-300 px-3 text-base" type="number" placeholder="2022"></input>
                        </div>
                        <div className="mt-5">
                            <span className="mb-1 block">CVV :</span>
                            <input className=" focus:border-black border-1 border-gray-300 px-3 text-base" type="text" placeholder="1234"></input>
                        </div>
                    </div>
                </div>
                <input type="submit" value="proceed to checkout" className="submit-btn w-full px-12 py-2 text-base bg-green-600 text-white mt-5 cursor-pointer hover:bg-green-600"></input>
            </form>
        </div>
    )
}

export default Payment