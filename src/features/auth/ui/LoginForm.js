import React, { useState } from 'react';
import { Box, TextField, Button, Checkbox, FormControlLabel, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // 여기에 실제 로그인 로직을 구현해야 합니다.
    // 지금은 간단히 사용자 이름과 비밀번호가 비어있지 않으면 로그인 성공으로 처리합니다.
    if (username && password) {
      onLogin();
      navigate('/dashboard');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="username"
        label="Username"
        name="username"
        autoComplete="username"
        autoFocus
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="ID 저장"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        로그인
      </Button>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link href="#" variant="body2">
          아이디 / 비밀번호 찾기
        </Link>
        <Link href="#" variant="body2">
          HELPDESK
        </Link>
      </Box>
    </Box>
  );
}

export default LoginForm;