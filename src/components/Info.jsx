import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useSearchParams } from "react-router";
import { tiers } from "../utils/static";

export default function Info() {
  const [searchParams] = useSearchParams();
  const packageValue = searchParams.get("package");
  const pack = tiers.find((tier) => tier.title === packageValue);

  return (
    <React.Fragment>
      <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
        {pack && "Total"}
      </Typography>
      <Typography variant="h4" gutterBottom>
        {pack && `$${pack?.price}`}
      </Typography>
      <List disablePadding>
        {pack?.description.map((product, idx) => (
          <ListItem key={idx} sx={{ py: 1, px: 0 }}>
            <ListItemText sx={{ mr: 2 }} secondary={product} />
            <Typography variant="body1" sx={{ fontWeight: "medium" }}>
              {product.price}
            </Typography>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
}
