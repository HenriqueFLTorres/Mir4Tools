function H2({ children }: { children: JSX.Element | JSX.Element[] }) {
  return <h2 className="text-white">{children}</h2>
}

function UL({ children }: { children: JSX.Element | JSX.Element[] }) {
  return <ul className="text-base font-light px-4 text-white">{children}</ul>
}

export function useMDXComponents(components: JSX.Element | JSX.Element[]) {
  return { ul: UL, h2: H2, ...components }
}
