interface HeaderProps{
    title?: string
}

export function Header(props: HeaderProps) {
    const { title } = props
    return (
        <header>
            <h1>{title}</h1>
            <p>frontend + react + node.js</p>
        </header>
    )
}