// SPDX-FileCopyrightText: Copyright Orangebot, Inc. and Medplum contributors
// SPDX-License-Identifier: Apache-2.0
import { useMantineTheme } from '@mantine/core';
import type { JSX } from 'react';

export interface LogoProps {
  readonly size: number;
}

// Four-point star mark for Dr. Star NMD ("Estrella" means star).
export function Logo(props: LogoProps): JSX.Element {
  const theme = useMantineTheme();
  const shade = typeof theme.primaryShade === 'number' ? theme.primaryShade : 8;
  const color = theme.colors[theme.primaryColor]?.[shade] ?? theme.colors.green[8];
  const fontSize = Math.round(props.size * 0.75);
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: Math.round(props.size * 0.3),
        whiteSpace: 'nowrap',
      }}
    >
      <svg
        width={props.size}
        height={props.size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M12 1.5C12.9 7.1 16.9 11.1 22.5 12C16.9 12.9 12.9 16.9 12 22.5C11.1 16.9 7.1 12.9 1.5 12C7.1 11.1 11.1 7.1 12 1.5Z"
          fill={color}
        />
      </svg>
      <span style={{ fontSize, fontWeight: 700, letterSpacing: '-0.01em', color }}>
        Dr. Star <span style={{ fontWeight: 400 }}>NMD</span>
      </span>
    </span>
  );
}
