import "../styles/design-gallery-sp.css";


export default function DesignGallerySP() {
  return (
    <div className="gallery-sp">
      <h2 className="gallery-sp-title">GALLERY</h2>

      <div className="gallery-sp-list">
        {[1,2,3,4,5,6,7,8].map(n => (
          <figure className="gallery-sp-item" key={n}>
            <img src={`/images/gallery-${n}.png`} alt="" />
            <figcaption>Design #{n}</figcaption>
          </figure>
        ))}
      </div>

      <p className="gallery-sp-end">
        静かに、選ばれる指先へ。
      </p>
    </div>
  );
}
