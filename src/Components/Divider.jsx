import { useId } from "react";

export function Divider({ variant = "stars", label, color = "black", spacing = 30 }) {
    const id = useId();
    const wrap = { margin: `${spacing}px 0`, color };

    switch (variant) {
        // chunky dashes
        case "dashes":
            return (
                <div
                    aria-hidden="true"
                    style={{
                        ...wrap,
                        height: "6px",
                        borderRadius: "3px",
                        backgroundImage:
                            "repeating-linear-gradient(90deg, currentColor 0 24px, transparent 24px 36px)",
                    }}
                />
            );

        // a full row of stars that fills whatever width it has
        case "stars":
            return (
                <div
                    aria-hidden="true"
                    style={{
                        ...wrap,
                        textAlign: "center",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        fontSize: "18px",
                        letterSpacing: "0.5em",
                        lineHeight: 1,
                    }}
                >
                    {"★ ✦ ".repeat(80)}
                </div>
            );

        // lines on each side with a sparkle cluster in the middle
        case "sparkle":
            return (
                <div aria-hidden="true" style={{ ...wrap, display: "flex", alignItems: "center", gap: "16px" }}>
                    <div style={{ flex: 1, borderTop: "3px dotted currentColor" }} />
                    <span style={{ fontSize: "22px", letterSpacing: "0.3em", lineHeight: 1 }}>✦ ★ ✦</span>
                    <div style={{ flex: 1, borderTop: "3px dotted currentColor" }} />
                </div>
            );

        // sharp zigzag
        case "zigzag":
            return (
                <div aria-hidden="true" style={wrap}>
                    <svg width="100%" height="14" style={{ display: "block" }}>
                        <defs>
                            <pattern id={id} width="28" height="14" patternUnits="userSpaceOnUse">
                                <path
                                    d="M0 12 L7 2 L21 12 L28 2"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                />
                            </pattern>
                        </defs>
                        <rect width="100%" height="14" fill={`url(#${id})`} />
                    </svg>
                </div>
            );

        // dots
        case "dots":
            return (
                <div
                    aria-hidden="true"
                    style={{
                        ...wrap,
                        height: "8px",
                        backgroundImage: "radial-gradient(circle, currentColor 3px, transparent 3.5px)",
                        backgroundSize: "20px 8px",
                        backgroundRepeat: "repeat-x",
                        backgroundPosition: "center",
                    }}
                />
            );

        // dashed line with a title
        case "label": {
            const line = { flex: 1, height: 0, borderTop: "3px dashed currentColor" };
            return (
                <div style={{ ...wrap, display: "flex", alignItems: "center", gap: "16px" }}>
                    <div style={line} />
                    <span className="section-header" style={{ fontSize: "20px" }}>{label}</span>
                    <div style={line} />
                </div>
            );
        }

        // wavy line
        case "wave":
        default:
            return (
                <div aria-hidden="true" style={wrap}>
                    <svg width="100%" height="12" style={{ display: "block" }}>
                        <defs>
                            <pattern id={id} width="24" height="12" patternUnits="userSpaceOnUse">
                                <path
                                    d="M0 6 Q6 0 12 6 T24 6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                            </pattern>
                        </defs>
                        <rect width="100%" height="12" fill={`url(#${id})`} />
                    </svg>
                </div>
            );
    }
}