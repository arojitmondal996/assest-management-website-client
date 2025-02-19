import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { tiers } from "../utils/static";

export default function Review({ paymentDetails, managerInfo }) {
  const tier = tiers.find((tier) => tier.title === "Starter");

  const payments = [
    { name: "Card type:", detail: "Visa" },
    { name: "Card holder:", detail: paymentDetails.displayName },
    { name: "Card number:", detail: paymentDetails.cardNumber },
    { name: "Expiry date:", detail: paymentDetails.expirationDate },
  ];

  return (
    <Stack spacing={2}>
      <List disablePadding>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Package" secondary={tier?.title} />
          <Typography variant="body2">${tier.price}</Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${tier.price}
          </Typography>
        </ListItem>
      </List>
      <Divider />
      <Stack
        direction="column"
        divider={<Divider flexItem />}
        spacing={2}
        sx={{ my: 2 }}>
        <div>
          <Typography variant="subtitle2" gutterBottom>
            Customer details
          </Typography>
          <Typography gutterBottom>{managerInfo.displayName}</Typography>
        </div>
        <div>
          <Typography variant="subtitle2" gutterBottom>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Stack
                  direction="row"
                  spacing={1}
                  useFlexGap
                  sx={{ width: "100%", mb: 1 }}>
                  <Typography variant="body1" sx={{ color: "text.secondary" }}>
                    {payment.name}
                  </Typography>
                  <Typography variant="body2">{payment.detail}</Typography>
                </Stack>
              </React.Fragment>
            ))}
          </Grid>
        </div>
      </Stack>
    </Stack>
  );
}
