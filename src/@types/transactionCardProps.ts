export interface TranscationCardProps{
   id: number;
   name: string;
   amount: string;
   category: string;
   date: string;
   type: 'up' | 'down';
}