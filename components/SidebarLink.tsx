type Props = {
  text: string;
  active: boolean;
  Icon: (props: React.ComponentProps<'svg'>) => JSX.Element
};
const SidebarLink: React.FC<Props> = ({Icon, text, active}) => {
  return (
    <div className={`text-[#0e0d0d] flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation ${active && "font-bold"}`}>
      <Icon className="h-7"/>
      <span className="hidden xl:inline">{text}</span>
    </div>
  )
}

export default SidebarLink