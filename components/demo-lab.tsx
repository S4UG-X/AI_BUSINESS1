"use client";

import {
  ArrowRight,
  BellRing,
  CalendarCheck2,
  Check,
  CheckCircle2,
  Clock3,
  MessageSquareText,
  RotateCcw,
  Send,
} from "lucide-react";
import { useId, useRef, useState, type FormEvent } from "react";

const services = [
  "AC repair",
  "Heating service",
  "Seasonal tune-up",
  "New system estimate",
];
const timeSlots = [
  "Morning · 8–10 AM",
  "Midday · 12–2 PM",
  "Afternoon · 3–5 PM",
];

const followUps = [
  {
    label: "24 hours",
    stage: "A thoughtful check-in",
    message:
      "Hi Alex, thanks for trusting our team with your AC service. Is everything feeling comfortable? Reply if we can help.",
  },
  {
    label: "7 days",
    stage: "A chance to hear their experience",
    message:
      "Hi Alex, checking in after your AC service. If you have a moment, we'd appreciate an honest review of your experience.",
  },
  {
    label: "30 days",
    stage: "A useful reason to reconnect",
    message:
      "Hi Alex, a quick reminder to check your HVAC filter. Need help planning your next tune-up? We're here.",
  },
] as const;

export function DemoLab() {
  const serviceId = useId();
  const timeId = useId();
  const [service, setService] = useState(services[0]);
  const [time, setTime] = useState(timeSlots[0]);
  const [appointment, setAppointment] = useState<{
    service: string;
    time: string;
  } | null>(null);
  const [followUpIndex, setFollowUpIndex] = useState(0);
  const submitRef = useRef<HTMLButtonElement>(null);
  const followUp = followUps[followUpIndex];

  function previewAppointment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAppointment({ service, time });
  }

  return (
    <div className="demo-grid">
      <article className="demo-card appointment-demo">
        <div className="demo-card-top">
          <span className="demo-icon" aria-hidden="true">
            <CalendarCheck2 size={22} />
          </span>
          <span className="eyebrow">01 / Appointment example</span>
          <span className="demo-sample-badge">Sample</span>
        </div>
        <h3>Sample appointment booking</h3>
        <p className="demo-caption">
          Choose a service and time, then select Preview appointment to see the
          details your team would receive.
        </p>

        <form className="appointment-form" onSubmit={previewAppointment}>
          <div className="demo-fields">
            <div className="field">
              <label htmlFor={serviceId}>HVAC service</label>
              <select
                id={serviceId}
                value={service}
                onChange={(event) => setService(event.target.value)}
              >
                {services.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor={timeId}>Example arrival window</label>
              <select
                id={timeId}
                value={time}
                onChange={(event) => setTime(event.target.value)}
              >
                {timeSlots.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
          <button className="button demo-submit" type="submit" ref={submitRef}>
            Preview appointment <ArrowRight size={16} aria-hidden="true" />
          </button>
        </form>

        <div className="demo-result" aria-live="polite" aria-atomic="true">
          {appointment ? (
            <div className="appointment-confirmation">
              <div className="appointment-status">
                <CheckCircle2 size={19} aria-hidden="true" />
                <strong>Example appointment ready</strong>
              </div>
              <dl className="appointment-details">
                <div>
                  <dt>Service</dt>
                  <dd>{appointment.service}</dd>
                </div>
                <div>
                  <dt>Arrival window</dt>
                  <dd>{appointment.time}</dd>
                </div>
              </dl>
              <div className="demo-notification">
                <BellRing size={17} aria-hidden="true" />
                <p>
                  <strong>Your team&apos;s notification</strong>
                  <span>
                    Alex requested {appointment.service.toLowerCase()} ·{" "}
                    {appointment.time}.
                  </span>
                </p>
              </div>
              <button
                className="demo-reset"
                type="button"
                onClick={() => {
                  setAppointment(null);
                  submitRef.current?.focus();
                }}
              >
                <RotateCcw size={13} aria-hidden="true" /> Clear preview
              </button>
            </div>
          ) : (
            <div className="appointment-placeholder" aria-hidden="true">
              <span className="appointment-placeholder-icon">
                <Check size={20} />
              </span>
              <div>
                <strong>One less thing on your list.</strong>
                <span>Your booking and notification preview appears here.</span>
              </div>
            </div>
          )}
        </div>
        <p className="demo-disclaimer">
          Interactive example — no booking or message is sent.
        </p>
      </article>

      <article className="demo-card followup-demo">
        <div className="demo-card-top">
          <span className="demo-icon" aria-hidden="true">
            <MessageSquareText size={22} />
          </span>
          <span className="eyebrow">02 / Follow-up example</span>
          <span className="demo-sample-badge">Sample</span>
        </div>
        <h3>Sample customer follow-up</h3>
        <p className="demo-caption">
          Choose 24 hours, 7 days, or 30 days to see the message your customer
          could receive.
        </p>

        <div
          className="followup-options"
          role="group"
          aria-label="Time after HVAC service"
        >
          {followUps.map((item, index) => (
            <button
              className={`followup-option${index === followUpIndex ? " is-active" : ""}`}
              type="button"
              key={item.label}
              aria-pressed={index === followUpIndex}
              onClick={() => setFollowUpIndex(index)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="message-preview" aria-live="polite" aria-atomic="true">
          <div className="message-preview-header">
            <span className="message-avatar" aria-hidden="true">
              <MessageSquareText size={16} />
            </span>
            <div>
              <strong>Your HVAC business</strong>
              <span>Sample conversation with Alex</span>
            </div>
            <span className="message-preview-icon" aria-hidden="true">
              <Send size={15} />
            </span>
          </div>
          <div className="message-preview-body">
            <span className="message-time">{followUp.label} after service</span>
            <p className="message-bubble">{followUp.message}</p>
            <span className="message-status">
              <Check size={12} aria-hidden="true" /> Message preview
            </span>
          </div>
          <div className="demo-stage">
            <Clock3 size={15} aria-hidden="true" />
            <span>{followUp.stage}</span>
          </div>
        </div>
        <p className="demo-disclaimer">
          Interactive example — no booking or message is sent.
        </p>
      </article>
    </div>
  );
}
