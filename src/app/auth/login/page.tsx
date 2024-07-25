'use client';

import { Context } from '@/app/context/provider';
import { BzFetch, BzFetchHelper } from '@/app/etc/bluezone';
import { Button, TextField, Grid, Paper, CircularProgress } from '@mui/material';
import React, { useContext, useState } from 'react';
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const ctx: any = useContext(Context);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    ctx.setOpenModal({
      message: <><CircularProgress size={20} style={{ marginRight: '10px' }} />Please wait...</>,
      title: 'Signing in',
    });
    await BzFetch('LOGIN', {email, password})
    .then((resp) => {
      ctx.setOpenModal(false);
      BzFetchHelper.handleResponse(resp, { 
        success: () => {
          BzFetchHelper.setToken(resp.data.data.token);
          ctx.setLoggedin(true);
          router.push('/');
        },
        failed: () => {
          // handle failed response
        },
        ctx 
      });
    });
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={0} sm={6} md={4}>
        <Paper sx={{background: 'none'}} elevation={0} style={{ padding: '20px', paddingTop: 0 }}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              required
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant='outlined'
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              required
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant='outlined'
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
              Sign In
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  )
}