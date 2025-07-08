<template>
  <div class="chat-container">
    <!-- 侧边栏 -->
    <div class="sidebar">
      <div class="sidebar-header">
        <h2>智周万物</h2>
        <button class="new-chat-btn">
          <i class="icon">+</i> 开启新对话
        </button>
      </div>

      <div class="sidebar-menu">
        <div class="menu-item active">智能助手</div>
        <div class="menu-item">历史对话</div>
      </div>

      <div class="history-list">
        <div class="history-item">
          <div class="history-title">说个新年祝福语</div>
          <div class="history-time">今天 10:23</div>
        </div>
        <div class="history-item">
          <div class="history-title">编程帮我发案</div>
          <div class="history-time">昨天 15:47</div>
        </div>
        <div class="history-item">
          <div class="history-title">作业批改</div>
          <div class="history-time">06月12日</div>
        </div>
        <div class="history-item">
          <div class="history-title">讲讲西游记的故事...</div>
          <div class="history-time">06月10日</div>
        </div>
      </div>
    </div>

    <!-- 主聊天区域 -->
    <div class="main-content">
      <!-- 聊天头部 -->
      <div class="chat-header">
        <div class="current-chat-title">当前对话</div>
        <div class="chat-actions">
          <button class="action-btn">
            <i class="icon">⟳</i> 重新生成
          </button>
          <button class="action-btn">
            <i class="icon">↓</i> 下载全部
          </button>
        </div>
      </div>

      <!-- 欢迎区域 (无对话时显示) -->
      <div class="welcome-area" v-if="messages.length === 0">
        <div class="welcome-card">
          <h1>您好，欢迎使用智周万物AI系统</h1>
          <div class="function-categories">
            <div class="category">
              <h3>AI助手</h3>
              <div class="function-buttons">
                <button class="function-btn">写一篇诗歌类型周记</button>
                <button class="function-btn">写一篇环保的小学作文200字</button>
                <button class="function-btn">写一首诗赞美祖国写一首诗赞美祖国</button>
              </div>
            </div>
            <div class="category">
              <h3>智能编程</h3>
              <div class="function-buttons">
                <button class="function-btn">编写一个加减乘除计算器用Python实现完整代码</button>
                <button class="function-btn">编写一个Java程序，该程序使用接口设计模式</button>
                <button class="function-btn">如何学习编程，如何学习前端，如何快速掌握JavaWeb工程，请分别给出学习路线</button>
              </div>
            </div>
            <div class="category">
              <h3>工作生活助手</h3>
              <div class="function-buttons">
                <button class="function-btn">我是电商卖家，请帮我写一份产品营销方案，主要销售夏季连衣裙</button>
                <button class="function-btn">如何提高沟通技巧？如何写好一份演讲稿？</button>
                <button class="function-btn">给老板的10个提高工作效率的建议</button>
              </div>
            </div>
          </div>
          <div class="tips">
            <p>你是一位文学专家，现在需要你帮我翻译一句古诗，请告诉我你理解的诗句意思和翻译方法。注意要写出详细的解释。</p>
            <p>【使用情境提示】你是家庭教师，不要使用复杂的术语，用孩子能听懂的语言解释</p>
          </div>
        </div>
      </div>

      <!-- 消息列表 -->
      <div class="message-list" v-else>
        <div class="message-date">2023-06-15 17:06:17</div>

        <div class="message user-message">
          <div class="avatar">
            <img src="https://via.placeholder.com/40" alt="用户头像">
          </div>
          <div class="message-content">你好</div>
        </div>

        <div class="message ai-message">
          <div class="avatar">
            <img src="https://via.placeholder.com/40/667eea/ffffff?text=AI" alt="AI头像">
          </div>
          <div class="message-content">
            <p>你好啊，有什么可以帮助您的吗？</p>
            <div class="message-actions">
              <button class="action-icon">🔊</button>
              <button class="action-icon">📋</button>
              <button class="action-icon">↩️</button>
            </div>
          </div>
        </div>

        <div class="message user-message">
          <div class="avatar">
            <img src="https://via.placeholder.com/40" alt="用户头像">
          </div>
          <div class="message-content">新年好呀！</div>
        </div>

        <div class="message ai-message">
          <div class="avatar">
            <img src="https://via.placeholder.com/40/667eea/ffffff?text=AI" alt="AI头像">
          </div>
          <div class="message-content">
            <p>新年快乐！祝您在新的一年里身体健康，工作顺利，生活愉快！</p>
            <div class="message-actions">
              <button class="action-icon">🔊</button>
              <button class="action-icon">📋</button>
              <button class="action-icon">↩️</button>
            </div>
          </div>
        </div>
      </div>

      <!-- 输入区域 -->
      <div class="input-area">
        <div class="quick-prompts">
          <button class="prompt-btn">试试看向我提问</button>
          <button class="prompt-btn">扮演夸夸大师和我聊天</button>
          <button class="prompt-btn">讲西游记的故事</button>
          <button class="prompt-btn">写一个老电影的设计方案</button>
        </div>
        <div class="input-container">
          <textarea
            v-model="message"
            placeholder="来说点什么...(shift+enter换行，/广键触发提示)"
            @keydown.enter.exact="sendMessage"
            @keydown.enter.shift="addNewline"
          ></textarea>
          <div class="input-actions">
            <button class="action-btn">📎</button>
            <button class="send-btn" @click="sendMessage">发送</button>
          </div>
        </div>
        <div class="input-footer">
          <span>按 Enter 发送，Shift+Enter 换行</span>
          <span>0 / 2000</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      messages: [] // 实际应用中这里会有消息数据
    }
  },
  methods: {
    sendMessage() {
      if (!this.message.trim()) return;
      // 发送消息逻辑
      this.message = '';
    },
    addNewline() {
      // 处理Shift+Enter换行
      this.message += '\n';
    }
  }
}
</script>

<style lang="less" scoped>
.chat-container {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

/* 侧边栏样式 */
.sidebar {
  width: 280px;
  background-color: #fff;
  border-right: 1px solid #eee;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow);

  .sidebar-header {
    padding: 20px;
    border-bottom: 1px solid #eee;

    h2 {
      color: var(--primary-color);
      margin-bottom: 16px;
      font-size: 18px;
    }

    .new-chat-btn {
      width: 100%;
      background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
      color: white;
      padding: 12px;
      font-size: 14px;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: center;

      .icon {
        margin-right: 8px;
        font-size: 16px;
      }

      &:hover {
        opacity: 0.9;
      }
    }
  }

  .sidebar-menu {
    display: flex;
    border-bottom: 1px solid #eee;

    .menu-item {
      flex: 1;
      text-align: center;
      padding: 14px;
      cursor: pointer;
      font-size: 14px;
      color: var(--light-text);
      border-bottom: 2px solid transparent;

      &.active {
        color: var(--primary-color);
        border-bottom-color: var(--primary-color);
        font-weight: 500;
      }

      &:hover {
        background-color: rgba(102, 126, 234, 0.05);
      }
    }
  }

  .history-list {
    flex: 1;
    overflow-y: auto;
    padding: 10px;

    .history-item {
      padding: 12px 15px;
      border-radius: var(--border-radius);
      margin-bottom: 8px;
      cursor: pointer;
      transition: background-color 0.2s;

      &:hover {
        background-color: var(--light-bg);
      }

      .history-title {
        font-size: 14px;
        margin-bottom: 4px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .history-time {
        font-size: 12px;
        color: var(--light-text);
      }
    }
  }
}

/* 主内容区域样式 */
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.chat-header {
  padding: 16px 24px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;

  .current-chat-title {
    font-size: 16px;
    font-weight: 500;
  }

  .chat-actions {
    display: flex;
    gap: 10px;

    .action-btn {
      padding: 8px 12px;
      background-color: #f5f5f5;
      color: var(--light-text);
      font-size: 14px;
      display: flex;
      align-items: center;

      .icon {
        margin-right: 6px;
      }

      &:hover {
        background-color: #eee;
      }
    }
  }
}

/* 欢迎区域样式 */
.welcome-area {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  .welcome-card {
    width: 100%;
    max-width: 900px;
    background-color: #fff;
    border-radius: var(--border-radius);
    padding: 30px;
    box-shadow: var(--shadow);

    h1 {
      color: #333;
      margin-bottom: 30px;
      font-size: 24px;
      text-align: center;
    }

    .function-categories {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-bottom: 30px;

      .category {
        h3 {
          font-size: 16px;
          margin-bottom: 15px;
          color: var(--primary-color);
        }

        .function-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;

          .function-btn {
            padding: 12px 16px;
            background-color: var(--light-bg);
            color: var(--dark-text);
            font-size: 14px;
            border-radius: 8px;
            text-align: left;
            max-width: calc(33.333% - 10px);
            flex: 1;
            min-width: 200px;

            &:hover {
              background-color: rgba(102, 126, 234, 0.1);
              color: var(--primary-color);
            }
          }
        }
      }
    }

    .tips {
      background-color: rgba(102, 126, 234, 0.05);
      border-radius: 8px;
      padding: 15px;
      font-size: 14px;

      p {
        margin-bottom: 10px;
        color: var(--light-text);

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}

/* 消息列表样式 */
.message-list {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  .message-date {
    align-self: center;
    font-size: 12px;
    color: var(--light-text);
    background-color: rgba(0, 0, 0, 0.03);
    padding: 4px 12px;
    border-radius: 12px;
  }

  .message {
    display: flex;
    max-width: 80%;

    &.user-message {
      align-self: flex-end;
      flex-direction: row-reverse;
    }

    &.ai-message {
      align-self: flex-start;
    }

    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
      flex-shrink: 0;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .message-content {
      margin: 0 12px;
      padding: 12px 16px;
      border-radius: 18px;
      position: relative;
      max-width: calc(100% - 64px);

      &:before {
        content: '';
        position: absolute;
        top: 0;
        width: 12px;
        height: 12px;
        background-color: inherit;
      }
    }
  }

  .user-message {
    .message-content {
      background-color: var(--primary-color);
      color: white;
      border-top-right-radius: 4px;

      &:before {
        right: -6px;
        border-bottom-left-radius: 12px;
      }
    }
  }

  .ai-message {
    .message-content {
      background-color: #fff;
      border: 1px solid #eee;
      border-top-left-radius: 4px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);

      &:before {
        left: -6px;
        border-bottom-right-radius: 12px;
      }

      .message-actions {
        display: flex;
        gap: 10px;
        margin-top: 10px;
        justify-content: flex-end;

        .action-icon {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background-color: #f5f5f5;
          color: var(--light-text);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;

          &:hover {
            background-color: #eee;
          }
        }
      }
    }
  }
}

/* 输入区域样式 */
.input-area {
  padding: 15px 20px;
  background-color: #fff;
  border-top: 1px solid #eee;

  .quick-prompts {
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
    flex-wrap: wrap;

    .prompt-btn {
      padding: 6px 12px;
      background-color: var(--light-bg);
      color: var(--light-text);
      font-size: 12px;
      border-radius: 16px;

      &:hover {
        background-color: rgba(102, 126, 234, 0.1);
        color: var(--primary-color);
      }
    }
  }

  .input-container {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;

    textarea {
      flex: 1;
      min-height: 50px;
      max-height: 150px;
      resize: none;
      font-size: 14px;
      border-radius: 25px;
      padding: 14px 18px;
      border: 1px solid #e0e0e0;
    }

    .input-actions {
      display: flex;
      align-items: flex-end;
      gap: 10px;

      .action-btn {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: var(--light-bg);
        color: var(--light-text);
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
          background-color: #eee;
        }
      }

      .send-btn {
        background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
        color: white;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
          opacity: 0.9;
        }
      }
    }
  }

  .input-footer {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: var(--light-text);
  }
}
</style>