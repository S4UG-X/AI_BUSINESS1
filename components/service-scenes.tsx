import type { ReactNode } from "react";

function Tick({ x, y, small = false }: { x: number; y: number; small?: boolean }) {
  return <g transform={`translate(${x} ${y})`} className="scene-tick"><circle r={small ? 10 : 15} className="scene-green" /><path d={small ? "m-4 0 3 3 5-6" : "m-6 0 4 4 8-9"} className="scene-white-stroke" /></g>;
}

function Person({ x, y, active = false }: { x: number; y: number; active?: boolean }) {
  return <g transform={`translate(${x} ${y})`} className={active ? "scene-person scene-person--active" : "scene-person"}><circle r="22" className={active ? "scene-green" : "scene-paper scene-stroke"} /><circle cy="-5" r="6" className={active ? "scene-white-stroke" : "scene-green-stroke"} /><path d="M-11 13a11 11 0 0 1 22 0" className={active ? "scene-white-stroke" : "scene-green-stroke"} /></g>;
}

function StarShape({ x, y, filled = false }: { x: number; y: number; filled?: boolean }) {
  return <path d="m0-9 2.8 5.8 6.4.9-4.6 4.5L5.7 9 0 6-5.7 9l1.1-6.8-4.6-4.5 6.4-.9Z" transform={`translate(${x} ${y})`} className={filled ? "scene-star scene-star--filled" : "scene-star"} />;
}

function CallScene({ complete }: { complete: boolean }) {
  return <>
    <circle cx="160" cy="92" r="66" className="scene-orbit" />
    <circle cx="160" cy="92" r="49" className="scene-call-ring scene-green-stroke" />
    <rect x="93" y="33" width="134" height="130" rx="19" className="scene-panel" />
    <circle cx="160" cy="72" r="23" className="scene-green" />
    <g className="scene-phone" transform="translate(160 72)"><path d="m-9-11 5-2 5 7-4 4c3 5 5 7 10 9l3-4 7 5-2 5c-1 3-7 3-11 0C-5 7-13-3-12-8Z" transform="scale(.72)" className="scene-white-stroke" /></g>
    <path d="M139 109h42M148 118h24" className="scene-line" />
    <g className="scene-wave" transform="translate(160 140)">{[-30, -20, -10, 0, 10, 20, 30].map((x, index) => <path key={x} d={`M${x} ${-(5 + (3 - Math.abs(index - 3)) * 3)}v${(5 + (3 - Math.abs(index - 3)) * 3) * 2}`} className={`scene-wave-bar scene-green-stroke scene-delay-${index % 4}`} />)}</g>
    <rect x="211" y="60" width="51" height="34" rx="10" className="scene-paper scene-stroke" /><path d="M223 73h27m-27 8h16" className="scene-line" />
    {complete ? <Tick x={221} y={147} /> : <g className="scene-call-pulse"><circle cx="221" cy="147" r="15" className="scene-pale" /><path d="m215 147 4 4 8-9" className="scene-green-stroke" /></g>}
  </>;
}

function AutomationScene({ complete }: { complete: boolean }) {
  return <>
    <path d="M68 94h37q12 0 12-12V66q0-12 12-12h59q12 0 12 12v16q0 12 12 12h40M117 94v43q0 12 12 12h59q12 0 12-12V94" className="scene-connector" />
    <path d="M68 94h37q12 0 12-12V66q0-12 12-12h59q12 0 12 12v16q0 12 12 12h40" className="scene-flow-path" />
    <rect x="39" y="66" width="58" height="56" rx="13" className="scene-panel" /><rect x="132" y="28" width="56" height="51" rx="12" className="scene-panel scene-node scene-delay-1" /><rect x="132" y="123" width="56" height="51" rx="12" className="scene-panel scene-node scene-delay-2" /><rect x="223" y="66" width="58" height="56" rx="13" className={complete ? "scene-green" : "scene-panel scene-node scene-delay-3"} />
    <path d="M55 84h26m-26 10h18m-18 10h23" className="scene-green-stroke" /><path d="m153 42-6 11 6 11m14-22 6 11-6 11m-7-23-3 26" className="scene-green-stroke" /><rect x="148" y="137" width="24" height="23" rx="4" className="scene-green-stroke" /><path d="m153 147 5 4 8-9" className="scene-green-stroke" /><path d="m241 94 8 7 14-16" className={complete ? "scene-white-stroke" : "scene-green-stroke"} />
    <circle cx="110" cy="94" r="4" className="scene-data-dot scene-green" /><circle cx="210" cy="94" r="4" className="scene-data-dot scene-data-dot--second scene-green" />
    {complete && <Tick x={270} y={119} small />}
  </>;
}

function ChatScene({ complete }: { complete: boolean }) {
  return <>
    <rect x="70" y="24" width="186" height="151" rx="15" className="scene-panel" /><path d="M70 55h186" className="scene-border-line" /><circle cx="88" cy="40" r="5" className="scene-green" /><path d="M101 39h43m72 0h4m9 0h4m9 0h4" className="scene-line" />
    <g className="scene-chat-bubble scene-delay-0"><path d="M97 69h85q7 0 7 7v19q0 7-7 7h-69l-16 7V76q0-7 7-7Z" className="scene-pale" /><path d="M108 81h63m-63 9h45" className="scene-line" /></g>
    <g className="scene-chat-bubble scene-chat-response scene-delay-2"><path d="M137 115h91q7 0 7 7v20q0 7-7 7h-9l-8 7v-7h-74q-7 0-7-7v-20q0-7 7-7Z" className="scene-green" /><path d="M144 127h76m-76 9h54" className="scene-white-stroke" /></g>
    <circle cx="65" cy="119" r="18" className="scene-green" /><path d="M58 116h14m-14 6h9" className="scene-white-stroke" />
    {complete ? <Tick x={250} y={159} /> : <g className="scene-typing"><circle cx="201" cy="161" r="2" /><circle cx="209" cy="161" r="2" /><circle cx="217" cy="161" r="2" /></g>}
  </>;
}

function ReviewScene({ complete }: { complete: boolean }) {
  return <>
    <rect x="61" y="31" width="191" height="117" rx="14" className="scene-panel" /><circle cx="85" cy="55" r="10" className="scene-pale" /><path d="M104 51h73m-73 9h46" className="scene-line" />
    <g className="scene-stars">{[92, 124, 156, 188, 220].map((x, index) => <g className={`scene-review-star scene-delay-${index}`} key={x}><StarShape x={x} y={90} filled={complete} /></g>)}</g>
    <path d="M83 117h146m-146 9h108" className="scene-line" />
    <g className="scene-followup"><rect x="165" y="130" width="106" height="43" rx="10" className="scene-green" /><path d="M180 143h19v15h-19Zm0 0 9.5 8 9.5-8M210 145h45m-45 9h29" className="scene-white-stroke" /></g>
    {complete ? <Tick x={261} y={132} small /> : <circle cx="261" cy="132" r="6" className="scene-taupe scene-notification" />}
  </>;
}

function ContentScene({ complete }: { complete: boolean }) {
  return <>
    <g className="scene-draft" transform="rotate(-7 103 97)"><rect x="52" y="35" width="107" height="132" rx="10" className="scene-panel" /><rect x="66" y="51" width="27" height="6" rx="3" className="scene-taupe" />{[74, 86, 98, 110, 122].map((y, index) => <path key={y} d={`M66 ${y}h${index === 4 ? 39 : 77}`} className={`scene-writing-line scene-line scene-delay-${index}`} />)}<path d="m119 143 8-3 15-21-7-5-15 21Z" className="scene-green-stroke" /></g>
    <path d="M150 97h27m-7-6 7 6-7 6" className="scene-content-arrow scene-green-stroke" />
    <g className="scene-social-post" transform="rotate(5 222 100)"><rect x="182" y="43" width="91" height="125" rx="10" className="scene-panel" /><circle cx="195" cy="55" r="4" className="scene-green" /><path d="M205 55h31" className="scene-line" /><rect x="191" y="67" width="73" height="60" rx="5" className="scene-pale" /><path d="M211 111V86h32v25Zm-7 0h46m-33-17h20m-20 8h20" className="scene-green-stroke" /><circle cx="255" cy="135" r="2" className="scene-taupe" /><path d="M192 140h54m-54 10h39" className="scene-line" /></g>
    {complete && <Tick x={268} y={48} />}
  </>;
}

function Pin({ x, y, active = false }: { x: number; y: number; active?: boolean }) {
  return <g transform={`translate(${x} ${y})`} className={active ? "scene-map-pin scene-map-pin--active" : "scene-map-pin"}><path d="M0 0s-13-14-13-23a13 13 0 0 1 26 0C13-14 0 0 0 0Z" className={active ? "scene-green" : "scene-taupe"} /><circle cy="-23" r="4" className="scene-paper" /></g>;
}

function SeoScene({ complete }: { complete: boolean }) {
  return <>
    <rect x="38" y="28" width="244" height="145" rx="13" className="scene-map-bg" /><path d="m41 56 239 80M43 148 278 61M83 29l16 141M192 29l-21 141" className="scene-map-road" /><path d="m42 55 238 80M42 147 237 75M83 29l16 141" className="scene-map-road-center" />
    <circle cx="159" cy="108" r="34" className="scene-search-radius" /><circle cx="159" cy="108" r="50" className="scene-search-orbit" /><Pin x={80} y={104} /><Pin x={235} y={127} /><Pin x={159} y={113} active />
    <rect x="76" y="32" width="169" height="29" rx="14.5" className="scene-panel" /><circle cx="94" cy="45" r="5" className="scene-green-stroke" /><path d="m98 49 4 4m9-7h82" className="scene-line" />
    <g className="scene-search-result"><rect x="125" y="137" width="120" height="28" rx="8" className="scene-paper scene-stroke" /><circle cx="140" cy="151" r="5" className="scene-green" /><path d="M153 147h77m-77 8h49" className="scene-line" /></g>
    {complete && <Tick x={171} y={82} small />}
  </>;
}

function VideoScene({ complete }: { complete: boolean }) {
  return <>
    <rect x="48" y="30" width="224" height="143" rx="13" className="scene-panel" /><rect x="57" y="39" width="206" height="104" rx="7" className="scene-pale" />
    <g className="scene-hvac"><rect x="89" y="58" width="80" height="66" rx="7" className="scene-paper scene-stroke" /><circle cx="122" cy="91" r="23" className="scene-green-stroke" /><g className="scene-fan" transform="translate(122 91)"><path d="M0-4C-19-25-24 4-4 2M4 0C25-19-4-24-2-4M0 4C19 25 24-4 4-2M-4 0C-25 19 4 24 2 4" className="scene-fan-blades" /><circle r="4" className="scene-green" /></g><path d="M153 70v41m-64 20v-7m79 7v-7" className="scene-line" /></g>
    <g className="scene-airflow"><path d="M173 78c6-5 12 5 18 0m-18 12c6-5 12 5 18 0m-18 12c6-5 12 5 18 0" className="scene-green-stroke" /></g>
    <rect x="193" y="64" width="41" height="53" rx="9" className="scene-paper scene-stroke" /><path d="M204 77h19v17h-19Z" className="scene-green-stroke" /><path d="M209 84h9m-11 19h4m7 0h4" className="scene-line" />
    <circle cx="160" cy="92" r="20" className="scene-play-disc scene-green" /><path d={complete ? "M155 85v14m10-14v14" : "m155 83 14 9-14 9Z"} className="scene-play-symbol" />
    <path d="M76 157h168" className="scene-video-track" /><path d={complete ? "M76 157h168" : "M76 157h53"} className="scene-video-progress" /><path d="m62 153 5 4-5 4Z" className="scene-green" />
    {complete && <Tick x={249} y={43} small />}
  </>;
}

function ReactivationScene({ complete }: { complete: boolean }) {
  return <>
    <circle cx="160" cy="100" r="66" className="scene-orbit" /><path d="M110 73 160 100l51-28M160 100l-42 44m42-44 49 43" className="scene-connector" /><path d="M160 100 211 72" className="scene-reconnect-path" />
    <Person x={105} y={69} /><Person x={113} y={149} /><Person x={216} y={148} /><g className="scene-reactivated-person"><Person x={216} y={67} active={complete} /></g><Person x={160} y={100} active />
    <g className="scene-delivery"><rect x="174" y="74" width="24" height="18" rx="4" className="scene-paper scene-stroke" /><path d="m178 79 8 6 8-6" className="scene-green-stroke" /></g>
    {complete ? <Tick x={235} y={83} small /> : <circle cx="233" cy="83" r="5" className="scene-taupe scene-dormant-dot" />}
  </>;
}

export function ServiceScene({ serviceId, complete = false }: { serviceId: string; complete?: boolean }) {
  const scenes: Record<string, ReactNode> = {
    "ai-receptionist": <CallScene complete={complete} />,
    "custom-automation": <AutomationScene complete={complete} />,
    "customer-support": <ChatScene complete={complete} />,
    "reviews-follow-ups": <ReviewScene complete={complete} />,
    "social-content": <ContentScene complete={complete} />,
    "local-seo": <SeoScene complete={complete} />,
    "educational-videos": <VideoScene complete={complete} />,
    "customer-retention": <ReactivationScene complete={complete} />,
  };
  return <svg className={`service-scene${complete ? " service-scene--complete" : ""}`} viewBox="0 0 320 200" aria-hidden="true" focusable="false"><rect width="320" height="200" className="scene-background" /><path d="M16 16h9m-9 0v9m288-9h-9m9 0v9M16 184h9m-9 0v-9m288 9h-9m9 0v-9" className="scene-corner-marks" />{scenes[serviceId] ?? <AutomationScene complete={complete} />}</svg>;
}
