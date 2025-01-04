import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";

const AlexaUrl =
  "data:image/png;base64,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";

const CortanaUrl =
  "data:image/jpeg;base64,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";

const SiriUrl =
  "data:image/jpeg;base64,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";

function Profiles() {
  return (
    <>
      <div className="hero is-primary">
        <h1 className="title">Personal digital assistant</h1>
      </div>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                imageUrl={AlexaUrl}
                handle="alexa"
                description="I am a virtual assistant developed by Amazon, first used in the Amazon Echo and the Amazon Echo Dot smart speakers developed by Amazon Lab126."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                imageUrl={CortanaUrl}
                handle="cortana"
                description="I am a virtual assistant created by Microsoft for Windows 10, Windows 10 Mobile, Windows Phone 8.1, Invoke smart speaker, Microsoft Band, Surface Headphones, Xbox One, iOS, Android, Windows Mixed Reality, and Amazon Alexa."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Siri"
                imageUrl={SiriUrl}
                handle="siri"
                description="I am a virtual assistant that is part of Apple Inc.'s iOS, iPadOS, watchOS, macOS, and tvOS operating systems. I use voice queries and a natural-language user interface to answer questions, make recommendations, and perform actions by delegating requests to a set of Internet services."
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Profiles;