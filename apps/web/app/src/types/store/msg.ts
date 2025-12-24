export interface MsgStore {
  value: {
    show: boolean;
    msg: string;
  };
  setValue: (value: { show: boolean; msg: string }) => void;
}
