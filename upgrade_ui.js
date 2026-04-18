const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'frontend', 'css', 'style.css');
let css = fs.readFileSync(cssPath, 'utf8');

// 1. Upgrade CSS Variables to Vercel/Apple Dark Mode
css = css.replace(/:root \{[\s\S]*?--transition:[^;]+;\n\}/m, `:root {
  --primary: #EDEDED;
  --primary-light: #FAFAFA;
  --primary-dark: #A1A1AA;
  --accent: #0070F3;
  --accent-light: #3291FF;
  --bg: #000000;
  --surface: #0a0a0a;
  --text: #EDEDED;
  --text-secondary: #A1A1AA;
  --text-light: #71717A;
  --border: #333333;
  --border-light: #222222;
  --success: #10B981;
  --warning: #F5A623;
  --danger: #EF4444;
  --shadow-sm: 0 4px 14px 0 rgba(0,0,0,0.39);
  --shadow: 0 6px 20px rgba(0,0,0,0.5);
  --shadow-md: 0 8px 30px rgba(0,0,0,0.6);
  --shadow-lg: 0 30px 60px rgba(0,0,0,0.8);
  --radius-sm: 6px;
  --radius: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --transition: 0.25s ease;
}`);

// 2. Fix static backgrounds (Login Page)
css = css.replace(/background: linear-gradient\(135deg, #f5f7fa 0%, #e4ecf5 100%\);/g, 'background: radial-gradient(circle at 50% -20%, #1a1a1a 0%, #000000 100%);');

// 3. Login Container Glassmorphism
css = css.replace(/\.login-container \{[\s\S]*?\n\}/m, `.login-container {
  background: rgba(10, 10, 10, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  box-shadow: 0 0 0 1px rgba(255,255,255,0.05), var(--shadow-lg);
  padding: 48px 40px;
  width: 100%;
  max-width: 420px;
  text-align: center;
}`);

// 4. Input Fields
css = css.replace(/input,[\s\S]*?textarea:focus,\nselect:focus \{[\s\S]*?\n\}/m, `input,
textarea,
select {
  font-family: inherit;
  font-size: 0.95rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 12px 16px;
  background: #000;
  color: var(--text);
  transition: all var(--transition);
  outline: none;
  width: 100%;
}

input:focus,
textarea:focus,
select:focus {
  border-color: var(--text-secondary);
  box-shadow: 0 0 0 1px var(--text-secondary);
}`);

// 5. Buttons
css = css.replace(/\.btn-primary \{[\s\S]*?transform: translateY\(-1px\);\n\}/m, `.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: var(--primary);
  color: #000;
  border: 1px solid transparent;
  border-radius: var(--radius-sm);
  padding: 12px 24px;
  font-size: 0.95rem;
  font-weight: 600;
  width: 100%;
  transition: all var(--transition);
  box-shadow: 0 4px 14px 0 rgba(255,255,255,0.1);
}

.btn-primary:hover {
  background: transparent;
  color: var(--primary);
  border-color: var(--primary);
  box-shadow: 0 4px 14px 0 rgba(255,255,255,0.15);
}`);

css = css.replace(/\.btn-secondary \{[\s\S]*?border-color: var\(--primary-light\);\n\}/m, `.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: transparent;
  color: var(--text);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 10px 20px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all var(--transition);
}

.btn-secondary:hover {
  background: var(--surface);
  border-color: var(--text-secondary);
  color: var(--text);
}`);

css = css.replace(/\.btn-accent \{[\s\S]*?transform: translateY\(-1px\);\n\}/m, `.btn-accent {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: var(--accent);
  color: white;
  border: none;
  border-radius: var(--radius-sm);
  padding: 10px 20px;
  font-size: 0.9rem;
  font-weight: 600;
  box-shadow: 0 4px 14px 0 rgba(0,112,243,0.39);
  transition: all var(--transition);
}

.btn-accent:hover {
  background: var(--accent-light);
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(0,112,243,0.23);
}`);

// 6. Top Nav Glassmorphism
css = css.replace(/\.top-nav \{[\s\S]*?\n\}/m, `.top-nav {
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: saturate(180%) blur(12px);
  -webkit-backdrop-filter: saturate(180%) blur(12px);
  border-bottom: 1px solid var(--border);
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  position: sticky;
  top: 0;
  z-index: 100;
}`);

// 7. Welcome Banner
css = css.replace(/\.welcome-banner \{[\s\S]*?\n\}/m, `.welcome-banner {
  background: linear-gradient(135deg, #111111 0%, #000000 100%);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 32px 40px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  overflow: hidden;
  box-shadow: var(--shadow);
}`);

// 8. General Cards
css = css.replace(/\.card \{[\s\S]*?border-color: var\(--text-light\);\n\}/m, `.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px;
  transition: all var(--transition);
  position: relative;
  overflow: hidden;
}

.card:hover {
  border-color: var(--text-secondary);
  box-shadow: var(--shadow);
}`);

// 9. Quick Actions
css = css.replace(/\.quick-action-card \{[\s\S]*?transform: translateY\(-2px\);\n\}/m, `.quick-action-card {
  background: #000;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px;
  cursor: pointer;
  transition: all var(--transition);
  display: flex;
  flex-direction: column;
}

.quick-action-card:hover {
  border-color: var(--text-secondary);
  background: var(--surface);
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}`);

// 10. Chatbot
css = css.replace(/\.chatbot-window \{[\s\S]*?\n\}/m, `.chatbot-window {
  position: fixed;
  bottom: 88px;
  right: 24px;
  width: 380px;
  height: 500px;
  background: rgba(10, 10, 10, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  box-shadow: 0 0 0 1px rgba(255,255,255,0.05), var(--shadow-lg);
  display: none;
  flex-direction: column;
  z-index: 200;
  overflow: hidden;
}`);

css = css.replace(/\.chatbot-header \{[\s\S]*?\n\}/m, `.chatbot-header {
  background: transparent;
  color: var(--text);
  border-bottom: 1px solid var(--border);
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}`);

css = css.replace(/\.chatbot-close \{[\s\S]*?opacity: 1;\n\}/m, `.chatbot-close {
  background: none;
  border: none;
  color: var(--text);
  font-size: 1.2rem;
  cursor: pointer;
  opacity: 0.6;
  padding: 4px;
}

.chatbot-close:hover {
  opacity: 1;
}`);

// 11. Activity Feed dots and bg
css = css.replace(/\.chat-message\.user \{\s*background: var\(--primary\);\s*color: white;/m, `.chat-message.user {\n  background: var(--text);\n  color: #000;`);

// 12. Write the file back
fs.writeFileSync(cssPath, css, 'utf8');
console.log('Successfully upgraded style.css to Vercel/Apple dark mode premium design!');
