export interface TranscationCardProps{
   id: number;
   title: string;
   amount: string;
   category: {
      icon: string;
      name: string;
   };
   date: string;
   type: 'positive' | 'negative';
}