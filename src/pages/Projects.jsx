const projects = [
  {
    category: '語音溝通輔助研究計畫',
    title: 'AI 個人化語音溝通輔助系統',
    period: '2025.08 — 2026.06',
    images: [
      { src: '/projects/eztalk-platform.png', alt: 'ezTalk 語音溝通輔助平台使用者介面', caption: 'ezTalk 平台介面' },
      { src: '/projects/speech-comparison.png', alt: '原始語音、一般克隆與本研究個人化語音的三欄比較介面', caption: '原始語音／一般克隆／本研究方法' },
    ],
    url: 'http://120.126.151.160:5000/timbre',
    linkLabel: '聆聽語音比較',
    description: '參與 ezTalk 語音溝通輔助平台，承接團隊既有的語音辨識與文字校正模組，主要投入個人化語音生成、品質評估與 ASR／TTS 流程整合，讓構音障礙者能以保有個人音色的語音溝通。',
    outcomes: ['以 CosyVoice 2 建立 20 位患者的個人化模型，Normal 模式平均音色恢復率由 53.5% 提升至 72.9%。'],
    technologies: ['Python', 'PyTorch', 'CosyVoice 2', 'Flow Matching', 'DDP'],
  },
  {
    category: 'NTPU × NVIDIA AI Tech Center',
    title: 'Taipei-1 HPC 語音 AI 訓練流程',
    period: '2025.08 — 2025.12',
    image: '/projects/asr-training-workflow.png',
    imageAlt: '承接之語音克隆、資料擴增與三階段 ASR 漸進式微調架構',
    imageCaption: '承接之研究架構｜來源：《使用生成對抗網路進行語音資料擴增及漸進式微調於吶語症語音辨識模型》（2025），圖 8',
    url: '', // 填入完整專案網址
    description: '參與 NTPU × NVIDIA AI Tech Center 的 Dysarthric ASR 專案，承接實驗室既有的語音克隆與漸進式微調架構，負責將訓練流程遷移至 Taipei-1 DGX H100 兩節點環境。',
    outcomeTitle: '我的工程實作',
    outcomes: [
      '使用 Slurm 排程及 Pyxis／Enroot 容器環境執行 GPU 訓練工作。',
      '完成多位患者的個人化語音克隆子模型訓練，建立後續資料擴增與 ASR 研究的基礎。',
    ],
    technologies: ['CUDA', 'PyTorch', 'Slurm', 'Pyxis', 'Enroot', 'VITS', 'GPT-SoVITS'],
  },
]

function Projects() {
  return (
    <section className="page projects-page">
      <p className="eyebrow">PROJECTS</p>
      <h1>專案</h1>

      <div className="projects-list">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            {project.images ? (
              <div className="project-gallery">
                {project.images.map((picture) => (
                  <figure key={picture.src}>
                    <div className="project-gallery-image">
                      <img src={picture.src} alt={picture.alt} loading="lazy" />
                    </div>
                    <figcaption>{picture.caption}</figcaption>
                  </figure>
                ))}
              </div>
            ) : (
              <div className="project-cover">
              {project.image ? (
                <img src={project.image} alt={project.imageAlt} loading="lazy" />
              ) : (
                <div className="project-cover-placeholder">
                  <span aria-hidden="true">▧</span>
                  <p>專案照片待補</p>
                </div>
              )}
              </div>
            )}
            {project.imageCaption && <p className="project-image-caption">{project.imageCaption}</p>}
            <div className="project-body">
            <p className="project-category">{project.category}</p>
            <h2>{project.title}</h2>
            <p className="project-period"><span aria-hidden="true">📅 </span>{project.period}</p>
            <p className="project-description">{project.description}</p>
            <h3>{project.outcomeTitle || '專案成果'}</h3>
            <ul>
              {project.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
            </ul>
            <div className="project-tags" aria-label="使用技術">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
            {project.url && (
              <a className="project-link" href={project.url} target="_blank" rel="noopener noreferrer">
                <span aria-hidden="true">🔗 </span>{project.linkLabel || '查看專案'}
              </a>
            )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
