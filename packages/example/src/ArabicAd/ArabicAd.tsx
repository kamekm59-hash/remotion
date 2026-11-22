import React from 'react';
import {AbsoluteFill, Composition, interpolate, useCurrentFrame} from 'remotion';

export type ArabicAdProps = {
	title: string;
	subtitle: string;
	cta: string;
	accent: string;
	background: string;
};

// Word-by-word captions, in groups of at most 6 words.
// No diacritic on any word's final letter (VO rule).
const CAPTIONS: {text: string; startMs: number}[] = [
	{text: 'مدينتك', startMs: 0},
	{text: 'بين', startMs: 1500},
	{text: 'إيديك', startMs: 3000},
];

const ARABIC_FONT = "'Tajawal', 'Noto Sans Arabic', sans-serif";

const ArabicWord: React.FC<{text: string; startMs: number; accent: string}> = ({
	text,
	startMs,
	accent,
}) => {
	const frame = useCurrentFrame();
	const startFrame = (startMs / 1000) * 30;
	const opacity = interpolate(frame, [startFrame, startFrame + 12], [0.35, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const scale = interpolate(frame, [startFrame, startFrame + 12], [0.92, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	return (
		<span
			style={{
				opacity,
				transform: `scale(${scale})`,
				display: 'inline-block',
				color: accent,
				fontFamily: ARABIC_FONT,
				fontWeight: 800,
			}}
		>
			{text}
		</span>
	);
};

export const ArabicAdPreview: React.FC<ArabicAdProps> = ({
	title,
	subtitle,
	cta,
	accent,
	background,
}) => {
	const frame = useCurrentFrame();
	const subtitleOpacity = interpolate(frame, [150, 165], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const ctaOpacity = interpolate(frame, [300, 315], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	return (
		<AbsoluteFill
			style={{
				backgroundColor: background,
				// RTL is set on text elements only (CSS direction).
				// Never put dir="rtl" on <html>: it shifted the stage -720px
				// and blanked frames twice in the ZILO build.
				direction: 'rtl',
				fontFamily: ARABIC_FONT,
			}}
		>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					height: '100%',
					padding: 80,
					textAlign: 'center',
				}}
			>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						gap: 24,
						fontSize: 110,
						lineHeight: 1.2,
						color: '#FFFFFF',
					}}
				>
					{CAPTIONS.map((word) => (
						<ArabicWord
							key={word.text}
							text={word.text}
							startMs={word.startMs}
							accent={accent}
						/>
					))}
				</div>
				<div
					style={{
						opacity: subtitleOpacity,
						marginTop: 48,
						fontSize: 54,
						color: '#FFFFFF',
					}}
				>
					{subtitle}
				</div>
				<div
					style={{
						opacity: ctaOpacity,
						marginTop: 80,
						backgroundColor: accent,
						color: '#FFFFFF',
						fontSize: 48,
						fontWeight: 700,
						padding: '24px 64px',
						borderRadius: 999,
					}}
				>
					{cta}
				</div>
			</div>
		</AbsoluteFill>
	);
};

export const ArabicAd: React.FC = () => {
	return (
		<Composition
			id="ArabicAd"
			component={ArabicAdPreview}
			durationInFrames={450}
			fps={30}
			width={1080}
			height={1920}
			defaultProps={{
				title: 'مدينتك بين إيديك',
				subtitle: 'اسأل مثل ما بتحكي',
				cta: 'حمّل البرنامج',
				accent: '#165CFF',
				background: '#0A2E86',
			}}
		/>
	);
};
