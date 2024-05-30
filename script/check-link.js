const axios = require('axios');
const fs = require('fs');

const siteUrl = 'https://your-site-url.com';
const links = []; // 将所有需要检查的链接添加到这个数组

links.forEach(async (link) => {
  try {
    const response = await axios.get(link);
    if (response.status !== 200) {
      console.log(`Broken link found: ${link}`);
    }
  } catch (error) {
    console.log(`Error accessing link: ${link}`);
  }
});
