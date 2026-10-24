const skillGroups = [
  {
    title: '程式語言',
    description: '主要使用 Python 進行模型開發與實驗，並使用 JavaScript、HTML 與 CSS 建立網頁介面。',
    skills: ['Python', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: '深度學習與模型訓練',
    description: '具模型訓練、個人化微調與效能評估經驗，使用多 GPU 與混合精度執行訓練。',
    skills: ['PyTorch', 'Model Fine-Tuning', 'DDP', 'AMP'],
  },
  {
    title: '語音 AI',
    description: '研究吶語症者的個人化語音生成，著重音色保留、韻律改善與生成品質評估。',
    skills: ['CosyVoice 2', 'Whisper', 'Flow Matching', 'Voice Cloning'],
  },
  {
    title: '網頁與後端部署',
    description: '具模型 API 與 Web 系統整合經驗，串接前後端並部署 GPU 推論服務。',
    skills: ['React', 'Flask', 'REST API', 'Gunicorn', 'Nginx'],
  },
  {
    title: 'GPU 與 HPC 環境',
    description: '曾將語音 AI 訓練流程遷移至 NVIDIA Taipei-1，使用排程與容器環境執行 GPU 工作。',
    skills: ['CUDA', 'Slurm', 'Pyxis', 'Enroot'],
  },
  {
    title: '系統與實驗自動化',
    description: '建置多節點運算環境，並以腳本整合資料前處理、批次推論、評估與結果彙整。',
    skills: ['Linux', 'Docker', 'Kubernetes', 'Shell Script'],
  },
]

function Skills() {
  return (
    <section className="page skills-page">
      <p className="eyebrow">TECHNICAL SKILLS</p>
      <h1>專業技能</h1>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
