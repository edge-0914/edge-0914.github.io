import profileImg from '../assets/profile.jpeg'

function About() {
  return (
    <section className="page about-page">
      <div className="about-layout">

        <div className="about-text">
          <p className="eyebrow">ABOUT ME</p>

          <h1>羅日堂</h1>

          <p className="description">
            國立臺北大學資訊工程學系碩士，研究方向聚焦於 Speech AI、
            Deep Learning 與個人化語音生成。碩士論文題目為
            「吶語症者具個人化音色之語音生成方法」，
            研究如何在保留吶語症患者音色的同時，
            提高生成語音的清晰度以及理解度。
            喜歡拆解問題、動手實作與學習新技術，
            未來希望朝 AI 與軟體工程相關領域發展。
          </p>

          <div className="about-details">
                <div className="detail-block">
                <h3>個性</h3>
                    <div className="tag-list">
                        <span>喜歡拆解問題</span>
                        <span>重視實作</span>
                        <span>持續學習</span>
                    </div>
                </div>

                <div className="detail-block">
                <h3>興趣</h3>
                    <div className="tag-list">
                        <span>健身</span>
                        <span>球類運動</span>
                        <span>學習新知</span>
                        <span>爬蟲飼養</span>
                    </div>
                </div>
         </div>

        </div>

        <div className="about-photo">
          <img src={profileImg} alt="羅日堂" />
        </div>

      </div>
    </section>
  )
}

export default About
