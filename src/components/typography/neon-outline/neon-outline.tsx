import styles from "./neon-outline.module.css";

type NeonLogoProps = {
    text: string;
    animate?: boolean;
    size?: "default" | "medium" | "large";
};

export default function NeonOutline({ text, animate = false, size = "default" }: NeonLogoProps) {
    const textClassNames = [styles.neonText];
    if (!animate) {
        textClassNames.push(styles.neonTextStatic);
    }
    if (size === "medium") {
        textClassNames.push(styles.sizeMedium);
    } else if (size === "large") {
        textClassNames.push(styles.sizeLarge);
    }

    return (
        <svg
            viewBox="0 0 800 200"
            preserveAspectRatio="xMinYMid meet"
            xmlns="http://www.w3.org/2000/svg"
            aria-label={text}
            role="img"
            className={styles.neonSvg}
        >
            <defs>
                <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            <text x="0" y="50%" className={textClassNames.join(" ")}>
                {text}
            </text>
        </svg>
    );
}
