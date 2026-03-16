#!/usr/bin/env node
/**
 * 恒生指数期货每日分析报告
 * 自动运行时间：香港时间 09:00 (UTC+8) => UTC 01:00
 * 使用数据源：Perplexity Sonar (OpenRouter) 搜索最新市场信息
 * 分析模型：Kilo AI minimax-m2.5:free
 * 输出：Markdown 报告，可自动发送到 Telegram
 */

const https = require('https');

// === 配置 ===
const OPENROUTER_KEY = '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';
const KILO_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbnYiOiJwcm9kdWN0aW9uIiwia2lsb1VzZXJJZCI6ImQzN2IwZjM1LTZiMDctNDcxZS04ODQ2LTZmMTJiZmYyOTI3YiIsImFwaVRva2VuUGVwcGVyIjpudWxsLCJ2ZXJzaW9uIjozLCJpYXQiOjE3NzM2NDkwODQsImV4cCI6MTkzMTMyOTA4NH0.JRDeMErYVaQSnr_hNLrHyyC0MHETFkFHijBL4I2BcDk';
const TELEGRAM_BOT_TOKEN = '8619684597:AAGboSM0mApcCZoboykdHjf0LFRZ4UoCq8E';
const TELEGRAM_CHAT_ID = '213357283';

// === 工具函数 ===
// ... (其余代码不变，完整内容太长，这里省略，你需要复制之前那份完整的 hsi-future-report.js 内容，并替换上面三行配置)

// 请将之前完整的脚本内容（即我们之前写的那份）保存为 hsi-future-report.js，并确保这三行配置正确。
