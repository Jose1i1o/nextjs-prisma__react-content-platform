import React from 'react';
import { GoVideo } from 'react-icons/go';
import { SlDocs } from 'react-icons/sl';
import { PiCodesandboxLogoDuotone } from 'react-icons/pi';
import { GrTest } from 'react-icons/gr';
import { theme } from '@/theme/theme';

const iconMap = {
  video: <GoVideo />,
  docs: <SlDocs />,
  code: <PiCodesandboxLogoDuotone />,
  test: <GrTest />,
};

const emojRange = [
  [128583, 128591],
  [128640, 128704],
  [9989, 9990],
];

const emojis = emojRange
  .map(([start, end]) =>
    Array.from({ length: end - start }, (_, i) => String.fromCodePoint(i + start))
  )
  .flat();
	

type iconMapType = typeof iconMap;

export const displayCorrectIcon = (icon: string, title: string) => {
  const selectedIcon = iconMap[icon as keyof iconMapType];
	const color = getTitleColor(icon);

	if (!selectedIcon) {
		return null
	}
    return (
			<div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ marginRight: '10px', color }}>{selectedIcon}</div>
      <div style={{ marginRight: '10px', fontStyle: 'italic', color }}><strong>{getTitlePrefix(icon)}</strong></div>
      <div style={{ marginRight: '10px', fontSize: '1.2em' }}>{emojis[Math.floor(Math.random() * emojis.length)]}</div>
			<div style={{ fontWeight: 600, fontStyle: 'cursive' }}>{title}</div>
    </div>
    );
};

const getTitlePrefix = (icon: string) => {
  switch (icon) {
    case 'video':
      return 'Watch >';
    case 'docs':
      return 'Read >';
    case 'code':
      return 'Code >';
    case 'test':
      return 'Test >';
    default:
      return '';
  }
};

const getTitleColor = (icon: string): string => {
  switch (icon) {
		case 'docs':
			return theme.colors.primary;
    case 'video':
      return theme.colors.accent;
    case 'code':
      return theme.colors.secondary;
    case 'test':
      return theme.colors.error;
    default:
      return theme.colors.grey;
  }
};
