<template>
  <div class="profile-container">
    <div class="profile-header">
      <h1>个人中心</h1>
    </div>

    <div class="profile-card">
      <div class="avatar-section">
        <div class="avatar-container">
          <img :src="user.avatar" alt="用户头像" class="avatar-img">
          <div class="avatar-upload">
            <input type="file" id="avatar-input" accept="image/*" hidden>
            <label for="avatar-input" class="upload-btn">更换头像</label>
          </div>
        </div>
        <div class="user-info">
          <h2>{{ user.name }}</h2>
          <p class="user-email">{{ user.email }}</p>
          <p class="user-id">用户ID: {{ user.id }}</p>
        </div>
      </div>

      <div class="profile-tabs">
        <div class="tab active" data-tab="info">基本信息</div>
        <div class="tab" data-tab="settings">账号设置</div>
      </div>

      <div class="tab-content">
        <div class="info-content active">
          <div class="info-item">
            <label>用户名</label>
            <div class="info-value">{{ user.name }}</div>
          </div>
          <div class="info-item">
            <label>邮箱</label>
            <div class="info-value">{{ user.email }}</div>
          </div>
          <div class="info-item">
            <label>注册时间</label>
            <div class="info-value">{{ user.registerTime }}</div>
          </div>
          <div class="info-item">
            <label>最后登录</label>
            <div class="info-value">{{ user.lastLogin }}</div>
          </div>
          <div class="info-item">
            <label>账号状态</label>
            <div class="info-value"><span class="status-active">正常</span></div>
          </div>
        </div>

        <div class="settings-content">
          <form @submit.prevent="saveSettings">
            <div class="form-group">
              <label for="new-password">新密码</label>
              <input id="new-password" type="password" placeholder="请输入新密码">
            </div>
            <div class="form-group">
              <label for="confirm-password">确认密码</label>
              <input id="confirm-password" type="password" placeholder="请确认新密码">
            </div>
            <div class="form-group">
              <label class="checkbox-label">
                <input type="checkbox" v-model="notifySetting.email">
                接收邮件通知
              </label>
            </div>
            <div class="form-group">
              <label class="checkbox-label">
                <input type="checkbox" v-model="notifySetting.browser">
                允许浏览器通知
              </label>
            </div>
            <button type="submit" class="save-btn">保存设置</button>
          </form>
        </div>
      </div>
    </div>

    <button class="logout-btn" @click="handleLogout">退出登录</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        avatar: 'https://via.placeholder.com/120',
        name: '张三',
        email: 'zhangsan@example.com',
        id: 'user123456',
        registerTime: '2023-01-15',
        lastLogin: '2023-06-15 17:06'
      },
      notifySetting: {
        email: true,
        browser: false
      }
    }
  },
  methods: {
    saveSettings() {
      // 保存设置逻辑
      alert('设置已保存');
    },
    handleLogout() {
      // 退出登录逻辑
      this.$router.push('/login');
    }
  },
  mounted() {
    // 标签切换功能
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // 移除所有active类
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content > div').forEach(c => c.classList.remove('active'));
        // 添加当前active类
        tab.classList.add('active');
        const tabName = tab.getAttribute('data-tab');
        document.querySelector(`.${tabName}-content`).classList.add('active');
      });
    });
  }
}
</script>

<style lang="less" scoped>
.profile-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 30px 20px;
}

.profile-header {
  margin-bottom: 30px;

  h1 {
    font-size: 24px;
    color: var(--dark-text);
    font-weight: 500;
  }
}

.profile-card {
  background-color: #fff;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  padding: 30px;
  margin-bottom: 30px;
}

.avatar-section {
  display: flex;
  align-items: center;
  padding-bottom: 25px;
  border-bottom: 1px solid #eee;
  margin-bottom: 25px;
}

.avatar-container {
  margin-right: 30px;

  .avatar-img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid var(--light-bg);
  }

  .upload-btn {
    display: block;
    width: 100%;
    text-align: center;
    margin-top: 10px;
    padding: 6px 0;
    background-color: var(--light-bg);
    border-radius: 4px;
    font-size: 14px;
    color: var(--light-text);
    cursor: pointer;

    &:hover {
      background-color: #eee;
    }
  }
}

.user-info {
  h2 {
    font-size: 22px;
    margin-bottom: 5px;
  }

  .user-email {
    color: var(--primary-color);
    margin-bottom: 3px;
  }

  .user-id {
    font-size: 14px;
    color: var(--light-text);
  }
}

.profile-tabs {
  display: flex;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;

  .tab {
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    border-bottom: 2px solid transparent;
    margin-right: 10px;

    &.active {
      color: var(--primary-color);
      border-bottom-color: var(--primary-color);
      font-weight: 500;
    }

    &:hover {
      color: var(--primary-color);
    }
  }
}

.tab-content > div {
  display: none;

  &.active {
    display: block;
  }
}

.info-item {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid #f5f5f5;

  &:last-child {
    border-bottom: none;
  }

  label {
    width: 120px;
    color: var(--light-text);
    font-weight: 500;
  }

  .info-value {
    flex: 1;

    .status-active {
      display: inline-block;
      padding: 2px 8px;
      background-color: rgba(76, 175, 80, 0.1);
      color: #4CAF50;
      border-radius: 12px;
      font-size: 12px;
    }
  }
}

.settings-content {
  .form-group {
    margin-bottom: 20px;

    label {
      display: block;
      margin-bottom: 8px;
      font-size: 14px;
      color: var(--dark-text);
    }

    input[type="password"] {
      width: 100%;
      height: 45px;
      border-radius: 8px;
      border: 1px solid #e0e0e0;
      padding: 0 15px;
      font-size: 14px;
    }

    .checkbox-label {
      display: flex;
      align-items: center;
      color: var(--light-text);
      cursor: pointer;

      input {
        margin-right: 8px;
      }
    }
  }

  .save-btn {
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  }
}

.logout-btn {
  width: 100%;
  height: 48px;
  background-color: #f5f5f5;
  color: var(--light-text);
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #e74c3c;
    color: white;
  }
}
</style>