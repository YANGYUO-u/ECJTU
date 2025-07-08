<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="logo">
        <h1>智周万物</h1>
      </div>
      <div class="nav-menu">
        <router-link to="/chat" class="nav-item">聊天</router-link>
        <router-link to="/profile" class="nav-item">个人中心</router-link>
        <button class="logout-btn" @click="handleLogout">退出</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    handleLogout() {
      // 退出登录逻辑
      this.$router.push('/login');
    }
  }
}
</script>

<style lang="less" scoped>
.navbar {
  background-color: #fff;
  box-shadow: var(--shadow);
  padding: 10px 0;
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.logo {
  h1 {
    font-size: 20px;
    color: var(--primary-color);
  }
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-item {
  color: var(--dark-text);
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 6px;
  transition: all 0.2s;

  &:hover,
  &.router-link-exact-active {
    color: var(--primary-color);
    background-color: rgba(102, 126, 234, 0.1);
  }
}

.logout-btn {
  background-color: transparent;
  color: var(--light-text);
  border: 1px solid #eee;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #f5f5f5;
  }
}
</style>