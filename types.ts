/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


export interface Game {
  id: string;
  name: string;
  developer: string;
  image: string;
  url: string;
  description: string;
}

export interface Video {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum Section {
  HERO = 'hero',
  GAMES = 'games',
  VIDEOS = 'videos',
  TRAINING = 'training',
}
