export interface Modules {
  name: string;
  block: Block[];
}

interface Block {
  type: string;
  sort: number;
  src: string;
  width: string;
  height: string;
  alt: string;
  content: string;
}
