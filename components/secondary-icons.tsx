import * as React from 'react';

import { IconSvgProps } from '@/types';

export const NodeIcon: React.FC<IconSvgProps> = ({ size = 24, width, height, ...props }) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 256 288"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M128.004 0L250.756 70.625V211.875L128.004 282.5L5.252 211.875V70.625L128.004 0Z"
        fill="#8CC84B"
      />
      <path
        d="M164.227 172.086c3.232 6.515 7.421 11.32 14.842 11.32 6.236 0 10.199-3.117 10.199-7.42 0-5.154-4.085-6.98-11.06-9.976l-3.793-1.629c-10.958-4.662-18.237-10.512-18.237-22.842 0-11.369 8.641-20.056 22.139-20.056 9.622 0 16.545 3.347 21.547 12.11l-11.805 7.556c-2.598-4.662-5.398-6.487-9.762-6.487-4.443 0-7.269 2.826-7.269 6.487 0 4.543 2.826 6.368 9.357 9.172l3.794 1.628c12.902 5.516 20.181 11.036 20.181 23.828 0 13.646-10.737 21.115-25.148 21.115-14.088 0-23.204-6.727-27.631-15.501l12.094-7.008zm-58.512 1.354c2.426 4.31 4.61 7.952 9.762 7.952 4.987 0 8.145-1.954 8.145-9.514v-51.956h15.004v52.054c0 15.572-9.126 22.655-22.445 22.655-12.034 0-18.994-6.215-22.512-13.771l11.046-7.42z"
        fill="#fff"
      />
    </svg>
  );
};

export const GithubIcon: React.FC<IconSvgProps> = ({ size = 24, width, height, ...props }) => {
  return (
    <svg
      fill="currentColor"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 0.297C5.373 0.297 0 5.67 0 12.297c0 5.297 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.042-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.808 1.304 3.495.997.108-.775.418-1.304.76-1.604-2.665-.305-5.466-1.334-5.466-5.932 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.323 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.553 3.297-1.23 3.297-1.23.654 1.653.242 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.803 5.625-5.475 5.922.43.37.813 1.096.813 2.21 0 1.595-.015 2.88-.015 3.27 0 .318.216.694.825.576C20.565 22.092 24 17.59 24 12.297 24 5.67 18.627.297 12 .297z" />
    </svg>
  );
};

export const NextIcon: React.FC<IconSvgProps> = ({ size = 24, width, height, ...props }) => {
  return (
    <svg
      fill="#38BDF8"
      height={size || height}
      viewBox="0 0 48 48"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      color="#38BDF8"
    >
      <path
        d="M24.025 12C17.94 12 14.415 15.15 13.45 21.45c2.225-3.15 4.725-4.35 7.5-3.6 1.625.45 2.775 1.725 4.05 3.075 2.1 2.175 4.5 4.65 9.525 4.65 6.085 0 9.61-3.15 10.575-9.45-2.225 3.15-4.725 4.35-7.5 3.6-1.625-.45-2.775-1.725-4.05-3.075-2.1-2.175-4.5-4.65-9.525-4.65Zm-10.575 12c-6.085 0-9.61 3.15-10.575 9.45 2.225-3.15 4.725-4.35 7.5-3.6 1.625.45 2.775 1.725 4.05 3.075 2.1 2.175 4.5 4.65 9.525 4.65 6.085 0 9.61-3.15 10.575-9.45-2.225 3.15-4.725 4.35-7.5 3.6-1.625-.45-2.775-1.725-4.05-3.075-2.1-2.175-4.5-4.65-9.525-4.65Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const MysqlIcon: React.FC<IconSvgProps> = ({ size = 24, width, height, ...props }) => {
  const w = size || width;
  const h = size || height;

  return (
    <svg
      fill="none"
      height={h}
      viewBox="0 0 512 512"
      width={w}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="#20C4F4">
        <path d="M256 0C150 0 64 36 64 80v352c0 44 86 80 192 80s192-36 192-80V80c0-44-86-80-192-80zm0 32c96.5 0 160 30.8 160 48s-63.5 48-160 48S96 97.2 96 80s63.5-48 160-48zm160 109.7v33.8c0 17.2-63.5 48-160 48S96 192.7 96 175.5v-33.8c29.4 20.5 89.9 32.3 160 32.3s130.6-11.8 160-32.3zm0 80v33.8c0 17.2-63.5 48-160 48S96 272.7 96 255.5v-33.8c29.4 20.5 89.9 32.3 160 32.3s130.6-11.8 160-32.3zm0 80v33.8c0 17.2-63.5 48-160 48S96 352.7 96 335.5v-33.8c29.4 20.5 89.9 32.3 160 32.3s130.6-11.8 160-32.3zm0 80v30.3c0 17.2-63.5 48-160 48S96 419.2 96 402v-30.3c29.4 20.5 89.9 32.3 160 32.3s130.6-11.8 160-32.3z" />
      </g>
    </svg>
  );
};

export const SupabaseIcon: React.FC<IconSvgProps> = ({ size = 24, width, height, ...props }) => {
  const w = size || width;
  const h = size || height;

  return (
    <svg
      fill="none"
      height={h}
      viewBox="0 0 48 48"
      width={w}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M43.9,22.5L27.5,43.3c-1.2,1.4-3.5,0.6-3.5-1.2V30H6.6c-2.1,0-3.3-2.5-2-4.1L20.7,5.1
           c1.1-1.5,3.4-0.7,3.4,1.2v12.1h17.7C44.1,18.4,45.3,20.8,43.9,22.5z"
        fill="#71c674"
      />
    </svg>
  );
};

export const CleanCodeIcon: React.FC<IconSvgProps> = ({ size = 24, width, height, ...props }) => {
  const w = size || width;
  const h = size || height;

  return (
    <svg
      fill="none"
      height={h}
      viewBox="0 0 64 64"
      width={w}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        fill="#E8F5E9"
        height="48"
        rx="4"
        stroke="#4CAF50"
        strokeWidth="3"
        width="40"
        x="12"
        y="8"
      />
      <line
        stroke="#4CAF50"
        strokeLinecap="round"
        strokeWidth="3"
        x1="20"
        x2="44"
        y1="20"
        y2="20"
      />
      <line
        stroke="#4CAF50"
        strokeLinecap="round"
        strokeWidth="3"
        x1="20"
        x2="44"
        y1="28"
        y2="28"
      />
      <line
        stroke="#4CAF50"
        strokeLinecap="round"
        strokeWidth="3"
        x1="20"
        x2="44"
        y1="36"
        y2="36"
      />
      <line
        stroke="#4CAF50"
        strokeLinecap="round"
        strokeWidth="3"
        x1="20"
        x2="36"
        y1="44"
        y2="44"
      />
    </svg>
  );
};

export const CommunicationIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  const w = size || width;
  const h = size || height;

  return (
    <svg
      fill="none"
      height={h}
      viewBox="0 0 64 64"
      width={w}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect fill="#2196F3" height="32" rx="8" width="48" x="8" y="16" />
      <path
        d="M12 48L20 40H52C54.209 40 56 38.209 56 36V20C56 17.791 54.209 16 52 16H12C9.791 16 8 17.791 8 20V44C8 46.209 9.791 48 12 48Z"
        fill="#BBDEFB"
      />
      <path
        d="M20 40L12 48V44C12 46.209 13.791 48 16 48H52C54.209 48 56 46.209 56 44V36H20Z"
        fill="#1976D2"
      />
    </svg>
  );
};

export const AdaptabilityIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  const w = size || width;
  const h = size || height;

  return (
    <svg
      fill="none"
      height={h}
      viewBox="0 0 64 64"
      width={w}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="24" cy="32" fill="#FFC107" fillOpacity="0.8" r="16" />
      <circle cx="40" cy="32" fill="#FF9800" fillOpacity="0.8" r="16" />
      <circle cx="32" cy="32" fill="#FFB300" r="10" />
    </svg>
  );
};

export const LearningIcon: React.FC<IconSvgProps> = ({ size = 24, width, height, ...props }) => {
  const w = size || width;
  const h = size || height;

  return (
    <svg
      fill="none"
      height={h}
      viewBox="0 0 64 64"
      width={w}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M32 12a12 12 0 00-12 12c0 6 6 12 6 12h12s6-6 6-12a12 12 0 00-12-12z"
        fill="#FFFDE7"
        stroke="#FFEB3B"
        strokeWidth="4"
      />
      <rect fill="#575894" height="10" rx="2" width="12" x="26" y="36" />
      <line stroke="#FBC02D" strokeWidth="3" x1="32" x2="32" y1="46" y2="52" />
    </svg>
  );
};
