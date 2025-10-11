export default function MicrosoftLogoButton(pr: Readonly<{
    enableHoverEffect: true,
    onClick: () => void
} | {
    enableHoverEffect: false,
}>) {
    return (
        <div
            className={"flex flex-col items-center p-3 border border-gray-200 rounded-lg transition-colors" + (pr.enableHoverEffect ? " hover:bg-blue-100 hover:border-blue-300 cursor-pointer" : "")}
            onClick={pr.enableHoverEffect ? pr.onClick : undefined}
        >
            <svg className="w-6 h-6" viewBox="0 0 23 23" fill="#F35325">
                <path d="M0 0h11v11H0z"/>
                <path d="M12 0h11v11H12z" fill="#81BC06"/>
                <path d="M0 12h11v11H0z" fill="#05A6F0"/>
                <path d="M12 12h11v11H12z" fill="#FFBA08"/>
            </svg>
            <span className="text-xs text-gray-600 mt-1">Microsoft</span>
        </div>
    )
}