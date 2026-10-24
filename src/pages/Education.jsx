function Education() {
  return (
    <section className="page education-page">
      <p className="eyebrow">EDUCATION</p>
      <h1>學歷</h1>

      <div className="education-list">
        <article className="education-card">
          <header className="education-header">
            <span className="education-icon" aria-hidden="true">🎓</span>
            <div>
              <h2>國立臺北大學</h2>
              <p className="education-degree">資訊工程學系 碩士</p>
              <p className="education-date">
                <span aria-hidden="true">📅 </span>2024.09 — 2026.08
              </p>
            </div>
          </header>

          <div className="education-detail">
            <h3><span aria-hidden="true">📝 </span>碩士論文</h3>
            <div className="education-summary">
              <h4>吶語症者具個人化音色之語音生成方法</h4>
              <p>
                研究方向聚焦於 Speech AI、深度學習與個人化語音生成。
                以 CosyVoice 2 為基礎，固定 Text-Speech LLM，僅微調
                Flow Matching 聲學生成模組，在保留患者個人音色的同時，
                改善生成語音的語速、停頓與韻律穩定性。
                實驗涵蓋 20 位患者，Normal 模式下平均音色恢復率由
                53.5% 提升至 72.9%。
              </p>
            </div>
          </div>
        </article>

        <article className="education-card">
          <header className="education-header">
            <span className="education-icon" aria-hidden="true">🎓</span>
            <div>
              <h2>實踐大學</h2>
              <p className="education-degree">食品營養與保健生技學系 學士</p>
              <p className="education-date">
                <span aria-hidden="true">📅 </span>2016.09 — 2020.06
              </p>
            </div>
          </header>

          <div className="education-detail">
            <h3><span aria-hidden="true">📚 </span>學習背景</h3>
            <div className="education-summary">
              <p>
                大學就讀食品營養與保健生技相關領域，畢業後曾從事藥品品質檢驗工作。
                後續轉入資訊工程領域，於碩士期間投入深度學習、語音 AI 與系統實作，
                累積跨領域學習與問題解決經驗。
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Education
