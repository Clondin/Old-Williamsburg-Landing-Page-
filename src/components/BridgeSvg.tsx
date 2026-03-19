export default function BridgeSvg() {
  return (
    <svg
      className="bridge-svg"
      viewBox="0 0 1400 280"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Bridge deck */}
      <rect className="bridge-deck" x="0" y="210" width="1400" height="18" rx="2" />
      <rect className="bridge-deck" x="0" y="228" width="1400" height="6" opacity="0.5" />
      {/* Left tower */}
      <rect className="bridge-structure" x="320" y="60" width="16" height="170" />
      <rect className="bridge-structure" x="350" y="60" width="16" height="170" />
      <rect className="bridge-structure" x="316" y="55" width="54" height="14" rx="2" />
      <rect className="bridge-structure" x="316" y="100" width="54" height="8" />
      <rect className="bridge-structure" x="316" y="150" width="54" height="8" />
      {/* Right tower */}
      <rect className="bridge-structure" x="1030" y="60" width="16" height="170" />
      <rect className="bridge-structure" x="1060" y="60" width="16" height="170" />
      <rect className="bridge-structure" x="1026" y="55" width="54" height="14" rx="2" />
      <rect className="bridge-structure" x="1026" y="100" width="54" height="8" />
      <rect className="bridge-structure" x="1026" y="150" width="54" height="8" />
      {/* Main cables */}
      <path className="bridge-cable" d="M0,200 Q170,190 343,62 Q510,170 700,185 Q890,170 1053,62 Q1230,190 1400,200" />
      <path className="bridge-cable bridge-cable-2" d="M0,205 Q170,195 343,68 Q510,175 700,190 Q890,175 1053,68 Q1230,195 1400,205" />
      {/* Suspender cables - left span */}
      <line className="bridge-suspender" style={{ "--i": 0 } as React.CSSProperties} x1="100" y1="197" x2="100" y2="210" />
      <line className="bridge-suspender" style={{ "--i": 1 } as React.CSSProperties} x1="160" y1="193" x2="160" y2="210" />
      <line className="bridge-suspender" style={{ "--i": 2 } as React.CSSProperties} x1="220" y1="178" x2="220" y2="210" />
      <line className="bridge-suspender" style={{ "--i": 3 } as React.CSSProperties} x1="280" y1="140" x2="280" y2="210" />
      {/* Suspender cables - center span */}
      <line className="bridge-suspender" style={{ "--i": 4 } as React.CSSProperties} x1="420" y1="120" x2="420" y2="210" />
      <line className="bridge-suspender" style={{ "--i": 5 } as React.CSSProperties} x1="480" y1="148" x2="480" y2="210" />
      <line className="bridge-suspender" style={{ "--i": 6 } as React.CSSProperties} x1="540" y1="165" x2="540" y2="210" />
      <line className="bridge-suspender" style={{ "--i": 7 } as React.CSSProperties} x1="600" y1="177" x2="600" y2="210" />
      <line className="bridge-suspender" style={{ "--i": 8 } as React.CSSProperties} x1="660" y1="183" x2="660" y2="210" />
      <line className="bridge-suspender" style={{ "--i": 9 } as React.CSSProperties} x1="700" y1="185" x2="700" y2="210" />
      <line className="bridge-suspender" style={{ "--i": 10 } as React.CSSProperties} x1="740" y1="183" x2="740" y2="210" />
      <line className="bridge-suspender" style={{ "--i": 11 } as React.CSSProperties} x1="800" y1="177" x2="800" y2="210" />
      <line className="bridge-suspender" style={{ "--i": 12 } as React.CSSProperties} x1="860" y1="165" x2="860" y2="210" />
      <line className="bridge-suspender" style={{ "--i": 13 } as React.CSSProperties} x1="920" y1="148" x2="920" y2="210" />
      <line className="bridge-suspender" style={{ "--i": 14 } as React.CSSProperties} x1="980" y1="120" x2="980" y2="210" />
      {/* Suspender cables - right span */}
      <line className="bridge-suspender" style={{ "--i": 15 } as React.CSSProperties} x1="1120" y1="140" x2="1120" y2="210" />
      <line className="bridge-suspender" style={{ "--i": 16 } as React.CSSProperties} x1="1180" y1="178" x2="1180" y2="210" />
      <line className="bridge-suspender" style={{ "--i": 17 } as React.CSSProperties} x1="1240" y1="193" x2="1240" y2="210" />
      <line className="bridge-suspender" style={{ "--i": 18 } as React.CSSProperties} x1="1300" y1="197" x2="1300" y2="210" />
      {/* Cross-bracing on towers */}
      <line className="bridge-suspender" style={{ "--i": 4 } as React.CSSProperties} x1="320" y1="100" x2="366" y2="150" />
      <line className="bridge-suspender" style={{ "--i": 5 } as React.CSSProperties} x1="366" y1="100" x2="320" y2="150" />
      <line className="bridge-suspender" style={{ "--i": 4 } as React.CSSProperties} x1="1030" y1="100" x2="1076" y2="150" />
      <line className="bridge-suspender" style={{ "--i": 5 } as React.CSSProperties} x1="1076" y1="100" x2="1030" y2="150" />
    </svg>
  );
}
