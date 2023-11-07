interface IPopUp {
  children: React.ReactNode | string;
}

export default function PopUp({ children }: IPopUp) {
  return <div className="popUp">{children}</div>;
}
