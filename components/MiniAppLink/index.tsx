import sdk from "@farcaster/miniapp-sdk";
import React from "react";
import cn from "classnames";

function MiniAppLink({
    identifier,
    type,
    children,
    className
}: {
    identifier: string,
    type: 'url' | 'profile',
    children: React.ReactNode,
    className?: string
}) {

    const handleOnClick = async () => {
        const context = await sdk.context;
        if (context !== undefined) {
            switch (type) {
                case 'url':
                    await sdk.actions.openUrl(identifier);
                    break;
                case 'profile':
                    await sdk.actions.viewProfile({ fid: parseInt(identifier) })
                default:
                    break;
            }
        } else {
            switch (type) {
                case 'url':
                    window.open(identifier, '_blank')
                    break;
                case 'profile':
                    window.open(`https://warpcast.com/~/profiles/${identifier}`)
                    await sdk.actions.viewProfile({ fid: parseInt(identifier) })
                default:
                    break;
            }
        }
    }
    return (
        <div className={cn("w-auto cursor-pointer hover:text-blue-800", className)} onClick={() => handleOnClick()}>
            {children}
        </div>
    )
}

export { MiniAppLink };