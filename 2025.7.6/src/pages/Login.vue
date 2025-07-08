<template>
  <div class="login-container">
    <div class="login-card">
      <div class="logo">
        <h1>智周万物</h1>
        <p>AI聊天助手</p>
      </div>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="username">用户名</label>
          <input
            id="username"
            v-model="username"
            type="text"
            placeholder="请输入用户名"
            required
          >
        </div>
        <div class="form-group">
          <label for="password">密码</label>
          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="请输入密码"
            required
          >
        </div>
        <div class="form-options">
          <label class="checkbox-label">
            <input type="checkbox" v-model="rememberMe">
            记住我
          </label>
          <a href="#" class="forgot-password">忘记密码?</a>
        </div>
        <button type="submit" class="login-btn">登录</button>
      </form>
      <div class="register-prompt">
        <span>还没有账号?</span>
        <a href="#" class="register-link">立即注册</a>
      </div>
    </div>
    <div class="login-footer">
      <p>© 2023 智周万物AI系统 版权所有</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      rememberMe: false
    }
  },
  methods: {
    handleLogin() {
      // 登录逻辑
      this.$router.push('/chat');
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
}

.login-card {
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: var(--border-radius);
  padding: 40px 30px;
  box-shadow: var(--shadow);
}

.logo {
  text-align: center;
  margin-bottom: 30px;

  h1 {
    font-size: 28px;
    color: var(--primary-color);
    margin-bottom: 5px;
  }

  p {
    color: var(--light-text);
    font-size: 14px;
  }
}

.form-group {
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    color: var(--dark-text);
  }

  input {
    width: 100%;
    height: 45px;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    padding: 0 15px;
    font-size: 14px;

    &:focus {
      border-color: var(--primary-color);
    }
  }
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  font-size: 14px;

  .checkbox-label {
    display: flex;
    align-items: center;
    color: var(--light-text);
    cursor: pointer;

    input {
      margin-right: 5px;
    }
  }

  .forgot-password {
    color: var(--primary-color);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

.login-btn {
  width: 100%;
  height: 48px;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  color: white;
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
}

.register-prompt {
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
  color: var(--light-text);

  .register-link {
    color: var(--primary-color);
    text-decoration: none;
    margin-left: 5px;

    &:hover {
      text-decoration: underline;
    }
  }
}

.login-footer {
  margin-top: 30px;
  color: rgba(255, 255, 0.8);
  font-size: 12px;
}
</style>