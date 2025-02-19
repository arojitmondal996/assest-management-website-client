import { Box, Button, FormControl, Stack } from "@mui/material";
import { CardElement, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useForm } from "@tanstack/react-form";
import usePayment from "../hooks/usePayment";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY); // Replace with your Stripe publishable key

const PaymentForm = () => {
  const { mutate: handleSubmit, isPending } = usePayment();
  const form = useForm({
    onSubmit: handleSubmit,
  });

  return (
    <Stack spacing={{ xs: 3, sm: 6 }} useFlexGap>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}>
        <FormControl component="fieldset" fullWidth>
          <CardElement options={{ style: { base: { fontSize: "18px" } } }} />
        </FormControl>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", sm: "row" },
            alignItems: "end",
            flexGrow: 1,
            gap: 1,
            pb: { xs: 12, sm: 0 },
            mt: { xs: 2, sm: 2 },
            mb: "60px",
            justifyContent: "flex-end",
          }}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={isPending}>
            Pay
          </Button>
        </Box>
      </form>
    </Stack>
  );
};

const PaymentFormWrapper = () => (
  <Elements stripe={stripePromise}>
    <PaymentForm />
  </Elements>
);

export default PaymentFormWrapper;
