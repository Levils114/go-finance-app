export interface TranscationCardProps{
   id: number;
   name: string;
   amount: number;
   category: string;
   date: string;
   type: 'up' | 'down';
}