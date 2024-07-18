'use client';

import { ConnectButton, PayEmbed } from "thirdweb/react";
// import { createWallet, inAppWallet } from "thirdweb/wallets";
import { thirdWebClient } from "@/app/etc/thirdWebClient";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// const wallets = [
//   inAppWallet(),
//   createWallet("io.metamask"),
//   createWallet("com.coinbase.wallet"),
//   createWallet("me.rainbow"),
// ];

export default function DemoPage() {
  return (
    <main>
      <Typography variant="h5" gutterBottom>
        Open Missionary Community
      </Typography>
      <Button variant="contained">Get Involved</Button>
      <Button variant="text">Learn More</Button>
      <br />
      <br />
      <br />
      <br />
      <ConnectButton
        client={thirdWebClient}
        appMetadata={{
          name: "Example App",
          url: "http://localhost:3000",
        }}
      />
      <PayEmbed client={thirdWebClient} />
    </main>
  )
}