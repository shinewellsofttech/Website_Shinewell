import './MovingStrips.css'

const MovingStrips = () => {
  return (
    <section className="moving-strips-section">
      <div className="moving-strips">
        <div className="strip strip-top">
          <div className="strip-content">
            <span className="strip-item">Think Forward</span>
            <span className="strip-separator">/</span>
            <span className="strip-item">Cognitive Shift</span>
            <span className="strip-separator">/</span>
            <span className="strip-item">Next Into</span>
            <span className="strip-separator">/</span>
            <span className="strip-item">Think Forward</span>
            <span className="strip-separator">/</span>
            <span className="strip-item">Cognitive Shift</span>
            <span className="strip-separator">/</span>
            <span className="strip-item">Next Into</span>
            <span className="strip-separator">/</span>
          </div>
        </div>
        
        <div className="strip strip-bottom">
          <div className="strip-content strip-content-reverse">
            <span className="strip-item">Powering Innovation</span>
            <span className="strip-separator">/</span>
            <span className="strip-item">Smarter Tomorrow</span>
            <span className="strip-separator">/</span>
            <span className="strip-item">Digital Excellence</span>
            <span className="strip-separator">/</span>
            <span className="strip-item">Powering Innovation</span>
            <span className="strip-separator">/</span>
            <span className="strip-item">Smarter Tomorrow</span>
            <span className="strip-separator">/</span>
            <span className="strip-item">Digital Excellence</span>
            <span className="strip-separator">/</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MovingStrips

