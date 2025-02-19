import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useMutation } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { toast } from "sonner";
import useAuth from "../features/authentication/useAuth";
import axiosSecure from "../utils/axiosSecure";
import { tiers } from "../utils/static";

export default function usePayment() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();

  return useMutation({
    mutationFn: async () => {
      toast.loading("Processing payment...");
      try {
        if (!stripe || !elements) return;

        const cardElement = elements.getElement(CardElement);

        const payload = await stripe.createPaymentMethod({
          type: "card",
          card: cardElement,
        });

        if (payload.error) {
          toast.error(payload.error.message);
          throw Promise.reject(new Error(payload.error.message));
        }

        const tier = tiers.find((tier) => tier.name === user.package);
        await axiosSecure.patch(`users/${user._id}`, {
          paymentMethod: payload.paymentMethod.id,
          employees: tier.employees,
        });

        toast.success("Payment successful!");
      } catch (error) {
        throw Promise.reject(error);
      } finally {
        toast.dismiss();
      }
    },
    onSuccess: () => {
      searchParams.set("activeStep", 3);
      setSearchParams(searchParams);
    },
  });
}
