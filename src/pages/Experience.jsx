import { useLayoutEffect, useRef, useState } from 'react'
import hackCertificate from '../assets/hack.jpeg'

function Experience() {
  const [certificate, setCertificate] = useState(null)
  const dialogRef = useRef(null)

  useLayoutEffect(() => {
    if (!certificate) return

    const dialog = dialogRef.current
    const trigger = document.activeElement
    const previousBodyOverflow = document.body.style.overflow
    const previousRootOverflow = document.documentElement.style.overflow

    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    dialog.showModal()

    return () => {
      dialog.close()
      document.body.style.overflow = previousBodyOverflow
      document.documentElement.style.overflow = previousRootOverflow
      if (trigger instanceof HTMLElement && trigger.isConnected) {
        trigger.focus({ preventScroll: true })
      }
    }
  }, [certificate])

  return (
    <section className="page experience-page">
      <p className="eyebrow">EXPERIENCE</p>
      <h1>經歷</h1>

      <div className="experience-list">

        {/* 學歷 */}
        <div className="experience-card">
          <h2>
            學歷 <span>(Education)</span>
          </h2>

          <div className="experience-entry">
            <h3>國立臺北大學 資訊工程研究所 碩士</h3>
            <p className="experience-date">2024.09 — 2026.08</p>

            <ul>
              <li>
                碩士論文：吶語症者具個人化音色之語音生成方法
              </li>
            </ul>
          </div>
        </div>

        {/* 研究計畫 */}
        <div className="experience-card">
          <h2>
            研究計畫 <span>(Research Projects)</span>
          </h2>

          <div className="experience-entry">
            <h3>NTPU × NVIDIA AI Tech Center 研究計畫</h3>
            <p className="experience-date">2025.08 — 2025.12</p>

            <ul>
              <li>
                參與吶語症個人化語音辨識研究，承接既有語音克隆與漸進式微調架構
              </li>
              <li>
                使用 NVIDIA GPU 環境進行患者個人化語音克隆子模型訓練
              </li>
              <li>
                使用 Taipei-1 DGX H100、Slurm 與容器化環境進行模型訓練與實驗
              </li>
              <li>
                專案期間完成多個個人化語音克隆子模型，作為後續語音資料擴增與 ASR 訓練的基礎
              </li>
            </ul>
          </div>

          <div className="experience-entry">
            <h3>國科會整合型研究計畫</h3>
            <p className="experience-date">2024.09 — 2026.08</p>

            <ul>
              <li>
                參與「數位支持、溝通無礙：AI 科技協助語言障礙者溝通輔具之研發支持與推廣」研究計畫
              </li>
              <li>
                研究主題聚焦於構音障礙語音辨識、個人化語音生成與 AI 溝通輔具
              </li>
              <li>
                實作 CosyVoice 2、Flow Matching、語音模型微調與 Web 系統整合
              </li>
              <li>
                Grant No. NSTC 114-2425-H-305-003
              </li>
            </ul>
          </div>
        </div>

        {/* 教學助理 */}
        <div className="experience-card">
          <h2>
            教學助理 <span>(Teaching Assistant)</span>
          </h2>

          <div className="experience-entry">
            <h3>雲端計算 課程助教</h3>
            <p className="experience-date">2025.09 — 2026.06</p>

            <ul>
              <li>
                協助課程教學、作業與實作問題
              </li>
              <li>
                課程內容包含 Kubernetes、Hadoop、Spark、AWS 與雲端運算相關技術
              </li>
            </ul>
          </div>
        </div>

        {/* 學術發表 */}
        <div className="experience-card publication-card">
          <h2>學術發表 <span>(Publications)</span></h2>
          <div className="experience-entry">
            <h3>TWSC² 2026 臺灣雲端與服務計算研討會</h3>
            <p className="experience-date">2026.05.29 — 2026.05.30｜國立彰化師範大學</p>
            <ul>
              <li>發表論文：Timbre-Preserving Speech Generation in Dysarthric Speech</li>
              <li>研究主題：構音障礙者的個人化音色保留與語音生成。</li>
            </ul>
          </div>
          <button
            className="certificate-button publication-button"
            onClick={() => setCertificate({ src: '/certificates/twsc-2026.png', title: 'TWSC² 2026 論文發表證明' })}
          >
            查看發表證明
          </button>
        </div>

        {/* 競賽經驗 */}
        <div className="experience-card competition-card">
          <h2>
            競賽經驗 <span>(Competition Experience)</span>
          </h2>

          <div className="experience-entry">
            <h3>國際黑客松</h3>
            <p className="experience-date">2024</p>

            <ul>
              <li>
                發揮團隊合作精神以及解決問題能力
              </li>
            </ul>
          </div>

          <button
            className="certificate-button"
            onClick={() => setCertificate({ src: hackCertificate, title: '國際黑客松參與證書' })}
          >
            查看證書
          </button>
        </div>

        {/* 過往工作經驗 */}
        <div className="experience-card">
          <h2>
            工作經驗 <span>(Work Experience)</span>
          </h2>

          <div className="experience-entry">
            <h3>台耀化學｜QC 針劑檢驗助理（副）工程師</h3>
            <p className="experience-date">2021.08 — 2022.10</p>

            <ul>
              <li>執行針劑原物料、製程中樣品與成品的取樣及分析檢測。</li>
              <li>依 SOP 完成檢驗紀錄、設備保養校正與實驗室環境維護。</li>
            </ul>
          </div>
        </div>

      </div>

      {certificate && (
        <dialog
          ref={dialogRef}
          className="modal-overlay"
          aria-label={certificate.title}
          onCancel={(event) => {
            event.preventDefault()
            setCertificate(null)
          }}
          onClick={(event) => {
            if (event.target === event.currentTarget) setCertificate(null)
          }}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setCertificate(null)}
              aria-label="關閉"
            >
              ×
            </button>

            <img
              src={certificate.src}
              alt={certificate.title}
              title={certificate.title}
            />
          </div>
        </dialog>
      )}

    </section>
  )
}

export default Experience
