export default function Location() {
  return (
    <div className="grid grid-cols-2 gap-12 py-20">
      <div className="mt-7">
        <div className="text-2xl text-zinc-700">
          The{" "}
          <span className="text-5xl font-extrabold text-secondary">
            strategic
          </span>{" "}
          homestay in <br />
          <div className="text-[5rem] pt-6 pb-8 font-extrabold">
            Port Dickson
          </div>
        </div>
        <div className="list mt-3 text-zinc-700 text-lg">
          <ul>
            <li>4 minutes to the beach</li>
            <li>2 minutes to the McDonald's</li>
          </ul>
        </div>
      </div>
      <iframe
        className="border-0 mt-6 aspect-video lg:overflow-hidden lg:w-full"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1993.048515417508!2d101.85464963425447!3d2.474808281170744!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdf77fbf9bcc17%3A0x573234c80a0083d7!2sCozy%20%26%20Sweet%20Homestay!5e0!3m2!1sen!2smy!4v1640871664571!5m2!1sen!2smy"
        allowFullScreen={true}
        loading="lazy"
      ></iframe>
    </div>
  );
}
