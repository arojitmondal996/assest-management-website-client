import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { Link, useSearchParams } from "react-router";
import Info from "../components/Info";
import InfoMobile from "../components/InfoMobile";
import Logo from "../components/Logo";
import ManagerForm from "../components/ManagerForm";
import PaymentForm from "../components/PaymentForm";

const steps = ["HR Manger", "Payment details", "Confirmation"];
const options = {
  // passing the client secret obtained from the server
  mode: "payment",
  amount: 13498,
  currency: "usd",
  clientSecret: import.meta.env.VITE_STRIPE_CLIENT_SECRET,
};
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export default function HRManagerForm() {
  const [searchParams] = useSearchParams();

  const activeStep = parseInt(searchParams.get("activeStep")) || 1;
  return (
    <Grid
      container
      sx={{
        height: {
          xs: "100%",
          sm: "calc(100dvh - var(--template-frame-height, 0px))",
        },
        mt: {
          xs: 4,
          sm: 0,
        },
      }}>
      <Grid
        size={{ xs: 12, sm: 5, lg: 4 }}
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          backgroundColor: "background.paper",
          borderRight: { sm: "none", md: "1px solid" },
          borderColor: { sm: "none", md: "divider" },
          alignItems: "start",
          pt: 16,
          px: 10,
          gap: 4,
        }}>
        <Logo />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            width: "100%",
            maxWidth: 500,
          }}>
          <Info totalPrice={activeStep >= 2 ? "$144.97" : "$134.98"} />
        </Box>
      </Grid>
      <Grid
        size={{ sm: 12, md: 7, lg: 8 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "100%",
          width: "100%",
          backgroundColor: { xs: "transparent", sm: "background.default" },
          alignItems: "start",
          pt: { xs: 0, sm: 16 },
          px: { xs: 2, sm: 10 },
          gap: { xs: 4, md: 8 },
        }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: { sm: "space-between", md: "flex-end" },
            alignItems: "center",
            width: "100%",
            maxWidth: { sm: "100%", md: 600 },
          }}>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexGrow: 1,
            }}>
            <Stepper
              id="desktop-stepper"
              activeStep={activeStep}
              sx={{ width: "100%", height: 40 }}>
              {steps.map((label) => (
                <Step
                  sx={{ ":first-child": { pl: 0 }, ":last-child": { pr: 0 } }}
                  key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        </Box>
        <Card sx={{ display: { xs: "flex", md: "none" }, width: "100%" }}>
          <CardContent
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
            <div>
              <Typography variant="subtitle2" gutterBottom>
                Selected products
              </Typography>
              <Typography variant="body1">
                {activeStep >= 2 ? "$144.97" : "$134.98"}
              </Typography>
            </div>
            <InfoMobile totalPrice={activeStep >= 2 ? "$144.97" : "$134.98"} />
          </CardContent>
        </Card>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            width: "100%",
            maxWidth: { sm: "100%", md: 600 },
            maxHeight: "720px",
            gap: { xs: 5, md: "none" },
          }}>
          <Stepper
            id="mobile-stepper"
            activeStep={activeStep}
            alternativeLabel
            sx={{ display: { sm: "flex", md: "none" } }}>
            {steps.map((label) => (
              <Step
                sx={{
                  ":first-child": { pl: 0 },
                  ":last-child": { pr: 0 },
                  "& .MuiStepConnector-root": { top: { xs: 6, sm: 12 } },
                }}
                key={label}>
                <StepLabel
                  sx={{ ".MuiStepLabel-labelContainer": { maxWidth: "70px" } }}>
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Stack spacing={2} useFlexGap>
              <Typography variant="h1">📦</Typography>
              <Typography variant="h5">
                Thank you for choosing our service!
              </Typography>
              <Link
                to="/dashboard"
                style={{ textDecoration: "none" }}
                replace={true}>
                <Button
                  variant="contained"
                  sx={{
                    alignSelf: "start",
                    width: { xs: "100%", sm: "auto" },
                  }}>
                  Go to Dashboard
                </Button>
              </Link>
            </Stack>
          ) : (
            <React.Fragment>
              {activeStep === 1 && <ManagerForm />}
              {activeStep === 2 && (
                <Elements stripe={stripePromise} options={options}>
                  <PaymentForm />
                </Elements>
              )}
            </React.Fragment>
          )}
        </Box>
      </Grid>
    </Grid>
  );
}
