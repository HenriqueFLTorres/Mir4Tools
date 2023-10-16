function Anchor({ children, ...props }: { children: JSX.Element | JSX.Element[] } & React.HTMLAttributes<HTMLAnchorElement>) {
  return <a {...props} className="font-bold cursor-pointer underline">{children}</a>
}


function H2({ children }: { children: JSX.Element | JSX.Element[] }) {
  return <h2 className="text-white">{children}</h2>
}

function UL({ children }: { children: JSX.Element | JSX.Element[] }) {
  return <ul className="text-base font-light px-4 text-white">{children}</ul>
}

export function useMDXComponents(components: JSX.Element | JSX.Element[]) {
  return { ul: UL, h2: H2, a: Anchor, ...components }
}
