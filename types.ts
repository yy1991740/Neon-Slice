export enum GameStatus {
  IDLE = 'IDLE',
  PLAYING = 'PLAYING',
  GAME_OVER = 'GAME_OVER',
  PERMISSION_DENIED = 'PERMISSION_DENIED',
}

export interface Point {
  x: number;
  y: number;
}

export interface Target {
  id: string;
  x: number;
  y: number;
  radius: number;
  color: string;
  vx: number; // Velocity X
  vy: number; // Velocity Y
  points: number;
  type: 'normal' | 'bomb' | 'bonus';
  life: number; // How long it stays on screen (frames or seconds)
}

export interface Particle {
  id: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  life: number; // 0 to 1
  size: number;
}

export interface GameConfig {
  sensitivity: number; // Motion threshold (0-255)
  spawnRate: number; // Frames between spawns
  gravity: number;
}