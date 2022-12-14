function DevBanner({ reload }) {
  const titleClass = `banner__title ${
    !reload ? "title-hidden" : "title-visible"
  }`;

  const nameClass = `name ${!reload ? "name-hidden" : "name-visible"}`;

  return (
    <section className="banner__wrapper">
      <h1 className={titleClass}>Just getting started</h1>
      <div className="banner__subtitle">
        <p className="banner__subtitle_item">Gathering the fundementals</p>
        <p className="banner__subtitle_item">
          Expect a range of experiences offering
        </p>
        <p className="banner__subtitle_item">Visually rewarding solutions</p>
        <p className={nameClass}>Jake Johnson</p>
      </div>
    </section>
  );
}

export default DevBanner;
