"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
const events = [
  {
    name: "ქორწილი",
    title: "თქვენი სიყვარულის\nყველაზე ლამაზი დღე.",
    description:
      "საყვარელი ადამიანები, სადღესასწაულო სუფრა და სივრცე თქვენი ისტორიის ახალი დასაწყისისთვის.",
    image: "hall3.jpg",
    note: "დღე, რომელიც თქვენ გეკუთვნით",
    icon: "heart",
  },
  {
    name: "ნათლობა",
    title: "პატარა ადამიანის\nდიდი დღესასწაული.",
    description:
      "შევკრიბოთ ოჯახი და ახლობლები — თბილი, გემრიელი და დასამახსოვრებელი შეხვედრისთვის.",
    image: "hall5.jpg",
    note: "ოჯახური სიხარულის გასაზიარებლად",
    icon: "sparkle",
  },
  {
    name: "ბანკეტი",
    title: "კარგი მიზეზი\nერთად შესაკრებად.",
    description:
      "დაბადების დღე, მეგობრული საღამო თუ მნიშვნელოვანი თარიღი — თქვენ ირჩევთ მიზეზს, სუფრას ერთად დავგეგმავთ.",
    image: "hall1.jpg",
    note: "თქვენი საყვარელი ადამიანების გარემოცვაში",
    icon: "people",
  },
];
export default function EventExplorer() {
  const [active, setActive] = useState(0);
  const event = events[active];
  return (
    <section className="occasion-section section" id="occasions">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">ყოველ დღეს თავისი ისტორია აქვს</span>
            <h2>რას აღვნიშნავთ?</h2>
          </div>
          <p>
            შეარჩიეთ თქვენი დღე.
            <br />
            დანარჩენზე ერთად ვიზრუნებთ.
          </p>
        </div>
        <div
          className="occasion-tabs"
          role="tablist"
          aria-label="ღონისძიების ტიპები"
        >
          {events.map((e, i) => (
            <button
              key={e.name}
              id={`occasion-${i}`}
              role="tab"
              aria-selected={i === active}
              aria-controls="occasion-panel"
              tabIndex={i === active ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => {
                if (
                  e.key === "ArrowRight" ||
                  e.key === "ArrowLeft" ||
                  e.key === "Home" ||
                  e.key === "End"
                ) {
                  e.preventDefault();
                  const next =
                    e.key === "Home"
                      ? 0
                      : e.key === "End"
                        ? events.length - 1
                        : (i +
                            (e.key === "ArrowRight" ? 1 : -1) +
                            events.length) %
                          events.length;
                  setActive(next);
                  document.getElementById(`occasion-${next}`)?.focus();
                }
              }}
            >
              <Icon name={e.icon} />
              {e.name}
              <span>0{i + 1}</span>
            </button>
          ))}
        </div>
        <div
          className="occasion-panel"
          id="occasion-panel"
          role="tabpanel"
          aria-labelledby={`occasion-${active}`}
        >
          <div className="occasion-image">
            <Image
              key={event.image}
              src={"/gallery/" + event.image}
              alt={`ლა ფიესტა — ${event.name}`}
              fill
              sizes="(max-width:760px) 100vw, 55vw"
            />
            <div className="occasion-caption">
              <span>ლა ფიესტას სივრცე</span>
              <span>მარტვილი, საქართველო</span>
            </div>
          </div>
          <div className="occasion-copy">
            <span className="occasion-symbol" aria-hidden="true">
              <Icon name={event.icon} />
            </span>
            <span className="eyebrow">{event.note}</span>
            <h3>
              {event.title.split("\n").map((line, i) => (
                <span key={line}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </h3>
            <p>{event.description}</p>
            <Link
              className="text-link"
              href={`/contacts?event=${encodeURIComponent(event.name)}`}
            >
              დაგეგმეთ {event.name}
              <Icon name="diagonal" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
