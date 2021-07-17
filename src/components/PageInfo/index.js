import "./styles.css"

export default function PageInfo() {
  return (
    <div className="PageInfo">
      <div className="Statistics">
        <h1>Advanced Statistics</h1>
        <p> Track how your links are
         performing across the web with our advanced statistics dashboard.
        </p>
      </div>
      <div className="descriptionFlex">
        <div className="square top">
          <img src="/assets/Icon-2.svg" />
          <h2>Brand Recognition</h2>
          <p className="descriptionText"> Boost your brand recognition with each click.
          Generic links don’t mean a thing. Branded links
          help instil confidence in your content.
          </p>
        </div>
        <div className="square middle">
          <img src="/assets/Icon-1.svg" />
          <h2>Detailed Records</h2>
          <p className="descriptionText"> Gain insights into who is clicking your links.
          Knowing when and where people engage with your
          content helps inform better decisions.
          </p>
        </div>
        <div className="square bottom">
          <img src="/assets/Icon.svg" />
          <h2>Fully Customizable</h2>
          <p className="descriptionText"> Improve brand awareness and content discoverability
          through customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>

    </div>
  )
}
