"use client";

import axios from "axios";
import { useParams } from "next/navigation";

export async function getPaymentDetails(id) {
  try {
    const { data } = await axios.get(
      `http://localhost:8081/api/payment-transaction-detail/${id}`
    );
    return data.data;
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
}

const PaymentDetails = async () => {
  const { id } = useParams();
  const paymentDetails = await getPaymentDetails(id);

  return (
    <section className="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md text-center mt-8">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl">
            Payment Details
          </h2>
        </div>

        <div className="mt-10 sm:gap-4 lg:mt-16">
          <article className="mx-auto h-[400px] w-[400px] relative flex flex-col overflow-hidden rounded-lg border">
            <div className="aspect-square overflow-hidden w-full h-full">
              <img
                className="object-contain sm:w-full sm:h-full"
                src={paymentDetails.receipt}
                alt={paymentDetails.shipment_number}
              />
            </div>
            <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
              <div className="mb-2 flex mx-auto">
                <p className="mr-3 text-sm font-semibold">
                  Shipment Number: {paymentDetails.shipment_number}
                </p>
                {/* <del className="text-xs text-gray-400">{product.price}</del> */}
              </div>
              {/* <h3 className="mb-2 text-sm text-gray-400">{product.name}</h3> */}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default PaymentDetails;
